<template>
	<section>
		<div class="test">
			<span class="erode" style="font-size:40px;float:right">Welcome to ADEN Services</span>
		</div>
	</section>
</template>

<script>
	export default {
	}

</script>

<style scoped>
	.test {
		position:fixed;
		bottom: 80px;
		right: 30px;
		/*margin: 430px 0 0 0;*/
		width:100%;
		/*text-align: center;*/
		/*padding-right:20px*/
	}
	.threed{
		font-size: 45px;
		color: #fafafa;
		letter-spacing: 0;
		text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
	}
	.press {
		font-size: 45px;
		color: transparent;
		background-color : black;
		text-shadow : rgba(255,255,255,0.5) 0 5px 6px, rgba(255,255,255,0.2) 1px 3px 3px;
		-webkit-background-clip : text;
	}
	/*body{text-align:center}*/
	/*.no-area{position:absolute;width:0;height:0}*/
	/*h1{position:relative;letter-spacing:.07em;font-size:5em;font-weight:normal;margin:0 auto}*/
	/*@media print{h1{-webkit-filter:contrast()!*to print shadows*!}}*/
	/*h1:before,h1:after{position:absolute;top:0;left:0;right:0}*/

	.outlinedA{color:hsl(200,75%,35%);text-shadow:0 0 1px currentColor,
	-1px -1px 1px hsl(200,75%,45%),
	0 -1px 1px hsl(200,75%,40%),
	-1px 0 1px hsl(200,75%,35%),
	1px -1px 1px hsl(200,75%,35%),
	1px 0 1px hsl(200,75%,30%),
	1px 1px 1px hsl(200,75%,30%),
	0 1px 1px hsl(200,75%,30%),
	-1px 1px 1px hsl(200,75%,30%),

	-2px -2px 1px hsl(200,75%,75%),
	-2px -1px 1px hsl(200,75%,60%),
	-2px 0 1px hsl(200,75%,60%),
	-1px -2px 1px hsl(200,75%,50%),
	0 -2px 1px hsl(200,75%,50%),
	1px -2px 1px hsl(200,75%,50%),
	2px -2px 1px hsl(200,75%,35%),
	2px -1px 1px hsl(200,75%,35%),
	2px 0 1px hsl(200,75%,30%),
	2px 1px 1px hsl(200,75%,10%),
	2px 2px 1px hsl(200,75%,10%),
	1px 2px 1px hsl(200,75%,15%),
	0 2px 1px hsl(200,75%,10%),
	-1px 2px 1px hsl(200,75%,20%),
	-2px 2px 1px hsl(200,75%,20%),
	-2px 1px 1px hsl(200,75%,10%),

	-3px -3px 1px #006,
	-2px -3px 1px #006,
	-1px -3px 1px #006,
	0 -3px 1px #006,
	1px -3px 1px #006,
	2px -3px 1px #006,
	3px -3px 1px #006,
	3px -2px 1px #006,
	3px -1px 1px #006,
	3px 0 1px #006,
	3px 1px 1px #006,
	3px 2px 1px #006,
	3px 3px 2px #006,
	2px 3px 1px #006,
	1px 3px 1px #006,
	0 3px 1px #006,
	-1px 3px 1px #006,
	-2px 3px 1px #006,
	-3px 3px 1px #006,
	-3px 2px 1px #006,
	-3px 1px 1px #006,
	-3px 0 1px #006,
	-3px -1px 1px #006,
	-3px -2px 1px #006
	}
	/*.outlinedA:before{content:'OutlinedA';top:-4px;margin-left:-4px;color:transparent;text-shadow:1px 1px 3px hsl(200,75%,75%);opacity:.4}*/
	/*.mid:after{content:'OutlinedA';color:#000;opacity:.5;text-shadow:0 0 1px currentColor}*/

	.outlinedB{color:hsl(10,100%,40%);text-shadow:0 0 2px currentColor,
	0 -1px 1px hsl(40,100%,80%),
	-1px -1px 1px hsl(10,100%,40%),
	1px -1px 1px hsl(10,100%,40%),
	1px 0 1px hsl(10,100%,40%),
	0 -1px 1px hsl(10,100%,40%),
	0 1px 1px hsl(10,100%,20%),
	1px 1px 1px hsl(10,100%,40%),
	-1px 1px 1px hsl(10,100%,40%),

	-2px -2px 1px hsl(10,100%,20%),
	-1px -2px 1px hsl(10,100%,20%),
	0 -2px 1px hsl(10,100%,20%),
	1px -2px 1px hsl(10,100%,20%),
	2px -2px 1px hsl(10,100%,20%),
	2px -1px 1px hsl(10,100%,20%),
	2px 0 1px hsl(10,100%,20%),
	2px 1px 1px hsl(10,100%,20%),
	2px 2px 1px hsl(10,100%,20%),
	1px 2px 1px hsl(10,100%,20%),
	0 2px 3px hsl(10,100%,20%),
	-1px 2px 1px hsl(10,100%,20%),
	-2px 2px 1px hsl(10,100%,20%),
	-2px 1px 1px hsl(10,100%,20%),
	-2px 0 1px hsl(10,100%,20%),
	-2px -1px 1px hsl(10,100%,20%)
	}
	/*.outlinedB:before{content:'OutlinedB';top:-3px;color:transparent;text-shadow:0 1px 2px #ff6;opacity:.4}*/
	/*.outlinedB:after{content:'OutlinedB';top:.3em;color:transparent;text-shadow:0 0 6px rgba(0,0,0,.6),0 0 8px rgba(0,0,0,.8);transform:scaleY(.5);z-index:-1}*/

	.hsl{color:hsl(184,80%,25%);text-shadow:0 0 1px currentColor,
		/*highlight*/
	-1px -1px 1px hsl(184,80%,50%),
	0 -1px 1px hsl(184,80%,55%),
	1px -1px 1px hsl(184,80%,50%),
		/*light shadow*/
	1px 1px 1px hsl(184,80%,10%),
	0 1px 1px hsl(184,80%,10%),
	-1px 1px 1px hsl(184,80%,10%),
		/*outline*/
	-2px -2px 1px hsl(184,80%,15%),
	-1px -2px 1px hsl(184,80%,15%),
	0 -2px 1px hsl(184,80%,15%),
	1px -2px 1px hsl(184,80%,15%),
	2px -2px 1px hsl(184,80%,15%),
	2px -1px 1px hsl(184,80%,15%),
	2px 0 1px hsl(184,80%,15%),
	2px 1px 1px hsl(184,80%,15%),
	-2px 0 1px hsl(184,80%,15%),
	-2px -1px 1px hsl(184,80%,15%),
	-2px 1px 1px hsl(184,80%,15%),
		/*dark shadow*/
	2px 2px 2px hsl(184,80%,5%),
	1px 2px 2px hsl(184,80%,5%),
	0 2px 2px hsl(184,80%,5%),
	-1px 2px 2px hsl(184,80%,5%),
	-2px 2px 2px hsl(184,80%,5%)
	}

	.test{font-weight:bold;color:#000/*FF*/;text-shadow:0 0 1px currentColor,
	2px  0   1px #98c0e8,  0   2px  1px #083058,  2px  1px  1px #98c0e8,  1px  2px  1px #083058,  2px  2px  1px #487098,
	3px  1px 1px #98c0e8,  1px 3px  1px #083058,  3px  2px  1px #98c0e8,  2px  3px  1px #083058,  3px  3px  1px #487098,
	4px  2px 1px #98c0e8,  2px 4px  1px #083058,  4px  3px  1px #98c0e8,  3px  4px  1px #083058,  4px  4px  1px #487098,
	5px  3px 1px #98c0e8,  3px 5px  1px #083058,  5px  4px  1px #98c0e8,  4px  5px  1px #083058,  5px  5px  1px #487098,
	6px  4px 1px #98c0e8,  4px 6px  1px #083058,  6px  5px  1px #98c0e8,  5px  6px  1px #083058,  6px  6px  1px #487098,
	7px  5px 1px #98c0e8,  5px 7px  1px #083058,  7px  6px  1px #98c0e8,  6px  7px  1px #083058,  7px  7px  1px #487098,
	8px  6px 1px #98c0e8,  6px 8px  1px #083058,  8px  7px  1px #98c0e8,  7px  8px  1px #083058,  8px  8px  1px #487098,
	9px  7px 1px #98c0e8,  7px 9px  1px #083058,  9px  8px  1px #98c0e8,  8px  9px  1px #083058,  9px  9px  1px #487098,
	10px 8px 1px #98c0e8,  8px 10px 1px #083058,  10px 9px  1px #98c0e8,  9px  10px 1px #083058,  10px 10px 1px #487098,
	11px 9px 1px #98c0e8,  9px 11px 1px #083058,  11px 10px 1px #98c0e8,  10px 11px 1px #083058,  11px 11px 1px #487098,
	2px -1px 1px #666,
	3px  0   1px #666,
	4px  1px 1px #666,
	5px  2px 1px #666,
	6px  3px 1px #666,
	7px  4px 1px #666,
	8px  5px 1px #666,
	9px  6px 1px #666,
	10px 7px 1px #666,
	11px 8px 1px #666,
	12px 9px 1px #666,
	12px 10px 1px #666,
	11px 11px 1px #666
	}
	/*.test:before,.test:after{content:'Test'}*/
	.test:before{color:rgb(40,80,120);text-shadow:0 0 1px currentColor,-1px -1px 1px #000,0 -1px 1px #000,1px -1px 1px #000,1px 0 1px #000,1px 1px 1px #000,0 1px 1px #000,-1px 1px 1px #000,-1px 0 1px #000}
	.test:after{color:rgba(40,80,120,.1);text-shadow:-1px 0 1px rgba(40,80,120,.8),1px -1px 1px rgba(255,255,255,.8);-webkit-filter:url(#light-top);filter:url(#light-top)}

	.bottom{font-weight:bold;color:#000/*FF*/;text-shadow:0 0 1px currentColor,
	2px  0   1px #083058,  0   2px  1px #98c0e8,  2px  1px  1px #083058,  1px  2px  1px #98c0e8,  2px  2px  1px #487098,
	3px  1px 1px #083058,  1px 3px  1px #98c0e8,  3px  2px  1px #083058,  2px  3px  1px #98c0e8,  3px  3px  1px #487098,
	4px  2px 1px #083058,  2px 4px  1px #98c0e8,  4px  3px  1px #083058,  3px  4px  1px #98c0e8,  4px  4px  1px #487098,
	5px  3px 1px #083058,  3px 5px  1px #98c0e8,  5px  4px  1px #083058,  4px  5px  1px #98c0e8,  5px  5px  1px #487098,
	6px  4px 1px #083058,  4px 6px  1px #98c0e8,  6px  5px  1px #083058,  5px  6px  1px #98c0e8,  6px  6px  1px #487098,
	7px  5px 1px #083058,  5px 7px  1px #98c0e8,  7px  6px  1px #083058,  6px  7px  1px #98c0e8,  7px  7px  1px #487098,
	8px  6px 1px #083058,  6px 8px  1px #98c0e8,  8px  7px  1px #083058,  7px  8px  1px #98c0e8,  8px  8px  1px #487098,
	9px  7px 1px #083058,  7px 9px  1px #98c0e8,  9px  8px  1px #083058,  8px  9px  1px #98c0e8,  9px  9px  1px #487098,
	10px 8px 1px #083058,  8px 10px 1px #98c0e8,  10px 9px  1px #083058,  9px  10px 1px #98c0e8,  10px 10px 1px #487098,
	11px 9px 1px #083058,  9px 11px 1px #98c0e8,  11px 10px 1px #083058,  10px 11px 1px #98c0e8,  11px 11px 1px #487098,
	11px 11px 1px #666,
	11px 12px 1px #666,
	10px 12px 1px #666,
	9px 12px 1px #666,
	8px 11px 1px #666,
	7px 10px 1px #666,
	6px 9px 1px #666,
	5px 8px 1px #666,
	4px 7px 1px #666,
	3px 6px 1px #666,
	2px 5px 1px #666,
	1px 4px 1px #666,
	0 3px 1px #666,
	-1px 2px 1px #666,
	20px 8px 8px rgba(0,0,0,.7)}
	/*.bottom:before,.bottom:after{content:'Bottom Light'}*/
	.bottom:before{color:rgb(40,80,120);text-shadow:0 0 1px currentColor,-1px -1px 1px #003,0 -1px 1px #003,1px -1px 1px #003,1px 0 1px #003,1px 1px 1px #003,0 1px 1px #003,-1px 1px 1px #003,-1px 0 1px #003}
	.bottom:after{color:rgba(40,80,120,.1);text-shadow:1px -1px 1px rgba(40,80,120,.8),-1px 1px 1px rgba(255,255,255,.8)}

	.dilate{color:red;text-shadow:0 0 1px currentColor,-1px -1px 1px #300,0 -1px 1px #300,1px -1px 1px #300,1px 0 1px #300,1px 1px 1px #300,0 1px 1px #300,-1px 1px 1px #300,-1px 0 1px #300}
	/*.dilate:before,.dilate:after{content:'Dilate';z-index:-1}*/
	.dilate:before{-webkit-filter:url(#dilate10);filter:url(#dilate10)}
	/*.dilate:after{color:#ddd;-webkit-filter:url(#dilate6);filter:url(#dilate6)}*/

	.erode{color: rgba(255, 68, 60, 0.9);font-weight:bold;text-shadow:0 0 1px currentColor,1px 1px 1px #000,2px 2px 3px #000}
	/*.erode:after{content:'Erode';color:#fff;text-shadow:0 0 1px #fff;-webkit-filter:url(#erode2);filter:url(#erode2)}*/

	.distant1{
		color: rgba(255, 68, 60, 0.9);
		font-weight:bold;
		text-shadow:0 0 1px currentColor,-1px -1px 1px #4b0605,0 -1px 1px #4b0605,1px -1px 1px #4b0605,1px 0 1px #4b0605,1px 1px 1px #4b0605,0 1px 1px #4b0605,-1px 1px 1px #030,-1px 0 1px #4b0605}
	/*.distant1:after{content:'Distant Light';text-shadow:0 0 1px currentColor;-webkit-filter:url(#distant1);filter:url(#distant1)}*/

	/*.distant-top{font-weight:bold;color:orange;*/
		/*text-shadow:0 0 1px currentColor,-1px -1px 1px #030,0 -1px 1px #030,1px -1px 1px #030,1px 0 1px #030,1px 1px 1px #030,0 1px 1px #030,-1px 1px 1px #030,-1px 0 1px #030}*/
	/*.distant-top:after{content:'Distant Top';text-shadow:0 0 1px currentColor;-webkit-filter:url(#distant-top);filter:url(#distant-top)}*/

	/*.distant-front{font-weight:bold;color:#840;text-shadow:0 0 1px currentColor,-1px -1px 1px #000,0 -1px 1px #000,1px -1px 1px #000,1px 0 1px #000,1px 1px 1px #000,0 1px 1px #000,-1px 1px 1px #000,-1px 0 1px #000}*/
	/*.distant-front:after{content:'Distant Front';text-shadow:0 0 1px currentColor;-webkit-filter:url(#distant-front);filter:url(#distant-front)}*/

	/*.diff1{display:inline-block;font-weight:bold;color:#def;text-shadow:0 0 1px currentColor,-1px -1px 1px #000,0 -1px 1px #000,1px -1px 1px #000,1px 0 1px #000,1px 1px 1px #000,0 1px 1px #000,-1px 1px 1px #000,-1px 0 1px #000;-webkit-filter:url(#diff1);filter:url(#diff1);!*background:#def;padding:0 .2em*!}*/

	.bevel{font-family:cursive;color: rgba(255, 68, 60, 0.9);
		text-shadow:-1px -1px 1px #000,0 -1px 1px #000,
		1px -1px 1px #000,1px 0 1px #000,1px 1px 1px #000,
		0 1px 1px #000,-1px 1px 1px #000,-1px 0 1px #000,0 0 4px #000}
	.bevel,.bevel:after{-webkit-filter:url(#light2);filter:url(#light2)}
	/*.bevel:after{content:"Bevel";text-shadow:none;opacity:1}*/
	.darkbg .bevel{text-shadow:-1px -1px 1px #bbb,
    0 -1px 1px #bbb,1px -1px 1px #bbb,1px 0 1px #bbb,
    1px 1px 1px #bbb,0 1px 1px #bbb,-1px 1px 1px #bbb,
    -1px 0 1px #bbb,0 0 4px #bbb}
</style>