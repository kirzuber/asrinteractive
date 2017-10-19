// JavaScript Document

// last openned panel
var LastUsed = '';

$(document).ready(function () {
    $('#layer-one').mousemove(function (e) {
        parallax(e, this, 1);
        parallax(e, document.getElementById('layer-two'), 2);
        // parallax(e, document.getElementById('layer-three'), 3);
    });
});

function parallax(e, target, layer) {
    var layer_coeff = 44 / layer;
    var x = ($(window).width() - target.offsetWidth) / 2 - (e.pageX - ($(window).width() / 2)) / layer_coeff;
    // var y = ($(window).height() - target.offsetHeight) / 2 - (e.pageY - ($(window).height() / 2)) / layer_coeff;
    $(target).offset({ /* top: y , */ left : x });
}


function showBanner(banner){
	$( "#" + banner + "" ).fadeIn( "slow", function() { });
}
function hideBanner(banner){
	$( "#" + banner + "" ).fadeOut( "slow", function() { });
}


function clickedDot(what) {
	
	if(what == "BigMountainFlag"){
		document.getElementById('WordCloud_ASRCanada').style.display = "block";
		$("#WordCloud_ASRCanada").animate({opacity: '1'});
		
	} else if(what == "mountain1Flag"){
		document.getElementById('WordCloud_ASRGlobal').style.display = "block";
		$("#WordCloud_ASRGlobal").animate({opacity: '1'});
		
	} else if(what == "mountain2Flag"){
		document.getElementById('WordCloud_PwCCanada').style.display = "block";
		$("#WordCloud_PwCCanada").animate({opacity: '1'});
		
	} else if(what == "farMountainFlag"){
		document.getElementById('WordCloud_PwCGlobal').style.display = "block";
		$("#WordCloud_PwCGlobal").animate({opacity: '1'});
		
	} else{
		$("#" + what).animate({right: '0px'});
	}
	
	
	if (what == 'overlay_MountainASRCanada'){
		$("#WordCloud_ASRCanada").animate({opacity: '0'});
		setTimeout(function(){ 
			document.getElementById('WordCloud_ASRCanada').style.display = "none";
		}, 500);
	}
	if (what == 'overlay_MountainPwCCanada'){
		$("#WordCloud_PwCCanada").animate({opacity: '0'});
		setTimeout(function(){ 
			document.getElementById('WordCloud_PwCCanada').style.display = "none";
		}, 500);
	}
	if (what == 'overlay_MountainASRGlobal'){
		$("#WordCloud_ASRGlobal").animate({opacity: '0'});
		setTimeout(function(){ 
			document.getElementById('WordCloud_ASRGlobal').style.display = "none";
		}, 500);
	}
	if (what == 'overlay_MountainPwCGlobal'){
		$("#WordCloud_PwCGlobal").animate({opacity: '0'});
		setTimeout(function(){ 
			document.getElementById('WordCloud_PwCGlobal').style.display = "none";
		}, 500);
	}
	
	document.getElementById('darken').style.display = "block";
	$("#darken").animate({opacity: '0.4'});
	
	LastUsed = what;
}

function sendMail(){
	
	window.open('mailto:amy.west@pwc.com?subject=FY17_ASR_Interactive_Feedback');
}

function closeContent(what) {
	if(LastUsed == "BigMountainFlag"){
		$("#WordCloud_ASRCanada").animate({opacity: '0'});
		setTimeout(function(){ 
			document.getElementById('WordCloud_ASRCanada').style.display = "none";
		}, 1000);
	} else if(LastUsed == "mountain1Flag"){
		$("#WordCloud_ASRGlobal").animate({opacity: '0'});
		setTimeout(function(){ 
			document.getElementById('WordCloud_ASRGlobal').style.display = "none";
		}, 1000);
	} else if(LastUsed == "mountain2Flag"){
		$("#WordCloud_PwCCanada").animate({opacity: '0'});
		setTimeout(function(){ 
			document.getElementById('WordCloud_PwCCanada').style.display = "none";
		}, 1000);
	} else if(LastUsed == "farMountainFlag"){
		$("#WordCloud_PwCGlobal").animate({opacity: '0'});
		setTimeout(function(){ 
			document.getElementById('WordCloud_PwCGlobal').style.display = "none";
		}, 1000);
	} else{
		$("#" + LastUsed).animate({right: '-800px'});
	}
	
	$("#darken").animate({opacity: '0'});
	setTimeout(function(){ 
			document.getElementById('darken').style.display = "none";
		}, 1000);
}

