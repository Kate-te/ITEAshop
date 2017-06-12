import {Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
    selector: '[while]'
})



export class whileDirective {
    constructor(
        private template: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ){}

    @Input() set while(condition: boolean) {
        if(condition){
            this.viewContainer.createEmbeddedView(this.template);
        }else{
            this.viewContainer.clear();
        }
    }
} 
