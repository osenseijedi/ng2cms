import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MkdComponent} from '../mkd/mkd.component';


const routes: Routes = [
    {path: '', redirectTo: '/home.md', pathMatch: 'full'}, // default routing
    {path: ':pathToMkd', component: MkdComponent},
];


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {
}
