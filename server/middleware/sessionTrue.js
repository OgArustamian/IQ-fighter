const sessionTrue = (req, res, next) => {
  if (req.session.user?.id) { return res.redirect('/'); }
  next();
};

module.exports = sessionTrue;
