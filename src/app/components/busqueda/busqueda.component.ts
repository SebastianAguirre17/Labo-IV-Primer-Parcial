import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { peliculasData, actoresData } from 'src/app/shared/data';
import { PeliculaModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

    pelicula: PeliculaModel = new PeliculaModel()
    peliculas: PeliculaModel[] = [];

    constructor(private dataSrv: DataService) { }

    ngOnInit(): void {
        this.getPeliculas();
        // this.dataSrv.createColection(peliculasData, 'peliculas');
        // this.dataSrv.createColection(actoresData, 'actores');
    }

    getPeliculas() {
        this.dataSrv.getColeccion('peliculas')
            .subscribe((resp: PeliculaModel[]) => this.peliculas = resp);
    }

    getActores() {
        this.dataSrv.getColeccion('actores')
            .subscribe(resp => console.log(resp));
    }
}
