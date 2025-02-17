/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
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
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("guru_ekskul");
};
