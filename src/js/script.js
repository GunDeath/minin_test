console.log('JS is working ... ')

//index.html

//letter send form
let letterForm_hePay = document.getElementById('he_pay'),
    letterForm_wePay = document.getElementById('we_must_pay');

const btn_back = document.getElementById('btn_back');


//money form
let first_field = document.getElementById('first_field'),
    second_field = document.getElementById('second_field'),
    coefficient_one = 0.95, coefficient_two = 1.05;

// const change_btn = document.getElementById('change_btn'); // btn form HeWePay


////////////////////////////////////////////////////////////////////
//about_two.html
let field_value = document.getElementById('form_input_one'),
    phone_number = document.getElementById('form_input_two'),
    my_pay = document.getElementById('form_input_tree');



if(first_field){
    first_field.addEventListener('input', ()=>{
        if(first_field.value >=100){
            second_field.value = (first_field.value * coefficient_one).toFixed(1);
        }else{
            second_field.value = 0;
        }

    })
}

if(second_field){
    second_field.addEventListener('input', ()=>{
        if(second_field.value >=100){
            first_field.value = (second_field.value * coefficient_two).toFixed(1);
        }else{
            first_field.value = 0;
        }

    })
}

// if(change_btn){
//     change_btn.addEventListener('click', () => {
//         document.getElementById('fields_id').style.display = 'none'
//         document.getElementById('text_main_block').style.display = 'none'
//         document.getElementById('number_form').style.display = 'block'
//
//         letterForm_hePay.value = Number(first_field.value);
//         letterForm_wePay.value = Number(second_field.value);
//         console.log(`HePay: ${letterForm_hePay.value}; WePay: ${letterForm_wePay.value}`)
//     })
// }

if(btn_back){
    btn_back.addEventListener('click', () => {
        document.getElementById('fields_id').style.display = null
        document.getElementById('text_main_block').style.display = null
        document.getElementById('number_form').style.display = 'none'
        console.log('click')
    })
}



if(field_value){
    console.log(Number(field_value.value));
    console.log(typeof(field_value.value));
    console.log(typeof(Number(field_value.value)));

    console.log(Number(phone_number.value));
    console.log(typeof(phone_number.value));
    console.log(typeof(Number(phone_number.value)));

    console.log(Number(my_pay.value));
    console.log(typeof(my_pay.value));
    console.log(typeof(Number(my_pay.value)));
}

