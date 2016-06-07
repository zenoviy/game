var a=5;
var b=0;
var c=0;
var inv = 0;
var money_default=50;
var money_cash= money_default;

var travel_rand_city = 0;
var travel_rand_numb = 1;

var traveler_check=true;

var ya=1002;
var xa=111;

var gun_tipe = 0;

var ct_x=0;
var ct_y=0;

var spid_x = 0;
var spid_y=1;

//var hear_cnt =0;
var a_rez = a;
var ct_y_rez = ya;
var ct_x_rez = xa;

var gun_dmg = 10;
var move_scr = 0;
var battle_count = 0;
var battle = 0;
var bandit_a_health = 0;
var bandit_b_health= 0;
var bandit_c_health = 0;
var merccnt = 0;

var calcul=0;
var cnt_interval = 0;
var hero_health = 50;
var bandit_hit =0;
var hero_a_health = 50

var hero_main_health = 0;
var hero_b_health = 0;
var hero_c_health = 0;

var cont =[0,0];

var day= 1;
var m = 1;
var year = 1870;



var rez1 = [];
var rez2 = [];
var rez3 = [];
var rez4 = [];
var rez5 = [];
var rez6 = [];
var rez7 = [];
var rez8 = [];

var rez_traveler = [];
var free_space = [];

var rez_package = [];

// inner style//
var items = ['inv_inn', 'inv_inn dr_img', 'inv_inn bl_img', 'inv_inn br_img', 'inv_inn gld_img', 'inv_inn dm_img', 'inv_inn mt_img', 'inv_inn rp_img', 'inv_inn tl_img', 'traveler_img inv_inn', 'packege_img inv_inn'];


var i =0;

var transfer =0;
var coin =0; 
var itm_pl = 0;
var itm_mn = 0;

var mns_clk =0;

//розрахунки



function ad_class(){								/////////ПРИМІНЕННЯ КЛАСІВ
if(inv ==0){
		slt1_inn.className=cont[0];
		slt2_inn.className=cont[1];
	}else if(inv ==1){
		slt1_inn.className=cont[0];
		slt2_inn.className=cont[1];
		slt3_inn.className=cont[2];
		slt4_inn.className=cont[3];
		slt5_inn.className=cont[4];
		slt6_inn.className=cont[5];
		}else if(inv ==2){
			slt1_inn.className=cont[0];
			slt2_inn.className=cont[1];
			slt3_inn.className=cont[2];
			slt4_inn.className=cont[3];
			slt5_inn.className=cont[4];
			slt6_inn.className=cont[5];
			slt7_inn.className=cont[6];
			slt8_inn.className=cont[7];
			slt9_inn.className=cont[8];
			slt10_inn.className=cont[9];
			slt11_inn.className=cont[10];
			slt12_inn.className=cont[11];
	}else if(inv ==3){
			slt1_inn.className=cont[0];
			slt2_inn.className=cont[1];
			slt3_inn.className=cont[2];
			slt4_inn.className=cont[3];
			slt5_inn.className=cont[4];
			slt6_inn.className=cont[5];
			slt7_inn.className=cont[6];
			slt8_inn.className=cont[7];
			slt9_inn.className=cont[8];
			slt10_inn.className=cont[9];
			slt11_inn.className=cont[10];
			slt12_inn.className=cont[11];
			slt13_inn.className=cont[12];
			slt14_inn.className=cont[13];
			slt15_inn.className=cont[14];
			slt16_inn.className=cont[15];
	}
}


function baner_alert(){
if(money_cash<itm_pl){
	alert_bnr.className="alert_ok";
	enter_text_baner.innerHTML="НЕДОСТАТНЬО КОШТІВ!";
	glass.className="glass";
	btn_ok_alert.onclick = function(){
		alert_bnr.className="none";
		glass.className="none";
		}
	}
}

function baner_alert_st(){

	alert_bnr.className="alert_ok";
	enter_text_baner.innerHTML="НЕДОСТАТНЬО КОШТІВ!";
	glass.className="glass";
	btn_ok_alert.onclick = function(){
		alert_bnr.className="none";
		glass.className="none";
		}
}
function baner_alert_c(){

	alert_bnr.className="alert_ok";
	enter_text_baner.innerHTML="ВИ НЕ МОЖЕТЕ ПОКИЩО ЦЕ ПРИДБАТ!";
	glass.className="glass";
	btn_ok_alert.onclick = function(){
		alert_bnr.className="none";
		glass.className="none";		}
}
function baner_alert_c1(){

	alert_bnr.className="alert_ok";
	enter_text_baner.innerHTML="ВИ ЦЕ ВЖЕ ПРИДБАЛИ!";
	glass.className="glass";
	btn_ok_alert.onclick = function(){
		alert_bnr.className="none";
		glass.className="none";		}
}
function baner_stop(){

	alert_bnr.className="alert_ok";
	enter_text_baner.innerHTML="МАКСИМАЛЬНА ВМІСТИМІСТЬ ЯЧЕЙОК!";
	glass.className="glass";
	btn_ok_alert.onclick = function(){
		alert_bnr.className="none";
		glass.className="none";
		}
	
}
//money function//

function numb(){										/////////// ДОДАВАННЯ ГРОШЕЙ
	if(inv ==0){
  	if(cont.length<=2){
		 if(money_cash>=itm_pl){  
		  	money_cash= money_cash-itm_pl;
		  	money.innerHTML = money_cash + "$";
		  //	cnt_plus()
		  	 
	}}}else if(inv ==1){
			if(cont.length<=6){
				 if(money_cash>=itm_pl){  
				  	money_cash= money_cash-itm_pl;
				  	money.innerHTML = money_cash + "$";
				  //	cnt_plus()
				  
				}}}else if(inv ==2){
			if(cont.length<=12){
				 if(money_cash>=itm_pl){  
				  	money_cash= money_cash-itm_pl;
				  	money.innerHTML = money_cash + "$";
				  	//cnt_plus()

				}}}else if(inv ==3){
			if(cont.length<=16){
				 if(money_cash>=itm_pl){  
				  	money_cash= money_cash-itm_pl;
				  	money.innerHTML = money_cash + "$";
				  	//cnt_plus()

				}}}else 
				alert("максимум заповнених ячеєк");
}
														////////рандомізатор магазину
var random;
var whisky_min = 25;
var ammo_min =15;
var brad_min =10;
var gold_min =97;
var dynamite_min =43;
var meet_min =3;
var rope_min =12;
var pickaxe_min =20;

var chek =0;

var whisky_sh_by = 0;
var	ammo_sh_by = 0;
var	brad_sh_by = 0;
var	gold_sh_by = 0;
var	dynamite_sh_by = 0;
var	meet_sh_by = 0;
var	rope_sh_by = 0;
var	pickaxe_sh_by = 0;

var whisky_sh_sl = 0;
var	ammo_sh_sl = 0;
var	brad_sh_sl = 0;
var	gold_sh_sl = 0;
var	dynamite_sh_sl = 0;
var	meet_sh_sl = 0;
var	rope_sh_sl = 0;
var	pickaxe_sh_sl = 0;

function clear_list(){
 whisky_sh_by = 0;
	ammo_sh_by = 0;
	brad_sh_by = 0;
	gold_sh_by = 0;
	dynamite_sh_by = 0;
	meet_sh_by = 0;
	rope_sh_by = 0;
	pickaxe_sh_by = 0;
}

function shop_random(){					//reno--1
	if(a==1){
		chek=a;
		whisky_min = 85;
		ammo_min =25;
		brad_min =35;
		gold_min =120;
		dynamite_min =90;
		meet_min =35;
		rope_min =120;
		pickaxe_min =50;
		hearings_count()
		rand_price_by()

	}else if(a==2){					//virginia--2
		chek=a;
		whisky_min = 125;
		ammo_min =30;
		brad_min =55;
		gold_min =152;
		dynamite_min =35;
		meet_min =55;
		rope_min =20;
		pickaxe_min =50;
		hearings_count()
			rand_price_by()
	}else if(a==3){					//carson--3
		chek=a;
		whisky_min = 85;
		ammo_min =65;
		brad_min =25;
		gold_min =155;
		dynamite_min =70;
		meet_min =20;
		rope_min =60;
		pickaxe_min =25;
		hearings_count()
			rand_price_by()
				}else if(a==4){					//redwood--4
					chek=a;
		whisky_min = 50;
		ammo_min =83;
		brad_min =55;
		gold_min =60;
		dynamite_min =90;
		meet_min =50;
		rope_min =70;
		pickaxe_min =85;
		hearings_count()
						rand_price_by()
				
				}else if(a==5){					//silver springs--5
		chek=a;
		whisky_min = 20;
		ammo_min =35;
		brad_min =50;
		gold_min =178;
		dynamite_min =85;
		meet_min =35;
		rope_min =50;
		pickaxe_min =65;
		hearings_count()
			rand_price_by()
				}else if(a==6){					//westwood--6
					chek=a;
		whisky_min = 25;
		ammo_min =85;
		brad_min =35;
		gold_min =60;
		dynamite_min =95;
		meet_min =50;
		rope_min =55;
		pickaxe_min =75;
		hearings_count()
						rand_price_by()
				}else if(a==7){					//doyle--7
		chek=a;
		whisky_min = 95;
		ammo_min =35;
		brad_min =45;
		gold_min =155;
		dynamite_min =85;
		meet_min =40;
		rope_min =65;
		pickaxe_min =20;
		hearings_count()
			rand_price_by()
				}else if(a==8){					//bridgeport--8
					chek=a;
		whisky_min = 90;
		ammo_min =45;
		brad_min =35;
		gold_min =165;
		dynamite_min =60;
		meet_min =63;
		rope_min =85;
		pickaxe_min =25;
		hearings_count()
						rand_price_by()
				}
}
/*function select_rand(){

	if(a==1){
		 random =  Math.floor(Math.random() * 300 + 1);
	}else if(a==2){
		 random =  Math.floor(Math.random() * 300 + 1);
	}else if(a==3){
				 random =  Math.floor(Math.random() * 300 + 1);
				}else if(a==4){
					 random =  Math.floor(Math.random() * 300 + 1);
				}
}*/

function rand_price_by(){										////рандомізатор цін в магазині
	if(chek == whisky_sh_by){
		alert("вітаємо в місті");
	}else{
		
	 random =  Math.floor(Math.random() * 100 + 1); 
		
	whisky_sh_by = whisky_min+((whisky_min/100))*random;
						whisky_sh_by=(Math.floor(whisky_sh_by));
						//whisky_sh_by=whisky_sh_by+random;
 						chek=whisky_sh_by;
 	random =  Math.floor(Math.random() * 100 + 1);
		ammo_sh_by =  ammo_min+(ammo_min/100)*random;
						ammo_sh_by=(Math.floor(ammo_sh_by));
						//ammo_sh_by=ammo_sh_by+random;
						//alert(ammo_sh_by);
random =  Math.floor(Math.random() * 100 + 1);
		brad_sh_by = brad_min+(brad_min/100)*random;
						brad_sh_by=(Math.floor(brad_sh_by));
						//brad_sh_by=brad_sh_by+random;
random =  Math.floor(Math.random() * 100 + 1);
		gold_sh_by = gold_min+(gold_min/100)*random;
						gold_sh_by=(Math.floor(gold_sh_by));
					//	gold_sh_by=gold_sh_by+random;
random =  Math.floor(Math.random() * 100 + 1);
		dynamite_sh_by = dynamite_min+(dynamite_min/100)*random;
						dynamite_sh_by=(Math.floor(dynamite_sh_by));
					//	dynamite_sh_by=dynamite_sh_by+random;
random =  Math.floor(Math.random() * 100 + 1);
		meet_sh_by = meet_min+(meet_min/100)*random;
						meet_sh_by=(Math.floor(meet_sh_by));
					//	meet_sh_by=meet_sh_by+random;
random =  Math.floor(Math.random() * 100 + 1);
		rope_sh_by = rope_min+(rope_min/100)*random;
						rope_sh_by=(Math.floor(rope_sh_by));
					//	rope_sh_by=rope_sh_by+random;
random =  Math.floor(Math.random() * 100 + 1);
		pickaxe_sh_by = pickaxe_min+(pickaxe_min/100)*random;
						pickaxe_sh_by=(Math.floor(pickaxe_sh_by));
					//	pickaxe_sh_by=pickaxe_sh_by+random;
			rand_price_sl()			
		}
}/**/													/////////ціни продажі базовані на 30% від рандомних цін

function rand_price_sl(){
	whisky_sh_sl = (whisky_sh_by/100)*30;
		whisky_sh_sl=(Math.floor(whisky_sh_sl));
		whisky_sh_sl=whisky_sh_by-whisky_sh_sl;
	
	ammo_sh_sl = (ammo_sh_by/100)*30;
		ammo_sh_sl=(Math.floor(ammo_sh_sl));
		ammo_sh_sl=ammo_sh_by-ammo_sh_sl
	
	brad_sh_sl = (brad_sh_by/100)*30;
		brad_sh_sl=(Math.floor(brad_sh_sl));
		brad_sh_sl=brad_sh_by-brad_sh_sl
	
	gold_sh_sl = (gold_sh_by/100)*30;
		gold_sh_sl=(Math.floor(gold_sh_sl));
		gold_sh_sl=gold_sh_by-gold_sh_sl
	
	dynamite_sh_sl = (dynamite_sh_by/100)*30;
		dynamite_sh_sl=(Math.floor(dynamite_sh_sl));
		dynamite_sh_sl=dynamite_sh_by-dynamite_sh_sl
	
	meet_sh_sl = (meet_sh_by/100)*30;
		meet_sh_sl=(Math.floor(meet_sh_sl));
		meet_sh_sl=meet_sh_by-meet_sh_sl
	
	rope_sh_sl = (rope_sh_by/100)*30;
		rope_sh_sl=(Math.floor(rope_sh_sl));
		rope_sh_sl=rope_sh_by-rope_sh_sl
	
	pickaxe_sh_sl = (pickaxe_sh_by/100)*30;
		pickaxe_sh_sl=(Math.floor(pickaxe_sh_sl));
		pickaxe_sh_sl=pickaxe_sh_by-pickaxe_sh_sl

}

function cnt_plus(){					/////////цикл додавання зображень

	for(i=0; i<=cont.length-1; i++){		
			if(cont[i]==0){
				cont.splice(i,1,transfer)
				break;
		}
	}if (i==cont.length){
	baner_stop()
}
}

