# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Moonshot::Convertkit::SubscribeJob do
  let(:user) { double('User', email: 'testy@test.com')}

  before { allow(Rails.env).to receive(:production?).and_return(true) }

  it 'runs the job' do
    described_class.new.perform(user)
  end
end
