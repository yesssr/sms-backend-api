/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("sikap_perilaku", t => {
    t.string("id", 30).primary();
    t.string("tahun_id", 30);
    t.string("name").notNullable();
    t.timestamps(true, true, false);

    t.foreign("tahun_id")
     .references("tahun_ajaran.id");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("sikap_perilaku");
};
