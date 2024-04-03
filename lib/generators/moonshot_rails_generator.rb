# frozen_string_literal: true

class MoonshotRailsGenerator < Rails::Generators::Base
  source_root File.expand_path('../..', __dir__)

  desc 'Generate an initializer'
  def create_initializer_file
    copy_file 'config/moonshot_rails_initializer.rb', 'config/initializers/moonshot_rails.rb'
  end
end
