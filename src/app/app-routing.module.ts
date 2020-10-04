import { ActorListadoComponent } from './components/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { PeliculasListadoComponent } from './components/peliculas-listado/peliculas-listado.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculaAltaComponent } from './components/pelicula-alta/pelicula-alta.component';
import { ProductosComponent } from './components/productos/productos.component';
import { BusquedaProductosComponent } from './components/busqueda-productos/busqueda-productos.component';
import { ProductoAltaComponent } from './components/producto-alta/producto-alta.component';
import { VentasListadoComponent } from './components/ventas-listado/ventas-listado.component';
import { NuevaVentaComponent } from './components/nueva-venta/nueva-venta.component';

const routes: Routes = [
    { path: '', component: ProductosComponent },
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'busqueda', component: BusquedaComponent },
    { path: 'peliculas/alta', component: PeliculaAltaComponent },
    { path: 'peliculas/listado', component: PeliculasListadoComponent },
    { path: 'actor/alta', component: ActorAltaComponent },
    { path: 'actor/listado', component: ActorListadoComponent },
    { path: 'productos', component: ProductosComponent },
    // { path: 'busqueda', component: BusquedaProductosComponent },
    { path: 'productos/alta', component: ProductoAltaComponent },
    { path: 'ventas/alta', component: NuevaVentaComponent },
    { path: 'ventas/listado', component: VentasListadoComponent },
    { path: '**', pathMatch: 'full', component: BusquedaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
