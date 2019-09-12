import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
 name: 'http'
})

export class ContentPipe implements PipeTransform
{
    public imgurl:string;
    transform(val:string,arg)
    {
        if(arg==='https')
        {
            if(val.startsWith('http'))
            {
                val=val.replace("http", "https");
            }
        }
        return val;
    }
}