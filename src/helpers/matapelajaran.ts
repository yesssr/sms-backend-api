import Matapelajaran from "../models/matapelajaran";

export const matapelajaranQuery = {
  getAllMatapelajaran: async (sekolah_id: string, limit: number, offset: number) => {
    return Matapelajaran.query()
      .select(
        "matapelajaran.id",
        "sekolah_id",
        "matapelajaran.nama",
        "types",
        "matapelajaran.created_at",
        "matapelajaran.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("matapelajaran.deleted", false)
      .andWhere("sekolah.deleted", false)
      .limit(limit)
      .offset(offset);
  },

  getMatapelajaranById: async (sekolah_id: string, id: string) => {
    return Matapelajaran.query()
      .select(
        "matapelajaran.id",
        "sekolah_id",
        "matapelajaran.nama",
        "types",
        "matapelajaran.created_at",
        "matapelajaran.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("matapelajaran.deleted", false)
      .andWhere("sekolah.deleted", false)
      .andWhere("matapelajaran.id", id)
      .first();
  },

  addMatapelajaran: (data: Matapelajaran) => {
    return Matapelajaran.query()
      .insert(data)
      .returning("*");
  },

  updateMatapelajaran: (id: string, sekolah_id: string, data: Matapelajaran) => {
    return Matapelajaran.query()
      .where("id", id)
      .andWhere("sekolah_id", sekolah_id)
      .andWhere("deleted", false)
      .patch({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  },

  deleteMatapelajaran: (id: string, sekolah_id: string) => {
    return Matapelajaran.query()
      .where("sekolah_id", sekolah_id)
      .patchAndFetchById(id, {
        deleted: true,
        updated_at: new Date().toISOString(),
      });
  },

  getTotalMatapelajaran: (sekolah_id: string) => {
    return Matapelajaran.query()
      .count("id as total")
      .where("sekolah_id", sekolah_id)
      .andWhere("deleted", false);
  }
};
