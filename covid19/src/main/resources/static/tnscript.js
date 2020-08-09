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

//Tiruvallur

var trlspanText = document.getElementById('tiruvallur');
document.addEventListener('mousemove',function(trl){
	var trlx = trl.clientX;
	var trly = trl.clientY;
	trlspanText.style.top = (trly - 20) + "px";
	trlspanText.style.left = (trlx + 20) + "px";
});

var trltnact="52,273 ";
var trltndht="3,838  ";
var trltntolt="2,39,978";
var trltnrct="1,78,178";
document.getElementById("trltntol").innerHTML = trltntolt;
document.getElementById("trltndh").innerHTML = trltndht;
document.getElementById("trltnac").innerHTML = trltnact;
document.getElementById("trltnrc").innerHTML = trltnrct;

//chennai

var masspanText = document.getElementById('chennai');
document.addEventListener('mousemove',function(mas){
	var masx = mas.clientX;
	var masy = mas.clientY;
	masspanText.style.top = (masy - 20) + "px";
	masspanText.style.left = (masx + 20) + "px";
});

var mastnact="52,273 ";
var mastndht="3,838  ";
var mastntolt="2,39,978";
var mastnrct="1,78,178";
document.getElementById("mastntol").innerHTML = mastntolt;
document.getElementById("mastndh").innerHTML = mastndht;
document.getElementById("mastnac").innerHTML = mastnact;
document.getElementById("mastnrc").innerHTML = mastnrct;

//kancheepuram

var cjspanText = document.getElementById('kancheepuram');
document.addEventListener('mousemove',function(cj){
	var cjx = cj.clientX;
	var cjy = cj.clientY;
	cjspanText.style.top = (cjy - 20) + "px";
	cjspanText.style.left = (cjx + 20) + "px";
});

var cjtnact="52,273 ";
var cjtndht="3,838  ";
var cjtntolt="2,39,978";
var cjtnrct="1,78,178";
document.getElementById("cjtntol").innerHTML = cjtntolt;
document.getElementById("cjtndh").innerHTML = cjtndht;
document.getElementById("cjtnac").innerHTML = cjtnact;
document.getElementById("cjtnrc").innerHTML = cjtnrct;

//vellore

var kpdspanText = document.getElementById('vellore');
document.addEventListener('mousemove',function(kpd){
	var kpdx = kpd.clientX;
	var kpdy = kpd.clientY;
	kpdspanText.style.top = (kpdy - 20) + "px";
	kpdspanText.style.left = (kpdx + 20) + "px";
});

var kpdtnact="52,273 ";
var kpdtndht="3,838  ";
var kpdtntolt="2,39,978";
var kpdtnrct="1,78,178";
document.getElementById("kpdtntol").innerHTML = kpdtntolt;
document.getElementById("kpdtndh").innerHTML = kpdtndht;
document.getElementById("kpdtnac").innerHTML = kpdtnact;
document.getElementById("kpdtnrc").innerHTML = kpdtnrct;

//Tiruvannamalai

var tnmspanText = document.getElementById('tiruvannamalai');
document.addEventListener('mousemove',function(tnm){
	var tnmx = tnm.clientX;
	var tnmy = tnm.clientY;
	tnmspanText.style.top = (tnmy - 20) + "px";
	tnmspanText.style.left = (tnmx + 20) + "px";
});

var tnmtnact="52,273 ";
var tnmtndht="3,838  ";
var tnmtntolt="2,39,978";
var tnmtnrct="1,78,178";
document.getElementById("tnmtntol").innerHTML = tnmtntolt;
document.getElementById("tnmtndh").innerHTML = tnmtndht;
document.getElementById("tnmtnac").innerHTML = tnmtnact;
document.getElementById("tnmtnrc").innerHTML = tnmtnrct;

//Krishnagiri

var krispanText = document.getElementById('krishnagiri');
document.addEventListener('mousemove',function(kri){
	var krix = kri.clientX;
	var kriy = kri.clientY;
	krispanText.style.top = (kriy - 20) + "px";
	krispanText.style.left = (krix + 20) + "px";
});

