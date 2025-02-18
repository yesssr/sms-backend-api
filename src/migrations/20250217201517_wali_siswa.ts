import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
  .createTable('wali_siswa', function (t) {
    t.string('wali_id');
    t.string('siswa_id');
    t.primary(['wali_id', 'siswa_id']);
    t.foreign('wali_id').references('wali.id');
    t.foreign('siswa_id').references('siswa.id');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("wali_siswa")
}

