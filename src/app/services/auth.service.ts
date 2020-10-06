import { HttpClient } from '@angular/common/http';
import { RoleValidator } from '../models/models.model';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../models/models.model';
import { first, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import Swal from 'sweetalert2';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService extends RoleValidator {

    public user$: Observable<User>;

    constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore, private http: HttpClient) {
        super();

        this.user$ = this.afAuth.authState.pipe(
            switchMap((user) => {
                if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                }

                return of(null);
            })
        )
    }

    async login(email: string, password: string): Promise<User> {
        Swal.fire({
            text: 'Espere por favor',
            allowOutsideClick: false,
            icon: 'info'
        });
        Swal.showLoading();
        try {
            const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
            this.updateUserData(user);
            Swal.close();
            return user;
        }
        catch (err) {
            Swal.fire({
                text: err.message,
                allowOutsideClick: false,
                icon: 'error'
            });
        }
    }

    async register(email: string, password: string): Promise<User> {
        Swal.fire({
            text: 'Espere por favor',
            allowOutsideClick: false,
            icon: 'info'
        });
        Swal.showLoading();
        try {
            const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
            Swal.close();
            return user;
        }
        catch (err) {
            Swal.fire({
                text: err.message,
                allowOutsideClick: false,
                icon: 'error'
            });
        }
    }

    async logout() {
        try {
            await this.afAuth.signOut();
        }
        catch (err) {
            console.log(err);
        }
    }

    updateUserData(user: User) {
        const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

        const data: User = {
            uid: user.uid,
            email: user.email,
            role: 'INVITADO',
            name: user.email.split('@')[0]
        }

        return userRef.set(data, { merge: true });
    }

    getCurrentUser() {
        return this.afAuth.authState.pipe(first()).toPromise();
    }
}