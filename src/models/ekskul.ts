import { Model } from "objection";
import Sekolah from "./sekolah";

class Ekskul extends Model {
  static tableName = 'ekskul';
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

export default Ekskul;