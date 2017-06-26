# 开发步骤


1. 安装 ```npm install```

2. 启动 Webpack hot loader ```npm run dev```

3. 启动服务 ```npm start```

4. 发布 ```npm run build```


# 说明

class请继承WDPage类，所有页面跳转可以直接调用
```import {WDPage} from './src/components'```
```class Home extends WDPage {}```
```this.forward('/')```
```this.back()```
方便接入埋点、统计等功能
