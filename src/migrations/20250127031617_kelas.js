/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("kelas", t => {
    t.string("id", 30).primary();
    t.string("tingkat_id", 30);
    t.string("tahun_id", 30);
    t.string("name");
    t.boolean("id_deleted").defaultTo(false);
    t.timestamps(true, true, false);
    
    t.foreign("tingkat_id").references("tingkat.id");
    t.foreign("tahun_id").references("tahun_ajaran.id");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("kelas");
};
