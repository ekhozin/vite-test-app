##############################
# Build the app's static files
##############################
FROM node:18.16.1-alpine as build

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

########################################################
# Configure nginx server to serve the app's static files
########################################################
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html/users

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
