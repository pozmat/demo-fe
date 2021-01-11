FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm build

FROM nginx:alpine
COPY --from=node /app/dist/demo-fe /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf