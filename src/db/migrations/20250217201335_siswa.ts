import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("siswa", t => {
    t.string("id", 36).primary();
    t.string("sekolah_id", 30);
    t.string("nik", 20).notNullable();
    t.string("nisn", 15).notNullable();
    t.string("nis").notNullable();
    t.string("email").notNullable();
    t.string("nama_lengkap").notNullable();
    t.string("nama_panggilan").notNullable();
    t.enum("gender", ['L', 'P']).notNullable();
    t.string("tempat_lahir").notNullable();
    t.date("tanggal_lahir").notNullable();
    t.string("agama").notNullable();
    t.string("kewarga_negaraan").notNullable();
    t.string("bahasa").nullable();
    t.float("berat_badan").nullable();
    t.float("tinggi_badan").nullable();
    t.string("golongan_darah", 2).nullable();
    t.boolean("penyakit_berat").defaultTo(false);
    t.string("keterangan_penyakit").nullable();
    t.string("foto").nullable();
    t.integer("anak_ke").notNullable();
    t.integer("jumlah_saudara_kandung").notNullable();
    t.integer("jumlah_saudara_tiri").nullable();
    t.integer("jumlah_saudara_angkat").nullable();
    t.string("alamat_tinggal").notNullable();
    t.string("no_telepon", 15).notNullable();
    t.enum("types", ['baru', 'aktif']).defaultTo('baru');
    t.boolean("pindahan").defaultTo(false);
    t.boolean("is_active").defaultTo(false);
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
  return knex.schema.dropTable("siswa");
}

