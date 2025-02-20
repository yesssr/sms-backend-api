import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
  .createTable('romkul', function (t) {
    t.string('tahun_id');
    t.string('siswa_id');
    t.string('ekskul_id');
    t.primary(['tahun_id', 'siswa_id', 'ekskul_id']);
    t.foreign('tahun_id').references('tahun_ajaran.id');
    t.foreign('siswa_id').references('siswa.id');
    t.foreign('ekskul_id').references('ekskul.id');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("romkul");
}

