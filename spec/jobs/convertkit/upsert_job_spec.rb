# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Moonshot::Convertkit::UpsertJob do
  subject { described_class.new.perform user, first_name: :name, fields: :convertkit_fields }

  let(:user) { OpenStruct.new(email: 'testy@test.com', name: 'Testy LTD', convertkit_fields: { business: 'Name' }) }

  before do
    stub_convertkit_list_subscribers
    stub_convertkit_add_subscriber_to_form
    allow(Rails.env).to receive(:production?).and_return(true)
  end

  it 'subscribes the user' do
    subject

    expect(WebMock).to have_requested(:get, %r{api.convertkit.com/v3/subscribers}).with { |req| req.uri.query.match? /email_address=#{user.email}/ }

    expect(WebMock).to have_requested(:post, %r{api.convertkit.com/v3/forms/#{MoonshotRails.configuration.convertkit_form_id}/subscribe}).with body: hash_including(email: user.email, fields: user.convertkit_fields)
  end

  it 'return early if the user email is blank' do
    user.email = nil

    subject

    expect(WebMock).not_to have_requested(:get, %r{api.convertkit.com/v3/subscribers})
  end
end
