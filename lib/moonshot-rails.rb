require 'moonshot-rails/version'
require 'moonshot-rails/engine'
require 'moonshot-rails/config'

module MoonshotRails
  MissingConfig = Class.new(StandardError)

  class << self
    attr_accessor :configuration

    def configure
      self.configuration ||= Config.new
      yield(configuration)
    end
  end
end
