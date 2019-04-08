let express = require('express');
let app = express();
app.use(express.static(__dirname));
let whiteList = ['http://localhost:3000'];
app.use(function (req, res, next) {
  let origin = req.headers.origin;
  if (whiteList.includes(origin)) {
    // 设置那个源可以访问我
    res.setHeader('Access-Control-Allow-Origin', origin);
    // 允许携带那个头访问
    res.setHeader('Access-Control-Allow-Headers', 'name');
    // 允许那个方法访问
    res.setHeader('Access-Control-Allow-Methods', 'PUT');
    // 允许携带cookie
    res.setHeader('Access-Control-Allow-Credentials', true);
    // 预检的存活时间
    res.setHeader('Access-Control-Max-Age', 6);
    // 允许返回的头
    res.setHeader('Access-Control-Expose-Headers', 'name');
  }
  next();
})
app.get('/getData', function (req, res) {
  res.end('server2数据');
})
app.listen(4000);