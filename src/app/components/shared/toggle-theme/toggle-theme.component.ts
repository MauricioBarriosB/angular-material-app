import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
    selector: 'app-toggle-theme',
    imports: [MatSlideToggleModule],
    templateUrl: './toggle-theme.component.html',
})

export class ToggleThemeComponent {

    // toggle: boolean = false;

    // inyeccionde pendencia para acceder al document DOM

    constructor(@Inject(DOCUMENT) private document: Document) { }

    onToggle(value: boolean) {
        console.log('Toggle:', value);
        if (value) {
            this.document.body.classList.remove('dark-theme');
            this.document.body.classList.add('ligth-theme');
        } else {
            this.document.body.classList.add('dark-theme');
            this.document.body.classList.remove('ligth-theme');
        }
    }

}
