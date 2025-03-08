import Tingkat from "../models/tingkat";

export const tingkatQuery = {
  getAllTingkat: async (sekolah_id: string, limit: number, offset: number) => {
    return Tingkat.query()
      .select(
        "tingkat.id",
        "sekolah_id",
        "tingkat.nama",
        "level",
        "tingkat.created_at",
        "tingkat.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("tingkat.deleted", false)
      .andWhere("sekolah.deleted", false)
      .limit(limit)
      .offset(offset);
  },

  getTingkatById: async (sekolah_id: string, id: string) => {
    return Tingkat.query()
      .select(
        "tingkat.id",
        "sekolah_id",
        "tingkat.nama",
        "level",
        "tingkat.created_at",
        "tingkat.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("tingkat.deleted", false)
      .andWhere("sekolah.deleted", false)
      .andWhere("tingkat.id", id)
      .first();
  },

  addTingkat: (data: Tingkat) => {
    return Tingkat.query()
      .insert(data)
      .returning("*");
  },

  updateTingkat: (id: string, sekolah_id: string, data: Tingkat) => {
    return Tingkat.query()
      .where("id", id)
      .andWhere("sekolah_id", sekolah_id)
      .andWhere("deleted", false)
      .patch({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  },

  deleteTingkat: (id: string, sekolah_id: string) => {
    return Tingkat.query()
      .where("sekolah_id", sekolah_id)
      .patchAndFetchById(id, {
        deleted: true,
        updated_at: new Date().toISOString(),
      });
  },

  getTotalTingkat: (sekolah_id: string) => {
    return Tingkat.query()
      .count("id as total")
      .where("sekolah_id", sekolah_id)
      .andWhere("deleted", false);
  }
};
