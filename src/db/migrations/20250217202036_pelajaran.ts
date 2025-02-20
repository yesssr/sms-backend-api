import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
  .createTable('pelajaran', function (t) {
    t.string('matapelajaran_id');
    t.string('tingkat_id');
    t.string('tahun_id');
    t.primary(['matapelajaran_id', 'tingkat_id', 'tahun_id']);
    t.foreign('matapelajaran_id').references('matapelajaran.id');
    t.foreign('tingkat_id').references('tingkat.id');
    t.foreign('tahun_id').references('tahun_ajaran.id');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("pelajaran");
}

