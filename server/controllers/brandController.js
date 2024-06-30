const { Brand } = require("../models/models");
const ApiError = require("../errors/apiError");

class BrandController {
  async create(req, res, next) {
    try {
      const { name } = req.body;
      const brand = await Brand.create({ name });
      return res.json(brand);
    } catch (error) {
      return next(
        ApiError.internal("An error occurred while creating the brand")
      );
    }
  }

  async getAll(req, res, next) {
    try {
      const brands = await Brand.findAll();
      if (!brands || brands.length === 0) {
        return next(ApiError.notFound("Brands not found"));
      }
      return res.json(brands);
    } catch (error) {
      return next(ApiError.internal("An error occurred while fetching brands"));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const brand = await Brand.findOne({ where: { id } });
      if (!brand) {
        return next(ApiError.notFound("Brand not found"));
      }
      return res.json(brand);
    } catch (error) {
      return next(
        ApiError.internal("An error occurred while fetching the brand")
      );
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.body;
      const brand = await Brand.destroy({ where: { id } });
      if (!brand) {
        return next(ApiError.notFound("Brand not found"));
      }
      return res.json({ message: "Brand deleted successfully" });
    } catch (error) {
      return next(
        ApiError.badRequest("An error occurred while deleting the brand")
      );
    }
  }
}

module.exports = new BrandController();
