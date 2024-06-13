# ts-services/Dockerfile
FROM node:14

WORKDIR /usr/src/app/ts-services

COPY package*.json ./
RUN npm install

COPY . .

# compile typescript files
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]