import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/client.service';

export interface IUser {
    nombre: string;
    apellido: string;
}

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
    usuarios: IUser[] = [];

    usuariosCount = 0;

    constructor(private clientService: ClientService) {
        this.clientService.countSubject
            .subscribe((value: number) => {
                if ((value % 2) === 0) {
                    alert(' ES PAR');
                }
            });
    }

    ngOnInit() {
    }

    sayHello(): void {
        console.log('HOLAAA!');
    }

    getUser(user: IUser): void {
        this.usuarios.push(user);
        this.usuariosCount++;
        // this.usuariosCount = this.usuariosCount + 1;
    }

}