function abc(){
	if(inv==1){
	cont.splice(2,1,0,0,0,0);
	}else if(inv == 2){
		cont.splice(6,1,0,0,0,0,0,0);
	}else if(inv == 3){
		cont.splice(12,1,0,0,0,0);
	}
}

function cnt_minus(){									///////ВІДНІМАННЯ ІКОНОК З МАГАЗИНУ
	cont.splice(coin[0],1,0)
		coin.shift();	
			ad_class()

}

function mns_numb(){									//////////// ВІДНІМА ГРОШЕЙ
	
       money_cash= money_cash+itm_mn;
        money.innerHTML =money_cash + " $";
       return money_cash;
  }

  function no_mony(){
  	baner_alert()
  }
//визначення пустих позицій
var k = 0;

function empty(){
	for(k=0; k<=cont.length; k++){
		if(cont[k]==0){
			free_space.push(k);
		}
		
	}
}
  														//////////ВІДНІМАННЯ І ДОДАВАННЯ ІКОНОК


  function numb_def(){
  	
  	transfer= items[1];
  		itm_pl = whisky_sh_by;
  		if(money_cash>=itm_pl){
	  		cnt_plus()	
	  		ad_class()
		  		if(i<cont.length){
		  			rez1.push(i);
		  			coin = rez1;
		  			numb()
		  		}	
	  	}else if(money_cash<itm_pl)
	  		no_mony();
  		
  }
  					function pl_numb_def(){
  						i=0;
  					if(rez1.length>=1){
  						transfer= items[1];
  						itm_mn = whisky_sh_sl;
  						coin = rez1;
  						mns_numb()
  						cnt_minus()
					 	}
					  }
function numb_bl(){
	transfer= items[2];
		itm_pl = ammo_sh_by;
		if(money_cash>=itm_pl){
  		cnt_plus()
  		ad_class()
	  		if(i<cont.length){
	  			rez2.push(i);
	  			coin = rez2;
				numb()
  		}
  	}else no_mony();
  		
}
					function pl_numb_bl(){
						i=0;
					if(rez2.length>=1){
  						transfer= items[2];
  						itm_mn = ammo_sh_sl;
  						coin = rez2;
  						mns_numb()
  						cnt_minus()
					 	}
					  }
function numb_br(){
	transfer= items[3];
		itm_pl = brad_sh_by;
		if(money_cash>=itm_pl){
  		cnt_plus()
  		ad_class()
			if(i<cont.length){
	  			rez3.push(i);
	  			coin = rez3;
				numb()
	  		}
  	}else if(money_cash<itm_pl) no_mony();
  		
}
					function pl_numb_br(){
						i=0;
					if(rez3.length>=1){
						transfer= items[3];
							itm_mn = brad_sh_sl;
							coin = rez3;
					      mns_numb()
  						cnt_minus()
					 	}
					 
					  }
function numb_gld(){
	transfer= items[4];
		itm_pl = gold_sh_by;
		if(money_cash>=itm_pl){
  		cnt_plus()
  		ad_class()
			if(i<cont.length){
			  	rez4.push(i);
			  	coin = rez4;
				numb()
			 }
  	}else no_mony();
  		
}
					function pl_numb_gld(){
						i=0;
						if(rez4.length>=1){
						transfer= items[4];
							itm_mn = gold_sh_sl;
					  coin = rez4;
					      mns_numb()
  						cnt_minus()
					 	}
					
					  }
function numb_dm(){
	transfer= items[5];
		itm_pl = dynamite_sh_by;	
  		if(money_cash>=itm_pl){
  		cnt_plus()
  		ad_class()
		if(i<cont.length){
		  			rez5.push(i);
		  			coin = rez5;
					numb()
		  		}
  	}else no_mony();
  		
}
					function pl_numb_dm(){
						i=0;
						if(rez5.length>=1){
						transfer= items[5];
							itm_mn = dynamite_sh_sl;
							coin = rez5;
					      mns_numb()
  						cnt_minus()
					 	}
					
					  }
function numb_mt(){
	transfer= items[6];
		itm_pl = meet_sh_by;
  		if(money_cash>=itm_pl){
  		cnt_plus()
  		ad_class()
  		if(i<cont.length){
  			rez6.push(i);
  			coin = rez6;
			numb()
  		}
  	}else no_mony();
  		
}
					function pl_numb_mt(){
						i=0;
						if(rez6.length>=1){
						transfer= items[6];
							itm_mn = meet_sh_sl;
							coin = rez6;
					      mns_numb()
  						cnt_minus()
					 	}
					
					  }
function numb_rp(){
	transfer= items[7];
		itm_pl = rope_sh_by;
  		if(money_cash>=itm_pl){
  		cnt_plus()
  		ad_class()
  		if(i<cont.length){
  			rez7.push(i);
  			coin = rez7;
			numb()
  		}
  	}else no_mony();
  		
}
					function pl_numb_rp(){
						i=0;
						if(rez7.length>=1){
						transfer= items[7];
							itm_mn = rope_sh_sl;
							coin = rez7;
					      mns_numb()
  						cnt_minus()
					 	}
					
					  }
function numb_tl(){
	transfer= items[8];
		itm_pl = pickaxe_sh_by;
  		if(money_cash>=itm_pl){
  		cnt_plus()
  		ad_class()
  		if(i<cont.length){
  			rez8.push(i);
			coin = rez8;
			numb()
  		}
  	}else no_mony();
  		
}
					function pl_numb_tl(){
						i=0;
						if(rez8.length>=1){
						transfer= items[8];
							itm_mn = pickaxe_sh_sl;
							coin = rez8;
							mns_numb()
  						cnt_minus()
					 	}
					      					//////////ВІДНІМАННЯ І ДОДАВАННЯ ІКОНОК  КІНЕЦЬ!
					  }
										///////////////////додавання іконок пасажирів///////
 var n = 0;
 function numb_traveler_add(){
  for(n=0; n<traveler_transfer; n++)
  {
  	transfer = items[9];
	  		cnt_plus()	
	  		ad_class()
		  		
		  			rez_traveler.push(i);
		  			coin = rez_traveler;
		  		
  		}
  }
function numb_traveler_mns(){
	i=0;
	n=0;
	for(n=0; n<traveler_transfer; n++){
						if(rez_traveler.length>=1){
						transfer= items[9];
							coin = rez_traveler;
							//mns_numb()
  						cnt_minus()
					 	}	
						
		}
}


var hearings_city = Math.floor(Math.random() * 10 + 1);
var hearings_type = Math.floor(Math.random() * 10 + 1);
var hear_city_transfer = 0;
var hear_type_transfer = 0;
var hearing_status=true;
var gangs_threat=true;


var want_word = " хоче ";
var traveler_transfer = 0;
var traveler_price_transfer = 0;
var traveler_price = 200;

var package_twn = 0;
var package = true;
var package_twn_transfer=0;
var package_price=0;
var package_price_transfer=0;
															//saloon _random()
function hearings_random(){
	hearings_city = Math.floor(Math.random() * 10 + 1);
	hearings_type = Math.floor(Math.random() * 10 + 1);

}

function packege_random(){
	
	package_twn = Math.floor(Math.random() * 8 + 1);
	if(m<=3){
	package_price = Math.floor(Math.random() * 150 + 1);
	}else if((m>3)&&(m<=6)){
			package_price = Math.floor(Math.random() * 250 + 1);
	}else if(m>6){
			package_price = Math.floor(Math.random() * 550 + 1);
	}
}
function traveler_random(){
	mercin_count=0;
	travel_rand_city= Math.floor(Math.random() * 10 + 1);
if(m<=3){
	traveler_price = Math.floor(Math.random() * 260 + 1);
	travel_rand_numb= Math.floor(Math.random() * 4 + 1);
	if (travel_rand_numb ==1){
		want_word =" хоче ";
	} else{
		want_word =" хочуть ";
	}
}else if((m<=6) && (m>3)){
	traveler_price = Math.floor(Math.random() * 260 + 1);
	travel_rand_numb= Math.floor(Math.random() * 8 + 1);
}else if(m>6){
	traveler_price = Math.floor(Math.random() * 350 + 1);
	travel_rand_numb= Math.floor(Math.random() * 16 + 1);
	}
}

function hearings_count(){

	//if((hearings_city<=8) && (hearings_type<=3)){
//if(hear_city_transfer!=a){
	hearing_status=true;
		if(a==hear_city_transfer){

			 whisky_min = 10;
			 ammo_min =20;
			 brad_min =10;
			 gold_min =60;
			 dynamite_min =10;
			 meet_min =20;
			 rope_min =10;
			 pickaxe_min =10;
			 hearing_status=false;
		}else {
					if ((hear_type_transfer<=3)||(hear_type_transfer>=7)){
					//hearing_status=true;
					hear_city_transfer = hearings_city;
					hear_type_transfer = hearings_type;
						}

			}
	//}
	//}else if(hear_type_transfer==3)
    //    {
	//alert("тут активні банди");
	//	}
}

 function sln_a(){
	ask_bnr.className="ask_ok";
	glass.className="glass";
	btn_no_ask.innerHTML="No";
	btn_yes_ask.className="btn_m_ask";
	btn_no_ask.className="btn_m_ask";
enter_text_ask.innerHTML="";
if(hearing_status==true){
	if((hearings_city<=8) && (hearings_type<=3)){
		if(hearings_city==a){
				enter_text_ask.innerHTML="поки що немає новин для вас";
		}else{
				enter_text_ask.innerHTML="Зараз проходить фестиваль в "+city_name_list[hearings_city-1]+" спішіть доки не завершився!!";
				btn_no_ask.className="none";
			}
			}else if((hearings_city<=8) && (hearings_type>=7)){
								if(hearings_city==a){
								enter_text_ask.innerHTML="поки що немає новин в цьому місті";
						}else{
									enter_text_ask.innerHTML="розпродаж товарів в "+city_name_list[hearings_city-1];
											btn_no_ask.className="none";
											
											}}else{
													enter_text_ask.innerHTML="поки що немає новин";
													btn_no_ask.className="none";
												}
}else if(hearing_status==false){

enter_text_ask.innerHTML="фестиваль проводиться тут";
	  btn_no_ask.className="none";

	}
btn_yes_ask.onclick = function(){

					ask_bnr.className="none";
					glass.className="none";
}
		btn_no_ask.onclick = function(){
					ask_bnr.className="none";
					glass.className="none";
				}
}

/*   ______________           medic_____________-___*/
function sln1(){
	ask_bnr.className="ask_ok";
			glass.className="glass";
			btn_no_ask.innerHTML="No";
			btn_yes_ask.className="btn_m_ask";
			btn_no_ask.className="btn_m_ask";
				if((hero_a_pos==false)&&(hero_b_pos==false)){
					enter_text_ask.innerHTML="Лікування коштує 10$";
				}
				else  if((hero_a_pos==true)||(hero_b_pos==true)){
			enter_text_ask.innerHTML="Лікування коштує 10$ і за кожного компаньойона";
		}
				btn_yes_ask.onclick = function(){
				if(money_default>=10){		
								money_default=money_default-10;	
					hero_health = 50;
					health.style="width:170px";
					health_sign_hero.style="width:50px";

					money.innerHTML =money_default + " $";
					money_cash= money_default;
					//hero_b_health_trans
						//money_cash=money_cash-10;
						ask_bnr.className="none";
					glass.className="none";
									} else{
						enter_text_ask.innerHTML="У вас недостатньо грошей для лікування";
					}
				if((hero_a_pos==true)&&(hero_b_pos==true)&&(money_default>=30)){
										money_default=money_default-30;	
					health_sign_a_hero.style="width: 50px";
						health_sign_b_hero.style="width: 50px";
								hero_a_health_mer = hero_a_hls_trans;
								hero_b_health_mer = hero_b_hls_trans;
								money.innerHTML =money_default + " $";
					money_cash= money_default;				
					ask_bnr.className="none";
					glass.className="none";
									}else if((hero_a_pos==true)||(hero_b_pos==true)&&(money_default>=20)){
					money_default=money_default-20;	
							hero_a_health_mer = hero_a_hls_trans;
							hero_b_health_mer = hero_b_hls_trans;
							health_sign_a_hero.style="width: 50px";
						health_sign_b_hero.style="width: 50px";
							money.innerHTML =money_default + " $";
					money_cash= money_default;
					ask_bnr.className="none";
					glass.className="none";
				}else{
						enter_text_ask.innerHTML="У вас недостатньо грошей для лікування";
					}
			}
				btn_no_ask.onclick = function(){
					ask_bnr.className="none";
					glass.className="none";
				}
}

/*   ______________          mercenary______________*/
var hero_a_health_trans=0;
var hero_b_health_trans=0;
var hero_a_hls_trans=0;
var hero_b_hls_trans=0;
var merc_price_trans = 0;

var hero_a_pers_tr = 0;
var hero_b_pers_tr = 0;

