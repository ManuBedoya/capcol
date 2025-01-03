# Use the Node alpine official image
# https://hub.docker.com/_/node
FROM node:lts-alpine AS build

# Set config
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Create and change to the app directory.
WORKDIR /frontend/

# Copy the files to the container image
COPY public/ /frontend/public
COPY src/ /frontend/src
COPY package.json /frontend/

# Install packages
RUN npm install

COPY . .
# Build the app
RUN npm run build
# Expose the port
EXPOSE 3000
# Run the app
CMD ["npm", "start"]