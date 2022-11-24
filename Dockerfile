# # Base image
# FROM node:18
# EXPOSE 3000

# ENV NODE_ENV=production

# # Create app directory
# WORKDIR /usr/src/app

# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY ["package.json", "yarn.lock"] .

# # Install app dependencies
# # RUN yarn
# # RUN apk update \
# # && rm -rf node_modules && yarn install --frozen-lockfile 
# RUN rm -rf node_modules && yarn install --frozen-lockfile 

# # Bundle app source
# COPY . .

# RUN ls

# # Creates a "dist" folder with the production build
# RUN yarn global add @nestjs/cli
# RUN yarn add rimraf 
# RUN yarn build

# # Start the server using the production build
# # CMD [ "node", "dist/main.js" ]
# # CMD [ "yarn start" ]
# CMD yarn start:dev


# -----------------------------------------
# FROM node:18 AS development

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./
# COPY prisma ./prisma/

# RUN yarn add glob rimraf prisma

# RUN npm install --only=production

# COPY . .

# RUN yarn build

# FROM node:18 as production

# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install --only=production

# COPY . .

# COPY --from=development /usr/src/app/dist ./dist

# CMD ["node", "dist/main"]

# ---------------------------------------------------

# Dockerfile
FROM node:16 As development
WORKDIR /usr/src/app
COPY package*.json ./
COPY prisma ./prisma/
RUN yarn add glob rimraf
RUN yarn --only=development
COPY . .
RUN yarn build
FROM node:16 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
COPY prisma ./prisma/
RUN yarn add glob rimraf
RUN yarn --only=production
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD [“node”, “dist/main”]