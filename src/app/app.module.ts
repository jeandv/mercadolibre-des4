import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { DescripcionComponent } from './component/descripcion/descripcion.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageNoFoundComponent } from './component/page-no-found/page-no-found.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PrincipalComponent, DescripcionComponent, PageNoFoundComponent, FooterComponent],
  imports: [BrowserModule, NgbModule, NoopAnimationsModule, MatCardModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }