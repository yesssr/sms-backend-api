/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('rombel', function (t) {
      t.string('kelas_id');
      t.string('siswa_id');
      t.primary(['kelas_id', 'siswa_id']);
      t.foreign('kelas_id').references('kelas.id');
      t.foreign('siswa_id').references('siswa.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("rombel")
};
