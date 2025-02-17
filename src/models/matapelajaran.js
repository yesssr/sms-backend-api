const { Model } = require("objection");
const { default: Sekolah } = require("./sekolah");

class Matapelajaran extends Model {
  static tableName = "Matapelajaran";
  static jsonSchema = {
    type: 'object',
    required: ['name']
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

export default Matapelajaran;