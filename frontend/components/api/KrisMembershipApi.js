import axios from 'axios';
import { URL_KRISMEMBERSHIP } from '../../configs';
import {
    STATUS_CODE_CONFLICT,
    STATUS_CODE_CREATED,
    STATUS_CODE_OK,
    STATUS_CODE_UNAUTHORIZED,
  } from '../../constants.js';

export const createKrisMember = async (data) => {
    const res = await axios
        .post(URL_KRISMEMBERSHIP+'/submit', data)
        .then((res) => {
        if (res && res.status === STATUS_CODE_CREATED) {
            return { isSuccess: true, message: 'Kris Member successfully created' };
        }
        })
        .catch((err) => {
            console.log(err);
            return { isSuccess: false, message: 'Please try again later' };
        }
        );
    return res;
    }

export const getKrisMemberByName = async (krisMemberName) => {
    const res = await axios
        .get(URL_KRISMEMBERSHIP + `?name=${krisMemberName}`, { withCredentials: true })
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

export const getKrisMemberById = async (krisMemberId) => {
    const res = await axios
        .get(
        URL_KRISMEMBERSHIP + `/${krisMemberId}`,
        { withCredentials: true }
        )
        .then((res) => {
        if (res && res.status === STATUS_CODE_OK) {
            return { isSuccess: true, message: res.data };
        }
        })
        .catch((err) => {
        console.log(err);
        return { isSuccess: false, message: err };
        });
    return res;
    }

export const updateKrisMember = async (krisMemberId) => {
    const res = await axios
        .put(URL_KRISMEMBERSHIP + `/${krisMemberId}`)
        .then((res) => {
        if (res && res.status === STATUS_CODE_OK) {
            return { isSuccess: true, message: 'Kris Member successfully updated' };
        }
        })
        .catch((err) => {
            console.log(err);
            return { isSuccess: false, message: 'Please try again later' };
        }
        );
    return res;
    }

export const deleteKrisMember = async (krisMemberId) => {
    const res = await axios
        .delete(URL_KRISMEMBERSHIP + `/${krisMemberId}`)
        .then((res) => {
        if (res && res.status === STATUS_CODE_OK) {
            return { isSuccess: true, message: 'Kris Member successfully deleted' };
        }
        })
        .catch((err) => {
            console.log(err);
            return { isSuccess: false, message: 'Please try again later' };
        }
        );
    return res;
    }