var kritnact="52,273 ";
var kritndht="3,838  ";
var kritntolt="2,39,978";
var kritnrct="1,78,178";
document.getElementById("kritntol").innerHTML = kritntolt;
document.getElementById("kritndh").innerHTML = kritndht;
document.getElementById("kritnac").innerHTML = kritnact;
document.getElementById("kritnrc").innerHTML = kritnrct;

//Dharmapuri

var dpjspanText = document.getElementById('dharmapuri');
document.addEventListener('mousemove',function(dpj){
	var dpjx = dpj.clientX;
	var dpjy = dpj.clientY;
	dpjspanText.style.top = (dpjy - 20) + "px";
	dpjspanText.style.left = (dpjx + 20) + "px";
});

var dpjtnact="52,273 ";
var dpjtndht="3,838  ";
var dpjtntolt="2,39,978";
var dpjtnrct="1,78,178";
document.getElementById("dpjtntol").innerHTML = dpjtntolt;
document.getElementById("dpjtndh").innerHTML = dpjtndht;
document.getElementById("dpjtnac").innerHTML = dpjtnact;
document.getElementById("dpjtnrc").innerHTML = dpjtnrct;

//Vilupuram

var vmspanText = document.getElementById('vilupuram');
document.addEventListener('mousemove',function(vm){
	var vmx = vm.clientX;
	var vmy = vm.clientY;
	vmspanText.style.top = (vmy - 20) + "px";
	vmspanText.style.left = (vmx + 20) + "px";
});

var vmtnact="52,273 ";
var vmtndht="3,838  ";
var vmtntolt="2,39,978";
var vmtnrct="1,78,178";
document.getElementById("vmtntol").innerHTML = vmtntolt;
document.getElementById("vmtndh").innerHTML = vmtndht;
document.getElementById("vmtnac").innerHTML = vmtnact;
document.getElementById("vmtnrc").innerHTML = vmtnrct;

//salem

var saspanText = document.getElementById('salem');
document.addEventListener('mousemove',function(sa){
	var sax = sa.clientX;
	var say = sa.clientY;
	saspanText.style.top = (say - 20) + "px";
	saspanText.style.left = (sax + 20) + "px";
});

var satnact="52,273 ";
var satndht="3,838  ";
var satntolt="2,39,978";
var satnrct="1,78,178";
document.getElementById("satntol").innerHTML = satntolt;
document.getElementById("satndh").innerHTML = satndht;
document.getElementById("satnac").innerHTML = satnact;
document.getElementById("satnrc").innerHTML = satnrct;

//nigiris

var nilspanText = document.getElementById('nilgiris');
document.addEventListener('mousemove',function(nil){
	var nilx = nil.clientX;
	var nily = nil.clientY;
	nilspanText.style.top = (nily - 20) + "px";
	nilspanText.style.left = (nilx + 20) + "px";
});

var niltnact="52,273 ";
var niltndht="3,838  ";
var niltntolt="2,39,978";
var niltnrct="1,78,178";
document.getElementById("niltntol").innerHTML = niltntolt;
document.getElementById("niltndh").innerHTML = niltndht;
document.getElementById("niltnac").innerHTML = niltnact;
document.getElementById("niltnrc").innerHTML = niltnrct;

//erode

var edspanText = document.getElementById('erode');
document.addEventListener('mousemove',function(ed){
	var edx = ed.clientX;
	var edy = ed.clientY;
	edspanText.style.top = (edy - 20) + "px";
	edspanText.style.left = (edx + 20) + "px";
});

var edtnact="52,273 ";
var edtndht="3,838  ";
var edtntolt="2,39,978";
var edtnrct="1,78,178";
document.getElementById("edtntol").innerHTML = edtntolt;
document.getElementById("edtndh").innerHTML = edtndht;
document.getElementById("edtnac").innerHTML = edtnact;
document.getElementById("edtnrc").innerHTML = edtnrct;

//Namakkal

