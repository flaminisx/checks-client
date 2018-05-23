export default {
  token: '',
  email: '',
  authenticate(email, password){
    return fetch('http://checks-api.botunit.me/sign_in', {
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
    return fetch('http://checks-api.botunit.me/sign_up', {
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
    return fetch('http://checks-api.botunit.me/products', {
      headers: {
        'X-User-Email': this.email,
        'X-User-Token': this.token
      }
    }).then(res => res.json());
  }

}
