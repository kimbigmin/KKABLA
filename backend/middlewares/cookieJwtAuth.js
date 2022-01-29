import jwt from 'jsonwebtoken';

const cookieJwtAuth = (req, res, next) => {
  const token = req.cookies.token;

  try {
    const user = jwt.verify(token, 'secret');
    req.user = user;
  } catch (error) {
    res.clearCookie('webToken');
    return res.redirect('/');
  }
};

export default cookieJwtAuth;
