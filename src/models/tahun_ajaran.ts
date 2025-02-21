import { Model } from "objection";
import Sekolah from "./sekolah";

class TahunAjaran extends Model {
  total?: number;
  deleted?: boolean;
  updated_at?: string;
  static tableName = 'tahun_ajaran';
  static jsonSchema = {
    type: 'object',
    required: ['nama'],
  };

  static relationMappings = {
    sekolah: {
      relation: Model.BelongsToOneRelation,
      modelClass: Sekolah,
      join: {
        from: `${this.tableName}.sekolah_id`,
        to: 'sekolah.id',
      }
    }
  };
}

export default TahunAjaran;