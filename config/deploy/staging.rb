set :stage, :staging

server "static-tables-staging1", user: "deploy", roles: %w{app web}
server "static-tables-staging2", user: "deploy", roles: %w{app web}