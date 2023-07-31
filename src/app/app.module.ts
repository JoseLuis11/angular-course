import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { PricesComponent } from './components/prices/prices.component';
import { AuthModule } from '@auth0/auth0-angular';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtectedComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
        domain: environment.AUTH0_DOMAIN,
        clientId: environment.AUTH0_CLIENT_ID,
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
