import * as _ from 'lodash';

function component(text: string) {
    let isDone: boolean = false;

    if (isDone == false) {
    }

    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', text], ' ');
    return element;
}

class Util {
    static addComma(price: number): string {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return price.toString().replace(regexp, ',');
    }

    static pad(text: string, width: number, character: string): string {
        return text.length >= width
            ? text
            : new Array(width - text.length + 1).join(character ? character : '0') + text;
    }
}

document.body.appendChild(component(Util.addComma(20005) + Util.pad('20', 4, '0')));
