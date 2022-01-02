let config= {
  api: 'https://dcode-api.herokuapp.com/',
  version:'0.0.1',

  //False stops all firebase, bugsnag, etc.
  productionMode: false,
  // (=`ω´=)

  get defaultHeaders() {
    return {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  },
}

export default config;
