import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaModel } from '../../models/persona.model';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-vistacuadricula',
  templateUrl: './vistacuadricula.component.html',
  styleUrls: ['./vistacuadricula.component.css']
})
export class VistacuadriculaComponent implements OnInit {

  personas: PersonaModel[] = [];

  persona: PersonaModel = new PersonaModel();

  personasTemp: PersonaModel[] = [];

  constructor( private personasService: PersonasService,
               private route: ActivatedRoute ) { }

  ngOnInit(): void {

    this.personasService.getPersonas()
      .subscribe( resp =>{
          this.personas = resp;
      });
  }

  votarPersonapositivo( id:string ){

    console.log( id );
    this.personasService.getPersona( id )
      .subscribe( (resp: any ) => {
         
          this.personasTemp.push( resp );
          this.personasTemp[0].votespositive++;

          this.personasService.votarPersona( this.personasTemp[0] )
          .subscribe( resp => {
            console.log( resp );
          });
          
    });

  }

  votarPersonanegativo( id:string ){

      console.log( id );
      this.personasService.getPersona( id )
        .subscribe( (resp: any ) => {
           
            this.personasTemp.push( resp );
            this.personasTemp[0].votesnegative++;
            
            this.personasService.votarPersona( this.personasTemp[0] )
            .subscribe( resp => {
              console.log( resp );
            });
            
      });  
  }
}
