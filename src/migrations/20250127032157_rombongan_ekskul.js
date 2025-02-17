/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
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
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("romkul")
};
