
product.addEventListener('click',function(e){
    if(e.target.className == 'bt1' && e.target.parentNode.querySelector('.bt2').innerText>=1){
        e.target.parentNode.querySelector('.bt2').innerText--;
        console.log(e.target.parentNode.parentNode);

        let prich =e.target.parentNode.parentNode.querySelector('.totalPrich').innerText ;
        let quentaty =e.target.parentNode.querySelector('.bt2').innerText;
        e.target.parentNode.parentNode.querySelector('.countprich').innerHTML=prich*quentaty;

        
    }
    if(e.target.className == 'bt3'){
        e.target.parentNode.querySelector('.bt2').innerText++;
        let prich =e.target.parentNode.parentNode.querySelector('.totalPrich').innerText ;
        let quentaty =e.target.parentNode.querySelector('.bt2').innerText;
        e.target.parentNode.parentNode.querySelector('.countprich').innerHTML=prich*quentaty;

    }

    totalamt();
});


function totalamt(){
    let text = 0;
const totalnumbe = document.querySelectorAll('.countprich');
// console.log( totalamt)
   totalnumbe.forEach(element => {
    console.log(element.innerText);
    text += Number(element.innerText);

    
});
document.getElementById('totalAm').innerHTML=text;
   let tex =document.getElementById('totalAm').innerHTML=text;
   let tex2 = tex / 8;
   document.getElementById('txamt').innerHTML= tex2;
   document.getElementById('grantTotal').innerHTML=tex + tex2;


}