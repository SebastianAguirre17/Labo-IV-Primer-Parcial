import { Component, Input, OnInit } from '@angular/core';
import { ActorModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-tabla-actor',
    templateUrl: './tabla-actor.component.html',
    styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

    @Input() actores: ActorModel[] = [];

    constructor() { }

    ngOnInit(): void {
    }

    seleccionarActor(actor: ActorModel, index: number) {
        console.log(actor, index);
    }

}
