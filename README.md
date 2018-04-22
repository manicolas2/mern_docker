# M-E-R-N on Docker
Template for a MongoDB/MySQL-ExpressJS-ReactJS-NodeJS (M-E-R-N) Application Stack using Docker

(Tested on Ubuntu 16.04 x86_64)

### Install tools
(See References section below for guide)

* Install docker (18.03.0-ce) 
* Install docker-compose (v1.18.0)
* Install NodeJS via NVM (v8.11.1)

### Clone this repository
```
 $ git clone https://github.com/srg-ics-uplb/mern_docker.git
```


### Install NodeJS modules for the backend and the frontend
```
 $ cd mern_docker 
 $ cd node-backend
 $ npm install
 $ cd ..
 $ cd react-frontend
 $ npm install
 $ cd ..
```
### Set the IP address

Get the IP address of your dev machine, mine for example is 10.0.3.190
```
 $ ifconfig
```

Replace all occurences of 127.0.0.1 with your dev machine's IP address obtained above
```
 $ grep -Rl --exclude-dir=node_modules 127.0.0.1 | xargs sed -i 's/127.0.0.1/10.0.3.190/g'
```


### Run the containers
```
 $ sudo docker-compose build
 $ sudo docker-compose up
```

### Test 
Go to ```http://127.0.0.1:3000``` in your browser

## References
*https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04
*https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04
*https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04#how-to-install-using-nvm
*https://medium.com/codebase/mern-ep01-setting-up-a-development-environment-with-docker-1bb0b6e4d464
