import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

import {AccordionModule} from 'ngx-bootstrap/accordion';
import {AlertModule} from 'ngx-bootstrap/alert';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {RatingModule} from 'ngx-bootstrap/rating';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {DatepickerModule} from 'ngx-bootstrap/datepicker';
import {HighchartModule} from './highcharts.module';

import {EasypiechartDirective} from './directives/easypiechart/easypiechart.directive';
import {FlotDirective} from './directives/flot/flot.directive';
import {SparklineDirective} from './directives/sparkline/sparkline.directive';
import {SvgreplaceDirective} from './directives/svgreplace/svgreplace.directive';
import {VectormapDirective} from './directives/vectormap/vectormap.directive';
import {KnobDirective} from './directives/knob/knob.directive';
import {RippleDirective} from './directives/ripple/ripple.directive';

import {SettingsService} from './settings/settings.service';
import {SettingsComponent} from './settings/settings.component';


// https://angular.io/styleguide#!#04-10
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot(),
    HighchartModule
  ],
  providers: [
    SettingsService
  ],
  declarations: [
    EasypiechartDirective,
    FlotDirective,
    SparklineDirective,
    SvgreplaceDirective,
    VectormapDirective,
    KnobDirective,
    RippleDirective,
    SettingsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    DatepickerModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    ProgressbarModule,
    RatingModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule,
    EasypiechartDirective,
    FlotDirective,
    SparklineDirective,
    SvgreplaceDirective,
    VectormapDirective,
    KnobDirective,
    RippleDirective,
    SettingsComponent,
    HighchartModule
  ]
})

// https://github.com/ocombe/ng2-translate/issues/209
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
