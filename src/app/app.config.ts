import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    importProvidersFrom(NgxSpinnerModule.forRoot({type: 'ball-scale'}))
  ]
};
