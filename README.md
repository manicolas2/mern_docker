# M-E-R-N on Docker
Template for a MongoDB/MySQL-ExpressJS-ReactJS-NodeJS (M-E-R-N) Application Stack using Docker

(Tested on Ubuntu 16.04 x86_64)

### Install tools

* Install docker
* Install latest docker-compose
* Install NodeJS via NVM

### Clone the the project
```$ git clone https://github.com/srg-ics-uplb/mern_docker.git```


### Install NodeJS modules for the backend and the frontend
```
 $ cd node-backend
 $ npm install
 $ cd ..
 $ cd react-frontend
 $ npm install
 $ cd ..

```

### Deploy
```
 $ sudo docker-compose build
 $ sudo docker-compose up
```

### Test 
Go to ```http://127.0.0.1:3000```

## References
*https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04
*https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04
*https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04#how-to-install-using-nvm
*https://medium.com/codebase/mern-ep01-setting-up-a-development-environment-with-docker-1bb0b6e4d464
