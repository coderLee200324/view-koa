const fnIndex = async ctx => {
  ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

const fnHello = async ctx => {
  ctx.response.body = `<h1>Hello, ${ctx.params.name}!</h1>`;
};

module.exports = {
  "GET /": fnIndex,
  "GET /hello/:name": fnHello,
};
