var randomNumber1=Math.random();
randomNumber1=(randomNumber1*6)+1;
randomNumber1=Math.floor(randomNumber1);
var randomImageSrc="images/dice"+randomNumber1+".png";
var img1=document.querySelectorAll('img')[0].setAttribute('src',randomImageSrc);

var randomNumber2=Math.random();
randomNumber2=(randomNumber2*6)+1;
randomNumber2=Math.floor(randomNumber2);
var randomImageSrc2="images/dice"+randomNumber2+".png";
var img2=document.querySelectorAll('img')[1].setAttribute('src',randomImageSrc2);

if(randomNumber1>randomNumber2)
    document.querySelector("h1").innerHTML="Player1Wins!";
else if(randomNumber1<randomNumber2)
document.querySelector("h1").innerHTML="Player2Wins!";
else
document.querySelector("h1").innerHTML="Draw!";