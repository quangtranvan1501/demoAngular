import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 10, name: 'Súp pơ A'}, 
      {id: 11, name: 'Súp pơ AB'}, 
      {id: 12, name: 'Súp pơ ABC'}, 
      {id: 13, name: 'Súp pơ ABCD'}, 
      {id: 14, name: 'Súp pơ ABCDE'}, 
      {id: 15, name: 'Súp pơ ABCDEF'}, 
      {id: 16, name: 'Súp pơ ABCDEFG'}, 
      {id: 17, name: 'Súp pơ ABCDEFGH'}, 
      {id: 18, name: 'Súp pơ ABCDEFGHI'}, 
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
