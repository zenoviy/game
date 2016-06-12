<!DOCTYPE html>

<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Wild West Trade Game</title>
	<link rel="stylesheet" href="css/style.css">
	<script src="js/script.js"></script>
	<!--<script src="js/battle.js"></script>-->
</head>
<body>

<div id="win_lose" class="game_proc">


	<div id="main">
	   <div class="wrp_main">
	   <div id="contract_wrap"  class="contracts" >
	   		<button id="active_contracts">active contracts</button>
	   </div>
		<div id="money"></div>
		<div id="date"></div>
		<div id="health_wrap" class="none">
		<div id="health"></div></div>
	</div>
	</div>

	<div id="battlefield" class="none">
				<div id="hero" class ="hero_image"> <!--main hero-->
							<div  class="sign">	
								<div id="health_sign_hero" class="health_sign_hero"></div>
							</div>
				</div>
				<!--MERCENARY-->
				<div id="hero_a" class ="none">  <!--hero_a_image-->
							<div id="sign_h_a" class="sign">	
								<div id="health_sign_a_hero" class="health_sign_a_hero"></div>
							</div>
				</div>
				<div id="hero_b" class ="none">		<!--hero_b_image-->
							<div id="sign_h_b" class="sign">	
								<div id="health_sign_b_hero" class="health_sign_b_hero"></div>
							</div>
				</div>
				<!--bandits-->
				<div id="bandit_first" class ="bandit_a_image">
							<div id="sign_a" class="sign">	
								<div id="health_sign_a" class="health_sign_a"></div>
							</div>
				</div>
				<div id="bandit_second" class ="bandit_b_image">
							<div id="sign_b" class="sign">	
								<div id="health_sign_b" class="health_sign_b"></div>
							</div>
				</div>
				<div id="bandit_third" class ="bandit_c_image">
							<div id="sign_c" class="sign">	
								<div id="health_sign_c" class="health_sign_c"></div>
							</div>
				</div>
				<div id="bullets" class="none"></div>
		<!--<div id=battle_info class="battle_info">
			<button id="end_battle">завершити бій</button>
		</div>-->
	</div>	
<!--===================intro====================-->
<div id="main_wrap" class="main_wrap">
	<div id="wrn" class="none"></div>
<div id="spc" class="none">

		<div class=in_wr>
			<div id="slt1"  class="inv">
					<div id="slt1_inn"></div>
			</div>
			<div id="slt3" class="none">
					<div id="slt3_inn"></div>
			</div>
			<div id="slt5" class="none">
					<div id="slt5_inn"></div>
			</div>
			<div id="slt7" class="none">
					<div id="slt7_inn"></div>
			</div>
			<div id="slt9" class="none">
					<div id="slt9_inn"></div>
			</div>
			<div id="slt11" class="none">
					<div id="slt11_inn"></div>
			</div>
			<div id="slt13" class="none">
					<div id="slt13_inn"></div>
			</div>
			<div id="slt15" class="none">
					<div id="slt15_inn"></div>
			</div>
		</div>
		<div class=in_wr>
			<div id="slt2" class="inv">
					<div id="slt2_inn"></div>
			</div>
			<div id="slt4" class="none">
					<div id="slt4_inn"></div>
			</div>
			<div id="slt6" class="none">
					<div id="slt6_inn"></div>
			</div>
			<div id="slt8" class="none">
					<div id="slt8_inn"></div>
			</div>
			<div id="slt10" class="none">
					<div id="slt10_inn"></div>
			</div>
			<div id="slt12" class="none">
					<div id="slt12_inn"></div>
			</div>
			<div id="slt14" class="none">
					<div id="slt14_inn"></div>
			</div>
			<div id="slt16" class="none">
					<div id="slt16_inn"></div>
			</div>
		</div>

		<div id="test_btn" class="test">
		<button>test</button>
			<div id="slt_ammo" class="inv">
					<div id="slt_ammo_inn" class="gun_a"></div>
				</div>
				
			<div id="slt_vg" class="inv">
					<div id="slt_vg_inn" class="wag_img"></div>
				</div>
				<div class="invent"><p>зброя &nbsp; &nbsp; &nbsp; слоти</p></div>	
		</div>
	</div>

	<div id="map" class="map_all">

		<div id="story" class="str">
Гра!  Головний герой повинен назбирати 100 000$ маючи на початку всього 50$<br>
<p>
	Головний герой програв в карточній грі і заборгував місцевому авторитету 100 000$, тепер герой має всього один рік для того щоб виплатити борг, в героя залишився тільки кінь, 50 $ та пістолет.  <br>
	<span>
	Для пересування потрібно натиснути на один з червоних маркерів міст.</span>
	<span>В містах можна відвідувати різні заклади, в закладах можна буде купляти і продавати різноманітні товари, в 'стайні' можна придбати додаткові місця в інвентарі</span>
	<span>поки що не відрегульовані скрипти продажі і скрипти рандомізатора, також будуть скрипти з рандомним нападом бандитів на головного персонажа під час переміщень між містами.</span>
	<br>
	v.0.3.4
</p>
<button id="btn_ok_str" class="str_btn">Ok</button></div>
<!--shop list-->
	<div id="shop_list" class="none">
		<div id="li_wrap"></div>
		<div id="li_cont"><div id=""></div></div>
		<button id="btn_ok_sh" class="btn">Ok</button>
			<button id="btn_no_sh" class="btn">No</button>
	</div>
<!--pers-->
<div id="pers" class="none"></div>
<!--city interior-->
			<div onmouseout="no_html()" onmouseover="stbl()" id="stable" class="none"></div>
			<div onmouseout="no_html()" onmouseover="pris()" id="prison" class="none"></div>
			<div onmouseout="no_html()" onmouseover="sln()" id="saloon" class="none"></div>
			<div onmouseout="no_html()" onmouseover="shp()" id="shop" class="none"></div>
			<div onmouseout="no_html()" onmouseover="gns()" id="guns" class="none"></div>
		


<!--map <marker--></marker-->
<div id="city_name" class="none"></div>
		<div id="reno" class="none" onmouseout="no_html()" ></div>
		<div id="virginia" class="none" onmouseout="no_html()" ></div>
		<div id="carson" class="none" onmouseout="no_html()" ></div>
		<div id="redwood" class="none" onmouseout="no_html()" ></div>

		<div id="silver_springs" class="none" onmouseout="no_html()" ></div>

		<div id="westwood" class="none" onmouseout="no_html()" ></div>

		<div id="doyle" class="none" onmouseout="no_html()" ></div>

		<div id="bridgeport" class="none" onmouseout="no_html()" ></div>

		<div id="glass" class="none"></div>	
		<div id="baner" class="none">
		
<!--ok/no-->			
			<div id="enter_text"></div>
			<button id="btn_ok" class="btn_m">Ok</button>
			<button id="btn_no" class="btn_m">No</button>
		</div>

<!--alert/ok/no-->	
		<div id="alert_bnr" class="none">
		
			<div id="enter_text_baner"></div>
			<button id="btn_ok_alert" class="btn_m_alert">Ok</button>
		</div>
<!--ask-->
		<div id="ask_bnr" class="none">
		
			<div id="enter_text_ask"></div>
			<button id="btn_yes_ask" class="btn_m_ask">Yes</button>
			<button id="btn_no_ask" class="btn_m_ask">No</button>
		</div>

		<div id="to_map" class="back"></div>
	</div>
	
</div>

</div>
	<!--<div id="test"></div>-->
</body>
</html>