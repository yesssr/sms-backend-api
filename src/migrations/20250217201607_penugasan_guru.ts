import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('penugasan_guru', function (t) {
      t.string('guru_id');
      t.string('matapelajaran_id');
      t.string('kelas_id');
      t.primary(['guru_id', 'matapelajaran_id', 'kelas_id']);
      t.foreign('guru_id').references('guru.id');
      t.foreign('matapelajaran_id').references('matapelajaran.id');
      t.foreign('kelas_id').references('kelas.id');
    });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("penugasan_guru");
}

