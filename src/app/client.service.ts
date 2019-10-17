import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    countSubject = new Subject();

    constructor() {
        let count = 0;
        setInterval(() => {
            count++;
            this.countSubject.next(count);
        }, 1000);
    }
}
