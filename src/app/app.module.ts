import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

import { environment } from 'src/environments/environment';
import { RegistroComponent } from './pages/registro/registro.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistroComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        ComponentsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule,
        ReactiveFormsModule
    ],
    providers: [
        AuthService,
        DataService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
