/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
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
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("pelajaran");
};
