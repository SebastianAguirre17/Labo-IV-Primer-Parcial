import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-pelicula-alta',
    templateUrl: './pelicula-alta.component.html',
    styleUrls: ['./pelicula-alta.component.css']
})
export class PeliculaAltaComponent implements OnInit {

    forma: FormGroup;
    actores:ActorModel[] = [];
    actor: ActorModel = new ActorModel();

    constructor(private fb: FormBuilder, private dataSrv: DataService) {
        this.crearFormulario();
    }

    ngOnInit(): void { 
        this.getActores();
    }

    get nombreNoValido() {
        return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
    }

    get fechaNoValida() {
        return this.forma.get('fecha').invalid && this.forma.get('fecha').touched;
    }

    get publicoNoValido() {
        return this.forma.get('publico').invalid && this.forma.get('publico').touched;
    }

    get actorNoValido() {
        return this.forma.get('actor').invalid && this.forma.get('actor').touched;
    }

    crearFormulario() {
        this.forma = this.fb.group({
            nombre: ['', [Validators.required, Validators.minLength(2)]],
            tipo: ['otros', [Validators.required]],
            fecha: ['', [Validators.required]],
            publico: ['', [Validators.required]],
            actor: ['', [Validators.required]]
        });
    }

    getActores() {
        this.dataSrv.getColeccion('actores')
            .subscribe(resp => this.actores = this.dataSrv.crearArrDeActores(resp));
    }

    guardar() {
        if (this.forma.invalid) {
            return Object.values(this.forma.controls).forEach(control => {
                if (control instanceof FormGroup)
                    Object.values(control.controls).forEach(control => control.markAsTouched());
                else
                    control.markAsTouched();
            });
        }

        // this.forma.reset();
    }

    tomarActor(actor: ActorModel) {
        this.actor = actor;
        this.forma.setValue({
            nombre: this.forma.get('nombre').value,
            tipo: this.forma.get('tipo').value,
            fecha: this.forma.get('fecha').value,
            publico:this.forma.get('publico').value,
            actor: this.actor.nombre
        })
    }

}
