FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Define environment variables for the three URLs
ENV LAPTOP_PORT=3036
ENV FOOD_PORT=3032
ENV USER="scott"
ENV PASSWORD="TIGER"


# Expose the port your Express.js application will run on (change as needed)
EXPOSE 3032

# Start your Express.js application
CMD ["node", "index.js"]