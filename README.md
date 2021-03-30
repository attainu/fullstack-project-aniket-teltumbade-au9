# Hackzone
#### Automated online contest system

### Introduction:

 This web application presents a Web-based system, to handle programming contests. The system acts as a full contest manager as well as an automatic judge for programming contests. The System innovates in a number of aspects: it has a scalable architecture that can be used for small single server contests; it has automatic judging capabilities to assist human judges in the evaluation of programs and rank the contestants. 


### System Requirements
1. Nodejs v13+
2. Python

### How to start application
1. Clone this repository.
2. Install all dependenciesclient's and server's repository separately
3. Assign following environment variable's :

``` 
cd server/
export PORT=4000
export MONGO_URL='<Mongo atlas URL>'
export REDIS_URL=<Redislab url>
export REDIS_PASSWORD=<Redislab password>
export REDIS_DB=<redislab db>
export AUTH_PASS_KEY=divine <or any key>
```

```
cd client/
export REACT_APP_API_URL=http://localhost:4000
```

### License
ISC