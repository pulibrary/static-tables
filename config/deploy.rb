set :branch, ENV['BRANCH'] || 'main'

set :application, "static_tables"
set :repo_url, "https://github.com/pulibrary/static-tables.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/opt/static_tables"

# Default value for :linked_files is []
append :linked_files, ".env"

namespace :deploy do
  before :updated, 'npm:install'
  before :updated, 'npm:build'
end

namespace :npm do
  desc "Run npm install"
  task :install do
    on roles(:web) do
      within release_path do
        execute("cd #{release_path} && npm install")
      end
    end
  end
  desc "Create dist"
  task :build do
    on roles(:web) do
      within release_path do
        execute("cd #{release_path} && npm run build")
      end
    end
  end
end
