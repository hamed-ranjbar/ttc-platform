import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlFormatter'
})
export class HtmlFormatterPipe implements PipeTransform {

  transform(text: string): string {
    text = text.replace(/\*b/g, '<b>').replace(/b\*/g, '</b>').replace(/\n/g, '<br/>');
    return text;
  }

}
