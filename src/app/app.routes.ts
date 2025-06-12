import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { Login } from './auth/login/login';
import { Signup } from './auth/signup/signup';
import { FeatureEvaluator } from './feature-evaluator/feature-evaluator';
import { T1 } from './templates/t1/t1';
import { T2 } from './templates/t2/t2';
import { Templates } from './templates/templates';
import { T3 } from './templates/t3/t3';
import { T4 } from './templates/t4/t4';

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
  },{
    path:'templates',
    component: Templates,
    children: [{
      path: '2' ,
      component: T2
    },{
      path:'',
      redirectTo: '2',
      pathMatch: 'full'
    }]
  },{
    path:'templates',
    component: Templates,
    children:[{
      path: '3',
      component: T3
    },{
      path:'',
      redirectTo: '3',
      pathMatch: 'full'
    }]
  },{
    path:'templates',
    component: Templates,
    children:[{
      path: '4',
      component: T4
    },{
      path:'',
      redirectTo: '4',
      pathMatch: 'full'
    }]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];
