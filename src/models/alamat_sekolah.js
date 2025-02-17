const { Model } = require("objection");
const { default: Sekolah } = require("./sekolah");

class AlamatSekolah extends Model {
  static tableName = "alamat_sekolah";
  static jsonSchema = {
    type: 'object',
    required: [],
    properties: {
      id: { type: 'string' },
      sekolah_id: { type: 'string' },
      province_id: { type: 'string' },
      regency_id: { type: 'string' },
      district_id: { type: 'string' },
      village_id: { type: 'string' },
      detail: { type: 'string' },
    }
  }

  static relationMappings = () => ({
    sekolah: {
      relation: Model.BelongsToOneRelation,
      modelClass: Sekolah,

      join: {
        from: 'alamat_sekolah.sekolah_id',
        to: 'sekolah.id',
      }
    }
  })
}

export default AlamatSekolah;