var time="17:24 (IST)";
var date="30 July 2020";
var total_case="15,31,669";
var death="34,193"; 
document.getElementById("time").innerHTML = time;
document.getElementById("tim").innerHTML = time;
document.getElementById("date").innerHTML = date;
document.getElementById("date1").innerHTML = date;
document.getElementById("total_case").innerHTML = total_case;
document.getElementById("death").innerHTML = death;


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 140 || document.documentElement.scrollTop > 140) {
    document.getElementById("back").style.margin = "0 100px";
  } else {
    document.getElementById("back").style.margin = "-190px";
  }
}

var modal = document.getElementById('modal-wrapper');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(document).ready(function(e) {
	$('img[usemap]').rwdImageMaps();
	
});

//tamilNadu

var tnspanText = document.getElementById('tntoolti');
document.addEventListener('mousemove',function(tne){
	var tnx = tne.clientX;
	var tny = tne.clientY;
	tnspanText.style.top = (tny  - 50) + "px";
	tnspanText.style.left = (tnx + 20) + "px";
});

var tnact="52,273 ";
var tndht="3,838  ";
var tntolt="2,39,978";
var tnrct="1,78,178";
document.getElementById("tntol").innerHTML = tntolt;
document.getElementById("tndh").innerHTML = tndht;
document.getElementById("tnac").innerHTML = tnact;
document.getElementById("tnrc").innerHTML = tnrct;

//kerala

var kespanText = document.getElementById('ketoolti');
document.addEventListener('mousemove',function(kee){
	var kex = kee.clientX;
	var key = kee.clientY;
	kespanText.style.top = (key - 50) + "px";
	kespanText.style.left = (kex + 20) + "px";
});


var keact="9,371 ";
var kedht="70   ";
var ketolt="22,303";
var kerct="12,163";
document.getElementById("ketol").innerHTML = ketolt;
document.getElementById("kedh").innerHTML = kedht;
document.getElementById("keac").innerHTML = keact;
document.getElementById("kerc").innerHTML = kerct;

//karnataka

var kaspanText = document.getElementById('katoolti');
document.addEventListener('mousemove',function(kae){
	var kax = kae.clientX;
	var kay = kae.clientY;
	kaspanText.style.top = (kay - 50) + "px";
	kaspanText.style.left = (kax + 20) + "px";
});


var kaact="52,799 ";
var kadht="2,147  ";
var katolt="1,12,504";
var karct="42,901";
document.getElementById("katol").innerHTML = katolt;
document.getElementById("kadh").innerHTML = kadht;
document.getElementById("kaac").innerHTML = kaact;
document.getElementById("karc").innerHTML = karct;

// Andra pradesh

var apspanText = document.getElementById('aptoolti');
document.addEventListener('mousemove',function(ape){
	var apx = ape.clientX;
	var apy = ape.clientY;
	apspanText.style.top = (apy - 50) + "px";
	apspanText.style.left = (apx + 20) + "px";
});


var apact="28,800 ";
var apdht="1,213  ";
var aptolt="1,20,390";
var aprct="55,406";
document.getElementById("aptol").innerHTML = aptolt;
document.getElementById("apdh").innerHTML = apdht;
document.getElementById("apac").innerHTML = apact;
document.getElementById("aprc").innerHTML = aprct;

//telangana

var tespanText = document.getElementById('tetoolti');
document.addEventListener('mousemove',function(tee){
	var tex = tee.clientX;
	var tey = tee.clientY;
	tespanText.style.top = (tey - 50) + "px";
	tespanText.style.left = (tex + 20) + "px";
});

var teact="11,529 ";
var tedht="492    ";
var tetolt="58,906 ";
var terct="43,731 ";
document.getElementById("tetol").innerHTML = tetolt;
document.getElementById("tedh").innerHTML = tedht;
document.getElementById("teac").innerHTML = teact;
document.getElementById("terc").innerHTML = terct;


//maharastra

