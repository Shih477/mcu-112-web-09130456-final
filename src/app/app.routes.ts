import path from 'path';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes } from '@angular/router';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { NewArticlePageComponent } from './new-article-page/new-article-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePageComponent },
  { path: 'new-article-page', component: NewArticlePageComponent },
  { path: 'Sign-in', component: SignInPageComponent },
  { path: 'Sign-up', component: SignUpPageComponent },
];
