import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatSlideToggleModule, MatToolbarModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-app';

  switchTheme = new FormControl(false);
  @HostBinding('class') className = '';
  darkClass='theme-dark';
  lightClass='theme-lignt';

  constructor(private overlay: OverlayContainer){}

  ngOnInit(): void {
    this.switchTheme.valueChanges.subscribe((currentMode)=> {
      this.className = currentMode ? this.darkClass: this.lightClass;

      if(currentMode) {
        this.overlay.getContainerElement().classList.add(this.darkClass);
      } else {
        this.overlay.getContainerElement().classList.remove(this.lightClass);
      }
    })
  }
}
