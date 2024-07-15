# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'User', type: :model do
  describe 'convertkit' do
    let(:form_id) { MoonshotRails.configuration.convertkit_form_id }
    let(:user) { User.create! email: 'test@testy.com' }

    before do
      allow(Rails.env).to receive(:production?).and_return(true)
      stub_convertkit_list_subscribers
      stub_convertkit_add_subscriber_to_form
      stub_convertkit_unsubscribe
    end

    around do |example|
      perform_enqueued_jobs do
        example.run
      end
    end

    it 'syncs to convertkit on create' do
      user

      expect(WebMock).to(
        have_requested(:post, %r{api.convertkit.com/v3/forms/#{form_id}/subscribe})
          .with body: hash_including(email: 'test@testy.com')
      )
    end

    it 'unsuscribes from convertkit on destroy' do
      user.destroy!

      expect(WebMock).to(
        have_requested(:put, %r{api.convertkit.com/v3/unsubscribe})
          .with body: hash_including(email: 'test@testy.com')
      )
    end
  end
end
