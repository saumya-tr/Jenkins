import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JenkinsSharedLibsModule, JenkinsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JenkinsSharedLibsModule, JenkinsSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JenkinsSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JenkinsSharedModule {
  static forRoot() {
    return {
      ngModule: JenkinsSharedModule
    };
  }
}
