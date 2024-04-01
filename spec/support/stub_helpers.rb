# frozen_string_literal: true

module StubHelpers
  def stub_convertkit_get_subscribers
    response = File.read(Rails.root.join('spec', 'support', 'convertkit', 'subscribers.json'))
    stub_request(:get, %r{api.convertkit.com/v3/subscribers}).to_return(body: response, status: 200)
  end
end

RSpec.configure do |config|
  config.include StubHelpers
end
