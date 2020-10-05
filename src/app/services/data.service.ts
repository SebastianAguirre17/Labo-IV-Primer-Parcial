import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActorModel, PeliculaModel, ProductoModel } from '../models/models.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private url = 'https://primerparciallaboiv.firebaseio.com/';

    constructor(private http: HttpClient) { }

    getColeccion(coleccion: string) {
        return this.http.get(`${this.url}/${coleccion}.json`);
    }

    postRegistro(coleccion: string, registro: any) {
        return this.http.post(`${this.url}/${coleccion}.json`, registro);
    }

    putRegistro(coleccion: string, registro: any) {
        return this.http.put(`${this.url}/${coleccion}/${registro.id}.json`, registro);
    }

    getRegistro(coleccion: string, id: string) {
        return this.http.delete(`${this.url}/${coleccion}/${id}.json`);
    }

    deleteRegistro(coleccion: string, id: string) {
        return this.http.delete(`${this.url}/${coleccion}/${id}.json`);
    }

    createColection(arrElementos: any[], coleccion: string) {
        arrElementos.forEach(element => {
            this.postRegistro(coleccion, element).subscribe();
        })
    }

    crearArrDePeliculas(peliculasObj: Object) {
        const peliculas: PeliculaModel[] = [];

        if (peliculasObj === null)
            return [];

        Object.keys(peliculasObj).forEach(key => {
            const pelicula: PeliculaModel = peliculasObj[key];
            pelicula.id = key;

            peliculas.push(pelicula);
        })

        return peliculas;
    }

    crearArrDeActores(actoresObj: Object) {
        const actores: ActorModel[] = [];

        if (actoresObj === null)
            return [];

        Object.keys(actoresObj).forEach(key => {
            const actor: ActorModel = actoresObj[key];
            actor.id = key;

            actores.push(actor);
        })

        return actores;
    }

    crearArrDeproductos(productosObj: Object) {
        const productos: ProductoModel[] = [];

        if (productosObj === null)
            return [];

        Object.keys(productosObj).forEach(key => {
            const producto: ProductoModel = productosObj[key];
            producto.id = key;

            productos.push(producto);
        })

        return productos;
    }

    buscarProducto(productos: ProductoModel[], termino: string): ProductoModel[] {
        let prodArr: ProductoModel[] = [];
        termino.toLowerCase();

        for(let producto of productos) {
            let descripcion = producto.descripcion.toLowerCase();
            if(descripcion.indexOf(termino) >= 0)
                prodArr.push(producto);

        }
        return prodArr;
    }
}