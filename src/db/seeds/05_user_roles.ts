import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("user_roles").del();

  // Inserts seed entries
  await knex("user_roles").insert([
    {
      role_id: "R001",
      user_id: "U001",
    },
    {
      role_id: "R002",
      user_id: "U002",
    },
    {
      role_id: "R003",
      user_id: "U003",
    },
  ]);
}
