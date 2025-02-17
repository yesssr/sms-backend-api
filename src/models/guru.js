const { Model } = require("objection");
const { default: Sekolah } = require("./sekolah");

class Guru extends Model {
  static tableName = "guru";
  static jsonSchema = {
    type: 'object',
    required: [],
    properties: {
      id: { type: 'string' },
      sekolah_id: { type: 'string' },
      username: { type: 'string', minLength: 6 },
      email: { type: 'string' },
      name: { type: 'string' },
      password: { type: 'string' },
      foto: { type: 'string' },
    }
  }

  static relationMappings = () => ({
    sekolah: {
      relation: Model.BelongsToOneRelation,
      modelClass: Sekolah,

      join: {
        from: 'guru.sekolah_id',
        to: 'sekolah.id',
      }
    }
  })
}

export default Guru;