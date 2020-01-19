import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-icon-registry',
  templateUrl: './icon-registry.component.html',
  styleUrls: ['./icon-registry.component.scss']
})
export class IconRegistryComponent {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'heart',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/'));
  }

}
