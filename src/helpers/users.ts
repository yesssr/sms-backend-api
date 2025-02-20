import { User } from "../models/user";

export const usersQuery = {
  getAllUsers: (sekolah_id: string, limit: number, offset: number) => {
    return User.query()
      .select(
        "users.id",
        "users.sekolah_id",
        "sekolah.nama",
        "email",
        "users.no_telepon",
        "username",
        "users.is_active",
        "created_at",
        "updated_at"
      )
      .joinRelated("sekolah")
      .where("sekolah_id", sekolah_id)
      .andWhere("users.deleted", false)
      .andWhere("sekolah.deleted", false)
      .limit(limit)
      .offset(offset);
  },

  getByCredentials: async (identifier: string) => {
    let query = User.query()
      .select(
        "users.id",
        "sekolah_id",
        "sekolah.nama",
        "users.email",
        "users.no_telepon",
        "username",
        "password",
        "users.is_active",
        "users.created_at",
        "users.updated_at"
      )
      .joinRelated("sekolah")
      .where("users.deleted", false)
      .andWhere("sekolah.deleted", false)
      .first();

    if (identifier.includes("@")) {
      query.andWhere("users.email", identifier);
    } else {
      query.andWhere("users.username", identifier);
    }
    return await query;
  },
};
