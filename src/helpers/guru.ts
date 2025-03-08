import Guru from "../models/guru";

export const guruQuery = {
  getAllGuru: async (sekolah_id: string, limit: number, offset: number) => {
    return Guru.query()
      .select(
        "guru.id",
        "sekolah_id",
        "nik",
        "nama_lengkap",
        "gender",
        "guru.no_telepon",
        "guru.email",
        "alamat_tinggal",
        "guru.is_active",
        "guru.created_at",
        "guru.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("guru.deleted", false)
      .andWhere("sekolah.deleted", false)
      .limit(limit)
      .offset(offset);
  },

  getGuruById: async (sekolah_id: string, id: string) => {
    return Guru.query()
      .select(
        "guru.id",
        "sekolah_id",
        "nik",
        "nama_lengkap",
        "gender",
        "guru.no_telepon",
        "guru.email",
        "alamat_tinggal",
        "guru.is_active",
        "guru.created_at",
        "guru.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("guru.deleted", false)
      .andWhere("sekolah.deleted", false)
      .andWhere("guru.id", id)
      .first();
  },

  addGuru: (data: Guru) => {
    return Guru.query()
      .insert(data)
      .returning("*");
  },

  updateGuru: (id: string, sekolah_id: string, data: Guru) => {
    return Guru.query()
      .where("id", id)
      .andWhere("sekolah_id", sekolah_id)
      .andWhere("deleted", false)
      .patch({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  },

  deleteGuru: (id: string, sekolah_id: string) => {
    return Guru.query()
      .where("sekolah_id", sekolah_id)
      .patchAndFetchById(id, {
        deleted: true,
        updated_at: new Date().toISOString(),
      });
  },

  getTotalGuru: (sekolah_id: string) => {
    return Guru.query()
      .count("id as total")
      .where("sekolah_id", sekolah_id)
      .andWhere("deleted", false);
  }
};
