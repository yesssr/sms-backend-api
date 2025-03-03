import { AjvValidator, AnyQueryBuilder, Model, Modifiers, RelationMappings, Validator } from "objection";
import Sekolah from "./sekolah";
import Role from "./roles";
export class User extends Model {
  id?: string;
  sekolah_id?: string;
  roles?: Role;
  password?: string;
  static tableName = "users";
  static jsonSchema = {
    type: "object",
    required: [
      "id",
      "sekolah_id",
      "email",
      "no_telepon",
      "username",
      "password",
    ],
    properties: {
      id: { type: "string", maxLength: 30 },
      sekolah_id: { type: "string", maxLength: 30 },
      email: { type: "string", format: "email" },
      no_telepon: {
        type: "string",
        pattern: "^08[0-9]{8,13}$",
        description:
          "Indonesian phone number format (08xxxxxxxxxx, 10-15 digits)",
      },
      username: { type: "string", minLength: 3 },
      password: { type: "string", minLength: 6 },
      is_active: { type: "boolean", default: true },
      deleted: { type: "boolean", default: false },
      created_at: { type: "string", format: "date-time" },
      updated_at: { type: "string", format: "date-time" },
    },
  };

  static relationMappings: RelationMappings = {
    sekolah: {
      relation: Model.BelongsToOneRelation,
      modelClass: Sekolah,
      join: {
        from: `${this.tableName}.sekolah_id`,
        to: "sekolah.id",
      },
    },
    roles: {
      relation: Model.ManyToManyRelation,
      modelClass: Role,
      join: {
        from: "users.id",
        through: {
          from: "user_roles.user_id",
          to: "user_roles.role_id",
        },
        to: "roles.id",
      },
    },
  };

  static modifiers: Modifiers<AnyQueryBuilder> = {
    mod_get_roles(query) {
      query
        .withGraphFetched('roles')
        .modifyGraph('roles', builder => {
          builder.select(
            'roles.id',
            'roles.nama',
          );
        });
    }
  };

  static createValidator(): Validator {
    return new AjvValidator({
      onCreateAjv() {},
      options: {
        allErrors: true,
      }
    });
  }
}