var nmklspanText = document.getElementById('namakkal');
document.addEventListener('mousemove',function(nmkl){
	var nmklx = nmkl.clientX;
	var nmkly = nmkl.clientY;
	nmklspanText.style.top = (nmkly - 20) + "px";
	nmklspanText.style.left = (nmklx + 20) + "px";
});

var nmkltnact="52,273 ";
var nmkltndht="3,838  ";
var nmkltntolt="2,39,978";
var nmkltnrct="1,78,178";
document.getElementById("nmkltntol").innerHTML = nmkltntolt;
document.getElementById("nmkltndh").innerHTML = nmkltndht;
document.getElementById("nmkltnac").innerHTML = nmkltnact;
document.getElementById("nmkltnrc").innerHTML = nmkltnrct;

//Perambur

var perspanText = document.getElementById('perambur');
document.addEventListener('mousemove',function(per){
	var perx = per.clientX;
	var pery = per.clientY;
	perspanText.style.top = (pery - 20) + "px";
	perspanText.style.left = (perx + 20) + "px";
});

var pertnact="52,273 ";
var pertndht="3,838  ";
var pertntolt="2,39,978";
var pertnrct="1,78,178";
document.getElementById("pertntol").innerHTML = pertntolt;
document.getElementById("pertndh").innerHTML = pertndht;
document.getElementById("pertnac").innerHTML = pertnact;
document.getElementById("pertnrc").innerHTML = pertnrct;

//Cuddalore

var cupjspanText = document.getElementById('cuddalore');
document.addEventListener('mousemove',function(cupj){
	var cupjx = cupj.clientX;
	var cupjy = cupj.clientY;
	cupjspanText.style.top = (cupjy - 20) + "px";
	cupjspanText.style.left = (cupjx + 20) + "px";
});

var cupjtnact="52,273 ";
var cupjtndht="3,838  ";
var cupjtntolt="2,39,978";
var cupjtnrct="1,78,178";
document.getElementById("cupjtntol").innerHTML = cupjtntolt;
document.getElementById("cupjtndh").innerHTML = cupjtndht;
document.getElementById("cupjtnac").innerHTML = cupjtnact;
document.getElementById("cupjtnrc").innerHTML = cupjtnrct;

//Ariyalur

var aluspanText = document.getElementById('ariyalur');
document.addEventListener('mousemove',function(alu){
	var alux = alu.clientX;
	var aluy = alu.clientY;
	aluspanText.style.top = (aluy - 20) + "px";
	aluspanText.style.left = (alux + 20) + "px";
});

var alutnact="52,273 ";
var alutndht="3,838  ";
var alutntolt="2,39,978";
var alutnrct="1,78,178";
document.getElementById("alutntol").innerHTML = alutntolt;
document.getElementById("alutndh").innerHTML = alutndht;
document.getElementById("alutnac").innerHTML = alutnact;
document.getElementById("alutnrc").innerHTML = alutnrct;

//Mayiladuturai

var mvspanText = document.getElementById('mayiladuturai');
document.addEventListener('mousemove',function(mv){
	var mvx = mv.clientX;
	var mvy = mv.clientY;
	mvspanText.style.top = (mvy - 20) + "px";
	mvspanText.style.left = (mvx + 20) + "px";
});

var mvtnact="52,273 ";
var mvtndht="3,838  ";
var mvtntolt="2,39,978";
var mvtnrct="1,78,178";
document.getElementById("mvtntol").innerHTML = mvtntolt;
document.getElementById("mvtndh").innerHTML = mvtndht;
document.getElementById("mvtnac").innerHTML = mvtnact;
document.getElementById("mvtnrc").innerHTML = mvtnrct;

//coimbatore

var cbespanText = document.getElementById('coimbatore');
document.addEventListener('mousemove',function(cbe){
	var cbex = cbe.clientX;
	var cbey = cbe.clientY;
	cbespanText.style.top = (cbey - 20) + "px";
	cbespanText.style.left = (cbex + 20) + "px";
});

