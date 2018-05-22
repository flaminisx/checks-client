require('dotenv').config();

console.log(process.env, process.cwd())

const config = {
  API_URL: process.env.REACT_APP_API_URL,
  CHAT_APP_URL: process.env.REACT_APP_CHAT_APP_URL
};

export default config;
