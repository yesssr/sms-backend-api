import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("sekolah", t => {
    t.string("id", 30).primary();
    t.string("yayasan_id", 30)
      .notNullable()
      .references("id")
      .inTable("yayasan")
      .onDelete("CASCADE");
    t.string("nama").notNullable();
    t.string("no_telepon", 15).notNullable();
    t.string("email").notNullable();
    t.string("website").nullable();
    t.string("logo").nullable();
    t.enum("jenjang", ["SD", "SMP", "SMA", "SMK"]).notNullable();
    t.boolean("is_active").defaultTo(true);
    t.boolean("is_negeri").defaultTo(false);
    t.boolean("deleted").defaultTo(false);
    t.timestamps(true, true, false);
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("sekolah");
}

