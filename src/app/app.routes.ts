import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { FeatureEvaluator } from './feature-evaluator/feature-evaluator';
import { T1 } from './templates/t1/t1';
import { Templates } from './templates/templates';

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
  }, {
    path: 'templates',
    component: Templates,
    children: [{
      path: '1',
      component: T1
    }, {
      path: '',
      redirectTo: '1',
      pathMatch: 'full'
    }]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];
