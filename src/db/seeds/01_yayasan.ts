import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("yayasan").del();

  // Inserts seed entries
  await knex("yayasan").insert([
    {
      id: "Y001",
      nama: "Yayasan Pendidikan Sejahtera",
      alamat: "Jl. Merdeka No. 45, Jakarta",
      no_telepon: "021-5551234",
      email: "info@yayasansejahtera.com",
      website: "https://yayasansejahtera.com",
      logo: "sejahtera_logo.png",
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "Y002",
      nama: "Yayasan Harapan Bangsa",
      alamat: "Jl. Raya Bogor No. 89, Bogor",
      no_telepon: "0251-1234567",
      email: "contact@harapanbangsa.org",
      website: "https://harapanbangsa.org",
      logo: "harapanbangsa_logo.png",
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
