import { Knex } from "knex";
import { hashPass } from "../../utils/utils";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  const hashedPass = hashPass("000000");

  // Inserts seed entries
  await knex("users").insert([
    {
      id: "U001",
      sekolah_id: "S001",
      email: "admin@sma1.ac.id",
      no_telepon: "081234567890",
      username: "admin_sma1",
      password: hashedPass,
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "U002",
      sekolah_id: "S001",
      email: "guru@sma1.ac.id",
      no_telepon: "081234567891",
      username: "guru_sma1",
      password: hashedPass,
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: "U003",
      sekolah_id: "S002",
      email: "kepsek@smp1.ac.id",
      no_telepon: "081234567892",
      username: "kepsek_smp1",
      password: hashedPass,
      is_active: true,
      deleted: false,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ]);
}
