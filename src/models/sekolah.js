const { Model } = require("objection");
const { default: Yayasan } = require("./yayasan");

class Sekolah extends Model {
  static tableName = "sekolah";
  static jsonSchema = {
    type: 'object',
    required: ['id', 'yayasan_id', 'name'],
    properties: {
      id: { type: 'string' },
      yayasan_id: { type: 'string' },
      name: { type: 'string' },
    }
  };

  static relationMappings = () => ({
    yayasan: {
      relation: Model.BelongsToOneRelation,
      modelClass: Yayasan,

      join: {
        from: 'sekolah.yayasan_id',
        to: 'yayasan.id',
      },
    },
  });
}

export default Sekolah;