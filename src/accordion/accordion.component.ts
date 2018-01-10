import {Component, Input, ElementRef} from '@angular/core';
import {Accordion} from 'carbon-components';
@Component({
  selector: 'accordion',
  templateUrl: './accordion.template.html'
})

export class AccordionComponent {
	@Input() header: string;
	constructor(elm: ElementRef){
    	this.header = elm.nativeElement.getAttribute('header');
  	}
  	isExpanded = false;

    toggle(newValue?) {
        if (newValue !== undefined) {
            this.isExpanded = newValue;
        } else {
            this.isExpanded = !this.isExpanded;
        }
    }
}