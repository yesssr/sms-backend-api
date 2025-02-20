import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('rombel', function (t) {
      t.string('kelas_id');
      t.string('siswa_id');
      t.enum("status", ['aktif', 'naik', 'tinggal']);
      t.primary(['kelas_id', 'siswa_id']);
      t.foreign('kelas_id').references('kelas.id');
      t.foreign('siswa_id').references('siswa.id');
    });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("rombel")
}

