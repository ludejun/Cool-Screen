import { message } from 'antd';

message.config({
  top: 100,
  duration: 2
});

const methods = ['success', 'error', 'info', 'warning', 'warn', 'loading'];

const Message = {};

methods.forEach((method) => {
  Message[method] = (error, duration) => {
    const content = typeof error === 'object' ? error.message : error;
    return message[method](content, duration);
  };
});

export default Message;
