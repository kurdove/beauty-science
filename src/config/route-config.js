module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const servicesRoutes = require("../routes/services");
    const userRoutes = require("../routes/users");

    app.use(staticRoutes);
    app.use(servicesRoutes);
    app.use(userRoutes);
  }
}