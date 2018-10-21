import { prodUrl, devUrl } from './env';

export const url = (path='') => {

    if (process.env.NODE_ENV === 'production') {
        return prodUrl + path;
    }

    return devUrl + path;
};