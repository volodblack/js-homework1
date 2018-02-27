let x1 = 0;
let x2 = 0;

const a = parseFloat(prompt('Enter a '));
const b = parseFloat(prompt('Enter b '));
const c = parseFloat(prompt('Enter c '));

solveQuadraticEquation();

function solveQuadraticEquation() {
    const d = b * b - (4 * a * c);
    if (d < 0) {
        alert('There are no valid solutions.');
    }
    else if (d === 0) {
        x1 = x2 = (-b) / 2 * a;
        document.write('x<sub>1</sub> = x<sub>2</sub> = ' + x2 + '.');
    }
    else {
        x1 = (-b + Math.sqrt(d)) / 2 * a;
        x2 = (-b - Math.sqrt(d)) / 2 * a;
        document.write('x<sub>1</sub> = ' + x1 + ';');
        document.write('<br>');
        document.write('x<sub>2</sub> = ' + x2 + '.');
    }
}




// const a = parseFloat(prompt('Enter a '));
// const b = parseFloat(prompt('Enter b '));
// const c = parseFloat(prompt('Enter c '));

// const answer = solveQuadraticEquation();
// document.write(answer);

// function solveQuadraticEquation(x1, x2) {
//     const d = discr(a, b, c);
//     if (d < 0) {
//         alert('There are no valid solutions');
//     }
//     else if (d === 0) {
//         x1 = x2 = (-b) / (2 * a);
//     }
//     else {
//         x1 = (-b + Math.sqrt(d)) / (2 * a);
//         x2 = (-b - Math.sqrt(d)) / (2 * a);
//     }
//     return [x1, x2];
// }

// function discr(a, b, c) {
//     let d = b * b - 4 * a * c;
//     return d;
// }











// let x1 = 0;
// let x2 = 0;

// const a = parseFloat(prompt('Enter a '));
// const b = parseFloat(prompt('Enter b '));
// const c = parseFloat(prompt('Enter c '));

// const d = b * b - (4 * a * c);

// if (d < 0) {
//     alert('There are no valid solutions');
// }
// else if (d === 0) {
//     x1 = x2 = (-b) / 2 * a;
//     document.write('x1, x2 = ' + x2);
// }
// else {
//     x1 = (-b + Math.sqrt(d)) / 2 * a;
//     x2 = (-b - Math.sqrt(d)) / 2 * a;
//     document.write('x1 = ' + x1);
//     document.write('<br>');
//     document.write('x2 = ' + x2);
// }
