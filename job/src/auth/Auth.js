const auth = {
    isAuthenticated: false,
    signin: (callback) => {
      auth.isAuthenticated = true;
      setTimeout(callback, 100);
    },
    signout: (callback) => {
      auth.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };
  export default auth;