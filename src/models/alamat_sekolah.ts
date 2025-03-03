import { AjvValidator, Model, Validator } from "objection";
import Sekolah from "./sekolah";

class AlamatSekolah extends Model {
  static tableName = "alamat_sekolah";
  static jsonSchema = {
    type: 'object',
    required: ['alamat'],
    properties: {
      id: { type: 'string' },
      sekolah_id: { type: 'string' },
      province_id: { type: 'string' },
      regency_id: { type: 'string' },
      district_id: { type: 'string' },
      village_id: { type: 'string' },
      alamat: { type: 'string' },
    }
  }

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

export default AlamatSekolah;