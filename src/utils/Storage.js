

import moment from 'moment';
import configs from '../configs';

const baseStorage = window.Storage;

baseStorage.prototype.set = function set(key, value, expired, otherInfo) {
  const wrapped = {
    data: value
  };
  if (expired) {
    wrapped.expired = moment().add(expired, 'm').valueOf();
  }
  if (otherInfo) {
    wrapped.otherInfo = otherInfo;
  }
  this.setItem(`${this.namespace}_${key}`, JSON.stringify(wrapped));
};

baseStorage.prototype.get = function get(key, isOther = false) {
  const string = this.getItem(`${this.namespace}_${key}`);
  const wrapped = JSON.parse(string);
  let result = null;
  if (wrapped) {
    if (this.isExpired(wrapped)) {
      // remove expired item
      this.removeItem(`${this.namespace}_${key}`);
    } else if (!isOther) {
      result = wrapped.data;
    } else {
      result = wrapped.otherInfo;
    }
  }
  return result;
};

baseStorage.prototype.remove = function remove(key) {
  this.removeItem(`${this.namespace}_${key}`);
};

baseStorage.prototype.retrieve = function retrieve(key, expired, success, fail) {
  const self = this;
  const data = this.get(key);
  const saveOpts = {
    key,
    expired
  };
  if (data) {
    success(data, saveOpts); // true means isCache
  } else {
    fail((res) => {
      if (res) {
        self.set(key, res, expired);
      }
    }, saveOpts);
  }
};


baseStorage.prototype.isExpired = function isExpired(wrapped) {
  const currentTime = moment().valueOf();

  if (wrapped.expired) {
    if (currentTime > wrapped.expired) {
      return true;
    }
  }
  return false;
};

baseStorage.prototype.setNamespace = function setNamespace(namespace) {
  baseStorage.prototype.namespace = namespace || configs.storageNameSpace;
};

baseStorage.getStorage = function getStorage(name) {
  if (name === 'session') {
    return sessionStorage;
  }
  return localStorage;
};

export default baseStorage.getStorage(configs.storage);
