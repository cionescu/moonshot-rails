# frozen_string_literal: true

module Moonshot
  module MoonshotHelper
    def shepherd_tour tour:, context: {}
      tag.div nil, data: {
        controller: 'shepherd',
        'shepherd-tour-name-value' => tour,
        'shepherd-endpoint-value' => shepherd_rails.tour_statuses_path,
        'shepherd-config-value' => I18n.t(tour, scope: 'shepherd_rails'),
        'shepherd-context-value' => context
      }
    end

    def post_hog_tracker user: nil, enabled: true, api_key:
      return unless enabled

      options = {
        controller: 'post-hog',
        post_hog_api_key_value: api_key
      }

      if user
        id_options = {
          id: user.id,
          name: user.tracker_name,
          email: user.tracker_email
        }
        options.merge!({
          post_hog_identification_value: id_options
        })
      end

      tag.div(data: options)
    end

    def crisp_chat user: nil, enabled: true, wrapper: :div, api_key:
      return unless enabled

      options = {
        controller: 'crisp',
        crisp_website_id_value: api_key
      }

      if user
        options.merge!({
          crisp_identification_value: {
            name: user.tracker_name,
            email: user.tracker_email
          }
        })
      end

      tag.send(wrapper, data: options) do
        yield if block_given?
      end
    end
  end
end
