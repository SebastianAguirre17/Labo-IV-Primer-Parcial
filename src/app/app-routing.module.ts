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
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { TablaPaisesComponent } from './components/tabla-paises/tabla-paises.component';

const routes: Routes = [
    { path: '', component: BusquedaComponent },
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'busqueda', component: BusquedaComponent },
    // { path: 'paises', component: TablaPaisesComponent },
    { path: 'peliculas/alta', component: PeliculaAltaComponent },
    { path: 'peliculas/listado', component: PeliculasListadoComponent },
    { path: 'actor/alta', component: ActorAltaComponent },
    { path: 'actor/listado', component: ActorListadoComponent },
    { path: 'productos', component: ProductosComponent },
    // { path: 'busqueda', component: BusquedaProductosComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Registro', component: RegistroComponent },
    { path: 'productos/alta', component: ProductoAltaComponent },
    { path: 'buscados/:termino', component: BusquedaProductosComponent },
    { path: 'ventas/alta', component: NuevaVentaComponent },
    { path: 'ventas/listado', component: VentasListadoComponent },
    { path: '**', component: BusquedaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
