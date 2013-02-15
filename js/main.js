window.onload = function() {
canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

val=0; turn=0; sixers=0; val_m=6; color_t='white';

function main(){

	grid_init();
	
	spawn( 0 , 0 , 'red' );
	spawn( 384 , 0 , '#00bb00');
	spawn( 0, 384 , 'blue');
	spawn( 384 , 384 , '#FAEA0F' );
	grid_color( [ { 'x' : '48'  ,'y' : '240'  } , { 'x' : '48'  ,'y' : '288' } , { 'x' : '96'  ,'y' : '288' }, { 'x' : '144'  ,'y' : '288' } , { 'x' : '192'  ,'y' : '288' } ]  , 'red');
	grid_color( [ { 'x' : '336'  ,'y' : '48'  } , { 'x' : '288'  ,'y' : '48' } , { 'x' : '288'  ,'y' : '96' }, { 'x' : '288'  ,'y' : '144' } , { 'x' : '288'  ,'y' : '192' } ]  , '#00bb00');
	grid_color( [ { 'x' : 240  ,'y' : 48*11  } , { 'x' : 288  ,'y' : 48*11 } , { 'x' : '288'  ,'y' : 48*10 }, { 'x' : '288'  ,'y' : 48*9 } , { 'x' : '288'  ,'y' : 48*8 } ]  , 'blue');
	grid_color( [ { 'x' : 48*11  ,'y' : 48*7  } , { 'x' : 48*11  ,'y' : 48*6 } , { 'x' : 48*10  ,'y' : 48*6 }, { 'x' : 48*9  ,'y' : 48*6 } , { 'x' : 48*8  ,'y' : 48*6 } ]  , '#FAEA0F');
	grid_color( [ { 'x' : 48  ,'y' : 48*7  } , { 'x' : 48*5  ,'y' : 48 } , { 'x' : 48*11  ,'y' : 48*5 }, { 'x' : 48*7  ,'y' : 48*11}]  , '#bfbfac');
	home_init();
}

function grid_init(){
	 context.strokeStyle =	 "#000";
	context.strokeRect(0, 0, 624, 624);
	for ( x = 0; x <= 624; x += 48) {
	  context.moveTo(x, 0);
  	context.lineTo(x, 624);
	}
	for ( y = 0; y <= 624; y += 48) {
  	context.moveTo(0, y);
  	context.lineTo(624, y);
	}
	context.strokeStyle = "#000";
	context.stroke();
}

function spawn( x , y , color )
{
	 context.fillStyle = color ;
	 context.fillRect( x , y , 5*48 , 5*48 );
	 context.strokeRect(x , y , 5*48 , 5*48 );
	 context.fillStyle = 'white' ;
	 context.fillRect( x+48 , y+48 , 3*48 , 3*48 );	
	 context.strokeRect(x+48 , y+48 , 3*48 , 3*48);
	 context.beginPath();
	 context.arc(x+48*2 , y+48*2 , 18, 0 , 2 * Math.PI, false); context.closePath(); context.fillStyle = color;
      context.fill();context.beginPath();
	 context.arc(x+48*2 + 48 , y+48*2 , 18, 0 , 2 * Math.PI, false);context.closePath();context.fillStyle = color;
      context.fill();context.beginPath();
	 context.arc(x+48*2 , y+48*2 + 48, 18, 0 , 2 * Math.PI, false);context.closePath();context.fillStyle = color;
      context.fill();context.beginPath();
	 context.arc(x+48*2 + 48 , y+48*2 +48 , 18, 0 , 2 * Math.PI, false);context.closePath();
	 
	 context.fillStyle = color;
      context.fill();

 }

function grid_color( a  , color ){

	for(i = 0 ; i < a.length ; i++ )
	{
		context.fillStyle = color ;
	 	context.fillRect( a[i].x , a[i].y , 48 , 48 );
	 	context.strokeStyle = 'black';
		context.strokeRect( a[i].x , a[i].y , 48 , 48 ); 	
					 	
	}
}

function home_init(){
		

	context.beginPath();
	context.moveTo( 240,240 );
  	context.lineTo(312,312);
  	context.lineTo(240,336+48);
  	context.lineTo(240,240);
    context.fillStyle   = 'red';
    context.closePath();
	context.stroke();
    context.fill();

    context.beginPath();
    context.moveTo( 240+48*3,240 );
  	context.lineTo(312,312);
  	context.lineTo(240+48*3,240+48*3);
  	context.lineTo(240+48*3,240+48*3);
    context.fillStyle   = '#FAEA0F';
    context.closePath();
    context.stroke();
    context.fill();

        context.beginPath();
    context.moveTo( 240,240 );
  	context.lineTo(240 + 48*3,240);
  	context.lineTo(240+48*1.5,240+48*1.5);
  	context.lineTo(240,240);
    context.fillStyle   = '#00bb00';
    context.closePath();
    context.stroke();
    context.fill();

        context.beginPath();
    context.moveTo( 240+48*3,240+48*3 );
  	context.lineTo(240 , 240+48*3);
  	context.lineTo(240+48*1.5,240+48*1.5);
  	context.lineTo(240+48*3,240+48*3);
    context.fillStyle   = 'blue';
    context.closePath();
    context.stroke();
    context.fill();

    
  	
}


main();
$("#die").click(function() {
	$('#die').hide('fast' , function(){ val_m = Math.floor((Math.random()*10%6) + 1) ;
  if (val_m!=6 && sixers==0) val=0; val+=val_m;
  image = "";
  switch( val_m )
  {
  	case 1 : { image = "<img src='die1.jpg' /> "  ; break;}
  	case 2 : { image = "<img src='die2.jpg' /> "  ; break;}
  	case 3 : { image = "<img src='die3.jpg' /> "  ; break;}
  	case 4 : { image = "<img src='die4.jpg' /> "  ; break;}
  	case 5 : { image = "<img src='die5.jpg' /> "  ; break;}
  	case 6 : { image = "<img src='die6.jpg' /> "  ;  if(sixers==3){turn++; sixers=0; val=0;} break;}
  } 
  switch(turn%4)
  {
  	case 0: {color_t='green'; break; }
  	case 1: {color_t='brown'; break; }
  	case 2: {color_t='violet'; break; }
  	case 3: {color_t='orange'; break; }
  } console.log( " val is " + val +'turn:'+color_t);

  $('#die').html(image);
    });
  $('#die').show('fast');
  //	alert( val );
});

$("#canvas").click(function (e){
    var x = Math.floor((e.pageX-$("#canvas").offset().left) );
    var y = Math.floor((e.pageY-$("#canvas").offset().top) );
x=Math.floor(x/48)*48;
y=Math.floor(y/48)*48;
//console.log( " x is "+x+" y is "+y);
if(val_m!=6)
{
for(i=0; i<16; i++)
{
	if(gote[i].x ==x && gote[i].y==y && gote[i].color==color_t) 
	{//console.log (gote[i].color+gote[i].x+gote[i].y + i);
		if((gote[i].count+val)<48)
		{new_move(i,val); break;} 
		else if((gote[i].count+val)==48)
		relocatei(count_ob(i),i,1);
	}
}
}
});

rx=[48*1,48*2,48*3,48*4,48*5,48*5,48*5,48*5,48*5,48*6,48*7,48*7,48*7,48*7,48*7,48*8,48*9,48*10,48*11,48*12,48*12,48*12,48*11,48*10,48*9,48*8,48*7,48*7,48*7,48*7,48*7,48*6,48*5,48*5,48*5,48*5,48*5,48*4,48*3,48*2,48*1,0,0,48*1,48*2,48*3,48*4];
gx=[48*7,48*7,48*7,48*7,48*8,48*9,48*10,48*11,48*12,48*12,48*12,48*11,48*10,48*9,48*8,48*7,48*7,48*7,48*7,48*7,48*6,48*5,48*5,48*5,48*5,48*5,48*4,48*3,48*2,48*1,0,0,0,48*1,48*2,48*3,48*4,48*5,48*5,48*5,48*5,48*5,48*6,48*6,48*6,48*6,48*6];
yx=[48*11,48*10,48*9,48*8,48*7,48*7,48*7,48*7,48*7,48*6,48*5,48*5,48*5,48*5,48*5,48*4,48*3,48*2,48*1,0,0,0,48*1,48*2,48*3,48*4,48*5,48*5,48*5,48*5,48*5,48*6,48*7,48*7,48*7,48*7,48*7,48*8,48*9,48*10,48*11,48*12,48*12,48*11,48*10,48*9,48*8];
bx=[48*5,48*5,48*5,48*5,48*4,48*3,48*2,48*1,0,0,0,48*1,48*2,48*3,48*4,48*5,48*5,48*5,48*5,48*5,48*6,48*7,48*7,48*7,48*7,48*7,48*8,48*9,48*10,48*11,48*12,48*12,48*12,48*11,48*10,48*9,48*8,48*7,48*7,48*7,48*7,48*7,48*6,48*6,48*6,48*6,48*6];
ry=[48*5,48*5,48*5,48*5,48*4,48*3,48*2,48*1,0,0,0,48*1,48*2,48*3,48*4,48*5,48*5,48*5,48*5,48*5,48*6,48*7,48*7,48*7,48*7,48*7,48*8,48*9,48*10,48*11,48*12,48*12,48*12,48*11,48*10,48*9,48*8,48*7,48*7,48*7,48*7,48*7,48*6,48*6,48*6,48*6,48*6];
gy=[48*1,48*2,48*3,48*4,48*5,48*5,48*5,48*5,48*5,48*6,48*7,48*7,48*7,48*7,48*7,48*8,48*9,48*10,48*11,48*12,48*12,48*12,48*11,48*10,48*9,48*8,48*7,48*7,48*7,48*7,48*7,48*6,48*5,48*5,48*5,48*5,48*5,48*4,48*3,48*2,48*1,0,0,48*1,48*2,48*3,48*4];
yy=[48*7,48*7,48*7,48*7,48*8,48*9,48*10,48*11,48*12,48*12,48*12,48*11,48*10,48*9,48*8,48*7,48*7,48*7,48*7,48*7,48*6,48*5,48*5,48*5,48*5,48*5,48*4,48*3,48*2,48*1,0,0,0,48*1,48*2,48*3,48*4,48*5,48*5,48*5,48*5,48*5,48*6,48*6,48*6,48*6,48*6];
by=[48*11,48*10,48*9,48*8,48*7,48*7,48*7,48*7,48*7,48*6,48*5,48*5,48*5,48*5,48*5,48*4,48*3,48*2,48*1,0,0,0,48*1,48*2,48*3,48*4,48*5,48*5,48*5,48*5,48*5,48*6,48*7,48*7,48*7,48*7,48*7,48*8,48*9,48*10,48*11,48*12,48*12,48*11,48*10,48*9,48*8];
gote=[{'count':0,'x':48*10,'y':48*2, 'color':'green','reset_gota' : function(){this.count=0,this.x=48*10,this.y=48*2}}, 
{'count':0,'x':48*11,'y':48*2, 'color':'green', 'reset_gota' : function(){this.count=0,this.x=48*11,this.y=48*2}}, 
{'count':0,'x':48*10,'y':48*3, 'color':'green', 'reset_gota' : function(){this.count=0,this.x=48*10,this.y=48*3}}, 
{'count':0,'x':48*11,'y':48*3, 'color':'green', 'reset_gota' : function(){this.count=0,this.x=48*11,this.y=48*3}},
{'count':0,'x':48*10,'y':48*10, 'color':'brown', 'reset_gota' : function(){this.count=0,this.x=48*10,this.y=48*10}}, 
{'count':0,'x':48*11,'y':48*10, 'color':'brown', 'reset_gota' : function(){this.count=0,this.x=48*11,this.y=48*10}}, 
{'count':0,'x':48*10,'y':48*11, 'color':'brown', 'reset_gota' : function(){this.count=0,this.x=48*10,this.y=48*11}}, 
{'count':0,'x':48*11,'y':48*11, 'color':'brown', 'reset_gota' : function(){this.count=0,this.x=48*11,this.y=48*11}},
{'count':0,'x':48*2,'y':48*2, 'color':'orange', 'reset_gota' : function(){this.count=0,this.x=48*2,this.y=48*2}}, 
{'count':0,'x':48*3,'y':48*2, 'color':'orange', 'reset_gota' : function(){this.count=0,this.x=48*3,this.y=48*2}}, 
{'count':0,'x':48*2,'y':48*3, 'color':'orange', 'reset_gota' : function(){this.count=0,this.x=48*2,this.y=48*3}}, 
{'count':0,'x':48*3,'y':48*3, 'color':'orange', 'reset_gota' : function(){this.count=0,this.x=48*3,this.y=48*3}},
{'count':0,'x':48*2,'y':48*10, 'color':'violet', 'reset_gota' : function(){this.count=0,this.x=48*2,this.y=48*10}}, 
{'count':0,'x':48*3,'y':48*10, 'color':'violet', 'reset_gota' : function(){this.count=0,this.x=48*3,this.y=48*10}}, 
{'count':0,'x':48*2,'y':48*11, 'color':'violet', 'reset_gota' : function(){this.count=0,this.x=48*2,this.y=48*11}}, 
{'count':0,'x':48*3,'y':48*11, 'color':'violet', 'reset_gota' : function(){this.count=0,this.x=48*3,this.y=48*11}}];

function count_ob(gota){
	var n_ob=0;
for(j=0;j<16;j++)
{
	if(j==gota) continue;
	if(gote[j].x==gote[gota].x && gote[j].y==gote[gota].y)
	n_ob++;
}
return n_ob;
}

function relocatei(n_ob,gota,tag){
	if(tag==0) n_ob++;
	
	context.fillStyle = color_box(gota);
	context.fillRect( gote[gota].x , gote[gota].y , 48 , 48 );
	context.strokeStyle = 'black';
	context.beginPath(); context.strokeRect( gote[gota].x , gote[gota].y , 48 , 48 ); context.closePath();
if(n_ob!=0) 
{	
	if(n_ob==1)
	{   //console.log("he;;o");
		for(k=0; k<16; k++)
		{
		if(k==gota && tag) continue;
		if(gote[k].x==gote[gota].x && gote[k].y==gote[gota].y)
		{
		context.beginPath();
		context.arc(gote[k].x+24, gote[k].y+24, 15, 0 , 2 * Math.PI, false);
		context.closePath();
		context.fillStyle = gote[k].color;
		context.fill();}}
	}
	else if(n_ob<=4)
	{	 var cc=1,c2=1;
		for(k=0; k<16; k++)
		{	
			if(k==gota && tag) continue;
			if(gote[k].x==gote[gota].x && gote[k].y==gote[gota].y)
			{
				context.beginPath();
				context.arc(gote[k].x+(cc%4)*12, gote[k].y+Math.floor(c2/4+1)*12, 8, 0 , 2 * Math.PI, false);
				context.closePath();
				context.fillStyle = gote[k].color;
				context.fill();
			
			cc+=2; c2+=2; if(Math.floor(cc/4+1)!=Math.floor((cc-2)/4+1)) c2+=4;}
		}
	}
	else if(n_ob<=9)
	{	var cc=1,c2=1;
		for(k=0;k<16;k++)
		{	
			if(j==gota && tag) continue;
			if(gote[k].x==gote[gota].x && gote[k].y==gote[gota].y)
			{
				context.beginPath();
				context.arc(gote[k].x+(cc%6)*8, gote[k].y+Math.floor(c2/6+1)*8, 6 , 0 , 2 * Math.PI, false);
				context.closePath();
				context.fillStyle = gote[k].color;
				context.fill();
			
			cc+=2; c2+=2; if(Math.floor(cc/6+1)!=Math.floor((cc-2)/6+1)) c2+=6;}
		}
	}
	else if(n_ob<=16)
	{		var cc=1,c2=1;
		for(k=0;k<16;k++)
		{	
			if(j==gota && tag) continue;
			if(gote[k].x==gote[gota].x && gote[k].y==gote[gota].y)
			{
				context.beginPath();
				context.arc(gote[k].x+(cc%8)*6, gote[k].y+Math.floor(c2/8+1)*6, 4 , 0 , 2 * Math.PI, false);
				context.closePath();
				context.fillStyle = gote[k].color;
				context.fill();
			
			cc+=2; c2+=2; if(Math.floor(cc/8+1)!=Math.floor((cc-2)/8+1)) c2+=8;}
		}
	}
}
}

function relocatef(n_ob,gota)
{	var cc=1,c2=1;
	context.fillStyle = color_box(gota);
	context.fillRect( gote[gota].x , gote[gota].y , 48 , 48 );
	context.strokeStyle = 'black';
	context.beginPath(); context.strokeRect( gote[gota].x , gote[gota].y , 48 , 48 ); context.closePath();
		if(n_ob==0)
		{context.beginPath();
		context.arc(gote[gota].x+24, gote[gota].y+24, 15, 0 , 2 * Math.PI, false);
		context.closePath();
		context.fillStyle = gote[gota].color;
		context.fill();}
	else
	{	var flag=0;
		for(k=0; k<16; k++)
		{   
			if(gote[k].x==gote[gota].x && gote[k].y==gote[gota].y)
			{
				if(gote[k].color==gote[gota].color) 
				{
					context.beginPath();
					context.arc(gote[k].x+(cc%4)*12, gote[k].y+Math.floor(c2/4+1)*12, 8, 0 , 2 * Math.PI, false);
					context.closePath();
					context.fillStyle = gote[k].color;
					context.fill();
					cc+=2; c2+=2; if(Math.floor(cc/4+1)!=Math.floor((cc-2)/4+1)) c2+=4;
				}
				
				else
				{	flag=1;
					gote[k].reset_gota();
					context.beginPath();
				context.arc(gote[k].x, gote[k].y, 15 , 0 , 2 * Math.PI, false);
				context.closePath();
				context.fillStyle = gote[k].color;
				context.fill();
				} 
			}
		}
		if(cc==1 || cc==3)
		{
		context.fillStyle = color_box(gota);
		context.fillRect( gote[gota].x , gote[gota].y , 48 , 48 );
		context.strokeStyle = 'black';
		context.beginPath(); context.strokeRect( gote[gota].x , gote[gota].y , 48 , 48 ); context.closePath();
		context.beginPath();
		context.arc(gote[gota].x+24, gote[gota].y+24, 15, 0 , 2 * Math.PI, false);
		context.closePath();
		context.fillStyle = gote[gota].color;
		context.fill();	
		}
		if(flag)
			turn--;

	}
}

function gotx(gota)
{
	if(gote[gota].color=='green')
	gote[gota].x= gx[(gote[gota].count)-1];
	else if(gote[gota].color=='brown')
	gote[gota].x= yx[(gote[gota].count)-1];
	else if(gote[gota].color=='violet')
	gote[gota].x= bx[(gote[gota].count)-1];
	else if(gote[gota].color=='orange')
	gote[gota].x= rx[(gote[gota].count)-1];
}
function goty(gota)
{
	if(gote[gota].color=='green')
	gote[gota].y= gy[(gote[gota].count)-1];
	else if(gote[gota].color=='brown')
	gote[gota].y= yy[(gote[gota].count)-1];
	else if(gote[gota].color=='violet')
	gote[gota].y= by[(gote[gota].count)-1];
	else if(gote[gota].color=='orange')
	gote[gota].y= ry[(gote[gota].count)-1];
}

function color_box(gota)
{   var x1=gote[gota].x, y1=gote[gota].y,s=''; 
	if((x1==48*6 && (y1>=48 && y1<=48*4)) || (x1==48*7 && y1==48) || (x1==48*10 && (y1==48*2 || y1==48*3)) || (x1==48*11 && (y1==48*2 || y1==48*3)))
		s='#00bb00'; 
	else if((y1==48*6 && (x1>=48*8 && x1<=48*11)) || (x1==48*11 && y1==48*7) || (x1==48*10 && (y1==48*10 || y1==48*11)) || (x1==48*11 && (y1==48*10 || y1==48*11)))
		s='#FAEA0F';
	else if((x1==48*6 && (y1>=48*8 && y1<=48*11)) || (x1==48*5 && y1==48*11) || (x1==48*2 && (y1==48*10 || y1==48*11)) || (x1==48*3 && (y1==48*10 || y1==48*11)))
		s='blue';
	else if((y1==48*6 && (x1>=48 && x1<=48*4)) || (x1==48 && y1==48*5) || (x1==48*2 && (y1==48*2 || y1==48*3)) || (x1==48*3 && (y1==48*2 || y1==48*3)))
		s='red';
	else if((x1==48*5 && y1==48) || (x1==48*11 && y1==48*5) || (x1==48*7 && y1==48*11) || (x1==48 && y1==48*7))
		s='#bfbfac';
	else s='white';
	return s;
}		
function new_move(gota,val) {
if(gote[gota].count==0 && (val==1 || val>6))
{
	context.beginPath();
	context.arc(gote[gota].x, gote[gota].y, 15 , 0 , 2 * Math.PI, false);
	context.closePath(); 
	context.fillStyle = color_box(gota); 
	context.fill(); //console.log (gote[gota].color+gote[gota].x+gote[gota].y+val);
	if(val==1) 
	gote[gota].count=1;
	else gote[gota].count=val-5; 
	gotx(gota); goty(gota); //console.log (gote[gota].color+gote[gota].x+gote[gota].y);
	if(color_box(gota)=='white') 
	relocatef(count_ob(gota),gota);
	else relocatei(count_ob(gota),gota,0);
	
}
else if(gote[gota].count!=0)
{
	relocatei(count_ob(gota),gota,1);
	gote[gota].count+=val; gotx(gota); goty(gota);
	if(color_box(gota)=='white') 
	relocatef(count_ob(gota),gota);
	else relocatei(count_ob(gota),gota,0);
} val=0; sixers=0; turn++;
}
}