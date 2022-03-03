FROM node:16.14-alpine3.14
RUN mkdir -p /usr/src/app/ux
WORKDIR /usr/src/app/ux
EXPOSE 6080
COPY package*.json /usr/src/app/ux
RUN npm install
CMD ["npm", "run", "serve", "--","--port", "6080"]
