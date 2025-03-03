import { AjvValidator, Model, Validator } from "objection";
import Sekolah from "./sekolah";

class Ekskul extends Model {
  total?: number;
  deleted?: boolean;
  updated_at?: string;
  static tableName = 'ekskul';
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

  static createValidator(): Validator {
    return new AjvValidator({
      onCreateAjv() {},
      options: {
        allErrors: true,
      }
    });
  }
}

export default Ekskul;