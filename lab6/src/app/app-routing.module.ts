import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router"

import { IndexComponent } from './index/index.component';
import { MusicComponent } from './music/music.component';
import { TextsComponent } from './texts/texts.component';

const routes: Routes = [
    { path: '', component: IndexComponent},
    { path: 'index', component: IndexComponent },
    { path: 'music', component: MusicComponent },
    { path: 'texts', component: TextsComponent },
    { path: '**', redirectTo:''},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})


export class AppRoutingModule { }
