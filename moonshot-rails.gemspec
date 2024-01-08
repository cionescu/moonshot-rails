require_relative 'lib/moonshot-rails/version'

Gem::Specification.new do |spec|
  spec.name = 'moonshot-rails'
  spec.version = MoonshotRails::VERSION
  spec.authors = ['Catalin Ionescu']
  spec.email = ['catalin.ionescu282@gmail.com']

  spec.homepage = 'https://github.com/cionescu/moonshot-rails'
  spec.summary = 'A collection of Stimulus controllers for building SaaS applications with Rails'
  spec.license = 'MIT'

  # Prevent pushing this gem to RubyGems.org. To allow pushes either set the 'allowed_push_host'
  # to allow pushing to a single host or delete this section to allow pushing to any host.
  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = 'https://rubygems.org'
  else
    raise 'RubyGems 2.0 or newer is required to protect against ' \
    'public gem pushes.'
  end

  spec.files = Dir['lib/**/*', 'app/**/*', 'LICENSE.txt', 'README.md']

  spec.required_ruby_version = '>= 3.0.0'

  spec.add_runtime_dependency 'rails', '>= 7.0.0'
  spec.add_runtime_dependency 'view_component', '>= 3.0.0'
end
