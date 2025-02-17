/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('wali_siswa', function (t) {
      t.string('wali_id');
      t.string('siswa_id');
      t.primary(['wali_id', 'siswa_id']);
      t.foreign('wali_id').references('wali.id');
      t.foreign('siswa_id').references('siswa.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("wali_siswa")
};
