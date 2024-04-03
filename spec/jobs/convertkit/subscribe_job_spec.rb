# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Moonshot::Convertkit::SubscribeJob do
  let(:user) { double('User', email: 'testy@test.com', convertkit_fields: { business: 'Name' }) }

  before do
    stub_convertkit_list_subscribers
    stub_convertkit_add_subscriber_to_form
    allow(Rails.env).to receive(:production?).and_return(true)
  end

  it 'subscribes the user' do
    described_class.new.perform(user)

    expect(WebMock).to have_requested(:get, %r{api.convertkit.com/v3/subscribers}).with { |req| req.uri.query.match? /email_address=#{user.email}/ }

    expect(WebMock).to have_requested(:post, %r{api.convertkit.com/v3/forms/#{MoonshotRails.configuration.convertkit_form_id}/subscribe}).with body: hash_including(email: user.email, fields: user.convertkit_fields)
  end
end
