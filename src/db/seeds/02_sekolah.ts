import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("sekolah").del();

  // Inserts seed entries
  await knex("sekolah").insert([
    {
      id: "S001",
      yayasan_id: "Y001",
      nama: "SD Sejahtera",
      no_telepon: "021-5556789",
      email: "info@sdsejahtera.sch.id",
      website: "https://sdsejahtera.sch.id",
      logo: "sdsejahtera_logo.png",
      jenjang: "SD",
      is_active: true,
      is_negeri: false,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "S002",
      yayasan_id: "Y001",
      nama: "SMP Harapan Bangsa",
      no_telepon: "0251-9876543",
      email: "contact@smp-harapan.sch.id",
      website: "https://smp-harapan.sch.id",
      logo: "smp_harapan_logo.png",
      jenjang: "SMP",
      is_active: true,
      is_negeri: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "S003",
      yayasan_id: "Y002",
      nama: "SMA Cendekia",
      no_telepon: "031-1234567",
      email: "info@smacendekia.sch.id",
      website: "https://smacendekia.sch.id",
      logo: "sma_cendekia_logo.png",
      jenjang: "SMA",
      is_active: true,
      is_negeri: false,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
