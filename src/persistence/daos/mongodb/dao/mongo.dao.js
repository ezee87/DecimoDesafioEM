import {logger} from "../../../../utils/logger.js";

export default class MongoDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      const response = await this.model.find({});
      return response;
    } catch (error) {
      logger.error("Error al traer todos los elementos en mongodb")
    }
  }

  async getById(id) {
    try {
      const response = await this.model.findById(id);
      return response;
    } catch (error) {
      logger.error("Error al traer elementos por Id en mongodb")
    }
  }

  async create(obj) {
    try {
      const response = await this.model.create(obj);
      return response;
    } catch (error) {
      logger.error("Error al crear elementos en mongodb")
    }
  }

  async update(id, obj) {
    try {
      await this.model.updateOne({ _id: id }, obj);
      return obj;
    } catch (error) {
      logger.error("Error al actualizar elementos en mongodb")
    }
  }

  async delete(id) {
    try {
      const response = await this.model.findByIdAndDelete(id);
      return response;
    } catch (error) {
      logger.error("Error al eliminar elementos en mongodb")
    }
  }
}