import { Component, OnInit } from '@angular/core';
import { ActorModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-actor-listado',
    templateUrl: './actor-listado.component.html',
    styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

    actor: ActorModel;
    actores: ActorModel[] = [];
    index: number;

    constructor(private dataSrv: DataService) { }

    ngOnInit(): void {
        this.getActores();
    }

    getActores() {
        this.dataSrv.getColeccion('actores')
            .subscribe(resp => this.actores = this.dataSrv.crearArrDeActores(resp));
    }


}
