// admin/admin-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview.component';

const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);
const departmentsModule = () => import('./departments/departments.module').then(x => x.DepartmentsModule);
const employeesModule = () => import('./employees/employees.module').then(x => x.EmployeesModule);
const workflowsModule = () => import('./workflows/workflows.module').then(x => x.WorkflowsModule);
const requestsModule = () => import('./requests/requests.module').then(x => x.RequestsModule);

const routes: Routes = [
  {
    path: '',
    component: SubNavComponent,
    outlet: 'subnav'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: OverviewComponent },
      { path: 'accounts', loadChildren: accountsModule },
      { path: 'departments', loadChildren: departmentsModule },
      { path: 'employees', loadChildren: employeesModule },
      { path: 'workflows', loadChildren: workflowsModule },
      { path: 'requests', loadChildren: requestsModule }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}