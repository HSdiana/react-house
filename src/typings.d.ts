declare module 'slash2';
declare module 'antd-theme-webpack-plugin';

declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'omit.js';
declare module 'react-copy-to-clipboard';
declare module 'react-fittext';
declare module '@antv/data-set';
declare module 'nzh/cn';
declare module 'webpack-theme-color-replacer';
declare module 'webpack-theme-color-replacer/client';
declare module 'dva';
declare module '*.json' {
  const content: object;
  export default content;
}
declare module 'worker-loader!*' {
  class WebpackWorker extends Worker {
    constructor();
  }

  export default WebpackWorker;
}
