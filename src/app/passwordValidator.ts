import { AbstractControl } from "@angular/forms";

export function passwordValidator(control:AbstractControl){
    const password=control.value;
    const hasUpperCase=/[A-Z]/.test(password);
    const hasNumber=/[0-9]/.test(password);
    const hasSpecialCarecter=/[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength= password.length>=8;

    if(hasSpecialCarecter&& hasNumber&& hasUpperCase&&isValidLength){
        return null;
    }else{
        return {'passwordValidator':true}
    }
}