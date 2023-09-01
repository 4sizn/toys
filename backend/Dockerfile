FROM node:18

WORKDIR /app

COPY . .

RUN npm install

# Copy the rest of the application code to the container

EXPOSE 3000

CMD [ "pnpm run start:dev"]