var mhspanText = document.getElementById('mhtoolti');
document.addEventListener('mousemove',function(mhe){
	var mhx = mhe.clientX;
	var mhy = mhe.clientY;
	mhspanText.style.top = (mhy - 50) + "px";
	mhspanText.style.left = (mhx + 20) + "px";
});

var mhact="136,980 ";
var mhdht="14,463 ";
var mhtolt="4,00,651 ";
var mhrct="2,39,755 ";
document.getElementById("mhtol").innerHTML = mhtolt;
document.getElementById("mhdh").innerHTML = mhdht;
document.getElementById("mhac").innerHTML = mhact;
document.getElementById("mhrc").innerHTML = mhrct;

//goa

var gaspanText = document.getElementById('gatoolti');
document.addEventListener('mousemove',function(gae){
	var gax = gae.clientX;
	var gay = gae.clientY;
	gaspanText.style.top = (gay - 50) + "px";
	gaspanText.style.left = (gax + 20) + "px";
});

var gaact="544 ";
var gadht="39  ";
var gatolt="5,489 ";
var garct="3,784 ";
document.getElementById("gatol").innerHTML = gatolt;
document.getElementById("gadh").innerHTML = gadht;
document.getElementById("gaac").innerHTML = gaact;
document.getElementById("garc").innerHTML = garct;

//odisha

var orspanText = document.getElementById('ortoolti');
document.addEventListener('mousemove',function(ore){
	var orx = ore.clientX;
	var ory = ore.clientY;
	orspanText.style.top = (ory - 50) + "px";
	orspanText.style.left = (orx + 20) + "px";
});

var oract="9,286 ";
var ordht="169  ";
var ortolt="30,378 ";
var orrct="18,939 ";
document.getElementById("ortol").innerHTML = ortolt;
document.getElementById("ordh").innerHTML = ordht;
document.getElementById("orac").innerHTML = oract;
document.getElementById("orrc").innerHTML = orrct;

// Andaman and Nicobar Island

var anspanText = document.getElementById('antoolti');
document.addEventListener('mousemove',function(ane){
	var anx = ane.clientX;
	var any = ane.clientY;
	anspanText.style.top = (any - 50) + "px";
	anspanText.style.left = (anx + 20) + "px";
});


var anact="170 ";
var andht="2  ";
var antolt="428";
var anrct="201";
document.getElementById("antol").innerHTML = antolt;
document.getElementById("andh").innerHTML = andht;
document.getElementById("anac").innerHTML = anact;
document.getElementById("anrc").innerHTML = anrct;

//chhattisgarh

var cgspanText = document.getElementById('cgtoolti');
document.addEventListener('mousemove',function(cge){
	var cgx = cge.clientX;
	var cgy = cge.clientY;
	cgspanText.style.top = (cgy - 50) + "px";
	cgspanText.style.left = (cgx + 20) + "px";
});

var cgact="875 ";
var cgdht="48 ";
var cgtolt="8,539 ";
var cgrct="5,636 ";
document.getElementById("cgtol").innerHTML = cgtolt;
document.getElementById("cgdh").innerHTML = cgdht;
document.getElementById("cgac").innerHTML = cgact;
document.getElementById("cgrc").innerHTML = cgrct;

//west bengal

var wbspanText = document.getElementById('wbtoolti');
document.addEventListener('mousemove',function(wbe){
	var wbx = wbe.clientX;
	var wby = wbe.clientY;
	wbspanText.style.top = (wby - 50) + "px";
	wbspanText.style.left = (wbx + 20) + "px";
});

var wbact="19,391 ";
var wbdht="1,536 ";
var wbtolt="67,692 ";
var wbrct="46,256 ";
document.getElementById("wbtol").innerHTML = wbtolt;
document.getElementById("wbdh").innerHTML = wbdht;
document.getElementById("wbac").innerHTML = wbact;
document.getElementById("wbrc").innerHTML = wbrct;

//jharkhand

