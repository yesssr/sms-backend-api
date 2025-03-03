import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("tingkat", t => {
    t.string("id", 36).primary();
    t.string("sekolah_id", 30);
    t.string("nama").notNullable();
    t.string("level").nullable();
    t.boolean("deleted").defaultTo(false);
    t.timestamps(true, true, false);

    t.foreign("sekolah_id")
    .references("id")
    .inTable("sekolah")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("tingkat");
}

