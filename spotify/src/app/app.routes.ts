import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreditsComponent } from './credits/credits.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'credits', component: CreditsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'albums', component: AlbumsComponent},
    {path: '**', component: NotFoundComponent}
];
