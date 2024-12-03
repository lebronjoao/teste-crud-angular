import {provideRouter, Routes} from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';


export const routes: Routes = [
    { path: '', component: PostListComponent},
    { path: 'add', component: PostFormComponent },
    { path: 'edit/:id', component: PostFormComponent }    
];

export const appRouterProviders = [provideRouter(routes)];