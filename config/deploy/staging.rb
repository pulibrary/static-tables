set :stage, :staging

server "static-tables-staging1.princeton.edu", user: "deploy", roles: %w{app web}
server "static-tables-staging2.princeton.edu", user: "deploy", roles: %w{app web}