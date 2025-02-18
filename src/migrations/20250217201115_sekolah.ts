import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("sekolah", t => {
    t.string("id", 30).primary();
    t.string("yayasan_id", 30);
    t.string("name").nullable();
    t.timestamps(true, true, false);

    t.foreign("yayasan_id")
     .references("yayasan.id")
     .onUpdate("CASCADE")
     .onDelete("CASCADE");
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("sekolah");
}

