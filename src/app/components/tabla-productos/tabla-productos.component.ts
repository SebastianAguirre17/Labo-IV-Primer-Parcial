import { Component, Input, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/models.model';

@Component({
    selector: 'app-tabla-productos',
    templateUrl: './tabla-productos.component.html',
    styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent implements OnInit {

    @Input() productos: ProductoModel[] = [];

    constructor() { }

    ngOnInit(): void {
    }

}
