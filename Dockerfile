FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
COPY --from=node /app/dist/demo-fe /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf/default.conf