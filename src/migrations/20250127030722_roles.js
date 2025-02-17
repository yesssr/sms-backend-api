/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("roles", t => {
    t.string("id", 30).primary();
    t.string("name").notNullable();
    t.string("slug").notNullable();
    t.timestamps(true, true, false);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("roles");
};
