# frozen_string_literal: true

module MoonshotRails
  class Config
    cattr_accessor :convertkit_api_key
    cattr_accessor :convertkit_api_secret
    cattr_accessor :convertkit_form_id
  end
end
