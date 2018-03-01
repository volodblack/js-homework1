const a = parseFloat(prompt('Enter a '));
const b = parseFloat(prompt('Enter b '));
const c = parseFloat(prompt('Enter c '));

const answer = solveQuadraticEquation(a, b);
document.write(answer);

function solveQuadraticEquation(a, b) {
    const d = discr(a, b, c);
    if (d < 0) {
        alert('There are no valid solutions');
    }
    else if (d === 0) {
       const x1 = (-b) / (2 * a);
       const x2 = (-b) / (2 * a);
       return `x1 = ${x1} , and x2 = ${x2}`;
    }
    else {
       const x1 = (-b + Math.sqrt(d)) / (2 * a);
       const x2 = (-b - Math.sqrt(d)) / (2 * a);
       return `x1 = ${x1} , and x2 = ${x2}`;
    }
}

function discr(a, b, c) {
    const d = b * b - 4 * a * c;
    return d;
}