function switchTabs(what){
	if (what == 'quality'){
		document.getElementById('quality').style.display = "block";
		document.getElementById('independence').style.display = "none";
		document.getElementById('role').style.display = "none";
		
		document.getElementById('qualityTab').className = "overlayMenuItemOn";
		document.getElementById('independenceTab').className = "overlayMenuItem";
		document.getElementById('roleTab').className = "overlayMenuItem";
	}
	else if (what == 'independence'){
		document.getElementById('quality').style.display = "none";
		document.getElementById('independence').style.display = "block";
		document.getElementById('role').style.display = "none";
		
		document.getElementById('qualityTab').className = "overlayMenuItem";
		document.getElementById('independenceTab').className = "overlayMenuItemOn";
		document.getElementById('roleTab').className = "overlayMenuItem";
	}
	else if (what == 'role'){
		document.getElementById('quality').style.display = "none";
		document.getElementById('independence').style.display = "none";
		document.getElementById('role').style.display = "block";
		
		document.getElementById('qualityTab').className = "overlayMenuItem";
		document.getElementById('independenceTab').className = "overlayMenuItem";
		document.getElementById('roleTab').className = "overlayMenuItemOn";
	}
}

function switchTabs2(what){
	if (what == 'overview'){
		document.getElementById('overview').style.display = "block";
		document.getElementById('riskAssurance').style.display = "none";
		document.getElementById('CMAAS').style.display = "none";
		document.getElementById('Actuarial').style.display = "none";
		document.getElementById('FRM').style.display = "none";
		document.getElementById('role2').style.display = "none";
		document.getElementById('teamMetrics').style.display = "none";
		
		document.getElementById('overviewTab').className = "overlayMenuItemOn";
		document.getElementById('riskAssuranceTab').className = "overlayMenuItem";
		document.getElementById('CMAASTab').className = "overlayMenuItem";
		document.getElementById('ActuarialTab').className = "overlayMenuItem";
		document.getElementById('FRMTab').className = "overlayMenuItem";
		document.getElementById('roleTab2').className = "overlayMenuItem";
		document.getElementById('metricsTab').className = "overlayMenuItem";
	}
	else if (what == 'riskAssurance'){
		document.getElementById('overview').style.display = "none";
		document.getElementById('riskAssurance').style.display = "block";
		document.getElementById('CMAAS').style.display = "none";
		document.getElementById('Actuarial').style.display = "none";
		document.getElementById('FRM').style.display = "none";
		document.getElementById('role').style.display = "none";
		document.getElementById('teamMetrics').style.display = "none";
		
		document.getElementById('overviewTab').className = "overlayMenuItem";
		document.getElementById('riskAssuranceTab').className = "overlayMenuItemOn";
		document.getElementById('CMAASTab').className = "overlayMenuItem";
		document.getElementById('ActuarialTab').className = "overlayMenuItem";
		document.getElementById('FRMTab').className = "overlayMenuItem";
		document.getElementById('roleTab2').className = "overlayMenuItem";
		document.getElementById('metricsTab').className = "overlayMenuItem";
	}
	else if (what == 'CMAAS'){
		document.getElementById('overview').style.display = "none";
		document.getElementById('riskAssurance').style.display = "none";
		document.getElementById('CMAAS').style.display = "block";
		document.getElementById('Actuarial').style.display = "none";
		document.getElementById('FRM').style.display = "none";
		document.getElementById('role').style.display = "none";
		document.getElementById('teamMetrics').style.display = "none";
		
		document.getElementById('overviewTab').className = "overlayMenuItem";
		document.getElementById('riskAssuranceTab').className = "overlayMenuItem";
		document.getElementById('CMAASTab').className = "overlayMenuItemOn";
		document.getElementById('ActuarialTab').className = "overlayMenuItem";
		document.getElementById('FRMTab').className = "overlayMenuItem";
		document.getElementById('roleTab2').className = "overlayMenuItem";
		document.getElementById('metricsTab').className = "overlayMenuItem";
	}
	else if (what == 'Actuarial'){
		document.getElementById('overview').style.display = "none";
		document.getElementById('riskAssurance').style.display = "none";
		document.getElementById('CMAAS').style.display = "none";
		document.getElementById('Actuarial').style.display = "block";
		document.getElementById('FRM').style.display = "none";
		document.getElementById('role').style.display = "none";
		document.getElementById('teamMetrics').style.display = "none";
		
		document.getElementById('overviewTab').className = "overlayMenuItem";
		document.getElementById('riskAssuranceTab').className = "overlayMenuItem";
		document.getElementById('CMAASTab').className = "overlayMenuItem";
		document.getElementById('ActuarialTab').className = "overlayMenuItemOn";
		document.getElementById('FRMTab').className = "overlayMenuItem";
		document.getElementById('roleTab2').className = "overlayMenuItem";
		document.getElementById('metricsTab').className = "overlayMenuItem";
	}
	else if (what == 'FRM'){
		document.getElementById('overview').style.display = "none";
		document.getElementById('riskAssurance').style.display = "none";
		document.getElementById('CMAAS').style.display = "none";
		document.getElementById('Actuarial').style.display = "none";
		document.getElementById('FRM').style.display = "block";
		document.getElementById('role').style.display = "none";
		document.getElementById('teamMetrics').style.display = "none";
		
		document.getElementById('overviewTab').className = "overlayMenuItem";
		document.getElementById('riskAssuranceTab').className = "overlayMenuItem";
		document.getElementById('CMAASTab').className = "overlayMenuItem";
		document.getElementById('ActuarialTab').className = "overlayMenuItem";
		document.getElementById('FRMTab').className = "overlayMenuItemOn";
		document.getElementById('roleTab2').className = "overlayMenuItem";
		document.getElementById('metricsTab').className = "overlayMenuItem";
	}
	
	
	else if (what == 'role2'){
		document.getElementById('overview').style.display = "none";
		document.getElementById('riskAssurance').style.display = "none";
		document.getElementById('CMAAS').style.display = "none";
		document.getElementById('Actuarial').style.display = "none";
		document.getElementById('FRM').style.display = "none";
		document.getElementById('role2').style.display = "block";
		document.getElementById('teamMetrics').style.display = "none";
		
		document.getElementById('overviewTab').className = "overlayMenuItem";
		document.getElementById('riskAssuranceTab').className = "overlayMenuItem";
		document.getElementById('CMAASTab').className = "overlayMenuItem";
		document.getElementById('ActuarialTab').className = "overlayMenuItem";
		document.getElementById('FRMTab').className = "overlayMenuItem";
		document.getElementById('roleTab2').className = "overlayMenuItemOn";
		document.getElementById('metricsTab').className = "overlayMenuItem";
	}
	
	
	else if (what == 'teamMetrics'){
		document.getElementById('overview').style.display = "none";
		document.getElementById('riskAssurance').style.display = "none";
		document.getElementById('CMAAS').style.display = "none";
		document.getElementById('Actuarial').style.display = "none";
		document.getElementById('FRM').style.display = "none";
		document.getElementById('role2').style.display = "none";
		document.getElementById('teamMetrics').style.display = "block";
		
		document.getElementById('overviewTab').className = "overlayMenuItem";
		document.getElementById('riskAssuranceTab').className = "overlayMenuItem";
		document.getElementById('CMAASTab').className = "overlayMenuItem";
		document.getElementById('ActuarialTab').className = "overlayMenuItem";
		document.getElementById('FRMTab').className = "overlayMenuItem";
		document.getElementById('roleTab2').className = "overlayMenuItem";
		document.getElementById('metricsTab').className = "overlayMenuItemOn";
	}
}

