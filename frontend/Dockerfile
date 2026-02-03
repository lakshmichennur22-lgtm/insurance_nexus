# ---------- Stage 1: Build Vite app ----------
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build   # outputs to /app/dist

# ---------- Stage 2: Nginx ----------
FROM nginx:alpine

# Remove default nginx config


# Copy our SPA nginx config


# Copy Vite build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
