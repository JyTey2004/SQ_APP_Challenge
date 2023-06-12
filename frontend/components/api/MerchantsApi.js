import axios from 'axios';
import { URL_MERCHANTS_SVC } from '../../configs';
import {
    STATUS_CODE_CONFLICT,
    STATUS_CODE_CREATED,
    STATUS_CODE_OK,
    STATUS_CODE_UNAUTHORIZED,
  } from '../../constants.js';

  export const createMerchant = async (name, category, locations, items) => {
    const res = await axios
      .post(URL_MERCHANTS_SVC, { name, category, locations, items })
      .then((res) => {
        if (res && res.status === STATUS_CODE_CREATED) {
          return { isSuccess: true, message: 'Merchant successfully created' };
        }
      })
      .catch((err) => {
          return { isSuccess: false, message: 'Please try again later' };
        }
      );
    return res;
  };
  
  export const getMerchantById = async (merchantId) => {
    const res = await axios
      .get(
        URL_MERCHANTS_SVC + `/${merchantId}`,
        { withCredentials: true }
      )
      .then((res) => {
        if (res && res.status === STATUS_CODE_OK) {
          return { isSuccess: true, message: res.data };
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        return { isSuccess: false, message: err };
      });
    return res;
  };

  export const getAllMerchants = async () => {
    const res = await axios
      .get(
        URL_MERCHANTS_SVC,
        { withCredentials: true }
      )
      .then((res) => {
        if (res && res.status === STATUS_CODE_OK) {
            console.log(res);
          return { isSuccess: true, message: res.data };
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        return { isSuccess: false, message: err };
      });
    return res;
  };
  
  export const deleteMerchant = async (merchantId) => {
    const res = await axios
      .delete(URL_USER_SVC + + `/${merchantId}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res && res.status === STATUS_CODE_OK) {
          return { isSuccess: true, message: res.data };
        }
      })
      .catch((err) => {
        console.log(err.response.status);
        return { isSuccess: false, message: err };
      });
    return res;
  };
