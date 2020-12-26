# QuikshopUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Take android build
cordova run browser
cordova build android


# Angular material design
    1.  ng add @angular/material
    2.  npm install --save jquery
    3.  npm install --save bootstrap
    4. npm install material-design-icons --save
    5.  npm install ngx-cookie-service --save
    
    ## Cordova plugins
    1. cordova plugin add cordova-plugin-statusbar
    
    Then add the following to styles.css:
    @import '~material-design-icons/iconfont/material-icons.css';
    
  Note : For a clear implementation, I have created a separate file - material.module.ts  and imported in our app.module.ts.  
  # Sidenav in Angular Material
    SideNav basically uses 3 components to add sidenav into a full page. They are - <mat-sidenav-container> which acts as a structural container for content and sidenav, <mat-sidenav-content> which represents the main content, 
    and <mat-sidenav> which represents the added side content.

  # Used elements:
    1. <mat-sidenav-container>
    2. <mat-icon>
    3. <mat-divider>    :   this be used on its own to create a horizontal or vertical line styled with a Material theme


# Cordova images
1. 192X192, 96X96, 144X144, 216X216, 48X48, 
320X480, 720X1280, 960X1600, 1280X1920, 480X320, 1280X720, 1600X960, 1920X1280, 480X800, 200X320,  
2. background : 324X324, 432X432, 

# Cordova tutorial
1. To change the status bar color:
    a. add the below code in config.xml
        <preference name="StatusBarOverlaysWebView" value="true" />
        <preference name="StatusBarBackgroundColor" value="#15C39A" />
        <preference name="StatusBarStyle" value="lightcontent" />
    b. add the plugin
        cordova plugin add cordova-plugin-statusbar
