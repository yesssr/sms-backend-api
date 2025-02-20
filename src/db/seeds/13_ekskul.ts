import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("ekskul").del();

  // Inserts seed entries
  await knex("ekskul").insert([
    {
      id: "E001",
      sekolah_id: "S001",
      nama: "Pramuka",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "E002",
      sekolah_id: "S001",
      nama: "Tari Tradisional",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "E003",
      sekolah_id: "S002",
      nama: "Basket",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "E004",
      sekolah_id: "S002",
      nama: "Paduan Suara",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "E005",
      sekolah_id: "S003",
      nama: "Robotik",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "E006",
      sekolah_id: "S003",
      nama: "Jurnalistik",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