var jhspanText = document.getElementById('jhtoolti');
document.addEventListener('mousemove',function(jhe){
	var jhx = jhe.clientX;
	var jhy = jhe.clientY;
	jhspanText.style.top = (jhy - 50) + "px";
	jhspanText.style.left = (jhx + 20) + "px";
});

var jhact="1,421 ";
var jhdht="98 ";
var jhtolt="9,861 ";
var jhrct="4,035 ";
document.getElementById("jhtol").innerHTML = jhtolt;
document.getElementById("jhdh").innerHTML = jhdht;
document.getElementById("jhac").innerHTML = jhact;
document.getElementById("jhrc").innerHTML = jhrct;

//bihar

var brspanText = document.getElementById('brtoolti');
document.addEventListener('mousemove',function(bre){
	var brx = bre.clientX;
	var bry = bre.clientY;
	brspanText.style.top = (bry - 50) + "px";
	brspanText.style.left = (brx + 20) + "px";
});

var bract="10,520 ";
var brdht="273 ";
var brtolt="45,919 ";
var brrct="30,504 ";
document.getElementById("brtol").innerHTML = brtolt;
document.getElementById("brdh").innerHTML = brdht;
document.getElementById("brac").innerHTML = bract;
document.getElementById("brrc").innerHTML = brrct;

//sikkim

var skspanText = document.getElementById('sktoolti');
document.addEventListener('mousemove',function(ske){
	var skx = ske.clientX;
	var sky = ske.clientY;
	skspanText.style.top = (sky - 50) + "px";
	skspanText.style.left = (skx + 20) + "px";
});

var skact="63 ";
var skdht="1 ";
var sktolt="596 ";
var skrct="198 ";
document.getElementById("sktol").innerHTML = sktolt;
document.getElementById("skdh").innerHTML = skdht;
document.getElementById("skac").innerHTML = skact;
document.getElementById("skrc").innerHTML = skrct;

//meghalaya

var mlspanText = document.getElementById('mltoolti');
document.addEventListener('mousemove',function(mle){
	var mlx = mle.clientX;
	var mly = mle.clientY;
	mlspanText.style.top = (mly - 50) + "px";
	mlspanText.style.left = (mlx + 20) + "px";
});

var mlact="17 ";
var mldht="5 ";
var mltolt="784 ";
var mlrct="207 ";
document.getElementById("mltol").innerHTML = mltolt;
document.getElementById("mldh").innerHTML = mldht;
document.getElementById("mlac").innerHTML = mlact;
document.getElementById("mlrc").innerHTML = mlrct;

//assam

var asspanText = document.getElementById('astoolti');
document.addEventListener('mousemove',function(ase){
	var asx = ase.clientX;
	var asy = ase.clientY;
	asspanText.style.top = (asy - 50) + "px";
	asspanText.style.left = (asx + 20) + "px";
});

var asact="8,081 ";
var asdht="94 ";
var astolt="38,407 ";
var asrct="29,080 ";
document.getElementById("astol").innerHTML = astolt;
document.getElementById("asdh").innerHTML = asdht;
document.getElementById("asac").innerHTML = asact;
document.getElementById("asrc").innerHTML = asrct;

//arunachal pradesh

var arspanText = document.getElementById('artoolti');
document.addEventListener('mousemove',function(are){
	var arx = are.clientX;
	var ary = are.clientY;
	arspanText.style.top = (ary - 50) + "px";
	arspanText.style.left = (arx + 20) + "px";
});

var aract="654 ";
var ardht="3 ";
var artolt="1,410 ";
var arrct="677 ";
document.getElementById("artol").innerHTML = artolt;
document.getElementById("ardh").innerHTML = ardht;
document.getElementById("arac").innerHTML = aract;
document.getElementById("arrc").innerHTML = arrct;

//nagaland

var nlspanText = document.getElementById('nltoolti');
document.addEventListener('mousemove',function(nle){
	var nlx = nle.clientX;
	var nly = nle.clientY;
	nlspanText.style.top = (nly - 50) + "px";
	nlspanText.style.left = (nlx + 20) + "px";
});

