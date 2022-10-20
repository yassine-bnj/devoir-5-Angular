import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livre } from '../model/livre.model';
import { LivreService } from '../services/livre.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styles: [
  ]
})
export class UpdateLivreComponent implements OnInit {
  currentLivre = new Livre();
  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private livreService: LivreService) { }

  ngOnInit() {
    this.currentLivre = this.livreService.consulterLivre(this.activatedRoute.snapshot.params['id']);
    console.log(this.currentLivre);

  }
  updateLivre() {
    this.livreService.updateLivre(this.currentLivre);
    this.router.navigate(['livres']);
  }

}
