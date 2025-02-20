import { Model } from "objection";

class Yayasan extends Model {
  static tableName = "yayasan";
  static jsonSchema = {
    type: "object",
    required: ["id", "nama", "email", "no_telepon", "alamat"],
    properties: {
      id: { type: "string", maxLength: 30 },
      nama: { type: "string", minLength: 1 },
      email: { type: "string", format: "email" },
      no_telepon: { type: "string", maxLength: 15, pattern: "^08[0-9]{8,13}$" },
      alamat: { type: "string", minLength: 1 },
      website: { type: ["string", "null"], format: "uri" },
      logo: { type: ["string", "null"], format: "uri" },
      is_active: { type: "boolean", default: true },
      deleted: { type: "boolean", default: false },
      created_at: { type: "string", format: "date-time" },
      updated_at: { type: "string", format: "date-time" },
    },
  };
}

export default Yayasan;
