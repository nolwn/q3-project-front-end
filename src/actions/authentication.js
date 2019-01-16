import axios from "axios";
const url = process.env.REACT_APP_API_URL;

export const SET_AUTHENTICATION = 'SET_AUTHENTICATION';


export const setAuthentication = claim => ({
  type: SET_AUTHENTICATION,
  payload: claim
});

export const verifyUser = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem('token');
      const user = await axios(`${url}/auth/verify`,{
        method: "get",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      dispatch( setAuthentication(user.data))
    }catch(err) {
      console.log(err)
    }
  }
};

export const login = (user_name, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${url}/auth/login`, {userName: user_name, password: password});
      localStorage.setItem('token', response.data.token);
      const user = await axios(`${url}/auth/verify`,{
        method: "get",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${response.data.token}`
        }
      });
      dispatch( setAuthentication(user.data))
    }catch(err) {
      console.log(err)
    }
  }

}