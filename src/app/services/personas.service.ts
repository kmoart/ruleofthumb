import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { PersonaModel } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private url = 'https://ruleofthumb-23adb-default-rtdb.firebaseio.com';

  constructor( private http: HttpClient ) { }

  getPersonas(){
    return this.http.get(`${ this.url }/personas.json`)
          .pipe(
            map( (resp:any) => this.crearArreglo( resp ) )
          );
  }

  private crearArreglo( personasObject:any ){

    const personas: PersonaModel[] = [];

    if( personasObject === null){  return []; }

    Object.keys( personasObject ).forEach( key => {
       
      const persona: PersonaModel = personasObject[ key ];
      persona.id = key;

      personas.push( persona );
    });

    
    return personas;

  }

  getPersona( id: string ){
      return this.http.get(`${ this.url }/personas/${ id }.json`);
  }

  votarPersona( persona: PersonaModel){
      console.log(persona.id);
    return this.http.put(`${ this.url }/personas/${ persona.id }.json`, persona)
  }
}