var cbetnact="52,273 ";
var cbetndht="3,838  ";
var cbetntolt="2,39,978";
var cbetnrct="1,78,178";
document.getElementById("cbetntol").innerHTML = cbetntolt;
document.getElementById("cbetndh").innerHTML = cbetndht;
document.getElementById("cbetnac").innerHTML = cbetnact;
document.getElementById("cbetnrc").innerHTML = cbetnrct;

//tiruppur

var tupspanText = document.getElementById('tiruppur');
document.addEventListener('mousemove',function(tup){
	var tupx = tup.clientX;
	var tupy = tup.clientY;
	tupspanText.style.top = (tupy - 20) + "px";
	tupspanText.style.left = (tupx + 20) + "px";
});

var tuptnact="52,273 ";
var tuptndht="3,838  ";
var tuptntolt="2,39,978";
var tuptnrct="1,78,178";
document.getElementById("tuptntol").innerHTML = tuptntolt;
document.getElementById("tuptndh").innerHTML = tuptndht;
document.getElementById("tuptnac").innerHTML = tuptnact;
document.getElementById("tuptnrc").innerHTML = tuptnrct;

//karur

var krrspanText = document.getElementById('karur');
document.addEventListener('mousemove',function(krr){
	var krrx = krr.clientX;
	var krry = krr.clientY;
	krrspanText.style.top = (krry - 20) + "px";
	krrspanText.style.left = (krrx + 20) + "px";
});

var krrtnact="52,273 ";
var krrtndht="3,838  ";
var krrtntolt="2,39,978";
var krrtnrct="1,78,178";
document.getElementById("krrtntol").innerHTML = krrtntolt;
document.getElementById("krrtndh").innerHTML = krrtndht;
document.getElementById("krrtnac").innerHTML = krrtnact;
document.getElementById("krrtnrc").innerHTML = krrtnrct;

//tiruchirapalli

var tpjspanText = document.getElementById('tiruchirapalli');
document.addEventListener('mousemove',function(tpj){
	var tpjx = tpj.clientX;
	var tpjy = tpj.clientY;
	tpjspanText.style.top = (tpjy - 20) + "px";
	tpjspanText.style.left = (tpjx + 20) + "px";
});

var tpjtnact="52,273 ";
var tpjtndht="3,838  ";
var tpjtntolt="2,39,978";
var tpjtnrct="1,78,178";
document.getElementById("tpjtntol").innerHTML = tpjtntolt;
document.getElementById("tpjtndh").innerHTML = tpjtndht;
document.getElementById("tpjtnac").innerHTML = tpjtnact;
document.getElementById("tpjtnrc").innerHTML = tpjtnrct;

//thanjavur

var tjspanText = document.getElementById('thanjavur');
document.addEventListener('mousemove',function(tj){
	var tjx = tj.clientX;
	var tjy = tj.clientY;
	tjspanText.style.top = (tjy - 20) + "px";
	tjspanText.style.left = (tjx + 20) + "px";
});

var tjtnact="52,273 ";
var tjtndht="3,838  ";
var tjtntolt="2,39,978";
var tjtnrct="1,78,178";
document.getElementById("tjtntol").innerHTML = tjtntolt;
document.getElementById("tjtndh").innerHTML = tjtndht;
document.getElementById("tjtnac").innerHTML = tjtnact;
document.getElementById("tjtnrc").innerHTML = tjtnrct;

//tiruvarur

var tirspanText = document.getElementById('tiruvarur');
document.addEventListener('mousemove',function(tir){
	var tirx = tir.clientX;
	var tiry = tir.clientY;
	tirspanText.style.top = (tiry - 20) + "px";
	tirspanText.style.left = (tirx + 20) + "px";
});

var tirtnact="52,273 ";
var tirtndht="3,838  ";
var tirtntolt="2,39,978";
var tirtnrct="1,78,178";
document.getElementById("tirtntol").innerHTML = tirtntolt;
document.getElementById("tirtndh").innerHTML = tirtndht;
document.getElementById("tirtnac").innerHTML = tirtnact;
document.getElementById("tirtnrc").innerHTML = tirtnrct;

