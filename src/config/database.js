const {
  DB_NAME,
  TEST_DB_NAME,
  DB_USER,
  DB_HOST,
  DB_PASS,
  NODE_ENV,
} = process.env;

module.exports = {
  dialect: 'postgres',
  host: DB_HOST,
  username: DB_USER,
  password: DB_PASS,
  database: NODE_ENV === 'test' ? TEST_DB_NAME : DB_NAME,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
