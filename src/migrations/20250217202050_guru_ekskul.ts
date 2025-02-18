import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('guru_ekskul', function (t) {
      t.string('guru_id');
      t.string('ekskul_id');
      t.string('tahun_id');
      t.primary(['guru_id', 'ekskul_id', 'tahun_id']);
      t.foreign('guru_id').references('guru.id');
      t.foreign('ekskul_id').references('ekskul.id');
      t.foreign('tahun_id').references('tahun_ajaran.id');
    });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("guru_ekskul");
}

