import { AbstractControl } from "@angular/forms";

export function tcsMail(control:AbstractControl){
    if(control.value.includes('@tcs')){
        return null;
    }else{
        return{'tcsMail':'please use Tcs mail'}
    }
}