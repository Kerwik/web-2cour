let t=0;
let createObj= {
    start(){
        z=0;
        if(document.getElementById('hours').value!=00 || document.getElementById('min').value!=00 || document.getElementById('sec').value!=00){
            document.getElementById('stop_timer').style.display='block';
            sec=document.getElementById('sec').value;
            min=document.getElementById('min').value;
            hours=document.getElementById('hours').value;
            if(z==0){
                sc=sec;
                mn=min;
                hr=hours;
            }
            else{
                min=mn;
                hours=hr;
                sec=sc;
            }
            document.getElementById('timer').innerHTML=vers(hours)+":"+vers(min)+":"+vers(sec);
            setTimeout(Seconds,1000);
            
        }
    },
    stop(){
        z=1;
        if(sec==0 && min==0 && hours==0){
            min=mn;
            hours=hr;
            sec=sc;
        }
        else{
            sc=sec;
            mn=min;
            hr=hours;
            sec=0;
            min=0;
            hours=0;           
        }
        document.getElementById('nxt').style.display='block';
    },
    next(){
        min=mn;
        hours=hr;
        sec=sc;
        document.getElementById('timer').innerHTML=vers(hours)+":"+vers(min)+":"+vers(sec);
        document.getElementById('nxt').style.display='none';
        setTimeout(Seconds,1000);
    }
}
function Seconds(){
    if(sec!=0){
        sec--;
        document.getElementById('timer').innerHTML=vers(hours)+":"+vers(min)+":"+vers(sec);
        setTimeout(Seconds,1000);
    }
    else{
        if(min!=0){
            Minuts();
        }
        else{
            Hours();
        }
        return;
    }
}
function Minuts(){
    if(min!=0){
        min--;
        sec=59;
        document.getElementById('timer').innerHTML=vers(hours)+":"+vers(min)+":"+vers(sec);
        setTimeout(Seconds,1000);
    }
    else{
        if(hours!=0){
            Hours();
        }
        else{
            Seconds();
        }
        return;
    }
}
function Hours(){
    if(hours!=0){
        hours--;
        sec=59;
        min=59;
        document.getElementById('timer').innerHTML=vers(hours)+":"+vers(min)+":"+vers(sec);
        setTimeout(Seconds,1000);
    }
    else{
        return;
    }
}
function vers(time){
    if(time>0 && time<10){
        return "0"+time;
    }
    else if(time==0){
        return "00";
    }
    else{
        return time;
    }
}
function getName(){
    if(localStorage.getItem("name")!=null){
        document.getElementById('user').innerHTML=`Вы ${localStorage.getItem("name")}, здравствуйте!!!`;
        document.getElementById('namess').innerHTML=localStorage.getItem("name");
    }
}
function SurName(){
    if(document.getElementById('fio').value=="" || document.getElementById('fio').value[0]==" "){
        document.getElementById('symbols').style.color='#d6c1ff';
        document.getElementById('symbols').style.fontSize='1.8vh';
        return;
    }
    if(document.getElementById('fio').value.length>21){
        document.getElementById('symbols').style.color='red';
        document.getElementById('symbols').style.fontSize='2vh';
        return;
    }

    document.getElementById('symbols').style.color='#d6c1ff';
    document.getElementById('symbols').style.fontSize='1.8vh';
    let f=document.getElementById('fio').value;
    localStorage.setItem("name",f);
    document.getElementById('user').innerHTML=`Вы ${f}, здравствуйте!!!`;
    document.getElementById('namess').innerHTML=f;
}
function Triangle(){
    if(isNaN(document.getElementById('height').value*document.getElementById('osnov').value)){
        document.getElementById('resTriangle').innerHTML='Некорректные данные';
        return;
    }
    if(document.getElementById('height').value=="" || document.getElementById('height').value[0]==" " || document.getElementById('height').value[0]==0){
        document.getElementById('resTriangle').innerHTML='Некорректные данные';
        return;
    } 
    if(document.getElementById('osnov').value=="" || document.getElementById('osnov').value[0]==" " ||  document.getElementById('osnov').value[0]==0 ){
        document.getElementById('resTriangle').innerHTML='Некорректные данные';
        return;
    }
    document.getElementById('resTriangle').innerHTML="Площадь треугольника = "+(document.getElementById('height').value*document.getElementById('osnov').value)/2;
}
function Strings(){
    if(document.getElementById('str1').value=="" || document.getElementById('str2').value==""){
        document.getElementById('strings').innerHTML="Некорректные данные";
        return;
    }
    if(document.getElementById('str1').value.length==document.getElementById('str2').value.length){
        document.getElementById('strings').innerHTML="= Строки абсолютно равны =";
    }
    else if(document.getElementById('str1').value.length>document.getElementById('str2').value.length){
        document.getElementById('strings').innerHTML="В строке ⇑ больше символов";
    }
    else if(document.getElementById('str1').value.length<document.getElementById('str2').value.length){
        document.getElementById('strings').innerHTML="В строке ⇓ больше символов";
    }
}
function Arrays(){
    let arr=[document.getElementById('el1').value,document.getElementById('el2').value,document.getElementById('el3').value,document.getElementById('el4').value,document.getElementById('el5').value];
    if(isNaN(document.getElementById('el1').value*document.getElementById('el2').value*document.getElementById('el3').value*document.getElementById('el4').value*document.getElementById('el5').value)){
        document.getElementById("resArr").innerHTML="Вы ввели некорректное значение элемента массива";
        return;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]==""){
            document.getElementById("resArr").innerHTML="Вы ввели не 5 элементов";
            return;
        }
    }
    document.getElementById('resArr').innerHTML="Максимальное значение: "+Math.max(arr[0],arr[1],arr[2],arr[3],arr[4])+", минимальное значение: "+Math.min(arr[0],arr[1],arr[2],arr[3],arr[4]);
}
let values="";
function click1(value){
    if(document.getElementById('q2').style.display='none'){
        if(value!=0){
            values+=value; 
        } 
        document.getElementById('quest1').style.display='contents';
        document.getElementById('quest1_1').style.display='contents';
        document.getElementById('quest1_2').style.display='contents';
        document.getElementById('q2').style.display='block';
    }
}
function click2(value){
    if(document.getElementById('q3').style.display='none'){
        if(value!=0){
            values+=value; 
        }  
        document.getElementById('quest2').style.display='contents';
        document.getElementById('quest2_1').style.display='contents';
        document.getElementById('quest2_2').style.display='contents';
        document.getElementById('q3').style.display='block';
    }
}
function click3(value){
    if(document.getElementById('q4').style.display='none'){
        if(value!=0){
            values+=value; 
        }  
        document.getElementById('quest3').style.display='contents';
        document.getElementById('quest3_1').style.display='contents';
        document.getElementById('quest3_2').style.display='contents';

        document.getElementById('q4').style.display='block';
    }
}
function click4(value){
    if(document.getElementById('q5').style.display='none'){
        if(value!=0){
            values+=value; 
        }  
        document.getElementById('quest4').style.display='contents';
        document.getElementById('quest4_1').style.display='contents';
        document.getElementById('q5').style.display='block';
    }
}
function click5(value){
    if(document.getElementById('q6').style.display='none'){
        if(value!=0){
            values+=value; 
        }  
        document.getElementById('quest5').style.display='contents';
        document.getElementById('quest5_1').style.display='contents';
        document.getElementById('quest5_2').style.display='contents';
        document.getElementById('q6').style.display='block';
    }
}
function click6(value){
    if(document.getElementById('q7').style.display='none'){
        if(value!=0){
            values+=value; 
        }  
        document.getElementById('quest6').style.display='contents';
        document.getElementById('quest6_1').style.display='contents';
        document.getElementById('quest6_2').style.display='contents';
        document.getElementById('q7').style.display='block';
    }
}
function click7(value){
    if(document.getElementById('q8').style.display='none'){
        if(value!=0){
            values+=value; 
        }  
        document.getElementById('quest7').style.display='contents';
        document.getElementById('quest7_1').style.display='contents';
        document.getElementById('quest7_2').style.display='contents';
        document.getElementById('q8').style.display='block';
    }
}
function click8(value){
    if(document.getElementById('q9').style.display='none'){
        if(value!=0){
            values+=value; 
        }  
        document.getElementById('quest8').style.display='contents';
        document.getElementById('quest8_1').style.display='contents';
        document.getElementById('quest8_2').style.display='contents';
        document.getElementById('q9').style.display='block';
    }
}
function click9(value){
    if(document.getElementById('q10').style.display='none'){
        if(value!=0){
            values+=value; 
        }  
        document.getElementById('quest9').style.display='contents';
        document.getElementById('quest9_1').style.display='contents';
        document.getElementById('quest9_2').style.display='contents';
        document.getElementById('quest9_3').style.display='contents';
        document.getElementById('q10').style.display='block';
    }
}
function click10(value){
        document.getElementById('resTest').innerHTML="Ваш результат:";
        if(value!=0){
            values+=value;
        } 
        document.getElementById('quest10').style.display='contents';
        document.getElementById('quest10_1').style.display='contents';
        document.getElementById('quest10_2').style.display='contents';
        document.getElementById('resTest').style.display='table';
        if(values.length<11 && values.length>4 && values.length==0){
            document.getElementById('resTest').innerHTML+=values.length+" правильных ответов";
        }
        else if(values.length<5 && values.length>1){
            document.getElementById('resTest').innerHTML+=values.length+" правильных ответа";
        }
        else{
            document.getElementById('resTest').innerHTML+=values.length+" правильный ответ";
        }
}
function waitTheme(){
    document.getElementById('margin').style.display='none';
    document.getElementById('top').style.display='none';
    document.getElementById('main').style.display='none';
    document.getElementById('body').style.background='url(back2.jpg)';
    document.getElementById('body').style.height="100vh";
    document.getElementById('button_theme').style.display="block";
    document.getElementById('button_theme').style.height="100vh";
    document.getElementById('button_theme').style.width="100vw";
    document.getElementById('time_name').innerHTML="";
    let d = new Date();
    if(localStorage.getItem("name")!=null){
        document.getElementById('time_name').innerHTML+=localStorage.getItem("name")+" "+d.getDate()+".0"+d.getMonth()+"."+d.getFullYear();
    }
    else{
        document.getElementById('time_name').innerHTML+="Гость "+d;
    }
}
function mainLoad(){
    document.getElementById('time_name').innerHTML="";
    document.getElementById('margin').style.display='block';
    document.getElementById('top').style.display='block';
    document.getElementById('main').style.display='block';
    document.getElementById('body').style.background='url(back.jpg)';
    document.getElementById('body').style.height="700vh";
    document.getElementById('button_theme').style.display="none";
}