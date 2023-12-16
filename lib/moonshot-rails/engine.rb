# frozen_string_literal: true

module MoonshotRails
  class Engine < ::Rails::Engine
    isolate_namespace MoonshotRails

    config.autoload_paths = %W[
      #{root}/app/helpers
    ]

    initializer 'moonshot_rails.assets' do |app|
      if app.config.respond_to?(:assets)
        app.config.assets.precompile += %w[
          moonshot.js
        ]
      end
    end

    initializer 'moonshot_rails.helpers' do
      ActiveSupport.on_load(:action_controller_base) do
        helper Moonshot::MoonshotHelper
      end
    end
  end
end
