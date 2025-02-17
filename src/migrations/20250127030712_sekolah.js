/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("sekolah", t => {
    t.string("id", 30).primary();
    t.string("yayasan_id", 30);
    t.string("name").nullable();
    t.timestamps(true, true, false);

    t.foreign("yayasan_id")
     .references("yayasan.id")
     .onUpdate("CASCADE")
     .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("sekolah");
};
