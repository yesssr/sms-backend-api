import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("guru").del();

  // Inserts seed entries
  await knex("guru").insert([
    {
      id: "G001",
      sekolah_id: "S001",
      nik: "3201010101010001",
      nama_lengkap: "Budi Santoso",
      gender: "L",
      no_telepon: "081234567890",
      email: "budi.santoso@sdsejahtera.sch.id",
      alamat_tinggal: "Jl. Merdeka No. 10, Jakarta",
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "G002",
      sekolah_id: "S002",
      nik: "3201010101010002",
      nama_lengkap: "Siti Aisyah",
      gender: "P",
      no_telepon: "081298765432",
      email: "siti.aisyah@smp-harapan.sch.id",
      alamat_tinggal: "Jl. Sudirman No. 5, Bogor",
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "G003",
      sekolah_id: "S003",
      nik: "3201010101010003",
      nama_lengkap: "Ahmad Fauzi",
      gender: "L",
      no_telepon: "081377788899",
      email: "ahmad.fauzi@smacendekia.sch.id",
      alamat_tinggal: "Jl. Diponegoro No. 20, Surabaya",
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "G004",
      sekolah_id: "S001",
      nik: "3201010101010004",
      nama_lengkap: "Dewi Kartini",
      gender: "P",
      no_telepon: "081312345678",
      email: "dewi.kartini@sdsejahtera.sch.id",
      alamat_tinggal: "Jl. Gatot Subroto No. 8, Jakarta",
      is_active: false,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
