import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/modules/clients/clients.component';

@Component({
    selector: 'app-client-form',
    templateUrl: './client-form.component.html',
    styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
    userForm: FormGroup;

    @Output() addUser: EventEmitter<IUser> = new EventEmitter<IUser>();

    @Input() userCount = 0;

    constructor(private fb: FormBuilder) {
    }

    ngOnInit() {
        this.createForm();

        this.userForm.valueChanges.subscribe(value => {
            console.log(value);
            console.log(this.userForm);
        });
    }

    createForm(): void {
        this.userForm = this.fb.group({
            nombre: [null, Validators.required],
            apellido: [null, Validators.required],
        });
    }

    getValue(event): void {
        console.log('from keyDown', event.target.value);
    }

    enviarDatos(): void {
        if (this.userForm.valid) {
            console.log(this.userForm.value);
            this.addUser.emit(this.userForm.value);
        } else {
            alert('LLENA LOS DATOS');
        }
    }
}
