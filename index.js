class TaxCalculator{
    
    constructor(){
        this.state = 'TX';
        this.exempt = false;
    }
    #rate = 15;

    #calculateExempt(number){
        return number * 201;
    }

    #calculateNonExempt(number){
        return number + number;
    }
    
    calculate(){
        if(this.exempt){
            return calculateExempt(1.37);
        }else{
            return calculateNonExempt(5.72);
        }
    }
}
