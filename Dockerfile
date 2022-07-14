#Image we want to build from
FROM node:18-slim

#Create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package*.json ./

RUN export $(cat .env)
RUN npm install --quiet

#Bundle app source
COPY . .

EXPOSE $PORT


#Start application 
CMD npm start