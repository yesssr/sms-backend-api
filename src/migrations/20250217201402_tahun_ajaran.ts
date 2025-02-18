import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("tahun_ajaran", t => {
    t.string("id", 30).primary();
    t.string("sekolah_id", 30);
    t.string("name");
    t.enum("types", ["pending", "aktif", "nonaktif"])
      .defaultTo("nonaktif");
    t.boolean("is_active").defaultTo(false);
    t.boolean("is_deleted").defaultTo(false);
    t.timestamps(true, true, false);

    t.foreign("sekolah_id")
    .references("id")
    .inTable("sekolah")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("tahun_ajaran");
}

