import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("matapelajaran").del();

  // Inserts seed entries
  await knex("matapelajaran").insert([
    {
      id: "MP001",
      sekolah_id: "S001",
      nama: "Matematika",
      types: "utama",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "MP002",
      sekolah_id: "S001",
      nama: "Bahasa Indonesia",
      types: "utama",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "MP003",
      sekolah_id: "S002",
      nama: "IPA",
      types: "utama",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "MP004",
      sekolah_id: "S002",
      nama: "Bahasa Inggris",
      types: "mulok",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "MP005",
      sekolah_id: "S003",
      nama: "Fisika",
      types: "utama",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "MP006",
      sekolah_id: "S003",
      nama: "Teknologi Informasi",
      types: "mulok",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
