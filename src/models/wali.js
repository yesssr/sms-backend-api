const { Model } = require("objection");
const { default: Sekolah } = require("./sekolah");

class Wali extends Model {
  static tableName = "wali";
  static jsonSchema = {
    type: 'object',
    required: [],
    properties: {
      id: { type: 'string' },
      sekolah_id: { type: 'string' },
      phone: { type: 'string', minLength: 11 },
      gender: { type: 'string' },
      name: { type: 'string' },
      foto: { type: 'string' },
    }
  }

  static relationMappings = () => ({
    sekolah: {
      relation: Model.BelongsToOneRelation,
      modelClass: Sekolah,

      join: {
        from: 'wali.sekolah_id',
        to: 'sekolah.id',
      }
    }
  })
}

export default Wali;