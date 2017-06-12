import {Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
    selector: '[bold]',
    host: {
        '(mouseenter)' : 'onMouseEnter()',
        '(mouseleave)' : 'onMouseLeave()'
    }
})



export class boldDirective {
@Input('bold') elt: ElementRef;
    constructor(
        private elRef: ElementRef,
        private renderer: Renderer
    ){
        this.renderer.setElementStyle(this.elRef.nativeElement, 'cursor' , 'pointer')
    }

    
    onMouseEnter() {
        this.setFontWeight('bold');
    }
    onMouseLeave() {
        this.setFontWeight('normal');
    }

    private setFontWeight(val: string){
        this.renderer.setElementStyle(this.elRef.nativeElement, 'font-weight', val)
    };
} 
