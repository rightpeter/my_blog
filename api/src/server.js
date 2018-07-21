const Koa = require('koa');

const app = new Koa();

app.use(function *(){
  this.body = 'Hello from koajs';
});

app.listen(3000);
