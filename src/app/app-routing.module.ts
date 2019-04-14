import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' },
  { path: 'idealist', loadChildren: './pages/idea-list/idea-list.module#IdeaListPageModule' },
  { path: 'idea', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },
  { path: 'idea/:id', loadChildren: './pages/idea-details/idea-details.module#IdeaDetailsPageModule' },  { path: 'timetable', loadChildren: './timetable/timetable.module#TimetablePageModule' },
  { path: 'booktickets', loadChildren: './booktickets/booktickets.module#BookticketsPageModule' },
  { path: 'classic', loadChildren: './classic/classic.module#ClassicPageModule' },
  { path: 'latest', loadChildren: './latest/latest.module#LatestPageModule' },
  { path: 'upcoming', loadChildren: './upcoming/upcoming.module#UpcomingPageModule' },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
