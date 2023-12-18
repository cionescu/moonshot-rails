require 'bundler/setup'

APP_RAKEFILE = File.expand_path('demo/Rakefile', __dir__)

require 'bundler/gem_tasks'
require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new(:spec)

task default: :spec

Rake::Task['release'].enhance do
  `npm run release`
end
