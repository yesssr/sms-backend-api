import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("alamat_sekolah", t => {
    t.string("id", 36).primary();
    t.string("sekolah_id", 30);
    t.string("province_id");
    t.string("regency_id");
    t.string("district_id");
    t.string("village_id");
    t.string("alamat").notNullable();
    t.timestamps(true, true, false);
    
    t.foreign("sekolah_id")
     .references("id").inTable("sekolah")
     .onDelete("CASCADE")
     .onUpdate("CASCADE");
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("alamat_sekolah");
}

