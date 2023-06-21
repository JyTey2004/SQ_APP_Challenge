import axios from 'axios';
import { URL_MERCHANTMEMBERSHIP } from '../../configs';
import {
    STATUS_CODE_CONFLICT,
    STATUS_CODE_CREATED,
    STATUS_CODE_OK,
    STATUS_CODE_UNAUTHORIZED,
  } from '../../constants.js';


export const createMerchantMember = async (data) => {
    const res = await axios
        .post(URL_MERCHANTMEMBERSHIP+'/submit', data)
        .then((res) => {
        if (res && res.status === STATUS_CODE_CREATED) {
            return { isSuccess: true, message: 'Merchant Member successfully created' };
        }
        })
        .catch((err) => {
            console.log(err);
            return { isSuccess: false, message: 'Please try again later' };
        }
        );
    return res;
    }

export const getMerchantMemberByName = async (merchantMemberName) => {
    const res = await axios
        .get(URL_MERCHANTMEMBERSHIP + `?merchantName=${merchantMemberName}`, { withCredentials: true })
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
    }

export const getAllMerchantMembers = async () => {
    const res = await axios
        .get(URL_MERCHANTMEMBERSHIP, { withCredentials: true })
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
    }

