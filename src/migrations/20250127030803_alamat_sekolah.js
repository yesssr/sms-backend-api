/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("alamat_sekolah", t => {
    t.string("id", 30).primary();
    t.string("sekolah_id", 30);
    t.string("province_id");
    t.string("regency_id");
    t.string("district_id");
    t.string("village_id");
    t.string("detail").nullable();
    t.timestamps(true, true, false);
    
    t.foreign("sekolah_id")
     .references("id").inTable("sekolah")
     .onDelete("CASCADE")
     .onUpdate("CASCADE");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("alamat_sekolah");
};
