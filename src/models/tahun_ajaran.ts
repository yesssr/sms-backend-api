import { Model } from "objection";
import Sekolah from "./sekolah";

class TahunAjaran extends Model {
  static tableName = 'tahun_ajaran';
  static jsonSchema = {
    type: 'object',
    required: ['name'],
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