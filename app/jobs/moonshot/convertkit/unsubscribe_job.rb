# frozen_string_literal: true

module Moonshot
  module Convertkit
    class UnsubscribeJob < ApplicationJob
      queue_as :default

      delegate :convertkit_api_secret, to: 'MoonshotRails.configuration'

      def perform email
        return unless Rails.env.production?

        assert_required_config!

        Excon
          .put(
            'https://api.convertkit.com/v3/unsubscribe',
            body: {
              email: email,
              api_secret: convertkit_api_secret
            }.to_json,
            headers: { 'Content-Type' => 'application/json' }
          ).then { |response| JSON.parse(response.body) }
      end

      private

      def assert_required_config!
        raise MoonshotRails::MissingConfig, 'Missing convertkit_api_secret' unless convertkit_api_secret
      end
    end
  end
end
