# M-E-R-N on Docker
Template for a MongoDB/MySQL-ExpressJS-ReactJS-NodeJS (M-E-R-N) Application Stack using Docker

(Tested on Ubuntu 16.04 x86_64)

### Install tools
(See References section below for guide)

* Install docker (v18.03.0-ce) 
* Install docker-compose (v1.18.0)
* Install NodeJS (v8.11.1) via NVM (v0.33.8)

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

Get the IP address of your dev machine
```
 $ ifconfig
```

Replace all occurences of 127.0.0.1 with your dev machine's IP address obtained above
```
 $ grep -Rl --exclude=README.md --exclude-dir=node_modules 127.0.0.1 | xargs sed -i 's/127.0.0.1/<dev_machine_ip_addr>/g'
```


### Run the containers
```
 $ sudo docker-compose build
 $ sudo docker-compose up
```

### Test
#### Application 
Go to ```http://<dev_machine_ip_addr>:3000``` in your browser

#### API Endpoint 
Go to ```http://<dev_machine_ip_addr>:6200/todo/``` in your browser

Go to ```http://<dev_machine_ip_addr>:6200/todo/mysql``` in your browser

#### PHPMyAdmin 
Go to ```http://<dev_machine_ip_addr>:8181``` in your browser. Credentials: ```root:root```

### Port numbering (for CMSC 128 Projects)

| Lab Section    | MySQL      | MongoDB  | API Endpoint | Application | PHPMyAdmin | 
| -------------  |------------| -------  | ------------ | ----------- | ---------- |
| 1L             | 17001      | 13201    | 12501        | 12801       | 2201       |
| 2L             | 17002      | 13202    | 12502        | 12802       | 2202       |
| 3L             | 17003      | 13203    | 12503        | 12803       | 2203       |
| 4L             | 17004      | 13204    | 12504        | 12804       | 2204       |
| 5L             | 17005      | 13205    | 12505        | 12805       | 2205       |
| 6L             | 17006      | 13206    | 12506        | 12806       | 2206       |
| 7L             | 17007      | 13207    | 12507        | 12807       | 2207       |
| 8L             | 17008      | 13208    | 12508        | 12808       | 2208       |
| 9L             | 17009      | 13209    | 12509        | 12809       | 2209       |
| 10L            | 17010      | 13210    | 12510        | 12810       | 2210       |






## References
*https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04
*https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04
*https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04#how-to-install-using-nvm
*https://medium.com/codebase/mern-ep01-setting-up-a-development-environment-with-docker-1bb0b6e4d464
