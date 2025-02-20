import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("wali_siswa").del();

  // Inserts seed entries
  await knex("wali_siswa").insert([
    {
      wali_id: "W001",
      siswa_id: "SS001",
    },
    {
      wali_id: "W002",
      siswa_id: "SS002",
    },
    {
      wali_id: "W003",
      siswa_id: "SS003",
    },
  ]);
}
