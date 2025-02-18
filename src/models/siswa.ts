import { Model } from "objection";
import Sekolah from "./sekolah";

class Siswa extends Model {
  static tableName = "siswa";
  static jsonSchema = {
    type: 'object',
    required: [],
    properties: {
      id: { type: 'string' },
      sekolah_id: { type: 'string' },
      nis: { type: 'string', minLength: 6 },
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
        from: 'siswa.sekolah_id',
        to: 'sekolah.id',
      }
    }
  })
}

export default Siswa;