import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActorModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-tabla-actor',
    templateUrl: './tabla-actor.component.html',
    styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

    @Input() actores: ActorModel[] = [];
    @Output() eventoActorSeleccionado = new EventEmitter<ActorModel>();
    @Output() eventoIndexSeleccionado = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

    seleccionarActor(actor: ActorModel, index: number) {
        // console.log(index);
        this.eventoActorSeleccionado.emit(actor);
        this.eventoIndexSeleccionado.emit(index);
    }

}
