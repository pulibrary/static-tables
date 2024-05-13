set :stage, :production

server "static-tables-prod1", user: "deploy", roles: %w{app web}
server "statid-tables-prod2", user: "deploy", roles: %w{app web}
