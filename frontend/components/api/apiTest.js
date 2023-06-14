const axios = require("axios");


const getAllMerchants = async () => {
    const res = await axios
      .get(
        'http://localhost:8080/merchants',
        { withCredentials: true }
      )
      .then((res) => {
        if (res && res.status === 200) {
            console.log(res.data);
          return { isSuccess: true, message: res.data };
        }
      })
      .catch((err) => {
        console.log(err);
        return { isSuccess: false, message: err };
      }); 
    return res;
  };

getAllMerchants()