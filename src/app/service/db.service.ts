import { Injectable } from '@angular/core';
import { employees } from '../data/employees';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const emp = employees;
    return {emp};
  }
}
