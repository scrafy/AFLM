import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http: HttpClient) { }

  getBooks = () => {

    return this.http.get('https://api.publicapis.org/entries?category=books');
  }

  getMusic = () => {

    return this.http.get('https://api.publicapis.org/entries?category=music');
  }

  getHealt = () => {

    return this.http.get('https://api.publicapis.org/entries?category=health');
  }

  getAnimals = () => {

    return this.http.get('https://api.publicapis.org/entries?category=animals');
  }
}
