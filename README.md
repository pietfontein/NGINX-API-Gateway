# NGINX API Gateway with Docker

![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![NGINX](https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white)

Secure API gateway featuring:
- Basic Authentication
- Rate Limiting (10 req/sec)
- CORS Support
- Health Checks

## Quick Start
```bash
# 1. Clone repo
git clone https://github.com/yourusername/nginx-api-gateway.git

# 2. Set up auth (replace credentials)
cp nginx/auth/.htpasswd.example nginx/auth/.htpasswd

# 3. Start services
docker-compose up --build
```

## Endpoints
| Route | Auth | Description |
|-------|------|-------------|
| `GET /health` | ❌ | Service health check |
| `GET /api/data` | ✅ | Example authenticated endpoint |
