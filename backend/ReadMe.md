# Backend Template

Template basic for start project.
- Authenticate with jwt
- Audit logs for all request
- Routes

## Config

File: src\config\Parameters.json
- api_port: backend port listen;
- connectionString: for mongoDB use mongoose;
- auth_secret: key to generate token with jwt;
- audit: true generate log in all request;