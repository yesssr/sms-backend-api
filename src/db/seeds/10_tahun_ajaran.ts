import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("tahun_ajaran").del();

  // Inserts seed entries
  await knex("tahun_ajaran").insert([
    {
      id: "TA2023-2024S11",
      sekolah_id: "S001",
      nama: "2023/2024 Semester 1",
      types: "nonaktif",
      is_active: false,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "TA2023-2024S22",
      sekolah_id: "S001",
      nama: "2023/2024 Semester 2",
      types: "aktif",
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "TA2024-2025S13",
      sekolah_id: "S002",
      nama: "2024/2025 Semester 1",
      types: "pending",
      is_active: false,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "TA2023-2024S14",
      sekolah_id: "S003",
      nama: "2023/2024 Semester 1",
      types: "aktif",
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "TA2024-2025S15",
      sekolah_id: "S003",
      nama: "2024/2025 Semester 1",
      types: "pending",
      is_active: false,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
