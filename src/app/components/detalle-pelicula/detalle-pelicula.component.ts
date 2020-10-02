import { Component, Input, OnInit } from '@angular/core';
import { PeliculaModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-detalle-pelicula',
    templateUrl: './detalle-pelicula.component.html',
    styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

    @Input() pelicula: PeliculaModel;

    constructor() { }

    ngOnInit(): void {
    }

}
