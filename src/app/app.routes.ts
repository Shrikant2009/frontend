import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { FeatureEvaluator } from './feature-evaluator/feature-evaluator';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'auth',
    component: Auth,
    children: [
      {
        path: 'login',
        component: Login,
      },
      {
        path: 'register',
        component: Signup,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'home',
    component: FeatureEvaluator,
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];



