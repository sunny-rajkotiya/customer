FROM node:12.16.0-alpine3.11
USER node:node
RUN mkdir -p /home/node/app
COPY --chown=node:node . /home/node/customerapp
WORKDIR /home/node/customerapp
RUN sh loaddependencies.sh \
    && yarn build
EXPOSE 3000
EXPOSE 3001
ENTRYPOINT ["/bin/sh","-c"]
CMD ["sh startapp.sh"]