import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("kelas", t => {
    t.string("id", 30).primary();
    t.string("tingkat_id", 30);
    t.string("tahun_id", 30);
    t.string("nama");
    t.boolean("deleted").defaultTo(false);
    t.timestamps(true, true, false);
    
    t.foreign("tingkat_id").references("tingkat.id");
    t.foreign("tahun_id").references("tahun_ajaran.id");
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("kelas");
}

