export default () => ({
    port: parseInt(process.env.PGPORT, 10) || 3000,
    database: {
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        port: parseInt(process.env.PGPORT, 10) || 5432
    }
  });