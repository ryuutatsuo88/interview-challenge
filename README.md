
# Welcome to my Interview Challenge package

This is the main package used for Interview Challenge website.

## frontend

This directory contains all the frontend code that gets build and deployed out to production. 

### configUtils.js 

This contains all the configs the frontend will need per environment such as the captcha key and the api gateway url 

### builds 

there are three builds 

- npm run build-beta
- npm run build-gamma
- npm run build-prod

this will output into the deployment directory the exact code that gets deployed to S3 buckets or any other server

- npm run server 

Server will run on localhost port 8080 or if port is take it will try another port so check command line for which port it is running on. 

### creating the locale files en-US.json, de-DE.json, zh-CN.json, ... 

- cd configuration 
- node csvToJSONTranslation.js 

There is a shared Translations.csv on google drive where all translations are maintained. Whenever new strings are added and translated you can download the .csv file and added it to this package in the configuration directory. Once updated .csv is added you can run the script command and all the locales .json files will be generated. Before committing build your app and make sure all strings show as expected. 