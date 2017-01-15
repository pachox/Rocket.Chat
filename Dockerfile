FROM rocketchat/base

ENV RC_VERSION develop

MAINTAINER p.baratta@fabbricadigitale.it

VOLUME /app/uploads

#COPY rocket.chat.tgz /tmp/

RUN set -x \
 && curl -SLf "https://github.com/pachox/Rocket.Chat/archive/develop.zip" -o rocket.chat.tgz \

&& tar -zxf rocket.chat.tgz -C /app \
 && rm rocket.chat.tgz \
 && cd /app/bundle/programs/server \
 && npm install \
 && npm cache clear
# 
#&& tar -zxvf /tmp/rocket.chat.tgz -C /app \
# && rm /tmp/rocket.chat.tgz \


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


