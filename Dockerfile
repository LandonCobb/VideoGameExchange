FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g npm@8.11.0
RUN npm install
COPY . . 
EXPOSE 5069
CMD ["node", "app"]