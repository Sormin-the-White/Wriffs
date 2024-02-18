import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-link',
  standalone: true,
  imports: [],
  templateUrl: './icon-link.component.html',
  styleUrl: './icon-link.component.css'
})
export class IconLinkComponent {
  @Input() iconUrl: string = ''; // Input property for icon URL
  @Input() linkText: string = ''; // Input property for link text
}
