import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    templateUrl: './hero-page.component.html',
    standalone: true,
    imports: [UpperCasePipe],
})

export class HeroPageComponent {
    public name = signal('Ironman')
    public age = signal(45)

    heroDescription = computed(() => {
        const description = `${this.name()} - ${this.age()}`

        return description;
    })

    capitalizeName = computed(() => this.name().toUpperCase())

    // getHeroDescription(): string {
    //     return `${this.name()} - ${this.age()}`
    // }

    changeHero(): void {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm(): void {
        this.name.set('Ironman');
        this.age.set(45)
    }

    changeAge(): void {
        this.age.set(60)
    }
}