import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PeliculaModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-detalle-pelicula',
    templateUrl: './detalle-pelicula.component.html',
    styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

    @Input() pelicula: PeliculaModel;
    @Input() borrado: number;

    @Output() eventoBorrarPelicula = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    borrarPelicula(id: string) {
        this.eventoBorrarPelicula.emit(id);
    }
}
