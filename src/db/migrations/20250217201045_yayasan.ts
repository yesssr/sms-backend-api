import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("yayasan", (t) => {
    t.string("id", 36).primary();
    t.string("nama").notNullable();
    t.string("alamat").notNullable();
    t.string("no_telepon", 15).notNullable();
    t.string("email").notNullable().unique();
    t.string("website").nullable();
    t.string("logo").nullable();
    t.boolean("is_active").defaultTo(true);
    t.boolean("deleted").defaultTo(false);
    t.timestamps(true, true, false);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("yayasan");
}

