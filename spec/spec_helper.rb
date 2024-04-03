# frozen_string_literal: true

require 'webmock/rspec'

RSpec.configure do |config|
  config.mock_with :rspec
  config.order = 'random'

  WebMock.disable_net_connect!(allow_localhost: true)
end
