import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaisModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-tabla-paises',
    templateUrl: './tabla-paises.component.html',
    styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {


    @Input() paises: PaisModel[] = [];
    @Output() paisSeleccionado: EventEmitter <PaisModel> = new EventEmitter();
    @Output() indexPaisSeleccionado: EventEmitter <number> = new EventEmitter();

    constructor() { }

    ngOnInit(): void {
        
    }

    seleccionarPais(pais: PaisModel, index: number) {
        this.paisSeleccionado.emit(pais);
        this.indexPaisSeleccionado.emit(index);
        // console.log(pais);
    }
}

