set :stage, :production

server "static-tables-prod1", user: "deploy", roles: %w{app web}
server "static-tables-prod2", user: "deploy", roles: %w{app web}
