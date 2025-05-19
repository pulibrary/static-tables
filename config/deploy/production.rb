set :stage, :production

server "static-tables-prod1.princeton.edu", user: "deploy", roles: %w{app web}
server "static-tables-prod2.princeton.edu", user: "deploy", roles: %w{app web}
