import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", t => {
    t.string("id", 30).primary();
    t.string("sekolah_id", 30)
      .notNullable()
      .references("id")
      .inTable("sekolah")
      .onDelete("CASCADE");
    t.string("email").notNullable().unique();
    t.string("no_telepon", 15).notNullable();
    t.string("username").notNullable().unique();
    t.string("password").notNullable();
    t.boolean("is_active").defaultTo(true);
    t.boolean("deleted").defaultTo(false);
    t.timestamps(true, true, false);
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}

