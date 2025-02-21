import { Model } from "objection";
import Sekolah from "./sekolah";

class Matapelajaran extends Model {
  total?: number;
  deleted?: boolean;
  updated_at?: string;
  static tableName = "matapelajaran";
  static jsonSchema = {
    type: "object",
    required: ["id", "sekolah_id", "nama"],
    properties: {
      id: { type: "string", maxLength: 30 },
      sekolah_id: { type: "string", maxLength: 30 },
      nama: { type: "string", maxLength: 255 },
      types: { type: "string", enum: ["utama", "mulok"], nullable: true },
      deleted: { type: "boolean", default: false },
      created_at: { type: "string", format: "date-time" },
      updated_at: { type: "string", format: "date-time" }
    }
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

export default Matapelajaran;