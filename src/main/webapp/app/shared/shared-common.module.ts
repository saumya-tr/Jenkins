import { NgModule } from '@angular/core';

import { JenkinsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JenkinsSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JenkinsSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JenkinsSharedCommonModule {}
