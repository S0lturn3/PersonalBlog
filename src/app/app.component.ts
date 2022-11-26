import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private httpClient: HttpClient,
    private modalService: BsModalService,
  ) { }

  // Versão do sistema
  private config!: { version: string }
  theme: Theme = 'dark-theme'


  ngOnInit() {
    this.config = require('../assets/config.json')

    
    // Definição dos títulos das páginas
    this.router.events.pipe( filter(event => event instanceof NavigationEnd) )
      .subscribe( () => {
        var route = this.getChild(this.activatedRoute)

        route.data.subscribe((data: {title: string}) => {
          if (!environment.production && !data.title) {
            alert('Página ainda sem título definido')
          }

          this.titleService.setTitle(data.title)
        })
      })

  }


  private getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild)
    } else {
      return activatedRoute
    }
  }

}

export type Theme = 'light-theme' | 'dark-theme'
