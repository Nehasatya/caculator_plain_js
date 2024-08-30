const btn = document.querySelectorAll('.btn');
console.log(document.querySelector('.cal-display'));
let calc_display = document.querySelector('.cal-display');
let cal_calc = document.querySelector('.cal-calc');

let calc = "";
let arr = Array.from(btn);

calc_display.innerHTML = '';
cal_calc.innerHTML = '';

console.log(arr);
arr.forEach( (buttons) => {

    buttons.addEventListener('click', (e) =>{
        
        console.log('Button Clicked!');
        let calc_res;
        if(e.target.innerHTML == '=')
        {
            try{  
                calc = calc.split('').map((char) => {

                    if(char === '^'){
                       return '**';
                    }   
                    return char;
                }).join('');          
            calc_res =  eval(calc); 
            calc_display.innerHTML = calc_res;
            cal_calc.innerHTML = '';
            calc = calc_res;
            console.log("cal_calc ",cal_calc.innerHTML,"calc ",calc,"calc_display ",calc_display.innerHTML,"calc_res ",calc_res);
            }   
            catch(err)
            {
                alert("Please enter a valid expression");
                calc = '';
                cal_calc.innerHTML='';
                calc_display.innerHTML='';
            }                    
           
        }
        else if(e.target.innerHTML == 'AC')
        {
            calc = '';
            cal_calc.innerHTML='';
            calc_display.innerHTML='';
        }
        else if(e.target.innerHTML == 'DEL')
        {
            calc = calc.toString();            
            if(calc.length == 0) alert("Didn't have anything to delete");
            calc = calc.substring(0,calc.length-1);
            cal_calc.innerHTML = calc; 
            calc_display.innerHTML = '';
            console.log("cal_calc ",cal_calc.innerHTML,"calc ",calc,"calc_display ",calc_display.innerHTML,"calc_res ",calc_res);
        }
        else {
            calc += e.target.innerHTML;
            cal_calc.innerHTML = calc;
            if(calc_res !== null)
            calc_display.innerHTML='';
            console.log("cal_calc ",cal_calc.innerHTML,"calc ",calc,"calc_display ",calc_display.innerHTML,"calc_res ",calc_res);
        }
    })
})




