import { Routes } from "@angular/router";
import { UserDetailsComponent } from "../user-details/user-details.component";
import { EditUserComponent } from "../edit-user/edit-user.component";
import { NewUserComponent } from "../new-user/new-user.component";

const userRoutes: Routes = [
    { path: 'details', component: UserDetailsComponent },
    { path: 'edit', component: EditUserComponent },
    { path: 'new', component: NewUserComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'new' }
]

export default userRoutes;