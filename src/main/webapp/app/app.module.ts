import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TestJhipsterSharedModule } from 'app/shared/shared.module';
import { TestJhipsterCoreModule } from 'app/core/core.module';
import { TestJhipsterAppRoutingModule } from './app-routing.module';
import { TestJhipsterHomeModule } from './home/home.module';
import { TestJhipsterEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TestJhipsterSharedModule,
    TestJhipsterCoreModule,
    TestJhipsterHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TestJhipsterEntityModule,
    TestJhipsterAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TestJhipsterAppModule {}
