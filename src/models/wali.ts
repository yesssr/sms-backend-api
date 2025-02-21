import { Model } from "objection";
import Sekolah from "./sekolah";

class Wali extends Model {
  total?: number;
  deleted?: boolean;
  updated_at?: string;
  static tableName = "wali";
  static jsonSchema = {
    type: "object",
    required: [
      "id",
      "sekolah_id",
      "nik",
      "nama_lengkap",
      "nama_panggilan",
      "gender",
      "tempat_lahir",
      "tanggal_lahir",
      "alamat_tinggal",
      "no_telepon",
      "email",
    ],
    properties: {
      id: { type: "string", maxLength: 30 },
      sekolah_id: { type: "string", maxLength: 30 },

      nik: { type: "string", maxLength: 20 },
      nama_lengkap: { type: "string", maxLength: 255 },
      nama_panggilan: { type: "string", maxLength: 100 },
      gender: { type: "string", enum: ["L", "P"] },
      tempat_lahir: { type: "string", maxLength: 100 },
      tanggal_lahir: { type: "string", format: "date" },
      alamat_tinggal: { type: "string" },

      no_telepon: { type: "string", maxLength: 15 },
      email: { type: "string", format: "email" },

      pendidikan_terakhir: { type: ["string", "null"], maxLength: 100 },
      pekerjaan: { type: ["string", "null"], maxLength: 100 },
      hubungan: { type: ["string", "null"], maxLength: 100 },

      nama_ibu: { type: ["string", "null"], maxLength: 255 },
      pendidikan_terakhir_ibu: { type: ["string", "null"], maxLength: 100 },
      pekerjaan_ibu: { type: ["string", "null"], maxLength: 100 },

      nama_bapak: { type: ["string", "null"], maxLength: 255 },
      pendidikan_terakhir_bapak: { type: ["string", "null"], maxLength: 100 },
      pekerjaan_bapak: { type: ["string", "null"], maxLength: 100 },

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
}

export default Wali;
