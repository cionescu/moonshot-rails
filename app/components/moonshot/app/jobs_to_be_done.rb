# frozen_string_literal: true

class Moonshot::App::JobsToBeDone < ViewComponent::Base
  renders_many :items, 'ItemComponent'

  attr_reader :title

  def initialize title:
    @title = title
  end

  def render?
    !items.all?(&:completed?)
  end

  class ItemComponent < ViewComponent::Base
    attr_reader :completed, :title, :subtitle

    alias completed? completed

    def initialize title:, subtitle: nil, completed: false
      @title = title
      @subtitle = subtitle
      @completed = completed
    end

    def call
      content
    end
  end
end
