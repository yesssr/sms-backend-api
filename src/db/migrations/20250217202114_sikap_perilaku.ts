import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("sikap_perilaku", t => {
    t.string("id", 30).primary();
    t.string("tahun_id", 30);
    t.string("nama").notNullable();
    t.timestamps(true, true, false);

    t.foreign("tahun_id")
     .references("tahun_ajaran.id");
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("sikap_perilaku");
}

