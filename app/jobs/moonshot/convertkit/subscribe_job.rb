# frozen_string_literal: true

module Moonshot
  module Convertkit
    class SubscribeJob < ApplicationJob
      queue_as :default

      delegate :convertkit_api_key, :convertkit_api_secret, :convertkit_form_id, to: 'MoonshotRails.configuration'

      def perform user
        return unless Rails.env.production?

        binding.pry

        existing_subscriber = find_by(email: user.email)
        return existing_subscriber if existing_subscriber

        post_request "forms/#{convertkit_form_id}/subscribe", {
          email: user.email,
          fields: {
            business_name: user.business.name
          }
        }
      end

      def find_by email:
        response = get_request({ email_address: email })

        return if response['total_subscribers'].zero?

        if response['total_subscribers'] > 1
          raise "Multiple (#{response['total_subscribers']}) subscribers found for email #{email}"
        end

        response['subscribers'].first
      end

      protected

      def get_request query, path: 'subscribers'
        params = query.merge({
          api_key: convertkit_api_key,
          api_secret: convertkit_api_secret
        }).compact

        url = "https://api.convertkit.com/v3/#{path}?#{params.to_query}"

        Excon
          .get(url)
          .then { |response| JSON.parse(response.body) }
      end

      def post_request path, body
        json_body = body.merge(api_key: convertkit_api_key).to_json

        Excon
          .post("https://api.convertkit.com/v3/#{path}", body: json_body, headers: { 'Content-Type' => 'application/json' })
          .then { |response| JSON.parse(response.body) }
      end
    end
  end
end
