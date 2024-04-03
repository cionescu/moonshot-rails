# frozen_string_literal: true

module StubHelpers
  def stub_convertkit_list_subscribers
    response = File.read(Rails.root.join('..', 'support', 'fixtures', 'convertkit_list_subscribers.json'))
    stub_request(:get, %r{api.convertkit.com/v3/subscribers}).to_return(body: response, status: 200)
  end

  def stub_convertkit_add_subscriber_to_form
    response = File.read(Rails.root.join('..', 'support', 'fixtures', 'convertkit_add_subscriber_to_form.json'))
    stub_request(:post, %r{api.convertkit.com/v3/forms/.*/subscribe}).to_return(body: response, status: 200)
  end

  def stub_convertkit_unsubscribe
    response = File.read(Rails.root.join('..', 'support', 'fixtures', 'convertkit_unsubscribe.json'))
    stub_request(:put, %r{api.convertkit.com/v3/unsubscribe}).to_return(body: response, status: 200)
  end
end

RSpec.configure do |config|
  config.include StubHelpers
end
