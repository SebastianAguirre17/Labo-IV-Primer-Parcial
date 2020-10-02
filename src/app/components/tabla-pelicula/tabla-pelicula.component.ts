import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeliculaModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-tabla-pelicula',
    templateUrl: './tabla-pelicula.component.html',
    styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

    @Input() peliculas: PeliculaModel[] = [];
    @Output() peliculaSeleccionada: EventEmitter <PeliculaModel> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
    }

    seleccionarPelicula(pelicula: PeliculaModel) {
        this.peliculaSeleccionada.emit(pelicula);
    }
}
