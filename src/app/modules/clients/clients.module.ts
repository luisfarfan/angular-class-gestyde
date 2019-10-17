import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ClientsComponent, ClientFormComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [ClientsComponent]
})
export class ClientsModule {
}
