const base64 = require("base-64");
const { users } = require("../models");

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) {
    return _authError();
  }

  let basic = req.headers.authorization.split(" ").pop();
  let [user, password] = base64.decode(basic).split(":");
  try {
    req.user = await users.authenticateBasic(user, password);

    next();
  } catch (err) {
    _authError();
  }

  function _authError() {
    res.status(403).send("Invalid Login");
  }
};
