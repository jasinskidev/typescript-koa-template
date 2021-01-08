import "reflect-metadata";
import { createConnection } from 'typeorm';

class DatabaseClient {
  constructor(private connectionString?: string) {}

  async setupDatabase(): Promise<void> {
    try {
      await createConnection({
        type: 'postgres',
        url: this.connectionString,
      });
    } catch(err) {
      console.error(err);
    }
  }
}

export default DatabaseClient;
