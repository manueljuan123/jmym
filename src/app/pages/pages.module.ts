import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { SkillComponent } from './skill/skill.component';
import { QualificationComponent } from './qualification/qualification.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SwiperModule } from 'swiper/angular';
//import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    InicioComponent,
    AboutComponent,
    SkillComponent,
    QualificationComponent,
    PortfolioComponent,
    //ContactComponent,
  ],
  imports: [CommonModule, SwiperModule],
  exports: [
    InicioComponent,
    AboutComponent,
    SkillComponent,
    QualificationComponent,
    PortfolioComponent,
    //ContactComponent,
  ],
})
export class PagesModule {}