var nlact="961 ";
var nldht="5 ";
var nltolt="1,513 ";
var nlrct="595 ";
document.getElementById("nltol").innerHTML = nltolt;
document.getElementById("nldh").innerHTML = nldht;
document.getElementById("nlac").innerHTML = nlact;
document.getElementById("nlrc").innerHTML = nlrct;

//manipur

var mnspanText = document.getElementById('mntoolti');
document.addEventListener('mousemove',function(mne){
	var mnx = mne.clientX;
	var mny = mne.clientY;
	mnspanText.style.top = (mny - 50) + "px";
	mnspanText.style.left = (mnx + 20) + "px";
});

var mnact="819 ";
var mndht="0 ";
var mntolt="2,458 ";
var mnrct="1,639 ";
document.getElementById("mntol").innerHTML = mntolt;
document.getElementById("mndh").innerHTML = mndht;
document.getElementById("mnac").innerHTML = mnact;
document.getElementById("mnrc").innerHTML = mnrct;

//tripura

var trspanText = document.getElementById('trtoolti');
document.addEventListener('mousemove',function(tre){
	var trx = tre.clientX;
	var ttry = tre.clientY;
	trspanText.style.top = (ttry - 50) + "px";
	trspanText.style.left = (trx + 20) + "px";
});

var tract="1,723 ";
var trdht="21  ";
var trtolt="4,706 ";
var trrct="2,962 ";
document.getElementById("trtol").innerHTML = trtolt;
document.getElementById("trdh").innerHTML = trdht;
document.getElementById("trac").innerHTML = tract;
document.getElementById("trrc").innerHTML = trrct;

//mizoram

var mzspanText = document.getElementById('mztoolti');
document.addEventListener('mousemove',function(mze){
	var mzx = mze.clientX;
	var mzy = mze.clientY;
	mzspanText.style.top = (mzy - 50) + "px";
	mzspanText.style.left = (mzx + 20) + "px";
});

var mzact="174 ";
var mzdht="0 ";
var mztolt="408	 ";
var mzrct="234 ";
document.getElementById("mztol").innerHTML = mztolt;
document.getElementById("mzdh").innerHTML = mzdht;
document.getElementById("mzac").innerHTML = mzact;
document.getElementById("mzrc").innerHTML = mzrct;

// Madhya pradesh

var mpspanText = document.getElementById('mptoolti');
document.addEventListener('mousemove',function(mpe){
	var mpx = mpe.clientX;
	var mpy = mpe.clientY;
	mpspanText.style.top = (mpy - 50) + "px";
	mpspanText.style.left = (mpx + 20) + "px";
});


var mpact="8,454 ";
var mpdht="857  ";
var mptolt="30,968";
var mprct="21,657";
document.getElementById("mptol").innerHTML = mptolt;
document.getElementById("mpdh").innerHTML = mpdht;
document.getElementById("mpac").innerHTML = mpact;
document.getElementById("mprc").innerHTML = mprct;

//gujarat

var gjspanText = document.getElementById('gjtoolti');
document.addEventListener('mousemove',function(gje){
	var gjx = gje.clientX;
	var gjy = gje.clientY;
	gjspanText.style.top = (gjy - 50) + "px";
	gjspanText.style.left = (gjx + 20) + "px";
});

var gjact="13,793 ";
var gjdht="2,418 ";
var gjtolt="60,285 ";
var gjrct="44,074 ";
document.getElementById("gjtol").innerHTML = gjtolt;
document.getElementById("gjdh").innerHTML = gjdht;
document.getElementById("gjac").innerHTML = gjact;
document.getElementById("gjrc").innerHTML = gjrct;

//rajasthan

var rjspanText = document.getElementById('rjtoolti');
document.addEventListener('mousemove',function(rje){
	var rjx = rje.clientX;
	var rjy = rje.clientY;
	rjspanText.style.top = (rjy - 50) + "px";
	rjspanText.style.left = (rjx + 20) + "px";
});

