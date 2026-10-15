# ==============================================================================
# CURQ Documentation - Production Container
# Builds Sphinx documentation from curq-docs and serves via Nginx
# ==============================================================================

FROM python:3.12-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends make && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

RUN make html

FROM nginx:alpine

RUN printf 'server {\n\
    listen 8000;\n\
    server_name _;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files $uri $uri/ =404;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/_build/html /usr/share/nginx/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
