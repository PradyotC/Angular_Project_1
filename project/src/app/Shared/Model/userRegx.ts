export class UserRegx
{
    static Username(control)
    {
        let regx = /^[a-zA-Z\-]+$/;
        let valid = regx.test(control.value);
        return valid ? null : {username:null}
    }
    static Password(control)
    {
        let regx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{6,16}$/;
        let valid = regx.test(control.value);
        return valid ? null : {password:null}
    }
    static Email(control)
    {
        let regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regx.test(control.value);
        return valid ? null : {email:null}
    }
}