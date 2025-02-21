import Ekskul from "../models/ekskul";

export const ekskulQuery = {
  getAllEkskul: async (sekolah_id: string, limit: number, offset: number) => {
    return Ekskul.query()
      .select(
        "ekskul.id", 
        "sekolah_id",
        "ekskul.nama",  
        "ekskul.created_at", 
        "ekskul.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("ekskul.deleted", false)
      .andWhere("sekolah.deleted", false)
      .limit(limit)
      .offset(offset);
  },

  addEkskul: (data: Ekskul) => {
    return Ekskul.query()
      .insert(data)
      .returning("*");
  },

  updateEkskul: (id: string, sekolah_id: string, data: Ekskul) => {
    return Ekskul.query()
      .where("id", id)
      .andWhere("sekolah_id", sekolah_id)
      .andWhere("deleted", false)
      .patch({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  },

  deleteEkskul: (id: string, sekolah_id: string) => {
    return Ekskul.query()
      .where("sekolah_id", sekolah_id)
      .patchAndFetchById(id, {
        deleted: true,
        updated_at: new Date().toISOString(),
      });
  },

  getTotalEkskul: (sekolah_id: string) => {
    return Ekskul.query()
      .count("id as total")
      .where("sekolah_id", sekolah_id)
      .andWhere("deleted", false);
  }
};
