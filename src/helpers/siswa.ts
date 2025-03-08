import Siswa from "../models/siswa";

export const siswaQuery = {
  getAllSiswa: async (sekolah_id: string, limit: number, offset: number) => {
    return Siswa.query()
      .select(
        "siswa.id",
        "sekolah_id",
        "nik",
        "nisn",
        "nis",
        "siswa.email",
        "nama_lengkap",
        "nama_panggilan",
        "gender",
        "tempat_lahir",
        "tanggal_lahir",
        "agama",
        "kewarga_negaraan",
        "bahasa",
        "berat_badan",
        "tinggi_badan",
        "golongan_darah",
        "penyakit_berat",
        "keterangan_penyakit",
        "foto",
        "anak_ke",
        "jumlah_saudara_kandung",
        "jumlah_saudara_tiri",
        "jumlah_saudara_angkat",
        "alamat_tinggal",
        "siswa.no_telepon",
        "types",
        "pindahan",
        "siswa.is_active",
        "siswa.created_at",
        "siswa.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("siswa.deleted", false)
      .andWhere("sekolah.deleted", false)
      .limit(limit)
      .offset(offset);
  },

  getSiswaById: (sekolah_id: string, id: string) => {
    return Siswa.query()
      .select(
        "siswa.id",
        "sekolah_id",
        "nik",
        "nisn",
        "nis",
        "siswa.email",
        "nama_lengkap",
        "nama_panggilan",
        "gender",
        "tempat_lahir",
        "tanggal_lahir",
        "agama",
        "kewarga_negaraan",
        "bahasa",
        "berat_badan",
        "tinggi_badan",
        "golongan_darah",
        "penyakit_berat",
        "keterangan_penyakit",
        "foto",
        "anak_ke",
        "jumlah_saudara_kandung",
        "jumlah_saudara_tiri",
        "jumlah_saudara_angkat",
        "alamat_tinggal",
        "siswa.no_telepon",
        "types",
        "pindahan",
        "siswa.is_active",
        "siswa.created_at",
        "siswa.updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("siswa.deleted", false)
      .andWhere("sekolah.deleted", false)
      .andWhere("siswa.id", id)
      .first();
  },

  addSiswa: (data: Siswa) => {
    return Siswa.query()
      .insert(data)
      .returning("*");
  },

  updateSiswa: (id: string, sekolah_id: string, data: Siswa) => {
    return Siswa.query()
      .where("id", id)
      .andWhere("sekolah_id", sekolah_id)
      .andWhere("deleted", false)
      .patch({
        ...data,
        updated_at: new Date().toISOString(),
      })
      .returning("*");
  },

  deleteSiswa: (id: string, sekolah_id: string) => {
    return Siswa.query()
      .where("sekolah_id", sekolah_id)
      .patchAndFetchById(id, {
        deleted: true,
        updated_at: new Date().toISOString(),
      });
  },

  getTotalSiswa: (sekolah_id: string) => {
    return Siswa.query()
      .count("id as total")
      .where("sekolah_id", sekolah_id)
      .andWhere("deleted", false);
  }
};
