import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { FrontUiComponentsComponent } from './front-ui-components.component';

@NgModule({
  declarations: [FrontUiComponentsComponent],
  imports: [MatButtonModule],
  exports: [FrontUiComponentsComponent],
})
export class FrontUiComponentsModule {}
