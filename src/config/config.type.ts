interface DatabaseConfig {
  host: string;
  port: string;
  type: string;
  username: string;
  password: string;
  database: string;
  migrationsRun: boolean;
  name: string;
  autoLoadEntities: boolean;
  synchronise: boolean;
  migrations: string[];
  migrationTableName: string;
  ssl: boolean;
  extras: any;
}

export { DatabaseConfig };