function sln2(){
	//nerc_a_rend()
	//nerc_b_rend()
	if((merccnt==0)&&((hero_a_pos==false)||(hero_b_pos==false))){
		enter_text_ask.innerHTML="ви можете найняти стрілка з силою стрільби: "+mrc_hit+" і здоров'ям "+hls_mrc+" на: "+mrc_time_rand+" місяці за: "+(mrc_cost_rand*mrc_hit*hls_mrc)*mrc_time_rand;	
}
else if((merccnt==1)&&((hero_a_pos==false)||(hero_b_pos==false))){
	enter_text_ask.innerHTML="ви вже найняли в цьому місті стрілка, нові будуть через день";
	}
	/*else if ((hero_a_pos==false)||(hero_b_pos==false)){*/
	else if ((hero_a_pos==true)||(hero_b_pos==true)){
		enter_text_ask.innerHTML="ви вже найняли максимум стрілків";
	}else {
		enter_text_ask.innerHTML="ви вже найняли максимум стрілків";
	}
ask_bnr.className="ask_ok";
	glass.className="glass";
	btn_no_ask.innerHTML="No";
	btn_yes_ask.className="btn_m_ask";
	btn_no_ask.className="btn_m_ask";
			btn_yes_ask.onclick = function(){					
		
merc_price_trans=((mrc_cost_rand*mrc_hit*hls_mrc)*mrc_time_rand);

if(money_default>=merc_price_trans){		
	if (hero_a_pos==false){
		//
				hero_a_pos=true;
				// hero_a_health_mer = 50;
				hero_a_health_mer=hls_mrc;  ///health
				hero_a_pers_tr=(50/hero_a_health_mer);
				hero_a_health_trans=hero_a_health_mer*hero_a_pers_tr;
				hero_a_hls_trans=hero_a_health_mer;


							money_default=money_default-merc_price_trans;	
								money.innerHTML =money_default + " $";
					money_cash= money_default;	
				 /*	hero_a_hit=mrc_hit;
				 	
				 	time_hero_a=mrc_time_rand+m;
				  		*/
						//mrc_cost
				  		merccnt=1;
				  		ask_bnr.className="none";
						glass.className="none";
				  		//mrc_cost_rand
						}else if((hero_b_pos==false)&&(merccnt!=1)){
							hero_b_pos=true; 
							merc_price_trans=((mrc_cost_rand*mrc_hit*hls_mrc)*mrc_time_rand);
							//hero_b_health_mer = 50;
							merccnt=1;
							hero_b_health_mer=hls_mrc;
							hero_b_pers_tr=(50/hero_b_health_mer);
							hero_b_health_trans=hero_b_health_mer*hero_b_pers_tr;
							hero_b_hls_trans=hero_b_health_mer;
							money_default=money_default-merc_price_trans;	
								money.innerHTML =money_default + " $";
					money_cash= money_default;	
							ask_bnr.className="none";
							glass.className="none";
						}else{
			//hero_b_pos==true
			ask_bnr.className="none";
		glass.className="none";			
}}else{
	enter_text_ask.innerHTML="недостатньо коштів";
}
		}
	btn_no_ask.onclick = function(){
					ask_bnr.className="none";
					glass.className="none";
				}

				/*mrct_time = m+mrc_time_rand;
	hero_a_hit=mrc_hit;
	hero_b_hit=mrc_hit;
	hero_a_health_mer=hls_mrc;
	hero_b_health_mer=hls_mrc;
	mrc_cost=mrc_cost*mrc_cost_rand;
	mrc_cost=mrc_cost*mrct_time;
	var hero_a_hit = 0;
 hero_b_hit = 0;
 hero_a_health_mer = 50;
 hero_b_health_mer = 50;
 mrct_time_rand = 0;
 mrc_cost_rand = 0;
 time_hero_a = 0;
 time_hero_b = 0;*/

}

/*   ______________            mercenary_end_____________-___*/


/*       travaelers             */
var trav=0;

function sln3(){
	free_space=[];
	ask_bnr.className="ask_ok";
	glass.className="glass";
	btn_no_ask.innerHTML="No";
	btn_yes_ask.className="btn_m_ask";
	btn_no_ask.className="btn_m_ask";

	if(traveler_check==false){
						enter_text_ask.innerHTML="Ви вже набрали мандрівників";
						btn_yes_ask.className="none";
						btn_no_ask.innerHTML="Yes";
	}else if((travel_rand_city==a) || (travel_rand_city>city_name_list.length)){
		enter_text_ask.innerHTML="Зараз немає бажаючих подорожувати, завітайте наступного разу";
		btn_yes_ask.className="none";
		btn_no_ask.innerHTML="Yes";
	glass.className="glass";
	empty()
			}else{
				enter_text_ask.innerHTML=" "+travel_rand_numb+" з наших людей"+ want_word +"відправитись в "+city_name_list[travel_rand_city-1]+" за "+traveler_price*travel_rand_numb+" $.";
					btn_yes_ask.className="btn_m_ask";
		//traveler()
		empty()
	//glass.className="glass";
}
		btn_yes_ask.onclick = function(){
		if(traveler_check=true){
			if(free_space.length>=travel_rand_numb){
					trav=travel_rand_city;
					if(trav<=8){			
									
									traveler_price_transfer = traveler_price;
										traveler_transfer = travel_rand_numb;
											traveler_check = false;
											numb_traveler_add()
											ask_bnr.className="none";
											glass.className="none";
							}else {
								ask_bnr.className="none";		
									glass.className="none";
							}
						}else {
							alert("недостатньо місць");
							/*ask_bnr.className="none";		
									glass.className="none";*/
						}
					  }else alert("недостатньо місць");
					}
				btn_no_ask.onclick = function(){
					ask_bnr.className="none";
					glass.className="none";
				}

}

function trav_eres(){
	
	packege_minus()

	if(trav==a){
	//trav=0;
	free_space=[];
	money_cash = traveler_price_transfer*traveler_transfer;
	money_default = money_default+money_cash;
	money.innerHTML = money_default + "$";
	money_cash=money_default;
	traveler_check = true;
	alert("з прибуттям");
	btn_yes_ask.className="btn_m_ask";
	btn_no_ask.innerHTML="No";
	trav=travel_rand_city;
	empty()
	numb_traveler_mns()
	trav=0;
	}
}

									/////////package deliver

  function packege_def(){
  	
  	transfer= items[10];
	  		cnt_plus()	
	  		ad_class()
		  			rez_package.push(i);
		  			coin = rez_package;	
  }

function sln4(){

	ask_bnr.className="ask_ok";
	glass.className="glass";
	btn_yes_ask.className="btn_m_ask";
	btn_no_ask.className="btn_m_ask";
	btn_no_ask.innerHTML="No";


if(package == true){
	if(package_twn==a){
				packege_random()
				sln4()
	}else {
			enter_text_ask.innerHTML="відвезти пакунок в "+city_name_list[package_twn-1]+" за "+package_price+"$";

		}	
	}else{
	 	enter_text_ask.innerHTML="ви вже взяли пакунок";
	 	btn_yes_ask.className="none";
		btn_no_ask.innerHTML="Yes";
	}
	btn_yes_ask.onclick = function(){
		if(package == true){
			packege_def()
			glass.className="none";
			ask_bnr.className="none";
			package_twn_transfer=package_twn;
			package = false;
			package_price_transfer=package_price;
			package_twn_transfer=package_twn;
		}else {
			enter_text_ask.innerHTML="ви вже взяли пакунок";
			glass.className="none";
			ask_bnr.className="none";
		}
	}
	btn_no_ask.onclick = function(){
		ask_bnr.className="none";
					glass.className="none";
					ask_bnr.className="none";
	}
}

function packege_minus(){

	if(package_twn_transfer==a){
		if(rez_package.length>=1){
						transfer= items[10];
							coin = rez_package;	
  						cnt_minus()
					 	alert("доставлено")
					 	package = true;
					 	rez_package=[];
					 	money_cash = package_price_transfer;
				money_default = money_default+money_cash;
				money.innerHTML = money_default + "$";
				money_cash=money_default;
					 }	
	}
}


function stbl_6(){											///////6 СЛОТІВ
if(inv >0){
	return alert("це вже куплено");
}	
	else if((inv==0) & (money_default>=1200))
	{	
		money_default=money_default-1500;
		money.innerHTML =money_default + " $";
		money_cash=money_default;
		inv=1;
		//cont.splice(2,1,0,0,0,0);
		abc()
		slt3.className="inv";
		slt4.className="inv";
		slt5.className="inv";
		slt6.className="inv";
		slt_vg_inn.className="wag1_img";
		return money_default;
	} else if((inv==0) & (money_default<=1500)){
		//baner_alert_st()
		alert("недостатньо коштів");
	} else if(inv==1)
		baner_alert_c1()
}
function stbl_12(){										 /////////12 СЛОТІВ
	if(inv == 0){
	baner_alert_c()
}	
	else if((money_default>=5500) & (inv==1))
	{
		money_default=money_default-5500;
		money.innerHTML =money_default + " $";
		money_cash=money_default;
		inv=2;
			abc()
			slt7.className="inv";
			slt8.className="inv";
			slt9.className="inv";
			slt10.className="inv";
			slt11.className="inv";
			slt12.className="inv";
			slt_vg_inn.className="wag2_img";
		return money_default;
	} else if ((inv==1) & (money_default<=2600)){
		//baner_alert_st()
		alert("недостатньо коштів");
	}else if (inv==2)
		baner_alert_c1()
}
function stbl_16(){										 /////////16 СЛОТІВ
	if((inv == 0)||(inv==1)){
	baner_alert_c()
}	
	else if((money_default>=10000) & (inv==2))
	{
		money_default=money_default-10000;
		money.innerHTML =money_default + " $";
		money_cash=money_default;
		inv=3;
			abc()
			slt13.className="inv";
			slt14.className="inv";
			slt15.className="inv";
			slt16.className="inv";
			slt_vg_inn.className="wag3_img";
		return money_default;
	} else if ((inv==2) & (money_default<=10000)){
		//baner_alert_st()
		alert("недостатньо коштів");
	}else if (inv==3)
		baner_alert_c()
}
														////////////guns
//slt_ammo_inn.className="gun_a ";

function gun_b(){
if((money_default>=500)&&(gun_tipe==0)){
	slt_ammo_inn.className="gun_b";
gun_tipe=1;
		gun_dmg = 16;
		money_default=money_default-500;
		money_cash=money_default;
		money.innerHTML =money_default + " $";
	}else if(gun_tipe>=1){
		alert("це вже куплено");
	}else alert("недостатньо коштів");
}
function gun_c(){
	if((money_default>=1000)&&(gun_tipe<=1)){
	slt_ammo_inn.className="gun_c";
gun_tipe=2;
		gun_dmg = 36;
		money_default=money_default-1000;
		money_cash=money_default;
		money.innerHTML =money_default + " $";
	}else if(gun_tipe>=2){
		alert("це вже куплено");
	}else alert("недостатньо коштів");
}
function gun_d(){
	if((money_default>=2000)&&(gun_tipe<=2)){
	slt_ammo_inn.className="gun_d";
gun_tipe=3;
		gun_dmg = 55;
		money_default=money_default-2000;
		money_cash=money_default;
		money.innerHTML =money_default + " $";
	}else if(gun_tipe>=3){
		alert("це вже куплено");
	}else alert("недостатньо коштів");
}
function gun_e(){
	if((money_default>=3200)&&(gun_tipe<=3)){
	slt_ammo_inn.className="gun_e";
gun_tipe=4;
		gun_dmg = 82;
		money_default=money_default-3200;
		money_cash=money_default;
		money.innerHTML =money_default + " $";
	}else if(gun_tipe>=4){
		alert("це вже куплено");
	}else alert("недостатньо коштів");
}
function gun_f(){
	if((money_default>=5500)&&(gun_tipe<=4)){
	slt_ammo_inn.className="gun_f";
gun_tipe=5;
	gun_dmg = 112;
	money_default=money_default-5500;
	money_cash=money_default;
	money.innerHTML =money_default + " $";
	}else if(gun_tipe>=5){
		alert("це вже куплено");
	}else alert("недостатньо коштів");
}
function gun_g(){
	if((money_default>=7000)&&(gun_tipe<=5)){
	slt_ammo_inn.className="gun_g";
gun_tipe=6;
	gun_dmg = 150;
	money_default=money_default-7000;
	money_cash=money_default;
	money.innerHTML =money_default + " $";
	}else if(gun_tipe>=6){
		alert("це вже куплено");
	}else alert("недостатньо коштів");
}



