import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tingkat").del();

  // Inserts seed entries
  await knex("tingkat").insert([
    {
      id: "T001",
      sekolah_id: "S001",
      nama: "Tingkat 1",
      level: "1",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "T002",
      sekolah_id: "S001",
      nama: "Tingkat 2",
      level: "2",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "T003",
      sekolah_id: "S002",
      nama: "Tingkat 7",
      level: "7",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "T004",
      sekolah_id: "S002",
      nama: "Tingkat 8",
      level: "8",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "T005",
      sekolah_id: "S003",
      nama: "Tingkat 10",
      level: "10",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "T006",
      sekolah_id: "S003",
      nama: "Tingkat 11",
      level: "11",
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
