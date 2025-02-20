import Siswa from "../models/siswa";

export const siswaQuery = {
  getAllSiswa: async (sekolah_id: string, limit: number, offset: number) => {
    return Siswa.query()
      .select(
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
        "no_telepon",
        "types",
        "pindahan",
        "siswa.is_active",
        "siswa.created_at",
        "siswa.updated_at"
      )
      .where("sekolah_id", sekolah_id)
      .limit(limit)
      .offset(offset);
  },

  addSiswa: (data: Siswa) => {
    return Siswa.query()
      .insert(data)
      .returning("*");
  },

  updateSiswa: (id: string, data: Siswa) => {
    return Siswa.query()
      .where("id", id)
      .andWhere("deleted", false)
      .patch(data)
      .returning("*");
  },

  deleteSiswa: (id: string) => {
    return Siswa.query()
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
