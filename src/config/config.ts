import 'dotenv/config';
import * as fs from 'fs';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ENV = process.env.ENVIRONMENT;
const RDS_CA_BUNDLE = './src/database/rds-ca-bundle.pem';

const ssl = ENV !== 'local' &&
  ENV !== 'test' && {
    ca: fs.readFileSync(RDS_CA_BUNDLE).toString(),
  };

console.log({ ssl });

const DATABASECONFIG: TypeOrmModuleOptions = {
  host: process.env['DB_HOSTNAME'],
  port: Number(process.env['DB_PORT']),
  type: process.env['DB_TYPE'] as any,
  username: process.env['DB_USERNAME'],
  password: process.env['DB_PASSWORD'],
  database: process.env['DB'],
  migrationsRun: Boolean(process.env['DB_MIGRATION_RUN']),
  name: process.env['DB_NAME'],
  autoLoadEntities: Boolean(process.env['DB_AUTO_LOAD_ENTITIES']),
  synchronize: false,
  logging: true,
  migrations: ['dist/migrations/*{.ts,.js}'],
  migrationsTableName: process.env['DB_HOSTNAME'],
  // ssl: ssl,
  extra: {
    max: 20,
    query_timeout: 20000,
    statement_timeout: 222222,
    idle_in_transaction_session_timeout: 22222,
  },
};
const SWAGGER_CONFIG = {
  title: process.env['SWAGGER_TITLE'],
  description: process.env['SWAGGER_DESCRIPTION'],
  version: process.env['SWAGGER_VERSION'],
  tag: process.env['SWAGGER_TAG'],
};

export { DATABASECONFIG, SWAGGER_CONFIG };
