FROM node:18-alpine
WORKDIR /app
COPY package*.json /app/
RUN yarn
COPY . .
EXPOSE 53300
CMD yarn start
