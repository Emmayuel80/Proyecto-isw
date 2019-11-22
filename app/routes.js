// app/routes.js
module.exports = function (app, passport) {
  // =====================================
  // HOME PAGE (with login links) ========
  // =====================================
  app.get('/', function (req, res) {
    res.redirect('/login');
  });

  // =====================================
  // LOGIN ===============================
  // =====================================
  app.get('/login', function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render('../public/views/login.ejs', { message: req.flash('loginMessage') });
  });
  // process the login form
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile', // redirect to the secure profile section
    failureRedirect: '/login', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
  }));

  // =====================================
  // SIGNUP ==============================
  // =====================================
  // show the signup form
  app.get('/profile/signup/:RFCE', isLoggedIn, function (req, res) {
    // render the page and pass in any flash data if it exists
    res.render('../public/views/registro.ejs', { user: req.user, message: req.flash('signupMessage') });
  });
  app.post('/profile/signup/:RFCE', isLoggedIn, function (req, res) {
    require('../config/register')(req, req.params.RFCE);
    res.redirect('/profile');
  });
  // =====================================
  // PROFILE SECTION =====================
  // =====================================
  // we will want this protected so you have to be logged in to visit
  // we will use route middleware to verify this (the isLoggedIn function)
  app.get('/profile', isLoggedIn, function (req, res) {
    if (req.user.RFCE) { res.redirect('/profile/verAsuntos'); } else {
      res.render('../public/views/profile.ejs', {
        user: req.user // get the user out of session and pass to template
      });
    }
  });

  app.get('/profile/crearAsunto', isLoggedIn, function (req, res) {
    // render the page and pass in any flash data if it exists
    require('./getSubordinados')(req.user, (result) => {
      res.render('../public/views/crearAsunto.ejs', { sub: result, user: req.user });
    });
  });

  app.post('/profile/crearAsunto', isLoggedIn, function (req, res) {
    require('../services/createAsunto')(req, req.user.RFC);
    res.redirect('/profile');
  });
  // =====================================
  // LOGOUT ==============================
  // =====================================
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  });

  // =====================================
  // ASUNTOS ==============================
  // =====================================
  app.get('/profile/verAsuntos', isLoggedIn, function (req, res) {
    require('./getAsuntos')(req.user, (result) => {
      res.render('../public/views/verAsuntos.ejs', { asuntos: result, user: req.user });
    });
    // render the page and pass in any flash data if it exists
  });
  app.get('/profile/verAsuntosPersonales', isLoggedIn, function (req, res) {
    require('./getAsuntosEncargado')(req.user, (result) => {
      res.render('../public/views/verAsuntosPersonales.ejs', { asuntos: result, user: req.user });
    });
    // render the page and pass in any flash data if it exists
  });

  app.get('/profile/verAsuntosEncargado', isLoggedIn, function (req, res) {
    require('./getAllAsuntos')(req.user, (result) => {
      require('./getProgresoRechazado')(req.user.RFC, (arrRechazo) => {
        res.render('../public/views/verAsuntosEncargado.ejs', { asuntos: result, user: req.user, arrRechazo: arrRechazo });
      });
    });
    // render the page and pass in any flash data if it exists
  });
  app.get('/asunto/updateSubordinados/:IdAsunto', isLoggedIn, function (req, res) {
    require('./getSubordinadosAsignados')(req.params.IdAsunto, (result) => {
      res.render('../public/views/updateSubordinados.ejs', { asignado: result, IdAsunto: req.params.IdAsunto, user: req.user });
    });
  });
  app.get('/asunto/addSubordinados/:IdAsunto', isLoggedIn, function (req, res) {
    require('./getSubordinadosNoAsignados')(req.params.IdAsunto, req.user.RFC, (result) => {
      res.render('../public/views/addSubordinados.ejs', { sub: result, user: req.user, IdAsunto: req.params.IdAsunto });
    });
  });
  app.post('/asunto/addSubordinados/:IdAsunto', isLoggedIn, function (req, res) {
    require('../services/addSubordinados')(req);
    res.redirect('/asunto/updateSubordinados/' + req.params.IdAsunto);
  });
  // =====================================
  // ACTIVIDADES ==============================
  // =====================================
  app.get('/profile/verAsuntos/crearActividad/:idAsunto', isLoggedIn, function (req, res) {
    res.render('../public/views/crearActividad.ejs', { idAsunto: req.params.idAsunto, user: req.user });
    // render the page and pass in any flash data if it exists
  });
  app.post('/profile/verAsuntos/crearActividad/:idAsunto', isLoggedIn, function (req, res) {
    require('../services/createActividad')(req, req.params.idAsunto, req.user.RFC);
    res.redirect('/profile');
    // render the page and pass in any flash data if it exists
  });
  app.get('/profile/verActividades/:idAsunto', isLoggedIn, function (req, res) {
    require('./getAllActividades')(req.params.idAsunto, (result) => {
      res.render('../public/views/verActividades.ejs', { actividad: result, user: req.user });
    });
  });
  app.get('/profile/subirDocumento/Actividad/:idActividad', isLoggedIn, function (req, res) {
    res.render('../public/views/subirDocumento.ejs', { idActividad: req.params.idActividad, user: req.user });
    // render the page and pass in any flash data if it exists
  });
  app.get('/profile/subirDocumento/Actividad/:idActividad', isLoggedIn, function (req, res) {
    res.redirect('/profile/verAsuntos');
    // render the page and pass in any flash data if it exists
  });
  // =====================================
  // Documentos Asuntos ==============================
  // =====================================
  app.get('/profile/subirDocumento/Asunto/:idAsunto', isLoggedIn, function (req, res) {
    res.render('../public/views/subirDocumento.ejs', { idAsunto: req.params.idAsunto, user: req.user });
    // render the page and pass in any flash data if it exists
  });
  app.get('/profile/subirDocumento/Asunto/:idAsunto', isLoggedIn, function (req, res) {
    res.redirect('/profile/verAsuntos');
    // render the page and pass in any flash data if it exists
  });
};
// route middleware to make sure a user is logged in
function isLoggedIn (req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) { return next(); }

  // if they aren't redirect them to the home page
  res.redirect('/');
}
