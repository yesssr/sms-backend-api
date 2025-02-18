import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("siswa", t => {
    t.string("id", 30).primary();
    t.string("sekolah_id", 30);
    t.string("nis").notNullable();
    t.string("email").notNullable();
    t.string("name").notNullable();
    t.string("password").notNullable();
    t.string("foto");
    t.timestamps(true, true, false);

    t.foreign("sekolah_id")
     .references("id")
     .inTable("sekolah")
     .onUpdate("CASCADE")
     .onDelete("CASCADE");
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("siswa");
}