//nagappattinam

var ngtspanText = document.getElementById('nagappattinam');
document.addEventListener('mousemove',function(ngt){
	var ngtx = ngt.clientX;
	var ngty = ngt.clientY;
	ngtspanText.style.top = (ngty - 20) + "px";
	ngtspanText.style.left = (ngtx + 20) + "px";
});

var ngttnact="52,273 ";
var ngttndht="3,838  ";
var ngttntolt="2,39,978";
var ngttnrct="1,78,178";
document.getElementById("ngttntol").innerHTML = ngttntolt;
document.getElementById("ngttndh").innerHTML = ngttndht;
document.getElementById("ngttnac").innerHTML = ngttnact;
document.getElementById("ngttnrc").innerHTML = ngttnrct;

//dindigul

var dgspanText = document.getElementById('dindigul');
document.addEventListener('mousemove',function(dg){
	var dgx = dg.clientX;
	var dgy = dg.clientY;
	dgspanText.style.top = (dgy - 20) + "px";
	dgspanText.style.left = (dgx + 20) + "px";
});

var dgtnact="52,273 ";
var dgtndht="3,838  ";
var dgtntolt="2,39,978";
var dgtnrct="1,78,178";
document.getElementById("dgtntol").innerHTML = dgtntolt;
document.getElementById("dgtndh").innerHTML = dgtndht;
document.getElementById("dgtnac").innerHTML = dgtnact;
document.getElementById("dgtnrc").innerHTML = dgtnrct;

//Pudukkottai

var pdktspanText = document.getElementById('pudukkottai');
document.addEventListener('mousemove',function(pdkt){
	var pdktx = pdkt.clientX;
	var pdkty = pdkt.clientY;
	pdktspanText.style.top = (pdkty - 20) + "px";
	pdktspanText.style.left = (pdktx + 20) + "px";
});

var pdkttnact="52,273 ";
var pdkttndht="3,838  ";
var pdkttntolt="2,39,978";
var pdkttnrct="1,78,178";
document.getElementById("pdkttntol").innerHTML = pdkttntolt;
document.getElementById("pdkttndh").innerHTML = pdkttndht;
document.getElementById("pdkttnac").innerHTML = pdkttnact;
document.getElementById("pdkttnrc").innerHTML = pdkttnrct;

//theni

var thespanText = document.getElementById('theni');
document.addEventListener('mousemove',function(the){
	var thex = the.clientX;
	var they = the.clientY;
	thespanText.style.top = (they - 20) + "px";
	thespanText.style.left = (thex + 20) + "px";
});

var thetnact="52,273 ";
var thetndht="3,838  ";
var thetntolt="2,39,978";
var thetnrct="1,78,178";
document.getElementById("thetntol").innerHTML = thetntolt;
document.getElementById("thetndh").innerHTML = thetndht;
document.getElementById("thetnac").innerHTML = thetnact;
document.getElementById("thetnrc").innerHTML = thetnrct;

//madurai

var mduspanText = document.getElementById('madurai');
document.addEventListener('mousemove',function(mdu){
	var mdux = mdu.clientX;
	var mduy = mdu.clientY;
	mduspanText.style.top = (mduy - 20) + "px";
	mduspanText.style.left = (mdux + 20) + "px";
});

var mdutnact="52,273 ";
var mdutndht="3,838  ";
var mdutntolt="2,39,978";
var mdutnrct="1,78,178";
document.getElementById("mdutntol").innerHTML = mdutntolt;
document.getElementById("mdutndh").innerHTML = mdutndht;
document.getElementById("mdutnac").innerHTML = mdutnact;
document.getElementById("mdutnrc").innerHTML = mdutnrct;

//sivaganga

var svgaspanText = document.getElementById('sivaganga');
document.addEventListener('mousemove',function(svga){
	var svgax = svga.clientX;
	var svgay = svga.clientY;
	svgaspanText.style.top = (svgay - 20) + "px";
	svgaspanText.style.left = (svgax + 20) + "px";
});

