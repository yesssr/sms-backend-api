import { AjvValidator, Model, Validator } from "objection";
import Sekolah from "./sekolah";

class Guru extends Model {
  total?: number;
  deleted?: boolean;
  updated_at?: string;
  static tableName = "guru";
  static jsonSchema = {
    type: "object",
    required: [
      "id",
      "nik",
      "nama_lengkap",
      "gender",
      "no_telepon",
      "email",
      "alamat_tinggal",
    ],
    properties: {
      id: { type: "string", maxLength: 30 },
      sekolah_id: { type: "string", maxLength: 30 },
      nik: { type: "string", maxLength: 16 },
      nama_lengkap: { type: "string", maxLength: 255 },
      gender: { type: "string", enum: ["L", "P"] },
      no_telepon: { type: "string", maxLength: 15 },
      email: { type: "string", format: "email", maxLength: 255 },
      alamat_tinggal: { type: "string", maxLength: 255 },
      is_active: { type: "boolean", default: true },
      deleted: { type: "boolean", default: false },
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
        to: "sekolah.id",
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

export default Guru;
