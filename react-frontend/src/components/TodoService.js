import axios from 'axios';

var apiendpoint='http://127.0.0.1:6200/todo/';

export default class TodoService {


  all(callback) {
    console.log(apiendpoint);
    axios.get(apiendpoint)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(null);
    });
  }

  get(id,callback) {
    axios.get(apiendpoint+id)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(null);
    });
  }

  add(data,callback) {
    axios.post(apiendpoint+'/add/', {
    desc: data
    })
    .then(function (response) {
      console.log(response);
      callback();
    })
    .catch(function (error) {
      console.log(error);
      callback();
    });
  }

  update(data, id, callback){
    axios.post(apiendpoint+'/update/'+id, {
      desc: data
    })
    .then(function(response) {
      console.log('Updated');
      callback();
    })
    .catch(function(response) {
      callback();
    });
  }

  delete(id, callback){
    axios.get(apiendpoint+'/delete/'+id)
    .then(function(response){
      callback();
    })
    .catch(function(response){
      console.log('Error deleting');
      callback();
    });
  }
}
