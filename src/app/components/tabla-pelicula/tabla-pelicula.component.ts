import { Component, Input, OnInit } from '@angular/core';
import { PeliculaModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-tabla-pelicula',
    templateUrl: './tabla-pelicula.component.html',
    styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

    @Input() peliculas: PeliculaModel[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
