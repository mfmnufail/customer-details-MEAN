import { Routes } from '@angular/router';
import { ContestentComponent} from './contestent/contestent.component';
import { ShowComponent } from './show/show.component';

export const appRoutes: Routes = [


    {
      path: 'admin', component: ShowComponent,

    },

    {
      path: '', component: ContestentComponent,

  },

    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    }
];
