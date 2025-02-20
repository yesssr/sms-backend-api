import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("alamat_sekolah").del();

  // Inserts seed entries
  await knex("alamat_sekolah").insert([
    {
      id: "ALM001",
      sekolah_id: "S001",
      province_id: "32",
      regency_id: "3201",
      district_id: "3201010",
      village_id: "3201010001",
      alamat: "Jl. Merdeka No. 1, Bandung",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "ALM002",
      sekolah_id: "S002",
      province_id: "31",
      regency_id: "3171",
      district_id: "3171010",
      village_id: "3171010001",
      alamat: "Jl. Medan Merdeka Selatan No. 2, Jakarta Pusat",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "ALM003",
      sekolah_id: "S003",
      province_id: "33",
      regency_id: "3374",
      district_id: "3374010",
      village_id: "3374010001",
      alamat: "Jl. Pemuda No. 10, Semarang",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