var rjact="11,097 ";
var rjdht="663 ";
var rjtolt="40,145 ";
var rjrct="28,385 ";
document.getElementById("rjtol").innerHTML = rjtolt;
document.getElementById("rjdh").innerHTML = rjdht;
document.getElementById("rjac").innerHTML = rjact;
document.getElementById("rjrc").innerHTML = rjrct;

// Uttar pradesh

var upspanText = document.getElementById('uptoolti');
document.addEventListener('mousemove',function(upe){
	var upx = upe.clientX;
	var upy = upe.clientY;
	upspanText.style.top = (upy - 50) + "px";
	upspanText.style.left = (upx + 20) + "px";
});


var upact="32,649 ";
var updht="1,587  ";
var uptolt="81,039";
var uprct="46,803";
document.getElementById("uptol").innerHTML = uptolt;
document.getElementById("updh").innerHTML = updht;
document.getElementById("upac").innerHTML = upact;
document.getElementById("uprc").innerHTML = uprct;

//Uttarakhand

var ukspanText = document.getElementById('uktoolti');
document.addEventListener('mousemove',function(uke){
	var ukx = uke.clientX;
	var uky = uke.clientY;
	ukspanText.style.top = (uky - 50) + "px";
	ukspanText.style.left = (ukx + 20) + "px";
});


var ukact="2,993 ";
var ukdht="76  ";
var uktolt="7,065";
var ukrct="3,996";
document.getElementById("uktol").innerHTML = uktolt;
document.getElementById("ukdh").innerHTML = ukdht;
document.getElementById("ukac").innerHTML = ukact;
document.getElementById("ukrc").innerHTML = ukrct;

//Delhi

var dlspanText = document.getElementById('dltoolti');
document.addEventListener('mousemove',function(dle){
	var dlx = dle.clientX;
	var dly = dle.clientY;
	dlspanText.style.top = (dly - 50) + "px";
	dlspanText.style.left = (dlx + 20) + "px";
});


var dlact="10,743 ";
var dldht="3,936  ";
var dltolt="134,403";
var dlrct="119,724";
document.getElementById("dltol").innerHTML = dltolt;
document.getElementById("dldh").innerHTML = dldht;
document.getElementById("dlac").innerHTML = dlact;
document.getElementById("dlrc").innerHTML = dlrct;

//haryana

var hrspanText = document.getElementById('hrtoolti');
document.addEventListener('mousemove',function(hre){
	var hrx = hre.clientX;
	var hry = hre.clientY;
	hrspanText.style.top = (hry - 50) + "px";
	hrspanText.style.left = (hrx + 20) + "px";
});


var hract="6,497 ";
var hrdht="417  ";
var hrtolt="34,254";
var hrrct="27,340";
document.getElementById("hrtol").innerHTML = hrtolt;
document.getElementById("hrdh").innerHTML = hrdht;
document.getElementById("hrac").innerHTML = hract;
document.getElementById("hrrc").innerHTML = hrrct;

//punjab

var pbspanText = document.getElementById('pbtoolti');
document.addEventListener('mousemove',function(pbe){
	var pbx = pbe.clientX;
	var pby = pbe.clientY;
	pbspanText.style.top = (pby - 50) + "px";
	pbspanText.style.left = (pbx + 20) + "px";
});


var pbact="4,577 ";
var pbdht="370  ";
var pbtolt="15,456";
var pbrct="10,509";
document.getElementById("pbtol").innerHTML = pbtolt;
document.getElementById("pbdh").innerHTML = pbdht;
document.getElementById("pbac").innerHTML = pbact;
document.getElementById("pbrc").innerHTML = pbrct;

//Himachal Pradesh

var hbspanText = document.getElementById('hbtoolti');
document.addEventListener('mousemove',function(hbe){
	var hbx = hbe.clientX;
	var hby = hbe.clientY;
	hbspanText.style.top = (hby - 50) + "px";
	hbspanText.style.left = (hbx + 20) + "px";
});


