// You are given a function, Square, that takes four parameters, a,
// b, c, d, denoting the length of the square edges.
// Using prototype properties, add a method to Square named
// isSquare that prints true if a Square object has equal edges
// and false if they are unequal.
// Here is the Square function:

function Square(a, b, c, d){
this.a = a;
this.b = b;
this.c = c;
this.d = d;
}

Square.prototype.isSquare =function (){
if(this.a==this.b && this.b==this.c && this.c==this.d){
    console.log(true)
    return true
}else{
    console.log(false)
    return false;
}
}

let p = new Square(1,1,1,1);
p.isSquare()
