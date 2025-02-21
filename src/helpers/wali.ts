import Wali from "../models/wali";

export const waliQuery = {
  getAllWali: async (sekolah_id: string, limit: number, offset: number) => {
    return Wali.query()
      .select(
        "wali.id",
        "sekolah_id",
        "nik",
        "nama_lengkap",
        "nama_panggilan",
        "gender",
        "tempat_lahir",
        "tanggal_lahir",
        "alamat_tinggal",
        "wali.no_telepon",
        "wali.email",
        "pendidikan_terakhir",
        "pekerjaan",
        "hubungan",
        "nama_ibu",
        "pendidikan_terakhir_ibu",
        "pekerjaan_ibu",
        "nama_bapak",
        "pendidikan_terakhir_bapak",
        "pekerjaan_bapak",
        "wali.created_at",
        "wali.updated_at"    
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("wali.deleted", false)
      .andWhere("sekolah.deleted", false)
      .limit(limit)
      .offset(offset);
  },

  addWali: (data: Wali) => {
    return Wali.query()
      .insert(data)
      .returning("*");
  },

  updateWali: (id: string, sekolah_id: string, data: Wali) => {
    return Wali.query()
      .where("id", id)
      .andWhere("sekolah_id", sekolah_id)
      .andWhere("deleted", false)
      .patch({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  },

  deleteWali: (id: string, sekolah_id: string) => {
    return Wali.query()
      .where("sekolah_id", sekolah_id)
      .patchAndFetchById(id, {
        deleted: true,
        updated_at: new Date().toISOString(),
      });
  },

  getTotalWali: (sekolah_id: string) => {
    return Wali.query()
      .count("id as total")
      .where("sekolah_id", sekolah_id)
      .andWhere("deleted", false);
  }
};
