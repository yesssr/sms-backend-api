import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("roles", t => {
    t.string("id", 30).primary();
    t.string("name").notNullable();
    t.string("slug").notNullable();
    t.timestamps(true, true, false);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("roles");
}