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
  end
end
