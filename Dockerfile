FROM rocketchat/base

ENV RC_VERSION develop

MAINTAINER p.baratta@fabbricadigitale.it

VOLUME /app/uploads

#COPY rocket.chat.tgz /tmp/

RUN set -x \
 && curl -SLf "https://github.com/pachox/Rocket.Chat/archive/fd.01.00.tar.gz" -o rocket.chat.tgz \
 && tar -zxf rocket.chat.tgz -C /app \
 && rm rocket.chat.tgz
 && mkdir /app/bundle \
 && cd /app/bundle/programs/server \
 && npm install \
 && npm cache clear
 


USER rocketchat

WORKDIR /app/bundle

# needs a mongoinstance - defaults to container linking with alias 'mongo'
ENV MONGO_URL=mongodb://localhost:27017/rocketchat \
    HOME=/tmp \
    PORT=3000 \
    ROOT_URL=http://localhost:3000 \
    Accounts_AvatarStorePath=/app/uploads

EXPOSE 3000

CMD ["node", "main.js"]


