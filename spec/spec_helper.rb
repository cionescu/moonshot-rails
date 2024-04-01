# frozen_string_literal: true

Dir["#{File.dirname(__FILE__)}/support/**/*.rb"].each { |f| require f }

require 'webmock/rspec'

RSpec.configure do |config|
  config.mock_with :rspec
  config.order = 'random'

  WebMock.disable_net_connect!(allow_localhost: true)
end