var hbact="1,105 ";
var hbdht="14  ";
var hbtolt="2,506";
var hbrct="1,387";
document.getElementById("hbtol").innerHTML = hbtolt;
document.getElementById("hbdh").innerHTML = hbdht;
document.getElementById("hbac").innerHTML = hbact;
document.getElementById("hbrc").innerHTML = hbrct;

//jammu and kashmir

var jkspanText = document.getElementById('jktoolti');
document.addEventListener('mousemove',function(jke){
	var jkx = jke.clientX;
	var jky = jke.clientY;
	jkspanText.style.top = (jky - 50) + "px";
	jkspanText.style.left = (jkx + 20) + "px";
});


var jkact="7,662 ";
var jkdht="365  ";
var jktolt="19,869";
var jkrct="11,842";
document.getElementById("jktol").innerHTML = jktolt;
document.getElementById("jkdh").innerHTML = jkdht;
document.getElementById("jkac").innerHTML = jkact;
document.getElementById("jkrc").innerHTML = jkrct;

/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function($) {
	$.fn.rwdImageMaps = function() {
		var $img = this;

		var rwdImageMap = function() {
			$img.each(function() {

				var that = this,
					$that = $(that);

				// Since WebKit doesn't know the height until after the image has loaded, perform everything in an onload copy
				$('<img />').on('load', function() {
					var attrW = 'width',
						attrH = 'height',
						w = $that.attr(attrW),
						h = $that.attr(attrH);

					if (!w || !h) {
						var temp = new Image();
						temp.src = $that.attr('src');
						if (!w)
							w = temp.width;
						if (!h)
							h = temp.height;
					}

					var wPercent = $that.width()/100,
						hPercent = $that.height()/100,
						map = $that.attr('usemap').replace('#', ''),
						c = 'coords';

					$('map[name="' + map + '"]').find('area').each(function() {
						var $this = $(this);
						if (!$this.data(c))
							$this.data(c, $this.attr(c));

						var coords = $this.data(c).split(','),
							coordsPercent = new Array(coords.length);

						for (var i = 0; i < coordsPercent.length; ++i) {
							if (i % 2 === 0)
								coordsPercent[i] = parseInt(((coords[i]/w)*100)*wPercent);
							else
								coordsPercent[i] = parseInt(((coords[i]/h)*100)*hPercent);
						}
						$this.attr(c, coordsPercent.toString());
					});
				}).attr('src', $that.attr('src'));
			});
		};
		$(window).resize(rwdImageMap).trigger('resize');

		return this;
	};
})(jQuery);

/*
* rwdImageMaps jQuery plugin v1.6
*
* Allows image maps to be used in a responsive design by recalculating the area coordinates to match the actual image size on load and window.resize
*
* Copyright (c) 2016 Matt Stow
* https://github.com/stowball/jQuery-rwdImageMaps
* http://mattstow.com
* Licensed under the MIT license
*/
;(function(a){
	a.fn.rwdImageMaps=function(){
	var c=this;
	var b=function(){
		c.each(function(){
			var e=this,d=a(e);
			a("<img />").on('load',function(){
				var g="width",m="height",n=d.attr(g),j=d.attr(m);
				if(!n||!j){
					var o=new Image();
					o.src=d.attr("src");
					if(!n){
						n=o.width
					}if(!j){
						j=o.height
						}
					}
					var f=d.width()/100,k=d.height()/100,i=d.attr("usemap").replace("#",""),l="coords";
					a('map[name="'+i+'"]').find("area").each(function(){
						var r=a(this);
						if(!r.data(l)){
							r.data(l,r.attr(l))
						}
						var q=r.data(l).split(","),p=new Array(q.length);
						for(var h=0;h<p.length;++h){
							if(h%2===0){
								p[h]=parseInt(((q[h]/n)*100)*f)
							}
							else{
								p[h]=parseInt(((q[h]/j)*100)*k)
							}
						}
						r.attr(l,p.toString())
					})}).attr("src",d.attr("src"))})};
					a(window).resize(b).trigger("resize");return this}})
(jQuery);