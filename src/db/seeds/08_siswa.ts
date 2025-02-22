import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("siswa").del();

  // Inserts seed entries
  await knex("siswa").insert([
    {
      id: "SS001",
      sekolah_id: "S001",
      nik: "3201010000010001",
      nisn: "1234567890",
      nis: "S001001",
      email: "budi@example.com",
      nama_lengkap: "Budi Santoso",
      nama_panggilan: "Budi",
      gender: "L",
      tempat_lahir: "Bandung",
      tanggal_lahir: "2012-05-12",
      agama: "Islam",
      kewarga_negaraan: "Indonesia",
      bahasa: "Indonesia",
      berat_badan: 30.5,
      tinggi_badan: 135.0,
      golongan_darah: "O",
      penyakit_berat: false,
      keterangan_penyakit: null,
      foto: "budi.jpg",
      anak_ke: 1,
      jumlah_saudara_kandung: 2,
      jumlah_saudara_tiri: 0,
      jumlah_saudara_angkat: 0,
      alamat_tinggal: "Jl. Ahmad Yani No. 45, Bandung",
      no_telepon: "081234567890",
      types: "baru",
      pindahan: false,
      is_active: false,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "SS002",
      sekolah_id: "S002",
      nik: "3201010000020002",
      nisn: "2345678901",
      nis: "S002002",
      email: "siti@example.com",
      nama_lengkap: "Siti Aminah",
      nama_panggilan: "Siti",
      gender: "P",
      tempat_lahir: "Jakarta",
      tanggal_lahir: "2010-08-20",
      agama: "Islam",
      kewarga_negaraan: "Indonesia",
      bahasa: "Indonesia, Inggris",
      berat_badan: 42.3,
      tinggi_badan: 150.2,
      golongan_darah: "A",
      penyakit_berat: true,
      keterangan_penyakit: "Asma",
      foto: "siti.jpg",
      anak_ke: 2,
      jumlah_saudara_kandung: 1,
      jumlah_saudara_tiri: 0,
      jumlah_saudara_angkat: 1,
      alamat_tinggal: "Jl. Sudirman No. 10, Jakarta",
      no_telepon: "081298765432",
      types: "aktif",
      pindahan: false,
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "SS003",
      sekolah_id: "S003",
      nik: "3201010000030003",
      nisn: "3456789012",
      nis: "S003003",
      email: "andi@example.com",
      nama_lengkap: "Andi Wijaya",
      nama_panggilan: "Andi",
      gender: "L",
      tempat_lahir: "Semarang",
      tanggal_lahir: "2008-11-05",
      agama: "Kristen",
      kewarga_negaraan: "Indonesia",
      bahasa: "Indonesia, Jawa",
      berat_badan: 55.0,
      tinggi_badan: 170.0,
      golongan_darah: "B",
      penyakit_berat: false,
      keterangan_penyakit: null,
      foto: "andi.jpg",
      anak_ke: 3,
      jumlah_saudara_kandung: 1,
      jumlah_saudara_tiri: 1,
      jumlah_saudara_angkat: 0,
      alamat_tinggal: "Jl. Pemuda No. 20, Semarang",
      no_telepon: "081356789012",
      types: "aktif",
      pindahan: true,
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
