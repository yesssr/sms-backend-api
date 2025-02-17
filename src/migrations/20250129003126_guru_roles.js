/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable('guru_roles', function (t) {
      t.string('role_id');
      t.string('guru_id');
      t.primary(['role_id', 'guru_id']);
      t.foreign('role_id').references('roles.id');
      t.foreign('guru_id').references('guru.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("guru_roles")
};
