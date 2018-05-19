import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const products = [
      { id: 1, name: 'lorem', description: 'lorem ipsum' },
      { id: 2, name: 'valami', description: 'valami mas' },
      { id: 3, name: 'test', description: 'lorem lorem lorem' }
    ];

    return {products};
  }

}
