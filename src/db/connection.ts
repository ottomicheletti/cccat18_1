import pgp from "pg-promise";

const URL = process.env.DATABASE_URL || "postgres://postgres:123456@localhost:5432/app";

export default pgp()(URL);