FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn --no-lockfile --production && yarn build
CMD ["node", "dist/main.cjs"]
EXPOSE 8080
