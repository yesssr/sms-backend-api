const { Model } = require("objection");
const { default: Sekolah } = require("./sekolah");

class Tingkat extends Model {
  static tableName = "tingkat";
  static jsonSchema = {
    type: 'object',
    required: ['name'],
    properties: {
      id: { type: 'string' },
      sekolah_id: { type: 'string' },
      name: { type: 'string' }
    }
  };

  static relationMappings = () => ({
    sekolah: {
      relation: Model.BelongsToOneRelation,
      modelClass: Sekolah,
      join: {
        from: `${this.tableName}.sekolah_id`,
        to: 'sekolah.id',
      }
    }
  })
}

export default Tingkat;