# Dockerfile
# FROM node:16 As development
# WORKDIR /usr/src/app
# COPY package*.json ./
# COPY prisma ./prisma/
# RUN yarn add glob rimraf
# RUN yarn --only=development
# COPY . .
# RUN yarn build

# FROM node:16 as production
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# WORKDIR /usr/src/app
# COPY package*.json ./
# COPY prisma ./prisma/
# RUN yarn add glob rimraf @nestjs/swagger 
# RUN yarn --only=production
# # COPY . .
# COPY --from=development /usr/src/app/dist ./dist
# CMD ["node", "dist/main"]

# 

# Dockerfile
FROM node:16 As development
WORKDIR /usr/src/app
# COPY package*.json ./
# COPY yarn.lock ./
# COPY prisma ./prisma/
COPY . .
RUN yarn --only=development
RUN yarn build
# 
FROM node:16 as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
COPY prisma ./prisma/
RUN yarn --only=production
RUN yarn prisma:generate
COPY . .
COPY --from=development /usr/src/app/dist ./dist
CMD ["node", "/usr/src/app/dist/src/main.js"]
# CMD ["bash"]