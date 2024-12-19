import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CreditsComponent } from './credits/credits.component';
import { LoginComponent } from './login/login.component';
import { AlbumsComponent } from './albums/albums.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { tokenOkGuard } from './token-ok.guard';
import { TracksComponent } from './tracks/tracks.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchComponent, canActivate: [tokenOkGuard]},
    {path: 'credits', component: CreditsComponent},
    {path: 'login', component: LoginComponent},
    {path: 'albums/:id', component: AlbumsComponent, canActivate: [tokenOkGuard]},
    {path: 'tracks/:id', component: TracksComponent, canActivate: [tokenOkGuard]},
    {path: '**', component: NotFoundComponent}
];
