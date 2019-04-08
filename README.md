### cross-domain
前端九种跨域方案
#### 同源策略
```
协议 域名 端口 同域
```
#### 为什么浏览器不支持跨域
```
cookie localStorage
DOM元素也有同源策略 iframe
```
### 实现跨域
- jsonp
  不安全xss攻击 只能get不支持post delete put
- cors
- postMessage
  两个页面之间的访问
- document.domian
- window.name
- location.hash
- http-proxy
- nginx
- websocket