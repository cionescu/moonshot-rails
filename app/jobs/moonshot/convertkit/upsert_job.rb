# frozen_string_literal: true

module Moonshot
  module Convertkit
    class UpsertJob < ApplicationJob
      queue_as :default

      delegate :convertkit_api_key, :convertkit_api_secret, :convertkit_form_id, to: 'MoonshotRails.configuration'

      def perform user_object_or_klass, user_id: nil, first_name:, fields:
        # return unless Rails.env.production?

        user = if user_object_or_klass.is_a?(String)
          klass = user_object_or_klass.constantize
          klass.respond_to?(:with_deleted) ? klass.with_deleted.find(user_id) : klass.find(user_id)
        else
          user_object_or_klass
        end

        return unless user.respond_to?(:email) && user.email.present?

        assert_required_config!

        if existing_subscriber = find_by(email: user.email)
          params = {
            first_name: user.respond_to?(first_name) ? user.send(first_name) : nil
          }
          params.merge!(fields: user.send(fields)) if user.respond_to?(fields)

          put_request "subscribers/#{existing_subscriber['id']}", params
        else
          params = {
            email: user.email,
            first_name: user.respond_to?(first_name) ? user.send(first_name) : nil
          }
          params.merge!(fields: user.send(fields)) if user.respond_to?(fields)

          post_request "forms/#{convertkit_form_id}/subscribe", params
        end
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
          .tap { |response| raise "Error #{response.status}: #{response.body}" unless response.status == 200 }
          .then { |response| JSON.parse(response.body) }
      end

      def post_request path, body
        json_body = body.merge(api_key: convertkit_api_key).to_json

        Excon
          .post("https://api.convertkit.com/v3/#{path}", body: json_body, headers: { 'Content-Type' => 'application/json' })
          .tap { |response| raise "Error #{response.status}: #{response.body}" unless response.status == 200 }
          .then { |response| JSON.parse(response.body) }
      end

      def put_request path, body
        json_body = body.merge(api_secret: convertkit_api_secret).to_json

        Excon
          .put("https://api.convertkit.com/v3/#{path}", body: json_body, headers: { 'Content-Type' => 'application/json' })
          .tap { |response| raise "Error #{response.status}: #{response.body}" unless response.status == 200 }
          .then { |response| JSON.parse(response.body) }
      end

      def assert_required_config!
        %i[convertkit_api_key convertkit_api_secret convertkit_form_id].each do |config|
          raise MoonshotRails::MissingConfig, "#{config} is required" unless send(config).present?
        end
      end
    end
  end
end