function no_html(){
stable.innerHTML=""
stable.innerHTML=""
prison.innerHTML=""
saloon.innerHTML=""
shop.innerHTML=""
guns.innerHTML=""
reno.innerHTML=""
virginia.innerHTML=""
carson.innerHTML=""
redwood.innerHTML=""
silver_springs.innerHTML=""
westwood.innerHTML=""
doyle.innerHTML=""
bridgeport.innerHTML=""

}
function stbl(){
//stable.innerHTML="stable"
}
function pris(){
//prison.innerHTML="prison"
}
function sln(){
//saloon.innerHTML="saloon"
}
function shp(){
//shop.innerHTML="shop"
}
function gns(){
//guns.innerHTML="guns"
}
var city_name_list =["Reno","Virginia City", "Carson City", "Redwood", "Silver Springs", "Westwood", "Doyle", "Bridgeport" ];
/*
function reno_hvr(){
		reno.innerHTML=city_name[0];
}	
function virginia_hvr(){
		virginia.innerHTML=city_name[1];
}	
function carson_hvr(){
		carson.innerHTML=city_name[2];
}	
function redwood_hvr(){
		redwood.innerHTML=city_name[3];
}

function silver_springs_hvr(){
		silver_springs.innerHTML=city_name[4];
}
function westwood_hvr(){
		westwood.innerHTML=city_name[5];
}
function doyle_hvr(){
		doyle.innerHTML=city_name[6];
}
function bridgeport_hvr(){
		bridgeport.innerHTML=city_name[7];
}*/
//window_onload//
window.onload=function(){

	var battlefield = document.getElementById("battlefield")
	var end_battle = document.getElementById("end_battle")
	var bandit_first = document.getElementById("bandit_first")
	var bandit_second = document.getElementById("bandit_second")
	var bandit_third = document.getElementById("bandit_third")
	var health = document.getElementById("health")
	var health_wrap = document.getElementById("health_wrap")
	var health_sign_hero = document.getElementById("health_sign_hero")
	var hero = document.getElementById("hero")
	var hero_a_mer = document.getElementById("hero_a")
	var hero_b_mer = document.getElementById("hero_b")

	var sign_h_a = document.getElementById("sign_h_a")
	var sign_h_b = document.getElementById("sign_h_b")

	var health_sign_a = document.getElementById("health_sign_a")
	var health_sign_b = document.getElementById("health_sign_b")
	var health_sign_c = document.getElementById("health_sign_c")

	var sign_a = document.getElementById("sign_a")
	var sign_b = document.getElementById("sign_b")
	var sign_c = document.getElementById("sign_c")

	var bullets = document.getElementById("bullets")

	var wrn =document.getElementById("wrn")
	var contracts = document.getElementById("active_contracts")

	var money = document.getElementById("money")

	var str = document.getElementById('story')
	var main = document.getElementById('main')
	var reno = document.getElementById("reno")
	var carson = document.getElementById("carson")
	var virginia = document.getElementById("virginia")
	var redwood = document.getElementById("redwood")
	var silver_springs = document.getElementById("silver_springs")
	var westwood = document.getElementById("westwood")
	var doyle = document.getElementById("doyle")
	var bridgeport = document.getElementById("bridgeport")
	var pers = document.getElementById("pers")

	var glass = document.getElementById("glass")
	
	var map = document.getElementById("map")
	var ci_marks = document.getElementsByClassName("ci_marks")
	var wrap = document.getElementById("wrap")
	var to_map = document.getElementById("to_map")
	var baner = document.getElementById("baner")
	
	var city_name = document.getElementById("city_name")
	var main_wrap = document.getElementById("main_wrap")

	var btn_ok =document.getElementById("btn_ok_str")
	var ok =document.getElementById("btn_ok")
	var no =document.getElementById("btn_no")
	var ok_sh =document.getElementById("btn_ok_sh")
	var no_sh =document.getElementById("btn_no_sh")

	var enter_text_baner =document.getElementById("enter_text_baner")
	
	var contract_wrap =document.getElementById("contract_wrap")

	var alert_bnr = document.getElementById("alert_bnr")
	var btn_ok_alert =document.getElementById("btn_ok_alert")

	var enter_text_ask =document.getElementById("enter_text_ask")
	var ask_bnr = document.getElementById("ask_bnr")
	var btn_yes_ask =document.getElementById("btn_yes_ask")
	var btn_no_ask =document.getElementById("btn_no_ask")
	
	var enter_text =document.getElementById("enter_text")
	var shop_list =document.getElementById("shop_list")
	var li_wrap	=document.getElementById("li_wrap")
	var li_cont	=document.getElementById("li_cont")

	var win_lose =document.getElementById("win_lose")

	var stable =document.getElementById("stable")
	var prison =document.getElementById("prison")
	var saloon =document.getElementById("saloon")
	var shop =document.getElementById("shop")
	var guns =document.getElementById("guns")
 
	var slt1 =document.getElementById("slt1")
		var slt1_inn =document.getElementById("slt1_inn")
	var slt2 =document.getElementById("slt2")
		var slt2_inn =document.getElementById("slt2_inn")
	
	var slt3 =document.getElementById("slt3")
		var slt3_inn =document.getElementById("slt3_inn")
	var slt4 =document.getElementById("slt4")
		var slt4_inn =document.getElementById("slt4_inn")
	var slt5 =document.getElementById("slt5")
		var slt5_inn =document.getElementById("slt5_inn")
	var slt6 =document.getElementById("slt6")
		var slt6_inn =document.getElementById("slt6_inn")
	
	var slt7 =document.getElementById("slt7")
		var slt7_inn =document.getElementById("slt7_inn")
	var slt8 =document.getElementById("slt8")
		var slt8_inn =document.getElementById("slt8_inn")
	var slt9 =document.getElementById("slt9")
		var slt9_inn =document.getElementById("slt9_inn")
	var slt10 =document.getElementById("slt10")
		var slt10_inn =document.getElementById("slt10_inn")
	var slt11 =document.getElementById("slt11")
		var slt11_inn =document.getElementById("slt11_inn")
	var slt12 =document.getElementById("slt12")
		var slt12_inn =document.getElementById("slt12_inn")

	var slt13 =document.getElementById("slt13")
		var slt13_inn =document.getElementById("slt13_inn")
	var slt14 =document.getElementById("slt14")
		var slt14_inn =document.getElementById("slt14_inn")
	var slt15 =document.getElementById("slt15")
		var slt15_inn =document.getElementById("slt15_inn")
	var slt16 =document.getElementById("slt16")
		var slt16_inn =document.getElementById("slt16_inn")

	var slt_ammo =document.getElementById("slt_ammo")
		var slt_ammo_inn =document.getElementById("slt_ammo_inn")
	var slt_vg =document.getElementById("slt_vg")
		var slt_vg_inn =document.getElementById("slt_vg_inn")

	var date =document.getElementById("date")

	var test_btn =document.getElementById("test_btn")

	

test_btn.onclick=function(){
	//alert(hearing_status+"<hearing_status|"+hearings_city+"<hearings_city|"+hearings_type+"<hearings_type|"+trav+"<trav|"+a+"<a|"+hear_city_transfer	+"<hear_city_transfer|"+hear_type_transfer+"<hear_type_transfer|"+battle+"<battle|"+battle_count+"battle_count");
  	//alert(cont+"<cont|"+bandit_hit+"<bandit_hit|"+hero_health+"<hero_health|"+a+"<a|"+bandit_numb+"<bandit_numb|"+bandits_tipe_count+"<bandits_tipe_count|"+bandit_a_health_transfer+"<bandit_a_health_transfer|")	
  	//alert(bandits_type_count+"<bandits_type_count|"+das+"<das"+bandit_numb+"<bandit_numb"+a_rez+"<a_rez|"+ct_y_rez+"<ct_y_rez|"+ct_x_rez+"<ct_x_rez|"+ya+"<ya|"+xa+"<xa|"+cont+"<cont|"+hearing_status+traveler_check+package);
	//alert(bandit_a_health+"<bandit_a_health|"+bandit_b_health+"<bandit_b_health|"+bandit_c_health+"<bandit_c_health|"+bandit_cnt_a+"<bandit_cnt_a|"+bandit_cnt_b+"<bandit_cnt_b|"+bandit_cnt_a+"<bandit_cnt_c|"+bandit_shooting+"<bandit_shooting|"+bandit_hit_a+"<bandit_hit_a|"+bandit_hit_b+"<bandit_hit_b|"+bandit_hit_c+"<bandit_hit_c|"+bandit_shooting+"<bandit_shooting|");
	//alert( hero_b_pos+"<hero_b_pos|"+hero_a_pos+"<hero_a_pos|"+hero_a_health+"<hero_a_health|"+hero_b_heals+"<hero_b_heals|"+hero_a_hit+"<hero_a_hit|"+hero_b_hit+"<hero_b_hit|");
	alert( hls_mrc+"<hls_mrc|"+hero_a_health_mer+"<hero_a_health_mer|"+ hero_a_health_trans+"<hero_a_health_trans|"+ merccnt+"<merccnt|"+time_hero_a+"<time_hero_a|"+hero_b_pos+"<hero_b_pos|"+hero_a_pos+"<hero_a_pos|"+hero_a_health+"<hero_a_health|");
}

contracts.onclick = function(){
	active_contracts()
}

function active_contracts(){
	baner.className="ok";
	no.className="none";
	ok.className="btn_m1";
if ((traveler_check==false) && (package == false)){
				enter_text.innerHTML="Контракт на доставку пасажирів "+city_name_list[trav-1]+"<br>Контракт на доставку посилки в "+city_name_list[package_twn_transfer-1];
	}else if(traveler_check==false){
			enter_text.innerHTML="Контракт на доставку пасажирів "+city_name_list[trav-1]; //trav
		}else if (package == false) {
			enter_text.innerHTML="<br>Контракт на доставку посилки в "+city_name_list[package_twn_transfer-1];
		}else 
			enter_text.innerHTML="немає активних контрактів";
	ok.onclick=function(){
		baner.className="none";
		ok.className="btn_m";
		no.className="btn_m";
		
	}
}

//main scripts and functions//

money.innerHTML = money_default+"  $";

function count(){
if (b==0){
		 b=1;
	reno.className="none";
	carson.className="none";
	virginia.className="none";
	redwood.className="none";
	silver_springs.className="none";
	westwood.className="none";
	doyle.className="none";
	bridgeport.className="none";
	to_map.className="back_block";
	to_map.innerHTML="LEAVE THE CITY";
		}
			else if(b==1){
				b=0;
				reno.className="block";
				carson.className="block";
				virginia.className="block";
				redwood.className="block";
				silver_springs.className="block";
				westwood.className="block";
				doyle.className="block";
				bridgeport.className="block";
				to_map.className="back_block";
				to_map.innerHTML="LEAVE THE CITY";
			}	
			return b;
}
function city(){
	if(a==1){
		hearings_count()
		trav_eres()
	return (stable.className=' stable_reno bld')+
		(prison.className=' jail_reno bld')+
		(saloon.className=' saloon_reno bld')+
		(shop.className=' shop_reno bld')+
		(guns.className=' gun_reno bld')+
		(pers.className="none")+
		(battlefield.className="none")+
		(to_map.className="back_block");
	}else if(a==2){
		hearings_count()
		trav_eres()
	return (stable.className=' stable_virginia bld')+
		(prison.className=' jail_virginia bld')+
		(saloon.className=' saloon_virginia bld')+
		(shop.className=' shop_virginia bld')+
		(guns.className=' gun_virginia bld')+
		(pers.className="none")+
		(battlefield.className="none")+
		(to_map.className="back_block");
	}else if(a==3){
		hearings_count()
		trav_eres()
	return (stable.className=' stable_carson bld')+
		(prison.className=' jail_carson bld')+
		(saloon.className=' saloon_carson bld')+
		(shop.className=' shop_carson bld')+
		(guns.className=' gun_carson bld')+
		(pers.className="none")+
		(battlefield.className="none")+
		(to_map.className="back_block");
	}else if(a==4){
		hearings_count()
		trav_eres()
	return (stable.className=' stable_redwood bld')+
		(prison.className=' jail_redwood bld')+
		(saloon.className=' saloon_redwood bld')+
		(shop.className=' shop_redwood bld')+
		(guns.className=' gun_redwood bld')+
		(pers.className="none")+
		(battlefield.className="none")+
		(to_map.className="back_block");
	}else if(a==5){
		hearings_count()
		trav_eres()
	return (stable.className=' stable_silver_spring bld')+
		(prison.className=' jail_silver_spring bld')+
		(saloon.className=' saloon_silver_spring bld')+
		(shop.className=' shop_silver_spring bld')+
		(guns.className=' gun_silver_spring bld')+
		(pers.className="none")+
		(battlefield.className="none")+
		(to_map.className="back_block");
	}else if(a==6){
		hearings_count()
		trav_eres()
	return (stable.className=' stable_westwood bld')+
		(prison.className=' jail_westwood bld')+
		(saloon.className=' saloon_westwood bld')+
		(shop.className=' shop_westwood bld')+
		(guns.className=' gun_westwood bld')+
		(pers.className="none")+
		(battlefield.className="none")+
		(to_map.className="back_block");
	}else if(a==7){
		hearings_count()
		trav_eres()
	return (stable.className=' stable_doyle bld')+
		(prison.className=' jail_doyle bld')+
		(saloon.className=' saloon_doyle bld')+
		(shop.className=' shop_doyle bld')+
		(guns.className=' gun_doyle bld')+
		(pers.className="none")+
		(battlefield.className="none")+
		(to_map.className="back_block");
	}else if(a==8){
		hearings_count()
		trav_eres()
	return (stable.className=' stable_bridgeport bld')+
		(prison.className=' jail_bridgeport bld')+
		(saloon.className=' saloon_bridgeport bld')+
		(shop.className=' shop_bridgeport bld')+
		(guns.className=' gun_bridgeport bld')+
		(pers.className="none")+
		(battlefield.className="none")+
		(to_map.className="back_block");
	}
}

function li(){
	return(stable.className='none')+
		(prison.className='none')+
		(saloon.className='none')+
		(shop.className='none')+
		(guns.className='none')+
		(to_map.className="none");	
}

//shop list ok/no//////////////////////////////////
function full_list(){
	shop_list.className="sh_li";
	li();
	ok_sh.onclick=function(){
		shop_list.className="none";
		city();
		count();
		
		 money_default = money_cash;
		money.innerHTML = money_default+"$";
	}
	no_sh.onclick=function(){
		shop_list.className="none";
		city();
		count();
		money.innerHTML = money_default+"$";
		money_cash = money_default;
	}
}

//shop list//
function tbl(){
	if (c==1){
		li_cont.className="li_content";///////////
		no_sh.className="none";
		 li_cont.innerHTML="&nbsp;<br>"
					+"<div class='sp_wr'><div class='wag1_img wrp'></div>6 ячейок 1500$"+ "<button onclick='stbl_6()' class='plus'>+</button></div><br>"
					+"<div class='sp_wr'><div class='wag2_img wrp'></div>12 ячейок 5500$"+ "<button onclick='stbl_12()' class='plus'>+</button></div><br>"
					+"<div class='sp_wr'><div class='wag3_img wrp'></div>16 ячейок 10000$"+ "<button onclick='stbl_16()' class='plus'>+</button></div><br>"
					
					
	}
		else if(c==2){
			li_cont.className="li_content";
			no_sh.className="none";
			 li_cont.innerHTML="&nbsp; <br>"
				    +"<div class='sp_wr'>розшук"+ "<button onclick='' class='plus'>+</button><button onclick='' class='plus'>-</button></div><br>"
					+"<div class='sp_wr'>переправка"+ "<button onclick='' class='plus'>+</button><button onclick='' class='plus'>-</button></div><br>";
					

		}
			else if(c==3){
				li_cont.className="li_content";
				no_sh.className="none";
				li_cont.innerHTML="&nbsp;<br>"
					+"<div class='sp_wr'><div class='barman_img wrp'></div>новини"+ "<button onclick='sln_a()' class='plus'>></button></div><br>"
					+"<div class='sp_wr'><div class='doctor_img wrp'></div>лікар"+ "<button onclick='sln1()' class='plus'>></button></div><br>"
					+"<div class='sp_wr'><div class='shooter_img wrp'></div>найняти стрілка"+ "<button onclick='sln2()' class='plus'>></button></div><br>"
					+"<div class='sp_wr'><div class='traveler_img wrp'></div>перевезення пасажирів"+ "<button onclick='sln3()' class='plus'>></button></div><br>"+
					"<div class='sp_wr'><div class='deliver_img wrp'></div>відвезти посилку"+ "<button onclick='sln4()' class='plus'>></button></div><br>";		
			}
				else if(c==4){
					li_cont.className="li_content";
					no_sh.className="none";
					li_cont.innerHTML="&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; BUY &nbsp;  &nbsp; SEL<br>"
					+"<div class='sp_wr'><div class='dr_img wrp'></div>випивка &nbsp;"+ whisky_sh_by+"$  &nbsp; &nbsp; "+ whisky_sh_sl+"$"+ "<button onclick='numb_def()' class='plus'>+</button><button onclick='pl_numb_def()' class='plus'>-</button></div><br>"
					+"<div class='sp_wr'><div class='bl_img wrp'></div>патрони &nbsp;"+ ammo_sh_by +"$ &nbsp; &nbsp; "+ ammo_sh_sl+"$"+ "<button onclick='numb_bl()' class='plus'>+</button><button onclick='pl_numb_bl()' class='plus'>-</button></div><br>"
					+"<div class='sp_wr'><div class='br_img wrp'></div>хліб  &nbsp;"+brad_sh_by+"$  &nbsp; &nbsp; "+ brad_sh_sl+"$"+ "<button onclick='numb_br()' class='plus'>+</button><button onclick='pl_numb_br()' class='plus'>-</button></div><br>"
					+"<div class='sp_wr'><div class='gld_img wrp'></div>золото &nbsp;"+gold_sh_by+"$  &nbsp; &nbsp; "+ gold_sh_sl+"$"+ "<button onclick='numb_gld()' class='plus'>+</button><button onclick='pl_numb_gld()' class='plus'>-</button></div><br>"
					+"<div class='sp_wr'><div class='dm_img wrp'></div>динаміт &nbsp;"+dynamite_sh_by+"$  &nbsp; &nbsp; "+ dynamite_sh_sl+"$"+ "<button onclick='numb_dm()' class='plus'>+</button><button onclick='pl_numb_dm()' class='plus'>-</button></div><br>"
					+"<div class='sp_wr'><div class='mt_img wrp'></div>м'ясо &nbsp;"+meet_sh_by+"$  &nbsp; &nbsp; "+ meet_sh_sl+"$"+ "<button onclick='numb_mt()' class='plus'>+</button><button onclick='pl_numb_mt()' class='plus'>-</button></div><br>"
					+"<div class='sp_wr'><div class='rp_img wrp'></div>шнур &nbsp;"+rope_sh_by+"$  &nbsp; &nbsp; "+ rope_sh_sl+"$"+ "<button onclick='numb_rp()' class='plus'>+</button><button onclick='pl_numb_rp()' class='plus'>-</button></div><br>"
					+"<div class='sp_wr'><div class='tl_img wrp'></div>інструменти &nbsp;"+pickaxe_sh_by+"$  &nbsp; &nbsp; "+ pickaxe_sh_sl+"$"+ "<button onclick='numb_tl()' class='plus'>+</button><button onclick='pl_numb_tl()' class='plus'>-</button></div><br>";
				}
					else if(c==5){
						li_cont.innerHTML="guns";
						no_sh.className="none";
						 li_cont.innerHTML="&nbsp; <br>"
				   +"<div class='sp_wr'><div class='gun_b wrp'></div>gun1 &nbsp; 500 $;"+ "<button onclick='gun_b()' class='plus'>+</button></div><br>"
					+"<div class='sp_wr'><div class='gun_c wrp'></div>gun2 &nbsp; 1000 $"+ "<button onclick='gun_c()' class='plus'>+</button></div><br>"
					+"<div class='sp_wr'><div class='gun_d wrp'></div>gun3 &nbsp; 2000 $ "+ "<button onclick='gun_d()' class='plus'>+</button></div><br>"
					+"<div class='sp_wr'><div class='gun_e wrp'></div>dhootgun; 3200 $"+ "<button onclick='gun_e()' class='plus'>+</button></div><br>"
					+"<div class='sp_wr'><div class='gun_f wrp'></div>sniper rifle; 5500 $ "+ "<button onclick='gun_f()' class='plus'>+</button></div><br>"
					+"<div class='sp_wr'><div class='gun_g wrp'></div>mashinegun; &nbsp; 7000 $ "+ "<button onclick='gun_g()' class='plus'>+</button></div><br>";
					}
}


function start(){
	str.className="none";
	spc.className="inv_wrap";
	contract_wrap.className="contracts";

	
if(inv==0){
		pers.className="pers_stop";
		}else if(inv==1){
			pers.className="dilig_1_move_forward";
		}else if(inv==2){
			pers.className="dilig_2_move_forward";
		}else if(inv==3){
			pers.className="dilig_3_move_forward";
		}
	health_wrap.className="health_wrap";
	reno.className="ci_marks";
	virginia.className="ci_marks";
	carson.className="ci_marks";
	redwood.className="ci_marks";
	silver_springs.className="ci_marks";
	westwood.className="ci_marks";
	doyle.className="ci_marks";
	bridgeport.className="ci_marks";
}

btn_ok.onclick = function(){
	
	traveler_random()

		merc_a_rend()	
		packege_random()
		trav_eres()
		packege_minus()
	//clear_list()
	shop_random()
	//hearings_random()
	start()	
}

stable.onclick=function(){
	c=1;
	full_list();
	li_wrap.innerHTML="<div class='tbl1'>STABLE</div>";
	tbl();
}
prison.onclick=function(){
	c=2;
	full_list();
		li_wrap.innerHTML="<div class='tbl2'>JAIL</div>";
		tbl();
}	
saloon.onclick=function(){
	c=3;
	full_list();
		li_wrap.innerHTML="<div class='tbl3'>SALOON</div>";
		tbl();
}
shop.onclick=function(){
	c=4;
	full_list();
		li_wrap.innerHTML="<div class='tbl4'>GENERAL STORE</div>";
		tbl();
}
guns.onclick=function(){
	c=5;
	full_list();
		li_wrap.innerHTML="<div class='tbl5'>GUN SHOPE</div>";
		tbl();
}


function cityname(){
	if(a==1){
		city_name.className="city_name";
		city_name.innerHTML = "Reno";
	}else if(a==2){
			city_name.className="city_name";
			city_name.innerHTML = "virginia";
	}else if(a==3){
			city_name.className="city_name";
			city_name.innerHTML = "Carson";
	}else if(a==4){
			city_name.className="city_name";
			city_name.innerHTML = "Redwood";
		}else if(a==5){
			city_name.className="city_name";
			city_name.innerHTML = "Silver Springs";
		}else if(a==6){
			city_name.className="city_name";
			city_name.innerHTML = "Westwood";
		}else if(a==7){
			city_name.className="city_name";
			city_name.innerHTML = "Doyle";
		}else if(a==8){
			city_name.className="city_name";
			city_name.innerHTML = "Bridgeport";
		}
}
//---------------Reno-------------// 1

reno.onclick = function(){

	baner.className="ok";
	enter_text.innerHTML="GO TO <p class='banner_city'> RENO?</p>";

	ok.onclick=function(){
		
		a=1;
		battle_random_time()
		battle_count=0;
		baner.className="none";
		
		glass.className="glass";
				 ct_x=344;
				 ct_y=137;
				
				 spid_x=1; //1.75
				 spid_y=1;	//0.5
				move()
		//map.className='reno_map';
		//count();
		//city()
	}
	no.onclick=function(){
		baner.className="none";
		
	}				
}

//---------------virginia-------------// 2
virginia.onclick = function(){

	baner.className="ok";
	enter_text.innerHTML="GO TO<p class='banner_city'> VIRGINIA CITY?</p>";


	ok.onclick=function(){
		
		a=2;
		battle_random_time()
		battle_count=0;
		baner.className="none";
		//Virginia_trevel();
		glass.className="glass";
			
				 ct_x=230;
				 ct_y=395;
				
				 spid_x=1; //0.7
				 spid_y=1;  //0.5
				// glass.className="glass";
				move()
			//map.className='virginia_map';	
			//count();
			//city()	
		
	}
	no.onclick=function(){
		baner.className="none";
	}
}

//---------------Carson-------------// 3
carson.onclick = function(){
	
	
	baner.className="ok";
	enter_text.innerHTML="GO TO <p class='banner_city'> CARSON CITY?</p>";
	
	ok.onclick=function(){
		
		a=3;
battle_random_time()
		battle_count=0;
		baner.className="none";
		
		 glass.className="glass";
			ct_x=252;
				 ct_y=648;
				 
				 spid_x=1;	//0.45
				 spid_y=1;		//1
				move()

	//	map.className='carson_map';		
		//	count();
		//city()	
	}
	no.onclick=function(){
		baner.className="none";
	
	}
}
//---------------Redwood-------------// 4
redwood.onclick = function(){
	
	
	baner.className="ok";
	enter_text.innerHTML="GO TO <p class='banner_city'>REDWOOD?</p>";
	
	ok.onclick=function(){
		
		a=4;

		battle_random_time()
		battle_count=0;
		baner.className="none";
		
		glass.className="glass";	 
			ct_x=422;
				 ct_y=430;
				 
				 spid_x=1;	//1.8
				 spid_y=1;	//0.5
				move()

	//	map.className='carson_map';		
		//	count();
		//city()	
	}
	no.onclick=function(){
		baner.className="none";
	
	}
}

//---------------silver_springs-------------// 5
silver_springs.onclick = function(){
		
	baner.className="ok";
	enter_text.innerHTML="GO TO <p class='banner_city'> SILVER SPRINGS?</p>";
	
	ok.onclick=function(){
		
		a=5;
battle_random_time()
battle_count=0;
		baner.className="none";
		
		glass.className="glass";	 
			ct_x=151;
				 ct_y=918;
				 
				 spid_x=1;	//1.8
				 spid_y=1;	//0.5
				move()

	//	map.className='carson_map';		
		//	count();
		//city()	
	}
	no.onclick=function(){
		baner.className="none";
	
	}
}
//---------------westwood-------------// 6
westwood.onclick = function(){
	
	
	baner.className="ok";
	enter_text.innerHTML="GO TO <p class='banner_city'>WESTWOOD?</p>";
	
	ok.onclick=function(){
		
		a=6;
battle_random_time()
		battle_count=0;
		baner.className="none";
		
		glass.className="glass";	 
			ct_x=102;
				 ct_y=208;
				 
				 spid_x=1;	//1.8
				 spid_y=1;	//0.5
				move()

	//	map.className='carson_map';		
		//	count();
		//city()	
	}
	no.onclick=function(){
		baner.className="none";
	
	}
}

//---------------doyle-------------// 7
doyle.onclick = function(){
	baner.className="ok";
	enter_text.innerHTML="GO TO <p class='banner_city'> DOYLE?</p>";
	ok.onclick=function(){
		a=7;
battle_random_time()
		battle_count=0;
		baner.className="none";	
		glass.className="glass";	 
			ct_x=73;
				 ct_y=650;
				 spid_x=1;	//1.8
				 spid_y=1;	//0.5
				move()
	//	map.className='carson_map';		
		//	count();
		//city()	
	}
	no.onclick=function(){
		baner.className="none";	
	}
}
//---------------bridgeport-------------// 8
bridgeport.onclick = function(){
	baner.className="ok";
	enter_text.innerHTML="GO TO  <p class='banner_city'>BRIDGEPORT?</p>";	
	ok.onclick=function(){	
		a=8;
battle_random_time()
		battle_count=0;
		baner.className="none";
		
		glass.className="glass";	 
			ct_x=377;
				 ct_y=820;
				 
				 spid_x=1;	//1.9	
				 spid_y=1;	//0.5
				move()
	//	map.className='carson_map';		
		//	count();
		//city()	
	}
	no.onclick=function(){
		baner.className="none";
	}
}

//txit//
to_map.onclick = function(){
	baner.className="ok";
	enter_text.innerHTML="DO YOU WANT TO LEAVE THE CITY?";
	li();
	
ok.onclick=function(){
	reno.className ='ci_marks';
	carson.className ='ci_marks'; 
	virginia.className ='ci_marks';
	redwood.className ='ci_marks';
	silver_springs.className ='ci_marks';
	westwood.className ='ci_marks';
	doyle.className ='ci_marks';
	bridgeport.className ='ci_marks';
	map.className="map_all";
	if(inv==0){
		pers.className="pers_stop";
		}else if(inv==1){
			pers.className="dilig_1_move_forward";
		}else if(inv==2){
			pers.className="dilig_2_move_forward";
		}else if(inv==3){
			pers.className="dilig_3_move_forward";
		}
	to_map.className="none";
	to_map.innerHTML="";
		stable.className='none';
		prison.className='none';
		saloon.className='none';
		shop.className='none';
		guns.className='none';
		city_name.className="none";

		baner.className="none";	
		if(a==1){
			anim_cnt=148;
		}else if(a==2){
			    anim_cnt=300;
			    	}else if(a==3)
			    			anim_cnt=600;
	}
	no.onclick=function(){
		baner.className="none";
		city();
		to_map.className="back_block";
	}
}

var m = 1;
var dy=1;
var time_dy =0;

var day_count = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 30];
var day_cnt = day_count[0];
var k=0;

