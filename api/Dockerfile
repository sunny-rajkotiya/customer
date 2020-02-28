FROM node:12.16.0-alpine3.11
USER node:node
RUN mkdir -p /home/node/app
COPY --chown=node:node . /home/node/app
WORKDIR /home/node/app
RUN sh loaddependencies.sh
EXPOSE 3000
ENTRYPOINT ["/bin/sh","-c"]
CMD ["sh startapp.sh"]