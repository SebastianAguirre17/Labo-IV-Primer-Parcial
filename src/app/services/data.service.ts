import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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


    createColection(arrElementos: any[], coleccion: string) {
        arrElementos.forEach(element => {
            this.postRegistro(coleccion, element).subscribe();
        })
    }
}