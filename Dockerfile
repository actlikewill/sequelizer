#Create our image from Node alpine
FROM node:alpine
LABEL app="sequelizer"
LABEL AUTHOR="Wilson"
WORKDIR /app
COPY package.json /app
RUN  yarn install
COPY . .
EXPOSE 4000
CMD ["yarn", "start"]
