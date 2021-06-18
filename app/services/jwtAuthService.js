import axios from "axios";
// import localStorageService from "./localStorageService";

class JwtAuthService {

  user = {
    userId: "1",
    role: 'ADMIN',
    displayName: "Watson Joyce",
    email: "watsonjoyce@gmail.com",
    photoURL: "/assets/images/face-7.jpg",
    age: 25,
    token: "faslkhfh423oiu4h4kj432rkj23h432u49ufjaklj423h4jkhkjh"
  }

  loginWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user);
      }, 1000);
    }).then(data => {
      this.setSession(data.token);
      this.setUser(data);
      return data;
    });
  };

  loginWithToken = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.user);
      }, 100);
    }).then(data => {
      this.setSession(data.token);
      this.setUser(data);
      return data;
    });
  };

  logout = () => {
    this.setSession(null);
    this.removeUser();
  }

  setSession = token => {
    if (token) {
      localStorage.setItem("jwt_token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    } else {
      localStorage.removeItem("jwt_token");
      delete axios.defaults.headers.common["Authorization"];
    }
  };
  setUser = (user) => {    
    // localStorageService.setItem("auth_user", user);
  }
  removeUser = () => {
    // localStorage.removeItem("auth_user");
  }
}

export default new JwtAuthService();
