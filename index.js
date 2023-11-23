// Your code here
class Polygon{
    constructor(sides){
        this.sides=sides;
    }

    get countSides(){
       // console.log(this.sides);
       
       return this.sides.length;
    }
    get perimeter(){
        const sidetotal = this.sides.reduce((acc,curvalue)=> acc+curvalue);
        return sidetotal;
    }
    get isValid(){
       /*
        if(this.sides[0]==this.sides[1]==this.sides[2]){
          // console.log(this.sides[0]==this.sides[1]==this.sides[2]);
            return this.sides[0]==this.sides[1]==this.sides[2];


        }else{
           // console.log("false");
           return this.sides[0]!=this.sides[1]!=this.sides[2];

        }   */
        return this.sides.every(val => val === this.sides[0]);
    }
    get area(){
        //console.log(this.sides);
        return Math.pow(this.sides[0],2)

    }


}


class Triangle extends Polygon{
    
}
class Square extends Polygon{



}
