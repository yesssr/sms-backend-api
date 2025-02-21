import TahunAjaran from "../models/tahun_ajaran";

export const tahunAjaranQuery = {
  getAllTahunAjaran: async (sekolah_id: string, limit: number, offset: number) => {
    return TahunAjaran.query()
      .select(
        "tahun_ajaran.id",
        "sekolah_id",
        "tahun_ajaran.nama",
        "types",
        "tahun_ajaran.is_active",
        "tahun_ajaran.created_at",
        "tahun_ajaran.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("tahun_ajaran.deleted", false)
      .andWhere("sekolah.deleted", false)
      .limit(limit)
      .offset(offset);
  },

  addTahunAjaran: (data: TahunAjaran) => {
    return TahunAjaran.query()
      .insert(data)
      .returning("*");
  },

  updateTahunAjaran: (id: string, sekolah_id: string, data: TahunAjaran) => {
    return TahunAjaran.query()
      .where("id", id)
      .andWhere("sekolah_id", sekolah_id)
      .andWhere("deleted", false)
      .patch({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  },

  deleteTahunAjaran: (id: string, sekolah_id: string) => {
    return TahunAjaran.query()
      .where("sekolah_id", sekolah_id)
      .patchAndFetchById(id, {
        deleted: true,
        updated_at: new Date().toISOString(),
      });
  },

  getTotalTahunAjaran: (sekolah_id: string) => {
    return TahunAjaran.query()
      .count("id as total")
      .where("sekolah_id", sekolah_id)
      .andWhere("deleted", false);
  }
};
