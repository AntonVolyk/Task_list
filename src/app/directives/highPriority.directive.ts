import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

@Directive({
	selector: '[highPriority]'
})
export class HighPriorityDirective implements OnInit {
	@Input('highPriority') isHighPriority = false;
	
	constructor(private elementRef: ElementRef, private renderer: Renderer2){}

	ngOnInit() {
		if (this.isHighPriority) {
			this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "bold");
			this.renderer.setStyle(this.elementRef.nativeElement, "color", "red");
			this.renderer.setStyle(this.elementRef.nativeElement, "font-weight", "1.5rem");
		}
	}
}