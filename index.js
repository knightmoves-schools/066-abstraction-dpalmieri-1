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
            return this.#calculateExempt(1.37);
        }else{
            return this.#calculateNonExempt(5.72);
        }
    }
}
