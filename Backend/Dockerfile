# Build stage
FROM node:18.8.0-alpine as builder

# Set working directory
WORKDIR /usr/src/app

# Install build dependencies
RUN apk add --no-cache python3 make g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Rebuild bcrypt
RUN npm rebuild bcrypt --build-from-source

# Production stage
FROM node:18.8.0-alpine

# Install runtime dependencies
RUN apk add --no-cache python3 make g++ netcat-openbsd

# Set working directory
WORKDIR /usr/src/app

# Create uploads directory and set permissions
RUN mkdir -p uploads && chown -R node:node /usr/src/app

# Switch to non-root user for better security
USER node

# Copy necessary files from builder stage
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /usr/src/app ./

# Expose the port for the backend
EXPOSE 3000

# Command to start the backend server
CMD ["npm", "start"]
