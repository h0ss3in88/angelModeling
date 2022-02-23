const {pingRouter} =require("./lib/ping");
const init = (app) => {
    app.use("/api", pingRouter);
}
module.exports = Object.assign({}, {init});