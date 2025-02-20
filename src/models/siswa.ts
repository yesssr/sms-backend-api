import { Model } from "objection";
import Sekolah from "./sekolah";

class Siswa extends Model {
  total?: number;
  deleted?: boolean;
  updated_at?: string;
  static tableName = "siswa";
  static jsonSchema = {
    type: "object",
    required: [
      "id",
      "sekolah_id",
      "nik",
      "nisn",
      "nis",
      "email",
      "nama_lengkap",
      "nama_panggilan",
      "gender",
      "tempat_lahir",
      "tanggal_lahir",
      "agama",
      "kewarganegaraan",
      "anak_ke",
      "jumlah_saudara_kandung",
      "alamat_tinggal",
      "no_telepon"
    ],
    properties: {
      id: { type: "string" },
      sekolah_id: { type: "string" },
      nik: { type: "string", minLength: 16, maxLength: 16 },
      nisn: { type: "string", minLength: 10, maxLength: 10 },
      nis: { type: "string", minLength: 6 },
      email: { type: "string", format: "email" },
      nama_lengkap: { type: "string", minLength: 1 },
      nama_panggilan: { type: "string", minLength: 1 },
      gender: { type: "string", enum: ["L", "P"] },
      tempat_lahir: { type: "string", minLength: 1 },
      tanggal_lahir: { type: "string", format: "date" },
      agama: { type: "string", minLength: 1 },
      kewarganegaraan: { type: "string", minLength: 1 },
      bahasa: { type: "string", nullable: true },
      berat_badan: { type: "number", nullable: true },
      tinggi_badan: { type: "number", nullable: true },
      golongan_darah: { type: "string", enum: ["A", "B", "AB", "O"], nullable: true },
      penyakit_berat: { type: "boolean", default: false },
      keterangan_penyakit: { type: "string", nullable: true },
      foto: { type: "string", nullable: true },
      anak_ke: { type: "integer" },
      jumlah_saudara_kandung: { type: "integer" },
      jumlah_saudara_tiri: { type: "integer", nullable: true },
      jumlah_saudara_angkat: { type: "integer", nullable: true },
      alamat_tinggal: { type: "string", minLength: 1 },
      no_telepon: { type: "string", pattern: "^[0-9]{10,15}$" },
      types: { type: "string", enum: ["baru", "aktif"], default: "baru" },
      pindahan: { type: "boolean", default: false },
      is_active: { type: "boolean", default: false },
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

export default Siswa;
