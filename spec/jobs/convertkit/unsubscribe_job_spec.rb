# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Moonshot::Convertkit::UnsubscribeJob do
  before do
    allow(Rails.env).to receive(:production?).and_return(true)
    stub_convertkit_unsubscribe
  end

  it 'subscribes the user' do
    described_class.new.perform('test@testy.com')

    expect(WebMock).to have_requested(:put, %r{api.convertkit.com/v3/unsubscribe}).with body: hash_including(email: 'test@testy.com')
  end
end
