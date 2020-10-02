import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private afs: AngularFirestore, public authSrv: AuthService) { }

    GetCollection(elements: string) {
        return new Promise<any>((resolve, reject) => {
            this.afs.collection(elements).valueChanges().subscribe(snapshots => {
                resolve(snapshots)
            })
        })
    }
}