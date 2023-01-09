import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { MainMenuComponent } from './components/start/main-menu/main-menu.component';
import { LogoSvgComponent } from './components/start/logo-svg/logo-svg.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { SharedModule } from './shared/shared.module';
import { ContactoFormComponent } from './pages/contacto/contacto-form/contacto-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/start/footer/footer.component';
import { EmbededVideoComponent } from './components/start/embeded-video/embeded-video.component';
import { SocialIconsComponent } from './components/start/social-icons/social-icons.component';


@NgModule({
  declarations: [
    SocialIconsComponent,
    AppComponent,
    StartComponent,
    MainMenuComponent,
    LogoSvgComponent,
    InicioComponent,
    ServiciosComponent,
    ContactoComponent,
    ContactoFormComponent,
    FooterComponent,
    EmbededVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
