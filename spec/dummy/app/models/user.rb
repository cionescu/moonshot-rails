# frozen_string_literal: true

class User < ApplicationRecord
  include Moonshot::ModelHelper

  convertkit_sync
end
