import config from '../config';

export default {
  token: '',
  email: '',
  authenticate(email, password){
    return fetch(`${config.API_URL}/sign_in`, {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user:{
          email,
          password
        }
      })
    }).then(res => res.json());
  },

  setLoginData(email, token){
    this.email = email;
    this.token = token;
  },
  singOut(){
    this.email = '';
    this.token = '';
  },

  signUp(data){
    return fetch(`${config.API_URL}/sign_up`, {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: data
      })
    }).then(res => res.json());
  },

  fetchProducts(){
    return fetch(`${config.API_URL}/products`, {
      headers: {
        'X-User-Email': this.email,
        'X-User-Token': this.token
      }
    }).then(res => res.json());
  },

  createProduct(data){
    return fetch(`${config.API_URL}/products`, {
      method: "POST",
      headers: {
        'X-User-Email': this.email,
        'X-User-Token': this.token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        product: data
      })
    }).then(res => res.json());
  }

}
