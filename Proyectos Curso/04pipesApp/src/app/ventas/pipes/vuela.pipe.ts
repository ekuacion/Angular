import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform{
    
    transform(enTexto:boolean = true): string {

        return (enTexto) 
            ? 'vuela' 
            : 'no vuela' ;  

    }

}