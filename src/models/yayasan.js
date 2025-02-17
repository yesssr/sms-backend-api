const { Model } = require("objection");

class Yayasan extends Model {
  static tableName = "yayasan";
  static jsonSchema = {
    type: 'object',
    required: ['id', 'name'],
    properties: {
      id: { type: 'string' },
      name: { type: 'string', minLength: 1 },
    }
  }
}

export default Yayasan;