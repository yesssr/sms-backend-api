import { Model } from "objection";
import Sekolah from "./sekolah";

class Tingkat extends Model {
  total?: number;
  deleted?: boolean;
  updated_at?: string;
  static tableName = "tingkat";
  static jsonSchema = {
    type: "object",
    required: ["nama"],
    properties: {
      id: { type: "string" },
      sekolah_id: { type: "string" },
      nama: { type: "string" },
    },
  };

  static relationMappings = {
    sekolah: {
      relation: Model.BelongsToOneRelation,
      modelClass: Sekolah,
      join: {
        from: `${this.tableName}.sekolah_id`,
        to: "sekolah.id",
      },
    },
  };
}

export default Tingkat;
