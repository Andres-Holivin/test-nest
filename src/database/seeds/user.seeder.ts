import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from 'src/user/entities/user.entity';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    // factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

    const repository = dataSource.getRepository(User);
    await repository.insert({
      name: 'hello',
    });
  }
}
