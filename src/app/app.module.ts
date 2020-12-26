import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {WelcomeComponent} from './core/welcome/welcome.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {SidenavComponent} from './core/sidenav/sidenav.component';
import {MatMenuModule} from '@angular/material/menu';
import {CartComponent} from './feature/cart/cart.component';
import {RegisterComponent} from './core/register/register.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonboardComponent} from './shared/commonboard/commonboard.component';
import {FooterComponent} from './core/footer/footer.component';
import {ContactusComponent} from './core/contactus/contactus.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {DetailComponent} from './shared/detail/detail.component';
import {AppcarouselComponent} from './core/appcarousel/appcarousel.component';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {ProductListComponent} from './shared/product-list/product-list.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {AccountSettingsComponent} from './core/account-settings/account-settings.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FeedbackComponent} from './core/feedback/feedback.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SidenavComponent,
    CartComponent,
    RegisterComponent,
    CommonboardComponent,
    FooterComponent,
    ContactusComponent,
    DetailComponent,
    AppcarouselComponent,
    ProductListComponent,
    AccountSettingsComponent,
    FeedbackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    NgbModule,
    RouterModule.forRoot([
      {path: 'product/:id', component: DetailComponent},
      {path: 'category/:id', component: CommonboardComponent},
      {path: 'cart', component: CartComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'contactus', component: ContactusComponent},
      {path: 'productList/:id', component: ProductListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'myaccount', component: AccountSettingsComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatRippleModule,
    MatChipsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatRadioModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
