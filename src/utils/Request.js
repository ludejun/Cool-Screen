import superagent from 'superagent';
import configs from '../configs';
import Storage from '../utils/Storage';
import { formatUrl } from '../utils';

const methods = ['get', 'post', 'put', 'patch', 'del'];

class ApiClient {
  constructor() {
    methods.forEach(
      method =>
        this[method] = (
          path,
          { params, data, formEncoding, formJson, auth, sign, handleError } = {}
        ) =>
          new Promise((resolve, reject) => {
            const request = superagent[method](formatUrl(path));
            let query = params;
            if (method === 'get') {
              query = {
                ...params,
                t: new Date().getTime()
              };
            }
            if (query) {
              request.query(query);
            }

            request.timeout(30000);

            if (data) {
              // 当前MVP sign不需要
              if (sign && !data.sign) {
                data.sign = '123';
              }
              request.send(data);
            }
            if (formEncoding) {
              request.set('Content-Type', 'application/x-www-form-urlencoded');
            }
            if (formJson) {
              request.set('Content-Type', 'application/json');
              request.set('Accept', 'application/json');
            }

            if (auth) {
              const user = Storage.get(configs.authToken);
              if (user) {
                request.set('Authorization', user.token);
              } else {
                reject(new Error('token不存在或已过期'));
              }
            }
            request.end((err, { body } = {}) => {
              if (err) {
                if (
                  typeof err.status === 'undefined' &&
                  err.message.indexOf('Request has been terminated') > -1
                ) {
                  reject(new Error('网络不给力,请刷新页面'));
                }
                if (err.timeout) {
                  reject(new Error('请求超时,请刷新页面'));
                } else {
                  reject(body || err);
                }
              } else {
                let res = body.data;
                if (body.data && typeof body.data === 'string') {
                  try {
                    res = JSON.parse(body.data) || null;
                  } catch (e) {
                    res = body.data;
                  }
                }
                if (`${body.code}` === '1' || handleError) {
                  resolve(res);
                } else {
                  reject(new Error(body.info));
                }
              }
            });
          })
    );
  }
}

export default ApiClient;
