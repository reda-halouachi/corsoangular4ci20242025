import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  // Inject di spotifyService
  private spotifyService: SpotifyService = inject(SpotifyService);
  
  // Definire una proprietà di tipo Form control che mi consente di gestire la input in modo avanzato
  artistName: FormControl = new FormControl();
  
  ngOnInit(): void {
    this.artistName.valueChanges.subscribe(nome => {
      console.log(nome);
    })
  }


}
