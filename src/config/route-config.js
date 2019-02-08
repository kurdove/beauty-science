module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const servicesRoutes = require("../routes/services");

    app.use(staticRoutes);
    app.use(servicesRoutes);
  }
}