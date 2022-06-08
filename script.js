// 배경설정
let bgChange = document.querySelectorAll('.bg_select input[type="radio"]');

[...bgChange].forEach(function(a,i){
    a.addEventListener( 'change',function(){
        if( a.checked == true ){
            document.getElementsByTagName('body')[0].style.backgroundImage = `url(bg${i+1}.jpg)`;
        }
    });
});

// 선풍기 뒷판
let fanWrap = document.getElementById('fan_top');
let fanBack = document.getElementById('fan_back');

for( let i = 0; i < 9; i++ ){
    let backLine = document.createElement('div');    
    backLine;
    backLine.classList.add('back_line');
    backLine.style.transform = `rotate( ${ 20 * i }deg)`;
    fanBack.appendChild(backLine);
}

// 선풍기 날개
let blade_amount;
let bladeChange = document.querySelector(".fan_seclect input[type='range']");
let fanBlade = document.getElementById('fan_blade');

function BladeDraw(a = 5){
    for( let i = 0; i < a; i++ ){
        let blade = document.createElement('div');
        blade;
        blade.classList.add('blade');
        blade.style.transform = `rotate( ${ 360/a * i }deg)`;
        fanBlade.appendChild(blade);
    }
}

BladeDraw();

bladeChange.addEventListener( 'input',function(e){
    blade_amount = Number(e.currentTarget.value);
    document.querySelector('.fan_amount span').innerHTML = blade_amount;

    fanBlade.innerHTML = "";
    BladeDraw(blade_amount);
});

// 선풍기 바람세기 버튼
let operateBtn = document.querySelectorAll('.btn');
let blade_click;

function BladeAnimate(duration){
    blade_click = fanBlade.animate([
                { transform : "rotate(0deg)" },
                { transform : "rotate(360deg)" }
            ],{
                duration : duration,
                easing : "linear",
                iterations : Infinity
            });
};

    for( let i = 0; i < operateBtn.length; i++ ){
        operateBtn[i].addEventListener( "click", function(e){

            if( i == 0 ){
                e.target.animate([
                    {transform : "translateY(20px)"},
                    {transform : "translateY(0px)"},

                ],300);
                for( let z = 1; z < operateBtn.length; z++ ){
                    operateBtn[z].style.transform = "translateY(0px)";
                }
                blade_click.pause();
                
            }else{
                for( let z = 0; z < operateBtn.length; z++ ){
                    operateBtn[z].style.transform = "translateY(0px)";
                }
                BladeAnimate(1000- (2*i*100));
                e.target.style.transform = "translateY(20px)";
            }
           
        });
    }



// 회전 버튼
let rotateBtn = document.getElementsByClassName('rotate_btn')[0];
let rotateCurrent = false;

let rotateAnimate = fanWrap.animate([
    {transform : "rotate3d(-0.1,0,0,0deg)"},
    {transform : "rotate3d(-0.1,1,0,60deg)"},
    {transform : "rotate3d(-0.1,0,0,0deg)"},
    {transform : "rotate3d(-0.1,-1,0,60deg)"},
    {transform : "rotate3d(-0.1,0,0,0deg)"}
],{
    duration : 6000,
    easing : "linear",
    iterations : Infinity
});

rotateAnimate.pause();

rotateBtn.addEventListener( 'click', function(e){
    rotateCurrent = !rotateCurrent;

    if( rotateCurrent == true ){
        rotateAnimate.play();
        e.target.style.transform = "translateY(20px)";
    }else{
        rotateAnimate.pause();
        e.target.style.transform = "translateY(0px)";
    }
});


    




