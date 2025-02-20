import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("roles").del();

  // Inserts seed entries
  await knex("roles").insert([
    {
      id: "R001",
      sekolah_id: "S001",
      nama: "Admin",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "R002",
      sekolah_id: "S001",
      nama: "Guru",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "R003",
      sekolah_id: "S002",
      nama: "Siswa",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "R004",
      sekolah_id: "S002",
      nama: "Kepala Sekolah",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
