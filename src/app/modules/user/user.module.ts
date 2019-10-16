import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ClientsModule } from 'src/app/modules/clients/clients.module';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [UserComponent],
    imports: [
        CommonModule,
        ClientsModule,
        RouterModule
    ],
    exports: [UserComponent]
})
export class UserModule {
}
