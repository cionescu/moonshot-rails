# frozen_string_literal: true

module MoonshotRails
  class Engine < ::Rails::Engine
    isolate_namespace MoonshotRails

    config.autoload_paths = %W[
      #{root}/app/helpers
      #{root}/app/models
    ]

    initializer 'moonshot_rails.helpers' do
      ActiveSupport.on_load(:action_controller_base) do
        helper Moonshot::MoonshotHelper
      end
    end
  end
end
