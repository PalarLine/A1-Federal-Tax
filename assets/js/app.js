
function calcTax() {


let income = +incomeSum.value;

const  rate1 = 0.1,
       rate2 = 0.12,
       rate3 = 0.22,
       rate4 = 0.24,
       rate5 = 0.32,
       rate6 = 0.35,
       rate7 = 0.37;

const standardDeduction = 12550;

income = income - standardDeduction;

let tax = 0;


        if(income <= 0) {
            tax = 0;
    
        }
            else if(income <= 9950) {
               tax = (income) * rate1;
   
            }
                if(income > 9950 && income <= 40525) {
                    tax = (9950 * rate1) + ((income - 9950) * rate2);
       
                }

                if(income > 40525 && income <= 86375) {
                    tax = (9950 * rate1) + ((40525 - 9950) * rate2) + ((income - 40525) * rate3);
     
                }

                if(income > 86375 && income <= 164925) {
                    tax = (9950 * rate1) + ((40525 - 9950) * rate2) + ((86375 - 40525) * rate3) + ((income - 86375) * rate4);
    
                }

                if(income > 164925 && income <= 209425) {
                    tax = (9950 * rate1) + ((40525 - 9950) * rate2) + ((86375 - 40525) * rate3)
                     + ((164925 - 86375) * rate4) + ((income - 164925) * rate5);
    
                }

                if(income > 209425 && income <= 523600) {
                    tax = (9950 * rate1) + ((40525 - 9950) * rate2) + ((86375 - 40525) * rate3) + ((164925 - 86375) * rate4) 
                    + ((209425 - 164925) * rate5) + ((income - 209425) * rate6);
    
                }

                if(income > 523600) {
                    tax = (9950 * rate1) + ((40525 - 9950) * rate2) + ((86375 - 40525) * rate3) + ((164925 - 86375) * rate4) 
                    + ((209425 - 164925) * rate5) + ((523600 - 209425) * rate6) + ((income - 523600) * rate7);
    
                }


    taxSum.innerHTML = `$` + ` ` + (tax.toFixed(2));

    
 
}












