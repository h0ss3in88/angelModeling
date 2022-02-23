const http = require("http");
const {getApp} = require("./src/server/app");

let app = getApp();
const server = http.createServer(app);
server.listen(app.get('PORT'), () => {
    console.log(`application running at ${server.address().address}:${server.address().port}`);
});
