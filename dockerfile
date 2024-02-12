FROM node:21.5-alpine

WORKDIR /app
COPY . ./

RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "build"]

# RUN npm install
# RUN npm run build


# CMD ["npm", "run", "preview"]