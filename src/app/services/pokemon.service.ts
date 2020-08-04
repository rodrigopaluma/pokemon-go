import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(protected injector: Injector,
              private http: HttpClient) { }

  getPokemons(): Observable<any> {
    return this.http.get<any>(`https://api.pokemontcg.io/v1/cards?pageSize=1000`);
  }

  getPokemon(id): Observable<any> {
    return this.http.get<any>(`https://api.pokemontcg.io/v1/cards/${id}`);
  }
}

