import { Injectable } from '@angular/core';
import {HEROES} from "./mock-heroes";
import {Hero} from "./hero";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    return of(hero);
  }
}
