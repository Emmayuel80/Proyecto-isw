const handleOperation = require('../services/handleOperation');
module.exports = function (app) {
  // =====================================
  // HOME PAGE============================
  // =====================================
  app.get('/', function (req, res) {
    res.render('index.ejs');
  });

  app.post('/', function (req, res) {
    const numA = req.body.numA;
    const numB = req.body.numB;
    const operation = req.body.operation;
    const result = handleOperation(numA, numB, operation);
    console.log(result);
  });
};
