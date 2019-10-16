import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from 'src/app/modules/clients/clients.component';
import { UserComponent } from 'src/app/modules/user/user.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: 'clients',
        pathMatch: 'full',
    },
    {
        path: 'clients',
        component: ClientsComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
