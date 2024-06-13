# ts-services/Dockerfile
FROM node:22.3-alpine3.19 AS builder

WORKDIR /usr/src/app/ts-services

COPY package*.json ./

RUN npm install

COPY . .

# compile typescript files
RUN npm run build

FROM node:22.3-alpine3.19

WORKDIR /usr/src/app/ts-services

# copy from built application and node_modules from builder stage
COPY --from=builder /usr/src/app/ts-services/dist /usr/src/app/ts-services/dist
COPY --from=builder /usr/src/app/ts-services/node_modules /usr/src/app/ts-services/node_modules

# copy application source code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]