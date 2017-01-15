#!/bin/bash
set -x
set -euvo pipefail
IFS=$'\n\t'

#CURL_URL="https://registry.hub.docker.com/u/rocketchat/rocket.chat/trigger/$PUSHTOKEN/"
CURL_URL="https://github.com/pachox/Rocket.Chat/releases/tag/fd.01.00/"

if [[ $TRAVIS_TAG ]]
 then
  CURL_DATA='{"source_type":"Tag","source_name":"'"$TRAVIS_TAG"'"}';
else
  CURL_DATA='{"source_type":"Branch","source_name":"'"$TRAVIS_BRANCH"'"}';
fi

curl -H "Content-Type: application/json" --data "$CURL_DATA" -X POST "$CURL_URL"
