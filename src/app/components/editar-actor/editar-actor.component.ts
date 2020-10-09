import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ActorModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-editar-actor',
    templateUrl: './editar-actor.component.html',
    styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {
    @Input() actor;
    @Output() eventoEditarActor = new EventEmitter<string>();

    constructor(private dataSrv: DataService) { }
  
    ngOnInit(): void {
        
    }

    guardar( formulario: NgForm ) {
        if (formulario.invalid)
            Object.values(formulario.controls).forEach(control => control.markAsTouched());

        this.actor.nombre = formulario.value.nombre;
        this.actor.apellido = formulario.value.apellido;
        this.actor.sexo = formulario.value.sexo;
        // console.log(formulario.value.nombre);
        this.eventoEditarActor.emit(this.actor);
    }
}