function days(){
for(k=0; k<=day_count.length-1; k++){
	if(k==m-1){
		day_cnt = day_count[k];
			if(m==13){

				if(money_default<100000){
					win_lose.className="lose";
					main_wrap.className="none";
					main.className="none";
					//win_lose.innerHTML="ВИ ПРОГРАЛИ";
					clearInterval(move_scr)
				}else if(money_default>=100000){
					win_lose.className="win";
					main_wrap.className="none";
					main.className="none";
					//win_lose.innerHTML="ВИ ВИГРАЛИ";
					clearInterval(move_scr)
				}
			}
	}}
}
///////DATE//////////
var dte = date.innerHTML=day+"/"+m+"/"+year;

function citys(){

if(a==1){
	map.className='reno_map';
	a_rez=a;
	ct_y_rez = ya;
	ct_x_rez = xa;
		count()
		city()
		cityname()
		glass.className="none";
}else if(a==2){
		map.className='virginia_map';
		a_rez=a;
		ct_y_rez = ya;
	ct_x_rez = xa;	
			count()
			city()	
			cityname()
			glass.className="none";
	}else if(a==3){
		map.className='carson_map';	
		a_rez=a;	
		ct_y_rez = ya;
	ct_x_rez = xa;
			count()
			city()
			cityname()
			glass.className="none";	
	}	else if(a==4){
		map.className='redwood_map';
		a_rez=a;	
		ct_y_rez = ya;
	ct_x_rez = xa;	
			count()
			city()
			cityname()	
			glass.className="none";
	}	else if(a==5){
		map.className='silver_springs_map';
		a_rez=a;
		ct_y_rez = ya;
	ct_x_rez = xa;
			count()
			city()
			cityname()	
			glass.className="none";
	}	else if(a==6){
		map.className='westwood_map';	
		a_rez=a;	
		ct_y_rez = ya;
	ct_x_rez = xa;
			count()
			city()
			cityname()	
			glass.className="none";
	}	else if(a==7){
		map.className='doyle_map';
		a_rez=a;	
		ct_y_rez = ya;
	ct_x_rez = xa;	
			count()
			city()
			cityname()	
			glass.className="none";
	}	else if(a==8){
		map.className='bridgeport_map';	
		a_rez=a;
		ct_y_rez = ya;
	ct_x_rez = xa;
			count()
			city()
			cityname()	
			glass.className="none";
	}
}
//////////////////////////////////move and randome
function merciner_time(){
	if((m=time_hero_a)&&(hero_a_pos=true)){
		//time_hero_a
		hero_a_pos=false;
		alert(1);
	}

	if((m=time_hero_b)&&(hero_b_pos=true)){
		hero_b_pos=false;
	}
	//time_hero_a=mrc_time_rand;
}
function marciner_city(){
	merccnt=0;
}
var cbx = 0
var cby = 0

