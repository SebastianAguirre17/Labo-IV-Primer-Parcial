import { Component, OnInit } from '@angular/core';
import { PeliculaModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-peliculas-listado',
    templateUrl: './peliculas-listado.component.html',
    styleUrls: ['./peliculas-listado.component.css']
})
export class PeliculasListadoComponent implements OnInit {

    peliculas: PeliculaModel[] = [];
    pelicula: PeliculaModel;
    index: number;

    constructor(private dataSrv: DataService) { }

    ngOnInit(): void {
        this.getPeliculas();
    }

    getPeliculas() {
        this.dataSrv.getColeccion('peliculas')
            .subscribe(resp => this.peliculas = this.dataSrv.crearArrDePeliculas(resp));
    }

    tomarPeliculaParaDetalles(pelicula: PeliculaModel) {
        this.pelicula = pelicula;
    }

    tomarIndexPelicula(index: number) {
        this.index = index;
    }

    borrarPelicula(id: string) {
        Swal.fire({
            icon: 'question',
            title: 'Borrar Película',
            text: '¿Está seguro de que desea borrar la película?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: 'red' 
        }).then((result) => {
            if (result.isConfirmed) {
                this.peliculas.splice(this.index, 1);
                this.pelicula = null;
                this.dataSrv.deleteRegistro('peliculas', id).subscribe();
            }
        })
    }
}
