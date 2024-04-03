# frozen_string_literal: true

module Moonshot
  module ModelHelper
    extend ActiveSupport::Concern

    class_methods do
      def convertkit_sync
        after_save_commit :moonshot_convertkit_subscribe
        after_destroy_commit :moonshot_convertkit_unsubscribe
      end
    end

    def moonshot_convertkit_subscribe
      Moonshot::Convertkit::SubscribeJob.perform_later self
    end

    def moonshot_convertkit_unsubscribe
      Moonshot::Convertkit::UnsubscribeJob.perform_later email
    end
  end
end
