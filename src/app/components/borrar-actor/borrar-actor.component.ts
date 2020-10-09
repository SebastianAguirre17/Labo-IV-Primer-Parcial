import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActorModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-borrar-actor',
    templateUrl: './borrar-actor.component.html',
    styleUrls: ['./borrar-actor.component.css']
})
export class BorrarActorComponent implements OnInit {

    @Input() actor: ActorModel;
    @Input() borrado: number;

    @Output() eventoBorrarActor = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void {
    }

    borrarActor(id: string) {
        this.eventoBorrarActor.emit(id);
        console.log(id);
    }
}
