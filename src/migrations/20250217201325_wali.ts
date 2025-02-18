import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("wali", t => {
    t.string("id", 30).primary();
    t.string("sekolah_id", 30);
    t.string("name").notNullable();
    t.string("phone").notNullable();
    t.string("gender").notNullable();
    t.string("foto").notNullable();
    t.timestamps(true, true, false);

    t.foreign("sekolah_id")
     .references("id")
     .inTable("sekolah")
     .onDelete("CASCADE")
     .onUpdate("CASCADE");
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("wali");
}

