// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require("koa");
// const fs = require("fs");
// 导入controller middleware:
const controller = require("./controller");

const host = "127.0.0.1";
const port = 3000;

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 先导入fs模块，然后用readdirSync列出文件


// 使用middleware:
app.use(controller());

app.use(async (ctx, next) => {
  // console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
  await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
  // const start = new Date().getTime(); // 当前时间
  await next(); // 调用下一个middleware
  // const ms = new Date().getTime() - start; // 耗费时间
  // console.log(`Time: ${ms}ms`); // 打印耗费时间
});

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  await next();
  ctx.response.type = "text/html";
  ctx.response.body = "<h1>Hello, koa2!</h1>";
});

// 在端口3000监听:
app.listen(port, host, () => {
  console.log(`app started at http://${host}:${port}`);
});
