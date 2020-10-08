import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { peliculasData, actoresData, productosData } from 'src/app/shared/data';
import { PaisModel, PeliculaModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-busqueda',
    templateUrl: './busqueda.component.html',
    styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

    url: string = 'https://restcountries.eu/rest/v2/region/';
    region: string = 'europe';

    pelicula: PeliculaModel;
    peliculas: PeliculaModel[] = [];
    index: number;

    pais: PaisModel;
    paises: PaisModel[] = [];

    constructor(private dataSrv: DataService) { }

    ngOnInit(): void {
        this.getPaisesUrl(this.region);
        // this.getPeliculas();
        // this.dataSrv.createColection(peliculasData, 'peliculas');
    }

    getPeliculas() {
        this.dataSrv.getColeccion('peliculas')
            .subscribe(resp => this.peliculas = this.dataSrv.crearArrDePeliculas(resp));
    }

    getPaises() {
        this.dataSrv.getColeccion('paises')
            .subscribe(resp => this.paises = this.dataSrv.crearArrDePaises(resp));
    }
    
    tomarPeliculaParaDetalles(pelicula: PeliculaModel) {
        this.pelicula = pelicula;
    }

    tomarIndexPelicula(index: number) {
        this.index = index;
    }

    tomarPaisParaDetalles(pais: PaisModel) {
        this.pais = pais;
    }

    tomarIndexPais(index: number) {
        this.index = index;
    }

    getPaisesUrl(region: string) {
        this.dataSrv.peticionHttp(`${this.url}${region}`)
            .subscribe((resp: PaisModel[]) => {
                this.paises = resp;
            });
    }

}
