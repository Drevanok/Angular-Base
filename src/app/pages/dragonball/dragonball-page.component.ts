import { Component, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'goku', power: 9001 },
    { id: 2, name: 'vegeta', power: 8001 },
    { id: 3, name: 'gohan', power: 7001 },
  ])
}
