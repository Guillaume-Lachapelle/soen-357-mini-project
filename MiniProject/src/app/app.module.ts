import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProblemStatementComponent } from './components/problem-statement/problem-statement.component';
import { ReferencesComponent } from './components/references/references.component';
import { SolutionComponent } from './components/solution/solution.component';
import { ResearchComponent } from './components/research/research.component';
import { AnalysisComponent } from './components/analysis/analysis.component';
import { VisualDesignComponent } from './components/visual-design/visual-design.component';
import { FinalDesignComponent } from './components/final-design/final-design.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { UserFlowComponent } from './components/user-flow/user-flow.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    IntroductionComponent,
    ProblemStatementComponent,
    ReferencesComponent,
    SolutionComponent,
    ResearchComponent,
    AnalysisComponent,
    VisualDesignComponent,
    FinalDesignComponent,
    ConclusionComponent,
    UserFlowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    CanvasJSAngularChartsModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
