FROM node:18

ENV PNPM_HOME="/pnpm"

ENV PATH="$PNPM_HOME:$PATH"

COPY . /app

WORKDIR /app

RUN npm cache clean --force

RUN rm -rf node_modules

RUN rm -rf package-lock.json

RUN npm install -g pnpm

RUN pnpm install

# Copy the rest of the application code to the container

EXPOSE 3000

CMD [ "pnpm", "start:dev" ]

