import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetInputBoxValueComponent } from './get-input-box-value/get-input-box-value.component';
import { CounterAppComponent } from './CounterApp/counter-app/counter-app.component';
import { PropertyBindingComponent } from './PropertyBinding/property-binding/property-binding.component';
import { ChildComponent } from './ParentToChild/child/child.component';
import { ParentComponent } from './ParentToChild/parent/parent.component';
import { CToPParentComponent } from './ChildToParent/cto-p-parent/cto-p-parent.component';
import { CToPChildComponent } from './ChildToParent/cto-p-child/cto-p-child.component';
import { NgifexampleComponent } from './ngIF/ngifexample/ngifexample.component';
import { MultipleConditionOrelseifComponent } from './ngIF/multiple-condition-orelseif/multiple-condition-orelseif.component';
import { RactiveFormExComponent } from './ReactiveForm/ractive-form-ex/ractive-form-ex.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivanExComponent } from './TemplateDrivanForms/template-drivan-ex/template-drivan-ex.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormSecondExComponent } from './ReactiveForm/reactive-form-second-ex/reactive-form-second-ex.component';
import { SwitchcaseexComponent } from './SwitchCase/switchcaseex/switchcaseex.component';
import { LoopsexComponent } from './Loops/loopsex/loopsex.component';
import { NestedLoopComponent } from './Loops/nested-loop/nested-loop.component';
import { StylebindingComponent } from './StyleBinding/stylebinding/stylebinding.component';
import { ToggleExComponent } from './ToggleElement/toggle-ex/toggle-ex.component';
import { TwoWayBindingComponent } from './TwoWayBinding/two-way-binding/two-way-binding.component';
import { HomeComponent } from './Routing/home/home.component';
import { ContactComponent } from './Routing/contact/contact.component';
import { AboutUsComponent } from './Routing/about-us/about-us.component';
import { UserComponent } from './Routing/user/user.component';
import { PageNotFoundComponent } from './PageNotFound/page-not-found/page-not-found.component';
import { AboutCompanyComponent } from './ChildRouting/about-company/about-company.component';
import { AboutMeComponent } from './ChildRouting/about-me/about-me.component';
import { CoursesComponent } from './InputOutputExample/courses/courses.component';
import { FilterComponent } from './InputOutputExample/filter/filter.component';
import { SearchComponent } from './InputOutputExample/search/search.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchApiComponent } from './FetchApi/fetch-api/fetch-api.component';
import { PostApiMethodComponent } from './FetchApi/post-api-method/post-api-method.component';
import { UsersModule } from './users/users.module';
//import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './group-routing/login/login.component';
import { ListComponent } from './group-routing/list/list.component';
import { GroupRoutingModule } from './group-routing/group-routing.module';
import { AdminlistComponent } from './LazyLoadingComponent/adminlist/adminlist.component';
import { UserlistComponent } from './LazyLoadingComponent/userlist/userlist.component';
import { ChildCompComponent } from './ChildToParent/child-comp/child-comp.component';
import { ParentCompComponent } from './ChildToParent/parent-comp/parent-comp.component';
import { UsdToInrPipe } from './Pipe/usd-to-inr.pipe';
import { HoverDirectiveDirective } from './Directive/hover-directive.directive';
import { ValidationDirectiveDirective } from './Directive/validation-directive.directive';
import { InfiniteScrollComponent } from './InfiniteScroll/infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    GetInputBoxValueComponent,
    CounterAppComponent,
    PropertyBindingComponent,
    ChildComponent,
    ParentComponent,
    CToPParentComponent,
    CToPChildComponent,
    NgifexampleComponent,
    MultipleConditionOrelseifComponent,
    RactiveFormExComponent,
    TemplateDrivanExComponent,
    ReactiveFormSecondExComponent,
    SwitchcaseexComponent,
    LoopsexComponent,
    NestedLoopComponent,
    StylebindingComponent,
    ToggleExComponent,
    TwoWayBindingComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    UserComponent,
    PageNotFoundComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    CoursesComponent,
    FilterComponent,
    SearchComponent,
    FooterComponent,
    FetchApiComponent,
    PostApiMethodComponent,
    LoginComponent,
    ListComponent,
    AdminlistComponent,
    UserlistComponent,
    ChildCompComponent,
    ParentCompComponent,
    UsdToInrPipe,
    HoverDirectiveDirective,
    ValidationDirectiveDirective,
    InfiniteScrollComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    //AdminModule,
    GroupRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