function switchTabs3(what){
	if (what == 'audit'){
		document.getElementById('audit').style.display = "block";
		document.getElementById('yourRole').style.display = "none";
		document.getElementById('metrics').style.display = "none";
		
		document.getElementById('auditTab').className = "overlayMenuItemOn";
		document.getElementById('role3Tab').className = "overlayMenuItem";
		document.getElementById('teamMetrics').className = "overlayMenuItem";
	}
	else if (what == 'yourRole'){
		document.getElementById('audit').style.display = "none";
		document.getElementById('yourRole').style.display = "block";
		document.getElementById('metrics').style.display = "none";
		
		document.getElementById('auditTab').className = "overlayMenuItem";
		document.getElementById('role3Tab').className = "overlayMenuItemOn";
		document.getElementById('teamMetrics').className = "overlayMenuItem";
	}
	else if (what == 'metrics'){
		document.getElementById('audit').style.display = "none";
		document.getElementById('yourRole').style.display = "none";
		document.getElementById('metrics').style.display = "block";
		
		document.getElementById('auditTab').className = "overlayMenuItem";
		document.getElementById('role3Tab').className = "overlayMenuItem";
		document.getElementById('teamMetrics').className = "overlayMenuItemOn";
	}
}

function firstRun(){
	/*
	var x = document.getElementsByClassName("tooltiptext");
	var i;
	for (i = 0; i < x.length; i++) {
		x[i].style.visibility = "visible";
	}
	*/
	
	
	setTimeout(function(){ 
		// $("#openingTitle").animate({opacity: '0'});
		
		$("#openingTitle").animate({top: '2%', left: '2%', width: '18%', height: '15%'});
		$("#darken").animate({opacity: '0'});
	}, 3000);
	
	setTimeout(function(){ 
		document.getElementById('darken').style.display = "none";
		// document.getElementById('openingTitle').style.display = "none";
		document.getElementById('openingTitle').style.zIndex = 40;
	}, 3500);
	
	setTimeout(function(){ 
		// $("#openingTitle").animate({opacity: '0'});
		
		$("#openingTitle").animate({top: '2%', left: '2%', width: '18%', height: '15%'});
		$("#darken").animate({opacity: '0'});
	}, 3000);
	
	setTimeout(function(){ 
		$("#bannerASRCanada").animate({opacity: '1'}, 1000);
		$("#bannerPwCCanada").animate({opacity: '1'}, 1500);
		$("#bannerASRGlobal").animate({opacity: '1'}, 2000);
		$("#bannerPwCGlobal").animate({opacity: '1'}, 2500);
	}, 6000);
}