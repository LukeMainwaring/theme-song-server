FROM node:14

# Create app directory
WORKDIR /app

# Install app dependencies
# Ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]