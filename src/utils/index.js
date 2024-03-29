import _ from 'lodash';
import moment from 'moment';
import configs from '../configs';
import Storage from './Storage';

export function updateItem(arr, item) {
  const index = _.indexOf(arr, arr.find(x => x.id === item.id));
  arr.splice(index, 1, item);
  return arr;
}

export function removeItem(arr, id) {
  let ids = [];
  if (!_.isArray(id)) {
    ids.push(id);
  } else {
    ids = id;
  }
  ids.forEach((Id) => {
    const index = _.indexOf(arr, arr.find(x => x.id === Id));
    arr.splice(index, 1);
  });
  return arr;
}

export function addItem(arr, item) {
  arr.push(item);
  return arr;
}

export function formatUrl(path) {
  return `${configs.secureHttps
    ? 'https://'
    : 'http://'}${configs.host}:${configs.port}${configs.apiRoot}${path[0] !== '/'
    ? `/${path}`
    : path}`;
}

export function getQueryString(params) {
  let result = '';
  for (const key in params) {
    if ({}.hasOwnProperty.call(params, key) && (params[key] || params[key] === 0)) {
      result += `&${key}=${params[key]}`;
    }
  }
  return (result.length && result.substr(1)) || '';
}

export const getUserToken = () => {
  const user = Storage.get(configs.authToken);
  return user ? user.token : '';
};

export const getUserInfo = () => {
  const user = Storage.get(configs.authToken);
  return user || '';
};

export const setUserToken = (auth, tel, name, useid) => {
  if (auth) {
    Storage.set(
      configs.authToken,
      { token: auth, username: name || '', telephone: tel || '', userId: useid || '' },
      60 * 24
    );
  } else {
    Storage.remove(configs.authToken);
  }
};

export const getImagesJson = (url) => {
  return url ? JSON.stringify(url.split(',')) : '[]';
};

export const getUploadDefaultList = (url, index) => {
  let images = JSON.parse(url);
  if (index || index === 0) {
    if (index < images.length) {
      images = [images[index]];
    } else {
      images = [];
    }
  }
  return images.map((image, imgIndex) => {
    return {
      uid: -(imgIndex + 1),
      name: image,
      status: 'done',
      url: image,
      thumbUrl: image
    };
  });
};

export const getExtInfoDefaultValue = (extInfo, key) => {
  if (extInfo) {
    const item = JSON.parse(extInfo).find(x => x.key === key);
    return item ? item.value : '';
  }
  return '';
};

function getRandImageUrl() {
  const randomNumber = Math.ceil(Math.random() * 4);
  return `${configs.staticPrefix}/img/product/${randomNumber}.png`;
}

export function getFocusImage(imageUrls) {
  if (imageUrls && imageUrls !== 'string') {
    const urls = JSON.parse(imageUrls);
    if (urls.length > 0) {
      return urls[0];
    }
    return getRandImageUrl();
  }
  return getRandImageUrl();
}

export function getPath(path) {
  return `${configs.staticPrefix}${path}`;
}

export function getDefaultImageUrl() {
  return `${configs.staticPrefix}/img/default.png`;
}

export function getImagePath(path) {
  const images = path ? JSON.parse(path) : [];
  let url = '';
  if (images.length > 0) {
    url = images[0];
  } else {
    url = getDefaultImageUrl();
  }
  return url;
}

const dateFormat = 'YYYY-MM-DD';
const timeStampFormat = 'YYYY-MM-DD HH:mm:ss';

export function changeMomentToString(dateMoment) {
  return dateMoment && dateMoment.format(dateFormat);
}

export function changeMomentToDTString(dateMoment) {
  return dateMoment && dateMoment.format(timeStampFormat);
}

export function formatDTString(dateString) {
  return dateString && moment(dateString).format(timeStampFormat);
}

// 给定一个范围，按比例计算圆圈大小。
// getProperSize(item.height, minH, maxH, 10, 100)
export function getProperSize(now, min, max, minTarget, maxTarget) {
  if (!now) {
    return 0;
  }
  if (minTarget <= maxTarget && min <= now <= max) {
    return (now - min) * (maxTarget - minTarget) / (max - min) + minTarget;
  }
  return now || 0;
}

// 千分位
export function comdify(n) {
  if (!n) return '';
  n = n.toString();
  const re = /\d{1,3}(?=(\d{3})+$)/g;
  const n1 = n.replace(/^(\d+)((\.\d+)?)$/, (s, s1, s2) => {
    return s1.replace(re, '$&,') + s2;
  });
  return n1;
}

// 拿根字体大小 base字体大小
export function getBaseFontSize() {
  return parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function getResize(x) {
  return x / 192 * getBaseFontSize();
}

// 正方形的时候html字体10vw->10vh
export function resizeSquarePage() {
  if (window.outerWidth > window.outerHeight) {
    document.getElementsByTagName('html')[0].style = 'font-size:10vh';
  }
}
