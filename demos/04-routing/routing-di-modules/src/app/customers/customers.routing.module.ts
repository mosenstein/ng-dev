import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CustomersComponent } from './component/customer-list/customers.component';
import { CustomerEditComponent } from './component/customer-edit/customer-edit.component';

const routes: Routes = [
    {
        path: '',
        component: CustomersComponent
    },
    { path: ':id', component: CustomerEditComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CustomersRoutingModule { }
