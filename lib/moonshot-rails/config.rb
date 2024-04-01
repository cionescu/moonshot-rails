# frozen_string_literal: true

module MoonshotRails
  class Config
    RAISE_IF_MISSING = -> { raise 'Missing configuration' }

    cattr_accessor :convertkit_api_key, default: RAISE_IF_MISSING
    cattr_accessor :convertkit_api_secret, default: RAISE_IF_MISSING
    cattr_accessor :convertkit_form_id, default: RAISE_IF_MISSING
  end
end
