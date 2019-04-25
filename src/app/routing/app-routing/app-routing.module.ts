import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { AuthGuard } from '../../auth/auth.guard';

import { HeaderComponent } from '../../components/header/header.component';

import { AuthorizationComponent } from '../../components/authorization/authorization.component';
import { FailedComponent } from '../../components/authorization/failed/failed.component';
import { NewsComponent } from '../../components/news/news.component';
import { ProfileComponent } from '../../components/profile/profile.component';


/* import {  } from '../../components/';
import {  } from '../../components/'; */


const Routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
        children: [
            {
                path: 'login',
                component: AuthorizationComponent,
                children: [
                ],
            },
            {
                path: 'news',
                component: NewsComponent,
                children: [
                ]
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard],
                children: [
                ]
            }
        ]
    },
    {
        path: ':trialname',
        component: HeaderComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(Routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
