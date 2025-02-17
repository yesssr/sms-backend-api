/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("wali", t => {
    t.string("id", 30).primary();
    t.string("sekolah_id", 30);
    t.string("name").notNullable();
    t.string("phone").notNullable();
    t.string("gender").notNullable();
    t.string("foto").notNullable();
    t.timestamps(true, true, false);

    t.foreign("sekolah_id")
     .references("id")
     .inTable("sekolah")
     .onDelete("CASCADE")
     .onUpdate("CASCADE");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("wali");
};
