import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("wali", (t) => {
    t.string("id", 36).primary();
    t.string("sekolah_id", 30);
    t.string("nik").notNullable().unique();
    t.string("nama_lengkap").notNullable();
    t.string("nama_panggilan").notNullable();
    t.enum("gender", ["L", "P"]).notNullable();
    t.string("tempat_lahir").notNullable();
    t.date("tanggal_lahir").notNullable();
    t.text("alamat_tinggal").notNullable();
    t.string("no_telepon", 15).notNullable();
    t.string("email").notNullable().unique();

    t.string("pendidikan_terakhir");
    t.string("pekerjaan");
    t.string("hubungan");

    t.string("nama_ibu");
    t.string("pendidikan_terakhir_ibu");
    t.string("pekerjaan_ibu");

    t.string("nama_bapak");
    t.string("pendidikan_terakhir_bapak");
    t.string("pekerjaan_bapak");

    t.boolean("deleted").defaultTo(false);
    t.timestamps(true, true);

    t.foreign("sekolah_id")
      .references("id")
      .inTable("sekolah")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("wali");
}
