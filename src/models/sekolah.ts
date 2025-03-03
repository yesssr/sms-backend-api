import { AjvValidator, Model, Validator } from "objection";
import Yayasan from "./yayasan";

class Sekolah extends Model {
  static tableName = "sekolah";
  static jsonSchema = {
    type: "object",
    required: ["id", "yayasan_id", "nama", "no_telepon", "email", "jenjang"],
    properties: {
      id: { type: "string", maxLength: 30 },
      yayasan_id: { type: "string", maxLength: 30 },
      nama: { type: "string" },
      no_telepon: {
        type: "string",
        maxLength: 15,
        pattern: "^08[0-9]{8,13}$",
      },
      email: { type: "string", format: "email" },
      website: { type: "string", format: "uri", nullable: true },
      logo: { type: "string", nullable: true },
      jenjang: {
        type: "string",
        enum: ["SD", "SMP", "SMA", "SMK"],
      },
      is_active: { type: "boolean", default: true },
      is_negeri: { type: "boolean", default: false },
      deleted: { type: "boolean", default: false },
    },
  };

  static relationMappings = {
    yayasan: {
      relation: Model.BelongsToOneRelation,
      modelClass: Yayasan,

      join: {
        from: `${this.tableName}.yayasan_id`,
        to: "yayasan.id",
      },
    },
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

export default Sekolah;
