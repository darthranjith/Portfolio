import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { BlogComponent } from "./blog/blog.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutme', component: AboutMeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: ErrorComponent }
];
