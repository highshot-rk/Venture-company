FROM node:12.14.0

RUN mkdir -p /usr/src/cosmic
WORKDIR /usr/src/cosmic

COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]