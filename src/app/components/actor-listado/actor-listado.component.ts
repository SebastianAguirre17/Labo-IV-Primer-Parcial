import { Component, OnInit } from '@angular/core';
import { ActorModel } from 'src/app/models/models.model';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

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

    tomarActorParaDetalles(actor: ActorModel) {
        this.actor = actor;
    }

    tomarIndexActor(index: number) {
        this.index = index;
    }

    borrarActor(id: string) {
        Swal.fire({
            icon: 'question',
            title: 'Borrar Actor',
            text: '¿Está seguro de que desea borrar el actor?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: 'red' 
        }).then((result) => {
            if (result.isConfirmed) {
                this.actores.splice(this.index, 1);
                this.actor = null;
                this.dataSrv.deleteRegistro('actores', id).subscribe();
            }
        })
    }

    editarActor(actor: ActorModel) {
        const actorTemp = {
            ...actor
        };

        delete actorTemp.id;
        // console.log(actor);
        Swal.fire({
            title: 'Espere ...',
            icon: 'info'
        });

        Swal.showLoading();
        this.dataSrv.putRegistro('actores', actor).subscribe(
            resp => Swal.close()
        );
    }
}
