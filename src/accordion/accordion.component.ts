import {Component, Input, ElementRef} from '@angular/core';
import {Accordion} from 'carbon-components';
Accordion.init()
@Component({
  selector: 'accordion',
  templateUrl: './accordion.template.html'
})

export class AccordionComponent {
	@Input() header: string;
	constructor(elm: ElementRef){
    	this.header = elm.nativeElement.getAttribute('header');
  	}
}