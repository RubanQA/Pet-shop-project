const { Type } = require("../models/models");
const ApiError = require("../errors/apiError");

class TypeController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const type = await Type.create({ name });
      return res.json(type);
    } catch (error) {
      return next(
        ApiError.internal("An error occurred while creating the type")
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const types = await Type.findAll();
      if (!types || types.length === 0) {
        return next(ApiError.notFound("Types not found"));
      }
      return res.json(types);
    } catch (error) {
      return next(ApiError.internal("An error occurred while fetching types"));
    }
  }

  async getOne(req, res, next) {
    try {
      const types = await Type.findAll();
      if (!types || types.length === 0) {
        return next(ApiError.notFound("Types not found"));
      }
      return res.json(types);
    } catch (error) {
      return next(ApiError.internal("An error occurred while fetching types"));
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body;
      const type = await Type.destroy({ where: { id } });
      if (!type) {
        return next(ApiError.notFound("Type not found"));
      }
      return res.json({ message: "Type deleted successfully" });
    } catch (error) {
      return next(
        ApiError.badRequest("An error occurred while deleting the type")
      );
    }
  }
}

module.exports = new TypeController();
