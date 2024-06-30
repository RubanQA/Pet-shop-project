const ApiError = require("../errors/apiError");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async checkUser(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("ID not specified"));
    }
    res.json(id);
  }
}

module.exports = new UserController();
