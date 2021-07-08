import { SingleUrlComponent } from './single-url/single-url.component';
import { ListUrlComponent } from './list-url/list-url.component';
import { RedirectCompComponent } from './redirect-comp/redirect-comp.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'myurls', component: ListUrlComponent },
  { path: 'myurl/:id', component: SingleUrlComponent },
  { path: ':id', component: RedirectCompComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
