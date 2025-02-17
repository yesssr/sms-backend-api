/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("guru", t => {
    t.string("id", 30).primary();
    t.string("sekolah_id", 30);
    t.string("username").notNullable();
    t.string("email").notNullable();
    t.string("name").notNullable();
    t.string("password").notNullable();
    t.string("foto");
    t.timestamps(true, true, false);

    t.foreign("sekolah_id")
    .references("id")
    .inTable("sekolah")
    .onUpdate("CASCADE")
    .onDelete("CASCADE");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("guru");
};
