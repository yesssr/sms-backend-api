import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("guru", t => {
    t.string("id", 36).primary();
    t.string("sekolah_id", 30);
    t.string("nik", 16).notNullable();
    t.string("nama_lengkap", 255).notNullable();
    t.enum("gender", ["L", "P"]).notNullable();
    t.string("no_telepon", 15).notNullable();
    t.string("email", 255).notNullable().unique();
    t.string("alamat_tinggal", 255).notNullable();
    t.boolean("is_active").defaultTo(true);
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
  return knex.schema.dropTable("guru");
}

