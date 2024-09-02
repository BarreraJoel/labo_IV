import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "bienvenido",
        loadComponent: () => import("./components/bienvenido/bienvenido.component").then(c => c.BienvenidoComponent)
    },
    {
        path: "login",
        loadComponent: () => import("./components/login/login.component").then(c => c.LoginComponent)
    },
    {
        path: "",
        redirectTo: "bienvenido",
        pathMatch: "full"
    },
    {
        path: "**",
        loadComponent: () => import("./components/error/error.component").then(c => c.ErrorComponent)
    }
];
