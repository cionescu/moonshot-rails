# frozen_string_literal: true

module Moonshot
  module ModelHelper
    extend ActiveSupport::Concern

    class_methods do
      def convertkit_sync first_name: :name, fields: :convertkit_fields
        after_save_commit -> { moonshot_convertkit_upsert first_name: first_name, fields: fields }
        after_destroy_commit :moonshot_convertkit_unsubscribe
      end
    end

    def moonshot_convertkit_upsert first_name: :name, fields: :convertkit_fields
      Moonshot::Convertkit::UpsertJob.perform_later self.class.name, user_id: id, first_name: first_name, fields: fields
    end

    def moonshot_convertkit_unsubscribe
      Moonshot::Convertkit::UnsubscribeJob.perform_later email
    end
  end
end
