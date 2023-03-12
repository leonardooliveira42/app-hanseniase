FROM node:8.11.3

RUN apt-get clean && apt-get update && apt-get install -y locales
RUN dpkg-reconfigure locales
RUN apt-get install -y tzdata
ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN dpkg-reconfigure --frontend noninteractive tzdata

RUN npm install -g ionic@3.20.0 cordova
RUN npm install -g @angular/cli@1.6.6