var svgatnact="52,273 ";
var svgatndht="3,838  ";
var svgatntolt="2,39,978";
var svgatnrct="1,78,178";
document.getElementById("svgatntol").innerHTML = svgatntolt;
document.getElementById("svgatndh").innerHTML = svgatndht;
document.getElementById("svgatnac").innerHTML = svgatnact;
document.getElementById("svgatnrc").innerHTML = svgatnrct;

//Virudunagar

var vptspanText = document.getElementById('virudunagar');
document.addEventListener('mousemove',function(vpt){
	var vptx = vpt.clientX;
	var vpty = vpt.clientY;
	vptspanText.style.top = (vpty - 20) + "px";
	vptspanText.style.left = (vptx + 20) + "px";
});

var vpttnact="52,273 ";
var vpttndht="3,838  ";
var vpttntolt="2,39,978";
var vpttnrct="1,78,178";
document.getElementById("vpttntol").innerHTML = vpttntolt;
document.getElementById("vpttndh").innerHTML = vpttndht;
document.getElementById("vpttnac").innerHTML = vpttnact;
document.getElementById("vpttnrc").innerHTML = vpttnrct;

//ramanathapuram

var rmdspanText = document.getElementById('ramanathapuram');
document.addEventListener('mousemove',function(rmd){
	var rmdx = rmd.clientX;
	var rmdy = rmd.clientY;
	rmdspanText.style.top = (rmdy - 20) + "px";
	rmdspanText.style.left = (rmdx + 20) + "px";
});

var rmdtnact="52,273 ";
var rmdtndht="3,838  ";
var rmdtntolt="2,39,978";
var rmdtnrct="1,78,178";
document.getElementById("rmdtntol").innerHTML = rmdtntolt;
document.getElementById("rmdtndh").innerHTML = rmdtndht;
document.getElementById("rmdtnac").innerHTML = rmdtnact;
document.getElementById("rmdtnrc").innerHTML = rmdtnrct;

//tirunelveli

var tenspanText = document.getElementById('tirunelveli');
document.addEventListener('mousemove',function(ten){
	var tenx = ten.clientX;
	var teny = ten.clientY;
	tenspanText.style.top = (teny - 20) + "px";
	tenspanText.style.left = (tenx + 20) + "px";
});

var tentnact="52,273 ";
var tentndht="3,838  ";
var tentntolt="2,39,978";
var tentnrct="1,78,178";
document.getElementById("tentntol").innerHTML = tentntolt;
document.getElementById("tentndh").innerHTML = tentndht;
document.getElementById("tentnac").innerHTML = tentnact;
document.getElementById("tentnrc").innerHTML = tentnrct;

//tuticorin

var tnspanText = document.getElementById('tuticorin');
document.addEventListener('mousemove',function(tn){
	var tnx = tn.clientX;
	var tny = tn.clientY;
	tnspanText.style.top = (tny - 20) + "px";
	tnspanText.style.left = (tnx + 20) + "px";
});

var tntnact="52,273 ";
var tntndht="3,838  ";
var tntntolt="2,39,978";
var tntnrct="1,78,178";
document.getElementById("tntntol").innerHTML = tntntolt;
document.getElementById("tntndh").innerHTML = tntndht;
document.getElementById("tntnac").innerHTML = tntnact;
document.getElementById("tntnrc").innerHTML = tntnrct;

//kanyakumari

var capespanText = document.getElementById('kanyakumari');
document.addEventListener('mousemove',function(cape){
	var capex = cape.clientX;
	var capey = cape.clientY;
	capespanText.style.top = (capey - 20) + "px";
	capespanText.style.left = (capex + 20) + "px";
});

var capetnact="52,273 ";
var capetndht="3,838  ";
var capetntolt="2,39,978";
var capetnrct="1,78,178";
document.getElementById("capetntol").innerHTML = capetntolt;
document.getElementById("capetndh").innerHTML = capetndht;
document.getElementById("capetnac").innerHTML = capetnact;
document.getElementById("capetnrc").innerHTML = capetnrct;
