import { prodUrl, devUrl } from './env';

export const url = (path='') => {

    if (process.env.NODE_ENV === 'production') {
        return prodUrl + path;
    }

    return devUrl + path;
};

export const makeClasses = classes => {

    if (Array.isArray(classes)) {

        return classes.join(' ');
    }

    return classes;
};