function move(){
	
	move_scr =	setInterval(function(){
		if(xa<=ct_x){
			//pers.className="pers_move_forward";
			pers.style="margin-left:"+ya+"px;margin-top:"+xa+"px;"
				time_dy = time_dy+1;
						battle_cnt()
				if(time_dy >= 270){
					time_dy=0;
					dy=dy+1;
					if(hear_city_transfer!=a){
					hearings_random()
				}else {
					if ((hear_type_transfer<=3)||(hear_type_transfer>=7)){
					//hearing_status=true;
					hear_city_transfer = hearings_city;
					hear_type_transfer = hearings_type;
						}
			}
				merc_a_rend()
				marciner_city()
					packege_random()
					merciner_time()
					traveler_random()
						clear_list()
						shop_random()
					date.innerHTML=dy+"/"+m+"/"+year;
					if(dy>=day_cnt){
						
					    m=m+1;
					    dy=1;
					    
						days()
						
						date.innerHTML=dy+"/"+m+"/"+year;
					}}
			xa=xa+spid_x;
				if(ya<=ct_y){
					if(ya<=ct_y-1){
					backward()
				}
					pers.style="margin-left:"+ya+"px;margin-top:"+xa+"px;"
					time_dy = time_dy+1;
						battle_cnt()
				if(time_dy >= 270){
					time_dy=0;
					dy=dy+1;
					
					if(hear_city_transfer!=a){
					hearings_random()
				}else {
					if ((hear_type_transfer<=3)||(hear_type_transfer>=7)){
					//hearing_status=true;
					hear_city_transfer = hearings_city;
					hear_type_transfer = hearings_type;
						}

			}
				merc_a_rend()
				marciner_city()
					packege_random()
					merciner_time()
					traveler_random()
						clear_list()
						shop_random()
					date.innerHTML=dy+"/"+m+"/"+year;
					if(dy>=day_cnt){
						
					    m=m+1;
					    dy=1;
					    
						days()
						
						date.innerHTML=dy+"/"+m+"/"+year;
					}}
					ya=ya+spid_y;
				}else if(ya>=ct_y){
							if(ya>=ct_y+1){
					forward()
				}
					pers.style="margin-left:"+ya+"px;margin-top:"+xa+"px;"
					time_dy = time_dy+1;
						battle_cnt()
				if(time_dy >= 270){
					time_dy=0;
					dy=dy+1;
					
					if(hear_city_transfer!=a){
					hearings_random()
				}else {
					if ((hear_type_transfer<=3)||(hear_type_transfer>=7)){
					//hearing_status=true;
					hear_city_transfer = hearings_city;
					hear_type_transfer = hearings_type;
						}

			}	
				merc_a_rend()
				marciner_city()
					packege_random()
					merciner_time()
					traveler_random()
						clear_list()
						shop_random()
					date.innerHTML=dy+"/"+m+"/"+year;
					if(dy>=day_cnt){
						
					    m=m+1;
					    dy=1;
					    
						days()
						
						date.innerHTML=dy+"/"+m+"/"+year;
					}}
					ya=ya-spid_y;
				}
			if((xa-1==ct_x)&(ya==ct_y)){
				//pers.className="pers_stop";
				pers.style="margin-left:"+ya+"px;margin-top:"+xa+"px;"
					
				//hearings_random()
				clearInterval(move_scr)
				citys()
			}

		}else if(xa>=ct_x){
			if(xa>=ct_x+1){
			backward()
		}
			pers.style="margin-left:"+ya+"px;margin-top:"+xa+"px;"
			time_dy = time_dy+1;
						battle_cnt()
				if(time_dy >= 270){
					time_dy=0;
					dy=dy+1;
					
					if(hear_city_transfer!=a){
					hearings_random()
				}else {
					if ((hear_type_transfer<=3)||(hear_type_transfer>=7)){
					//hearing_status=true;
					hear_city_transfer = hearings_city;
					hear_type_transfer = hearings_type;
						}

			}	
			merc_a_rend()
			marciner_city()
					packege_random()
					merciner_time()
					traveler_random()
						clear_list()
						shop_random()
					date.innerHTML=dy+"/"+m+"/"+year;
					if(dy>=day_cnt){
						
					    m=m+1;
					    dy=1;
					    
						days()
						
						date.innerHTML=dy+"/"+m+"/"+year;
					}}
			xa=xa-spid_x;
				if(ya>=ct_y){
					if(ya>=ct_y+1){
					forward()
				}	
					pers.style="margin-left:"+ya+"px;margin-top:"+xa+"px;"
					time_dy = time_dy+1;
						battle_cnt()
				if(time_dy >= 270){
					time_dy=0;
					dy=dy+1;

					
					if(hear_city_transfer!=a){
					hearings_random()
				}else {
					if ((hear_type_transfer<=3)||(hear_type_transfer>=7)){
					//hearing_status=true;
					hear_city_transfer = hearings_city;
					hear_type_transfer = hearings_type;
						}

			}		
				merc_a_rend()
				marciner_city()
					packege_random()
					merciner_time()
					traveler_random()
						clear_list()
						shop_random()
					date.innerHTML=dy+"/"+m+"/"+year;
					if(dy>=day_cnt){
						
					    m=m+1;
					    dy=1;
					    
						days()
						
						date.innerHTML=dy+"/"+m+"/"+year;
					}}
					ya=ya-spid_y;
				}else if(ya<=ct_y){
					if(ya<=ct_y-1){
					backward()
						}
					pers.style="margin-left:"+ya+"px;margin-top:"+xa+"px;"
					time_dy = time_dy+1;
						battle_cnt()
				if(time_dy >= 270){
					time_dy=0;
					dy=dy+1;
				
					if(hear_city_transfer!=a){
					hearings_random()
				}else {
					if ((hear_type_transfer<=3)||(hear_type_transfer>=7)){
					//hearing_status=true;
					hear_city_transfer = hearings_city;
					hear_type_transfer = hearings_type;
						}

			}
				merc_a_rend()
				marciner_city()
					packege_random()
					merciner_time()
					traveler_random()
						clear_list()
						shop_random()

					date.innerHTML=dy+"/"+m+"/"+year;
					if(dy>=day_cnt){
						
					    m=m+1;
					    dy=1;
					    
						days()
						
						date.innerHTML=dy+"/"+m+"/"+year;
					}}
					ya=ya+spid_y;
				}
			if((xa==ct_x)&(ya==ct_y)){
				
				//pers.className="pers_stop";
				pers.style="margin-left:"+ya+"px;margin-top:"+xa+"px;"
				
				//hearings_random()
				clearInterval(move_scr)
				citys()
			}
		}
}, 10); 

	function forward(){
		if(inv==0){
			pers.className="pers_move_forward";
		}else if(inv==1){
				pers.className="dilig_1_move_forward";
		}else if(inv==2){
					pers.className="dilig_2_move_forward";
		}else if(inv==3){
			pers.className="dilig_3_move_forward";
		}
	}
	function backward(){
		if(inv==0){
		pers.className="pers_move_backward";
		}else if(inv==1){
			pers.className="dilig_1_move_backward";
		}else if(inv==2){
			pers.className="dilig_2_move_backward";
		}else if(inv==3){
			pers.className="dilig_3_move_backward";
		}
	}

}

/*________________________________________battle_______________________________________________*/

var hero_health_width = 50
var bandit_numb=0;
var hit_count=0;
var style_bandits_location = ['bandit_a_image', 'bandit_b_image', 'bandit_c_image'];
var style_bandits_type=['bandit_type_a', 'bandit_type_b', 'bandit_type_c', 'bandit_type_d', 'bandit_type_e'];
var bandits_hels = [50, 70, 90, 100, 120]; 
var style_bandits_shoot = ['bandit_type_a_shooting', 'bandit_type_b_shooting', 'bandit_type_c_shooting', 'bandit_type_d_shooting', 'bandit_type_e_shooting'];
var style_bandits_down = ['bandit_type_a_down', 'bandit_type_b_down', 'bandit_type_c_down', 'bandit_type_d_down', 'bandit_type_e_down'];
var bandits_attack = [0.5, 1, 1.5, 2, 2];

var bandit_hit_a = 0;
var bandit_hit_b = 0;
var bandit_hit_c = 0;

var bandits_type_count=0;

var bandit_a_health_transfer = 50;
var bandit_b_health_transfer= 50;
var bandit_c_health_transfer = 50;



var hit = 0;

var bandit_shooting = 0;

var bullet=0;
var bullets_x=0;
var bullets_y=0;

var bandit_a = 0;
var bandit_b = 0;
var bandit_c = 0;

var bandit_cnt_a = 0;
var bandit_cnt_b = 0;
var bandit_cnt_c = 0;

function battle_random_time(){
	battle = Math.floor(Math.random()*1000+1);
	bandit_tipe = Math.floor(Math.random()*50+1);
	bandit_numb = Math.floor(Math.random()*30+1);

	bandit_cnt_a= Math.floor(Math.random()*5);
	bandit_cnt_b= Math.floor(Math.random()*5);
	bandit_cnt_c= Math.floor(Math.random()*5);
}


/*function baner_battle(){

	alert_bnr.className="alert_ok";
	enter_text_baner.innerHTML="ви ";
	glass.className="glass";
	btn_ok_alert.onclick = function(){
		alert_bnr.className="none";
		glass.className="none";
		}
}*/

function battle_cnt(){
	battle_count=battle_count+1;
	if(battle_count==battle){
		battle_count=0;
		battle_alert()
		clearInterval(move_scr)
	}
}

function battle_alert(){
	baner.className="ok";
	enter_text.innerHTML="Напад бандитів, прийняти бій чи заплатити 600$ і здатись?";
	glass.className="none";

	clearInterval(move_scr)
				ok.onclick=function(){
					//
					pers.className="none";

					  battlefields()
					glass.className="none";
					baner.className="none";

					battle_a()
					
				}
				no.onclick=function(){
					
					if(money_default>=600){
		money_default=money_default-600;
	money_cash=money_default;
	money.innerHTML =money_default + " $";
	baner.className="none";
					ok.className="btn_m";
					no.className="btn_m";
					battlefield.className="none";
					start()
				
	}else{
		enter_text.innerHTML="у вас недостатньо коштів ";
		pers.className="none";
					battlefields()
					glass.className="none";
					baner.className="none";

					battle_a()
	}				
}
}

function battlefields(){
	if(a==1){
		battlefield.className="battlefield_reno";
	}else if(a==2){
		battlefield.className="battlefield_virginia";
	}else if(a==3){
		battlefield.className="battlefield_carson";
	}else if(a==4){
		battlefield.className="battlefield_redwood";
	}else if(a==5){
		battlefield.className="battlefield_silver_spr";
	}else if(a==6){
		battlefield.className="battlefield_westwood";
	}else if(a==7){
		battlefield.className="battlefield_doyle";
	}else if(a==8){
		battlefield.className="battlefield_bridgeport";
	}
}

function battle_a(){
	reno.className="none";
	virginia.className="none";
	carson.className="none";
	redwood.className="none";
	silver_springs.className="none";
	westwood.className="none";
	doyle.className="none";
	bridgeport.className="none";  //ci_marks
	health_wrap.className="none";
	health_sign_hero.className="health_sign_hero";
	if	((hero_a_pos==true)&&(hero_b_pos==true)){
		hero_a_mer.className="hero_a_image";
		hero_b_mer.className="hero_b_image";
		sign_h_a.className="sign";
		sign_h_b.className="sign";
		}
		else if(hero_a_pos==true){	
			hero_a_mer.className="hero_a_image";
			sign_h_a.className = "sign";
			
		
			}else  if(hero_b_pos==true){	
			hero_b_mer.className="hero_b_image";
			sign_h_b.className="sign";
					}
	bandits_healt_tipe()	
	bandits_number()		
		end_battle.onclick=function(){	
			battle_finish()
		}
}

function battle_finish(){
	baner.className="none";
	no.className="btn_m_ask";
	health_wrap.className="health_wrap";
			battlefield.className="none";
			bandit_a_health_transfer=50;
			bandit_b_health_transfer=50;
			bandit_c_health_transfer=50;
			
			health_sign_a.className="health_sign_a";
			health_sign_b.className="health_sign_b";
			health_sign_c.className="health_sign_c";

			health_sign_a.style="width:"+bandit_a_health_transfer+"px";
			health_sign_b.style="width:"+bandit_b_health_transfer+"px";
			health_sign_c.style="width:"+bandit_c_health_transfer+"px";
			bandit_first.className="bandit_type_a bandit_a_image";
			bandit_second.className="bandit_type_a bandit_b_image";
			bandit_third.className="bandit_type_a bandit_c_image";

			pers.className="pers_stop";

			sign_a.className="sign";
			sign_b.className="sign";
			sign_c.className="sign";

			health.style="width:"+hero_health*3.4+"px";
			start()
}
function health_cnt(){
	hit = 50/bandit_a_health;
	hit=hit*gun_dmg;

	bandit_hit_a=bandit_hit_a/0.5;
		bandit_hit_b=bandit_hit_b/0.5;
			bandit_hit_c=bandit_hit_c/0.5;
}

/*  bandits tipe health  */


function bandits_healt_tipe(){
if(bandit_tipe<=10){
	//bandit_hit=0.5;
	bandits_type_count=0;
	hit_hels()
		
	//className bandit_type_a
}else if((bandit_tipe>10)&&(bandit_tipe<=20)){
	//bandit_hit=1;
	bandits_type_count=1;
	hit_hels()
	//className bandit_type_b
}else if((bandit_tipe>20)&&(bandit_tipe<=30)){
	//bandit_hit=1.5;
	bandits_type_count=2;
	hit_hels()
	
	//className bandit_type_c
}else if((bandit_tipe>30)&&(bandit_tipe<=40)){
	//bandit_hit=2.0;
	bandits_type_count=3;
	hit_hels()
	
	//className bandit_type_d
}else{
	//bandit_hit=2.5;
	bandits_type_count=4;
	hit_hels()
	
	//className bandit_type_e
	}
}

