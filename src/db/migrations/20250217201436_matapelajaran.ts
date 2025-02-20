import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("matapelajaran", t => {
    t.string("id", 30).primary();
    t.string("sekolah_id", 30);
    t.string("nama").notNullable();
    t.enum("types", ["utama", "mulok"]).nullable();
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
  return knex.schema.dropTable("matapelajaran");
}

