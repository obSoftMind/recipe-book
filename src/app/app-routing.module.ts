import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipe/recipe-resolver.service';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [

  {path:'' , redirectTo : '/recipe', pathMatch:'full'},

  { path:'recipe',  component:RecipeComponent, children:[
      {path:'' , component: RecipeStartComponent},
      {path:'new', component:RecipeEditComponent},
      {path:':id' , component: RecipeDetailComponent, resolve: [RecipeResolverService]},
      {path:':id/edit' , component: RecipeEditComponent}
    ] 
  },

  { path:'shopping-list', component : ShoppingListComponent}
];    

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }