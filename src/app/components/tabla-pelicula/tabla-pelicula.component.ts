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
    @Output() indexPeliculaSeleccionada: EventEmitter <number> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        
    }

    seleccionarPelicula(pelicula: PeliculaModel, index: number) {
        this.peliculaSeleccionada.emit(pelicula);
        this.indexPeliculaSeleccionada.emit(index);
    }
}
