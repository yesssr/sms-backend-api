import { JSONSchema, Model } from "objection";
import Sekolah from "./sekolah";

class Role extends Model {
  static tableName: string = "roles";
  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["id", "sekolah_id", "nama"],
    properties: {
      id: { type: "string", maxLength: 30 },
      sekolah_id: { type: "string", maxLength: 30 },
      nama: { type: "string" },
      created_at: { type: "string", format: "date-time" },
      updated_at: { type: "string", format: "date-time" },
    },
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

export default Role;
