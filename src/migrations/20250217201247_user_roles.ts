import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('user_roles', function (t) {
      t.string('role_id');
      t.string('user_id');
      t.primary(['role_id', 'user_id']);
      t.foreign('role_id').references('roles.id');
      t.foreign('user_id').references('users.id');
    });
}


export async function down(knex: Knex): Promise<void> {
}

