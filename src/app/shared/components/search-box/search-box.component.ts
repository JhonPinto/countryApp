import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  @Input()
  public placeHolder: string = '';

  @Output()
  public eventoEnviarData = new EventEmitter<string>();

  enviarData(terminoBusqueda: string): void {
    this.eventoEnviarData.emit(terminoBusqueda);
  }
}