function hit_hels(){
	bandit_hit_a = bandits_attack[bandit_cnt_a];
	bandit_hit_b = bandits_attack[bandit_cnt_b];
	bandit_hit_c = bandits_attack[bandit_cnt_c];
	bandit_a_health = bandits_hels[bandit_cnt_a];
	bandit_b_health= bandits_hels[bandit_cnt_b];
	bandit_c_health = bandits_hels[bandit_cnt_c];
	health_cnt()
}
//var das = style_bandits_type[bandits_type_count]+" "+style_bandits_location[1];
/*     bandits numb      */
function bandits_number(){
	if(bandit_numb<=10){
		bandit_numb=1;0
		bandit_a=false;
		bandit_b=true;
		bandit_c=false;

		bandit_first.className="none";
		bandit_second.className=style_bandits_type[bandit_cnt_b]+" "+style_bandits_location[1];;
		bandit_third.className="none";
	}else if((bandit_numb<=20)&&(bandit_numb>10)){
		bandit_numb=2;
		bandit_a=true;
		bandit_b=true;
		bandit_c=false;
			bandit_first.className=style_bandits_type[bandit_cnt_a]+" "+style_bandits_location[0];;
			bandit_second.className=style_bandits_type[bandit_cnt_b]+" "+style_bandits_location[1];;
			bandit_third.className="none";
	}else if(bandit_numb>20){
		bandit_numb=3;
		bandit_a=true;
		bandit_b=true;
		bandit_c=true;
			bandit_first.className=style_bandits_type[bandit_cnt_a]+" "+style_bandits_location[0];;
			bandit_second.className=style_bandits_type[bandit_cnt_b]+" "+style_bandits_location[1];;
			bandit_third.className=style_bandits_type[bandit_cnt_c]+" "+style_bandits_location[2];;
	}
}


bandit_first.onclick=function(){							////______________________attack on bandit 1
	if(bandit_a_health_transfer>1){
			 if(hero_a_pos==true){
			hero_a_mer.className="hero_a_image_shooting";
		
		}else if(hero_b_pos==true){
			hero_b_mer.className="hero_b_image_shooting";
		}else{
			 hero.className="hero_image_shooting";
				}
	bandit_a_health_transfer=bandit_a_health_transfer-hit;
	
	bullet_fly_a()
	
/* if((hero_a_pos==true)||(hero_b_pos==true)){
 	bullet_fly_sec_b()
 }*/

	if(bandit_a_health_transfer>1){
		bandit_shooting=1;
		attack()
		}else{
			health_sign_a.className="none";
			sign_a.className="none";
			bandit_a = false;
			//finish_battle()
			if(bandit_b == true){
					bandit_shooting=2;
					attack()
				}else if(bandit_c == true){
						bandit_shooting=3;
					attack()

				}else{
			//bandit_third.className="bandit_type_a_down bandit_c_image_down";
			bandit_numb = bandit_numb-1;
				battle_win()
			}
		}
	}else {
			health_sign_a.className="none";
			alert("він вже переможений");
	}
}

		 
bandit_second.onclick=function(){								///_________________attack on bandit 2
	if(bandit_b_health_transfer>1){
			if(hero_a_pos==true){
			hero_a_mer.className="hero_a_image_shooting";	
		}else if(hero_b_pos==true){
			hero_b_mer.className="hero_b_image_shooting";
		}else{
			 hero.className="hero_image_shooting";
				}
bandit_b_health_transfer=bandit_b_health_transfer-hit;
	bullet_fly_b()	
	/* if((hero_a_pos==true)||(hero_b_pos==true)){
 	bullet_fly_sec_b()
 }	*/
		if(bandit_b_health_transfer>1){
			bandit_shooting=2;
		attack()
		}else{
			health_sign_b.className="none";
			sign_b.className="none"
			bandit_b = false;
			//finish_battle()

			if(bandit_a == true){
					bandit_shooting=1;
					attack()
				}else if(bandit_c == true){
						bandit_shooting=3;
					attack()
				}else{
			bandit_numb = bandit_numb-1;
				battle_win()
			}
		}
	}else {
			health_sign_b.className="none";
				alert("він вже переможений");		
	}
}


bandit_third.onclick=function(){								///______________attack on bandit 3
	if(bandit_c_health_transfer>1){
		if(hero_a_pos==true){
			hero_a_mer.className="hero_a_image_shooting";
		
		}else if(hero_b_pos==true){
			hero_b_mer.className="hero_b_image_shooting";
		}else{
			 hero.className="hero_image_shooting";
				}
			bandit_c_health_transfer=bandit_c_health_transfer-hit;
			bullet_fly_c()
		/*	if((hero_a_pos==true)||(hero_b_pos==true)){
 	bullet_fly_sec_c()
 }	*/
	if(bandit_c_health_transfer>1){
		bandit_shooting=3;
		attack()
		}else{
			health_sign_c.className="none";
			sign_c.className="none"
			bandit_c = false;
		//	finish_battle()
				if(bandit_a == true){
					bandit_shooting=1;
					attack()
				}else if(bandit_b == true){
						bandit_shooting=2;
					attack()
					//	finish_battle()
				}else{
			//bandit_third.className="bandit_type_a_down bandit_c_image_down";
			bandit_numb = bandit_numb-1;
				battle_win()
			}
		}
	}else {
			health_sign_c.className="none";
				alert("він вже переможений");
	}
}


function finish_battle(){
	if((bandit_a == false)&&(bandit_b == false)&&(bandit_c == false)){
		bandit_numb = 0;
				battle_win()
	}
}


function attack(){							////////////////////////////////////////////////////// shoot at hero

	glass.className="glass";
cnt_interval =	setInterval(function(){
		calcul=calcul+1;
			if(calcul==150){
				 if(hero_a_pos==true){
			hero_a_mer.className="hero_a_image";
		}else{
			 hero.className="hero_image";
				}
				 		if((bandit_shooting==1)&&(bandit_a == true)){
						bullet_fly_reverse_a()
							}else if((bandit_shooting==2)&&(bandit_b == true)){
									bullet_fly_reverse_b()
							}else if((bandit_shooting==3)&&(bandit_c == true)){
									bullet_fly_reverse_c()
							}
						shootings()
			}

	if(calcul==220){
	health_sign_hero.style="width:"+hero_health+"px";
					shootings_end()
		if(hero_health>=1){
			glass.className="none";
			hit_count=hit_count+1;
			calcul=0;
			bandit_shooting=0;
			clearInterval(cnt_interval)
		}else{
			hero.className="hero_image_down";
			health_sign_hero.className="none";
			battle_win_alert()
			bandit_shooting=0;
		}
		}}, 10);
	}
function battle_win_alert(){
	enter_text.innerHTML = "ви переможені";
	baner.className = "ask_ok";
	glass.className = "glass";
			no.className = "none";
			ok.onclick = function(){
				clearInterval(cnt_interval)
baner.className="none";
glass.className="none";
calcul=0;
					ok.className="btn_m";
					no.className="btn_m";
					battlefield.className="none";
					//recovery()
					hero_health=25;
recovery()
					battle_finish()

			}
}

function shootings(){																			
	if((bandit_shooting==1)&&(bandit_a == true)){
		if(bandit_cnt_a==0){
			bandit_first.className=style_bandits_shoot[0]+" bandit_a_image_shooting";
		}else{
				bandit_first.className=style_bandits_shoot[bandit_cnt_a]+" bandit_a_image";
			}
	}else if((bandit_shooting==2)&&(bandit_b == true)){
				if(bandit_cnt_b==0){
			bandit_second.className=style_bandits_shoot[0]+" bandit_b_image_shooting";
		}else{
				bandit_second.className=style_bandits_shoot[bandit_cnt_b]+" bandit_b_image";
			}
	}else if((bandit_shooting==3)&&(bandit_c == true)){
					if(bandit_cnt_c==0){
			bandit_third.className=style_bandits_shoot[0]+" bandit_c_image_shooting";
		}else{
				bandit_third.className=style_bandits_shoot[bandit_cnt_c]+" bandit_c_image";
			}
	}
}


function shootings_end(){
	if(bandit_shooting==1){
		
			bandit_first.className=style_bandits_type[bandit_cnt_a]+" bandit_a_image";
	}else if(bandit_shooting==2){

			bandit_second.className=style_bandits_type[bandit_cnt_b]+" bandit_b_image";
	}else if(bandit_shooting==3){

			bandit_third.className=style_bandits_type[bandit_cnt_c]+" bandit_c_image";
	}
}


function battle_win(){
	if(bandit_numb==0){
		finish_win()
				
			}
}

function finish_win(){
baner.className="ask_ok";
	enter_text.innerHTML="Ви перемогли в бою";
	glass.className="glass";
	no.className="none";

	clearInterval(move_scr)
				ok.onclick=function(){
					baner.className="none";
					no.className="none";
					if((hero_a_pos==false)&&(hero_b_pos==false)){
		hero_a_mer.className="none";
		hero_b_mer.className="none";
	}else if(hero_a_pos==false){
		hero_a_mer.className="none";
	}else if(hero_b_pos==false){
		hero_b_mer.className="none";
	}
glass.className="none";
					battle_finish()
				}
}


