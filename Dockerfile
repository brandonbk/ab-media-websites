FROM node:14.21 as build
WORKDIR /root
ENV NODE_ENV production
ARG SITE

ADD package.json yarn.lock /root/
ADD packages /root/packages
ADD sites/$SITE /root/sites/$SITE
RUN yarn --production --pure-lockfile

RUN yarn build

FROM node:14.21-alpine
ENV NODE_ENV production
ENV PORT 80
ARG SITE
COPY --from=build /root /root
WORKDIR /root/sites/$SITE
ENTRYPOINT [ "node", "index.js" ]
