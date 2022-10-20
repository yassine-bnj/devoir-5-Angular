import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {

  livres: Livre[];
  livre!: Livre;
  constructor(private router: Router) {
    this.livres = [
      { idLivre: 1, titreLivre: "Bonjour Tristesse", auteurLivre: "Françoise Sagan", prixLivre: 50, dateParution: new Date("07-18-2007") },
      { idLivre: 2, titreLivre: "Lolita", auteurLivre: "Vladimir Nabokov", prixLivre: 60, dateParution: new Date("05-23-2001") },
      { idLivre: 3, titreLivre: "La nuit du chasseur", auteurLivre: "Davis Grubb", prixLivre: 70, dateParution: new Date("11-30-2001") },
    ]


  }
  listeLivres(): Livre[] {
    return this.livres;
  }
  ajouterLivre(liv: Livre) {
    this.livres.push(liv);
    this.router.navigate(['/livres']);
  }
  supprimerLivre(liv: Livre) {

    const index = this.livres.indexOf(liv, 0);
    if (index > -1) {
      this.livres.splice(index, 1);
    }

  }
  consulterLivre(id: number): Livre {
    this.livre = this.livres.find(l => l.idLivre == id)!;
    return this.livre;
  }
  trierLivres() {
    this.livres = this.livres.sort((n1, n2) => {
      if (n1.idLivre! > n2.idLivre!) {
        return 1;
      }
      if (n1.idLivre! < n2.idLivre!) {
        return -1;
      }
      return 0;
    });
  }
  updateLivre(l: Livre) {

    this.supprimerLivre(l);
    this.ajouterLivre(l);
    this.trierLivres();
  }
}