function bullet_fly_a(){
bullets.className = "bullet"
if(hero_a_pos==true){
	bullets_x = 280;
	bullets_y = 828;
}else if(hero_b_pos==true){
	bullets_x = 370;
	bullets_y = 828;
}else{
	bullets_x = 320;
	bullets_y = 880;
}
bullet = setInterval(function(){	
	if((bullets_x>=280)&&(bullets_y>=190)){

	bullets_x = bullets_x - 0.5;
	bullets_y = bullets_y - 10;
	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
}else if((bullets_x<=280)&&(bullets_y>=190)){
				bullets_x = bullets_x + 0;
				bullets_y = bullets_y - 10;
				bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";


	}else if(bandit_a_health_transfer<=1){
		
		bandit_first.className=style_bandits_down[bandit_cnt_a]+" bandit_a_image_down";
			bandit_a = false;
		hero.className="hero_image";
		finish_battle()
		clearInterval(bullet)
		 bullets.className = "none";
	}else{ 

		health_sign_a.style="width:"+bandit_a_health_transfer+"px";
		hero.className="hero_image";
		 bullets.className = "none";

		 
		 clearInterval(bullet)
		 if((hero_a_pos==true)||(hero_b_pos==true)){
 	bullet_fly_sec_a()
 }
		}
	}, 10);

}
function bullet_fly_sec_a(){
	 hero.className="hero_image_shooting";
	bullets.className = "bullet"
	bullets_x = 320;
	bullets_y = 880;
bullet = setInterval(function()
{	if((bullets_x>=280)&&(bullets_y>=190)){
	bullets_x = bullets_x - 0.5;
	bullets_y = bullets_y - 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(bandit_a_health_transfer<=1){
	
		bandit_first.className=style_bandits_down[bandit_cnt_a]+" bandit_a_image_down";
		hero.className="hero_image";
		bandit_a = false;
			finish_battle()
			bullets.className = "none";
		clearInterval(bullet)
		 
	}else{ 
			bandit_a_health_transfer=bandit_a_health_transfer-hit;
						if(bandit_a_health_transfer<=1){
	
		bandit_first.className=style_bandits_down[bandit_cnt_a]+" bandit_a_image_down";
		bandit_a = false;
		hero.className="hero_image";
			finish_battle()
			bullets.className = "none";
				}
		clearInterval(bullet)
		health_sign_a.style="width:"+bandit_a_health_transfer+"px";
		hero.className="hero_image";
		 bullets.className = "none";
		}
	}, 10);
}

function bullet_fly_b(){
bullets.className = "bullet"
if(hero_a_pos==true){
	bullets_x = 280;
	bullets_y = 828;
}else if(hero_b_pos==true){
	bullets_x = 370;
	bullets_y = 828;
}else{
	bullets_x = 320;
	bullets_y = 880;
}
bullet = setInterval(function(){	
		if((bullets_x>=320)&&(bullets_y>=270)){
//alert(1);
	bullets_x = bullets_x - 0;
	bullets_y = bullets_y - 10;
	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
		}else if((bullets_x<=320)&&(bullets_y>=270)){
				bullets_x = bullets_x + 0.5;
				bullets_y = bullets_y - 10;
				bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";

	}else if(bandit_b_health_transfer<=1){
		
		
		bandit_second.className=style_bandits_down[bandit_cnt_b]+" bandit_b_image_down";
		bandit_b = false;
		hero.className="hero_image";
		bullets.className = "none";
		finish_battle()
		 
		 clearInterval(bullet)
	}else{ 
		health_sign_b.style="width:"+bandit_b_health_transfer+"px";
		
		
		hero.className="hero_image";
		 bullets.className = "none";

		 clearInterval(bullet)
		 if((hero_a_pos==true)||(hero_b_pos==true)){
 	bullet_fly_sec_b()
 }
		}
	}, 10);

}

function bullet_fly_sec_b(){
	 hero.className="hero_image_shooting";
	bullets.className = "bullet"
	bullets_x = 320;
	bullets_y = 880;
bullet = setInterval(function()
{	if((bullets_x>=320)&&(bullets_y>=270)){
	bullets_x = bullets_x - 0;
	bullets_y = bullets_y - 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(bandit_b_health_transfer<=1){
		
		bandit_second.className=style_bandits_down[bandit_cnt_b]+" bandit_b_image_down";
		hero.className="hero_image";
		 bullets.className = "none";
		 bandit_b = false;
		finish_battle()
		clearInterval(bullet)

		
	}else{ 
		bandit_b_health_transfer=bandit_b_health_transfer-hit;
		health_sign_b.style="width:"+bandit_b_health_transfer+"px";
		if(bandit_b_health_transfer<=1){
	
		bandit_second.className=style_bandits_down[bandit_cnt_b]+" bandit_b_image_down";
		bandit_b = false;
		hero.className="hero_image";
			finish_battle()
			bullets.className = "none";
				}
		clearInterval(bullet)
		hero.className="hero_image";
		 bullets.className = "none";
		}
	}, 10);
}


function bullet_fly_c(){
bullets.className = "bullet"
if(hero_a_pos==true){
	bullets_x = 280;
	bullets_y = 828;
}else if(hero_b_pos==true){
	bullets_x = 370;
	bullets_y = 828;
}else{
	bullets_x = 320;
	bullets_y = 880;
}
//finish_battle()
bullet = setInterval(function(){
	if((bullets_x<=370)&&(bullets_y>=170)){

	bullets_x = bullets_x + 1.0;
	bullets_y = bullets_y - 10;
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
		}else if((bullets_x>=370)&&(bullets_y>=170)){
				bullets_x = bullets_x + 0.5;
				bullets_y = bullets_y - 10;
				bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(bandit_c_health_transfer<=1){
		finish_battle()
		
		bandit_third.className=style_bandits_down[bandit_cnt_c]+" bandit_c_image_down";
			bandit_c = false;
		hero.className="hero_image";
		clearInterval(bullet)
		 bullets.className = "none";
	}else{ 
		health_sign_c.style="width:"+bandit_c_health_transfer+"px";
		
		hero.className="hero_image";
		 bullets.className = "none";

		 clearInterval(bullet)
		 if((hero_a_pos==true)||(hero_b_pos==true)){
 	bullet_fly_sec_c()
 }
		}

	}, 10);

}

function bullet_fly_sec_c(){
	 hero.className="hero_image_shooting";
	bullets.className = "bullet"
	bullets_x = 320;
	bullets_y = 880;
bullet = setInterval(function()
{	if((bullets_x<=370)&&(bullets_y>=170)){
	bullets_x = bullets_x + 0.5;
	bullets_y = bullets_y - 10;
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(bandit_c_health_transfer<=1){
		finish_battle()	
		
		bandit_third.className=style_bandits_down[bandit_cnt_c]+" bandit_c_image_down";
		bandit_c = false;
			hero.className="hero_image";
		clearInterval(bullet)
		 bullets.className = "none";
	}else{ 
		bandit_c_health_transfer=bandit_c_health_transfer-hit;
		health_sign_c.style="width:"+bandit_c_health_transfer+"px";
		if(bandit_c_health_transfer<=1){
	
		bandit_third.className=style_bandits_down[bandit_cnt_c]+" bandit_c_image_down";
		bandit_c = false;
		hero.className="hero_image";
			finish_battle()
			bullets.className = "none";
				}
		clearInterval(bullet)
		hero.className="hero_image";
		 bullets.className = "none";
		}
	}, 10);

}
	function recovery(){
		a=a_rez;
			xa=ct_x_rez;
			 ya=ct_y_rez;
			return_to_city()
	}

////////////////////////////////відповідний вогонь a///////////////////////////////////////==========================
function bullet_fly_reverse_a(){
bullets.className = "bullet"
	bullets_x = 280;
	bullets_y = 200;

if(hero_a_pos==true){   ///якщо є найомник 1


bullet = setInterval(function()
{	if((bullets_x<=280)&&(bullets_y<=828)){
	bullets_x = bullets_x + 0;
	bullets_y = bullets_y + 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(hero_a_health_mer<=2){		
		//hero.className="hero_image_down ";
		hero_a_mer.className="hero_a_image_down ";
		hero_a_health_mer=0;
		sign_h_a.className = "none";
		//hero.className="hero_image";
		hero_a_pos=false;
		clearInterval(bullet)
		 bullets.className = "none";
		 
	}else{ 

hero_a_health_mer=hero_a_health_mer-bandit_hit_a;
		health_sign_a_hero.style="width:"+hero_a_health_mer*hero_a_pers_tr+"px";
		clearInterval(bullet)
		hero_a_mer	.className="hero_a_image";
		 bullets.className = "none";
		}
	}, 10);

}else if(hero_b_pos==true){   ///якщо є найомник 2


bullet = setInterval(function()
{	if((bullets_x<=370)&&(bullets_y<=828)){
	bullets_x = bullets_x + 1;
	bullets_y = bullets_y + 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(hero_b_health_mer<=2){		
		//hero.className="hero_image_down ";
		hero_b_mer.className="hero_b_image_down ";
		hero_b_health_mer=0;
		sign_h_b.className = "none";
		//hero.className="hero_image";
		hero_b_pos=false;
		clearInterval(bullet)
		 bullets.className = "none";
		 
	}else{ 

hero_b_health_mer=hero_b_health_mer-bandit_hit_a;
		health_sign_b_hero.style="width:"+hero_b_health_mer*hero_b_pers_tr+"px";
		clearInterval(bullet)
		hero_b_mer.className="hero_b_image";
		 bullets.className = "none";
		}
	}, 10);

}else{
	bullet = setInterval(function()
{	if((bullets_x<=320)&&(bullets_y<=880)){
	bullets_x = bullets_x + 0.5;
	bullets_y = bullets_y + 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(hero_a_health<1){		
		hero.className="hero_image_down ";
		
		//hero.className="hero_image";
		clearInterval(bullet)
		 bullets.className = "none";
	}else{ 

hero_health=hero_health-bandit_hit_a;
		health_sign_hero.style="width:"+hero_health+"px";
		clearInterval(bullet)
		hero.className="hero_image";
		 bullets.className = "none";
		}
	}, 10);
  }
}



function bullet_fly_reverse_b(){
bullets.className = "bullet"
	bullets_x = 310;
	bullets_y = 290;

	if(hero_a_pos==true){

bullet = setInterval(function()
{	if((bullets_x>=280)&&(bullets_y<=828)){
	bullets_x = bullets_x - 0.5;
	bullets_y = bullets_y + 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(hero_a_health_mer<2){		
		//hero.className="hero_image_down ";
		hero_a_mer.className="hero_a_image_down ";
		hero_a_health_mer=0;
		//hero.className="hero_image";
		hero_a_pos=false;
		sign_h_a.className="none";
		clearInterval(bullet)
		 bullets.className = "none";
		 
	}else{ 

hero_a_health_mer=hero_a_health_mer-bandit_hit_b;
		health_sign_a_hero.style="width:"+hero_a_health_mer*hero_a_pers_tr+"px";
		clearInterval(bullet)
		hero_a_mer	.className="hero_a_image";
		 bullets.className = "none";
		}
	}, 10);


}else if(hero_b_pos==true){   ///якщо є найомник 2
bullet = setInterval(function()
{	if((bullets_x<=370)&&(bullets_y<=828)){
	bullets_x = bullets_x + 0.5;
	bullets_y = bullets_y + 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(hero_b_health_mer<=2){		
		//hero.className="hero_image_down ";
		hero_b_mer.className="hero_b_image_down ";
		hero_b_health_mer=0;
		sign_h_b.className = "none";
		//hero.className="hero_image";
		hero_b_pos=false;
		clearInterval(bullet)
		 bullets.className = "none";
		 
	}else{ 

hero_b_health_mer=hero_b_health_mer-bandit_hit_b;
		health_sign_b_hero.style="width:"+hero_b_health_mer*hero_b_pers_tr+"px";
		clearInterval(bullet)
		hero_b_mer	.className="hero_b_image";
		 bullets.className = "none";
		}
	}, 10);

}else{
		bullet = setInterval(function(){	
			if((bullets_x<=320)&&(bullets_y<=880)){
	bullets_x = bullets_x + 0.1;
	bullets_y = bullets_y + 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(hero_health<1){		
		hero.className="hero_image_down";
		//hero.className="hero_image";
		clearInterval(bullet)
		 bullets.className = "none";
	}else{ 

		hero_health=hero_health-bandit_hit_b;
		
					health_sign_hero.style="width:"+hero_health+"px";
		clearInterval(bullet)
		hero.className="hero_image";
		 bullets.className = "none";
		}
	}, 10);
  }
}

function bullet_fly_reverse_c(){
bullets.className = "bullet"
	bullets_x = 355;
	bullets_y = 160;

	if(hero_a_pos==true){
bullet = setInterval(function()
{	if((bullets_x>=280)&&(bullets_y<=828)){
	bullets_x = bullets_x - 0.5;
	bullets_y = bullets_y + 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(hero_a_health_mer<2){		
		//hero.className="hero_image_down ";
		hero_a_mer.className="hero_a_image_down ";
		hero_a_health_mer=0;
		//hero.className="hero_image";
		hero_a_pos=false;
		sign_h_a.className="none";
		clearInterval(bullet)
		 bullets.className = "none";
		 
	}else{ 

hero_a_health_mer=hero_a_health_mer-bandit_hit_c;
		health_sign_a_hero.style="width:"+hero_a_health_mer*hero_a_pers_tr+"px";
		clearInterval(bullet)
		hero_a_mer	.className="hero_a_image";
		 bullets.className = "none";
		}
	}, 10);

} else if(hero_b_pos==true){   ///якщо є найомник 2
bullet = setInterval(function()
{	if((bullets_x<=370)&&(bullets_y<=828)){
	bullets_x = bullets_x + 0.5;
	bullets_y = bullets_y + 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(hero_b_health_mer<=2){		
		//hero.className="hero_image_down ";
		hero_b_mer.className="hero_b_image_down ";
		hero_b_health_mer=0;
		sign_h_b.className = "none";
		//hero.className="hero_image";
		hero_b_pos=false;
		clearInterval(bullet)
		 bullets.className = "none";
		 
	}else{ 

hero_b_health_mer=hero_b_health_mer-bandit_hit_с;
		health_sign_b_hero.style="width:"+hero_b_health_mer*hero_b_pers_tr+"px";
		clearInterval(bullet)
		hero_b_mer	.className="hero_b_image";
		 bullets.className = "none";
		}
	}, 10);

}else{
  	bullet = setInterval(function()
{	if((bullets_x>=320)&&(bullets_y<=880)){
	bullets_x = bullets_x - 0.5;
	bullets_y = bullets_y + 10;	
	bullets.style = "margin-top:"+bullets_x+"px; margin-left:"+bullets_y+"px;";
	}else if(hero_health<=1){		
		hero.className="hero_image_down ";
		//hero.className="hero_image";
		clearInterval(bullet)
		 bullets.className = "none";
	}else{
		hero_health=hero_health-bandit_hit_c;
					health_sign_hero.style="width:"+hero_health+"px";
		clearInterval(bullet)
		hero.className="hero_image";
		 bullets.className = "none";
		}
	}, 10);

  }
}

	function recovery(){
		a=a_rez;
			xa=ct_x_rez;
			 ya=ct_y_rez;
			return_to_city()
	}


	function return_to_city(){
		pers.style="margin-left:"+ya+"px;margin-top:"+xa+"px;"
		hero_health=25;
		health_sign_hero.style="width:"+hero_health+"px";
		//pers.className="pers_stop";
		health_wrap.className="health_wrap";
			battlefield.className="none";
			bandit_a_health_transfer=50;
			bandit_b_health_transfer=50;
			bandit_c_health_transfer=50;
			
			health_sign_a.className="health_sign_a";
			health_sign_b.className="health_sign_b";
			health_sign_c.className="health_sign_c";

			health_sign_a.style="width:"+bandit_a_health_transfer+"px";
			health_sign_b.style="width:"+bandit_b_health_transfer+"px";
			health_sign_c.style="width:"+bandit_c_health_transfer+"px";
			bandit_first.className="bandit_type_a bandit_a_image";
			bandit_second.className="bandit_type_a bandit_b_image";
			bandit_third.className="bandit_type_a bandit_c_image";

			pers.className="pers_stop";

			sign_a.className="sign";
			sign_b.className="sign";
			sign_c.className="sign";
	
rez1 = [];
 rez2 = [];
 rez3 = [];
 rez4 = [];
 rez5 = [];
 rez6 = [];
 rez7 = [];
 rez8 = [];
 hero.className="hero_image";
 hearings_city = Math.floor(Math.random() * 10 + 1);
 hearings_type = Math.floor(Math.random() * 10 + 1);
 hear_city_transfer = Math.floor(Math.random() * 10 + 1);
 hear_type_transfer = Math.floor(Math.random() * 10 + 1);
 hearing_status=true;
 gangs_threat=true;

 want_word = " хоче ";
 traveler_transfer = Math.floor(Math.random() * 10 + 1);
 traveler_price_transfer = 0;
 traveler_price = 200;

 package_twn = 0;

 package_twn_transfer=0;
 package_price=0;
 package_price_transfer=0;

hero_a_pos=false;
hero_b_pos=false;
hero_a_health_mer = 50;
 hero_b_health_mer = 50;
sign_h_a.className = "none";
sign_h_b.className = "none";

traveler_check=true;
package = true;
bandit_a = 0;
bandit_b = 0;
bandit_c = 0;
 rez_traveler = [];
 free_space = [];
 rez_package = [];
i=0;
 hero_health_width = 25;
 bandit_numb=0;
 hit_count=0;

 bandits_tipe_count=0;

 bandit_a_health_transfer = 50;
 bandit_b_health_transfer= 50;
 bandit_c_health_transfer = 50;

 hit = 0;
 packege_random()
		trav_eres()
		packege_minus()
	//clear_list()
	shop_random()
//	hearings_random()
	start()
 for(i=0; i<=cont.length-1; i++){		
			if(cont[i]>=0){
				cont.splice(i,1,0)	
		}
	}
//eres_inv()

	if(inv ==0){
		slt1_inn.className="none";
		slt2_inn.className="none";
	}else if(inv ==1){
		slt1_inn.className="none";
		slt2_inn.className="none";
		slt3_inn.className="none";
		slt4_inn.className="none";
		slt5_inn.className="none";
		slt6_inn.className="none";
		}else if(inv ==2){
			slt1_inn.className="none";
			slt2_inn.className="none";
			slt3_inn.className="none";
			slt4_inn.className="none";
			slt5_inn.className="none";
			slt6_inn.className="none";
			slt7_inn.className="none";
			slt8_inn.className="none";
			slt9_inn.className="none";
			slt10_inn.className="none";
			slt11_inn.className="none";
			slt12_inn.className="none";
	}else if(inv ==3){
			slt1_inn.className="none";
			slt2_inn.className="none";
			slt3_inn.className="none";
			slt4_inn.className="none";
			slt5_inn.className="none";
			slt6_inn.className="none";
			slt7_inn.className="none";
			slt8_inn.className="none";
			slt9_inn.className="none";
			slt10_inn.className="none";
			slt11_inn.className="none";
			slt12_inn.className="none";
			slt13_inn.className="none";
			slt14_inn.className="none";
			slt15_inn.className="none";
			slt16_inn.className="none";
	
}
eres_inv()
	}

function eres_inv(){
if(inv==0){
	cont.splice(0,2,0,0);
	
}else
	if(inv==1){
	cont.splice(0,6,0,0,0,0,0,0);
	
	}else if(inv == 2){
		cont.splice(0,12,0,0,0,0,0,0,0,0,0,0,0,0);
		
	}else if(inv == 3){
		cont.splice(0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
		
	}
}

}///////////////////////////end of onload function///////////////////////////////////


var hero_a_pos = false;	//стан найомника 1
var hero_b_pos = false; // стан найомника 2
var mercin_count = 0; //кількість найомників щоб усі проводили вистріл якщо =1; то стріляє герой, інше постріли 
var hero_a_hit = 0;
var hero_b_hit = 0;
var hero_a_health_mer = 50;
var hero_b_health_mer = 50;
var mrct_time_rand = 0;
var mrc_cost_rand = 0;
var time_hero_a = 0;
var time_hero_b = 0;

var hls_mrc = 0;
var mrc_hit = 0;
var mrct_time = 0;
var mrc_cost = 600;
/*________________mercenary______________*/
function merc_a_rend(){
	
	mrc_hit = Math.floor(Math.random()*5+1);
	hls_mrc = Math.floor(Math.random()*50+1);
	mrc_time_rand = Math.floor(Math.random()*6+1);
	mrc_cost_rand = Math.floor(Math.random()*6+1);

}

/*________________mercenary end______________*/