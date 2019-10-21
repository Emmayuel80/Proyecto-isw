module.exports = function (app) {
  // =====================================
  // HOME PAGE============================
  // =====================================
  app.get('/', function (req, res) {
    res.render('../public/views/index.ejs');
  });

  app.get('*', (req, res) => {
    res.render('../public/views/not_found.ejs');
  });
};
