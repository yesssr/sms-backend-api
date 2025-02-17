/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
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
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("penugasan_guru");
};
