FROM node:16.0.0 AS builder

# Use /app as the CWD
WORKDIR /app

# # Copy package.json and package-lock.json to /app
COPY package*.json  ./   

# Install all dependencies
RUN npm install && npm cache clean --force

# # Copy the rest of the code
COPY . .                

# Invoke the build script to transpile code to js
RUN npm run build  

EXPOSE 3000

ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]

FROM builder as test
COPY . .
RUN npm audit

FROM nginx:1.21.3-alpine as prod

# Set node environment to production
ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Add your nginx.conf
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE ${PORT}

# Start nginx
CMD ["nginx", "-g", "daemon off;"]