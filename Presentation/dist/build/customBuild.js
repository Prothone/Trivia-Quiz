var score1 = 0;
var score2 = 0;
var i;
var wrong=0;
var lastID = -1;
var lastParentID = -1;
var count=0;    
var wrongL = ['0','0','0','0','0','0'];
var audio;

for(i=0;i<5;i++)
{
    document.getElementsByClassName("score1")[i].innerHTML = score1;
    document.getElementsByClassName("score2")[i].innerHTML = score2;
}

function incrementValue1()
{
    score1 = score1 + 5;
    for(i=0;i<5;i++)
    {
        document.getElementsByClassName("score1")[i].innerHTML = score1;
    }
    
}
function incrementValue2()
{
    score2 = score2 + 5;
    for(i=0;i<5;i++)
    {
        document.getElementsByClassName("score2")[i].innerHTML = score2;
    }
}
//$( document ).ready( function(){
//        $('.choice').on('click','.correct',function () {
//             $('.correct').removeClass('correctSelected');
//             $(this).addClass('correctSelected');
//             });
//    });
  
$('.choice').on('click','.correct',function () {
         $('.correct').removeClass('correctSelected');
         $(this).addClass('correctSelected');
         });

function SelectedC(){
    //document.getElementsByClassName(".correct")[0].classname = ".correctSelected";
    document.getElementsByClassName("correct")[0].className =
    document.getElementsByClassName("correct")[0].className.replace('correct', 'correctSelected' )
    document.getElementById('correct').play();
}

function SelectedW(id){
//    document.getElementsByClassName("wrong")[id].classname="wrongSelected Selected";
//    document.getElementsByClassName("correct")[0].className =
//    document.getElementsByClassName("correct")[0].className.replace('correct', 'correctSelected' )

//    if(id-wrong<lastParentID)
//    {
//        document.getElementsByClassName("wrong")[id-wrong+1].className =
//        document.getElementsByClassName("wrong")[id-wrong+1].className.replace('wrong', 'wrongSelected' )
//    }
//    else
//    {
//        document.getElementsByClassName("wrong")[id-wrong].className =
//        document.getElementsByClassName("wrong")[id-wrong].className.replace('wrong', 'wrongSelected' )
//    }
//    lastID=id-wrong;
//    lastParentID=id;
//    wrong++;
    i=0;
    count=0;
    while(i<id)
    {
        if(wrongL[i] == '1')
        {
            count++;
        }
        i++;
    }
    wrongL[id]= '1';
    document.getElementsByClassName("wrong")[id-count].className =
    document.getElementsByClassName("wrong")[id-count].className.replace('wrong', 'wrongSelected' )
    document.getElementById('wrong').play();
}