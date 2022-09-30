let idx=0;
const pepsi=
[
  {name:"Pepsi Diet", amount:"350 cl", percent:"8.6%", fat:"0g", fat_per:"0%", sodium:"28mg", sodium_per:"1%",carbo:"48g",carbo_per:"15.3%",protein:"0g",protein_per:"0%",ml:"300 ML", poster1:"img/1 Pepsi white.png",poster2:"img/1 Pepsi blue.png",cover:"img/pepsi diet.png"},
  {name:"Pepsi Classic", amount:"330 cl", percent:"7.5%", fat:"0g", fat_per:"0%", sodium:"30mg", sodium_per:"1%",carbo:"41g",carbo_per:"14%",protein:"0g",protein_per:"0%",ml:"330 ML", poster1:"img/2 can white.png",poster2:"img/2 can blue.png",cover:"img/can.png"},
  {name:"Pepsi 500 ML", amount:"350 cl", percent:"12.9%", fat:"0g", fat_per:"0%", sodium:"40mg", sodium_per:"2%",carbo:"52g",carbo_per:"21.7%",protein:"0g",protein_per:"0%",ml:"500 ML", poster1:"img/3 Pepsi white.png",poster2:"img/3 Pepsi blue.png",cover:"img/pepsi .5ltr.png"},
  {name:"Pepsi 1 LTR", amount:"510 cl", percent:"16.3%", fat:"0g", fat_per:"0%", sodium:"49mg", sodium_per:"2%",carbo:"61g",carbo_per:"27.4%",protein:"0g",protein_per:"0%",ml:"1 LTR", poster1:"img/4 Pepsi white.png",poster2:"img/4 Pepsi blue.png",cover:"img/pepsi 1ltr.png"},
  {name:"Pepsi 1.5 LTR", amount:"625 cl", percent:"19.4%", fat:"0g", fat_per:"0%", sodium:"50mg", sodium_per:"2%",carbo:"65g",carbo_per:"30.2%%",protein:"0g",protein_per:"0%",ml:"1.5 LTR", poster1:"img/5 Pepsi white.png",poster2:"img/5 Pepsi blue.png",cover:"img/pepsi 1.5ltr.png"},
  {name:"Pepsi 2.25 LTR", amount:"650 cl", percent:"23.1%", fat:"0g", fat_per:"0%", sodium:"50mg", sodium_per:"2%",carbo:"66g",carbo_per:"30.3%",protein:"0g",protein_per:"0%",ml:"2.25 LTR", poster1:"img/6 Pepsi white.png",poster2:"img/6 Pepsi blue.png",cover:"img/pepsi 2ltr.png"}
]
Array.from(document.getElementsByClassName('card_pepsi')).forEach((ele,i)=>
{
    ele.addEventListener('mouseover',()=>
    {
        document.getElementsByClassName('pepsi_img')[i].src=pepsi[i].poster1;
    })
    ele.addEventListener('mouseout',()=>
    {
        document.getElementsByClassName('pepsi_img')[i].src=pepsi[i].poster2;
    })
})
Array.from(document.getElementsByClassName('card_pepsi')).forEach((ele,i)=>
{
    ele.addEventListener('click',()=>
    {
        document.getElementById('main').src=pepsi[i].cover;
        document.getElementById('title').innerText=pepsi[i].name;
        document.getElementById('ml_title').innerText=pepsi[i].ml;
        document.getElementById('cl').innerText=pepsi[i].amount;
        document.getElementById('cl1').innerText=pepsi[i].percent;
        document.getElementById('na').innerText=pepsi[i].sodium;
        document.getElementById('na1').innerText=pepsi[i].sodium_per;
        document.getElementById('fat').innerText=pepsi[i].fat;
        document.getElementById('fat1').innerText=pepsi[i].fat_per;
        document.getElementById('pro').innerText=pepsi[i].protein;
        document.getElementById('pro1').innerText=pepsi[i].protein_per;
        document.getElementById('carbo').innerText=pepsi[i].carbo;
        document.getElementById('carbo1').innerText=pepsi[i].carbo_per;
    })
})
document.getElementById('next').addEventListener('click',(ele)=>
{
      if(idx>=5)
      {
        idx=0;
      }
      else{
        idx+=1;
      }
        document.getElementById('main').src=pepsi[idx].cover;
        document.getElementById('title').innerText=pepsi[idx].name;
        document.getElementById('ml_title').innerText=pepsi[idx].ml;
        document.getElementById('cl').innerText=pepsi[idx].amount;
        document.getElementById('cl1').innerText=pepsi[idx].percent;
        document.getElementById('na').innerText=pepsi[idx].sodium;
        document.getElementById('na1').innerText=pepsi[idx].sodium_per;
        document.getElementById('fat').innerText=pepsi[idx].fat;
        document.getElementById('fat1').innerText=pepsi[idx].fat_per;
        document.getElementById('pro').innerText=pepsi[idx].protein;
        document.getElementById('pro1').innerText=pepsi[idx].protein_per;
        document.getElementById('carbo').innerText=pepsi[idx].carbo;
        document.getElementById('carbo1').innerText=pepsi[idx].carbo_per;
})
document.getElementById('left_btn').addEventListener('click',(ele)=>
{
      if(idx<=0)
      {
        idx=5;
      }
      else{
        idx-=1;
      }
        document.getElementById('main').src=pepsi[idx].cover;
        document.getElementById('title').innerText=pepsi[idx].name;
        document.getElementById('ml_title').innerText=pepsi[idx].ml;
        document.getElementById('cl').innerText=pepsi[idx].amount;
        document.getElementById('cl1').innerText=pepsi[idx].percent;
        document.getElementById('na').innerText=pepsi[idx].sodium;
        document.getElementById('na1').innerText=pepsi[idx].sodium_per;
        document.getElementById('fat').innerText=pepsi[idx].fat;
        document.getElementById('fat1').innerText=pepsi[idx].fat_per;
        document.getElementById('pro').innerText=pepsi[idx].protein;
        document.getElementById('pro1').innerText=pepsi[idx].protein_per;
        document.getElementById('carbo').innerText=pepsi[idx].carbo;
        document.getElementById('carbo1').innerText=pepsi[idx].carbo_per;
})

