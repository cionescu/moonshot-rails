# frozen_string_literal: true

module MoonshotRails
  class Config
    mattr_accessor :convertkit_api_key
    mattr_accessor :convertkit_api_secret
    mattr_accessor :convertkit_form_id
  end
end
