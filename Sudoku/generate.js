$(document).ready(function(){
    var allSudoku = [
        "000070040028000617000000090000000000000000000206004005182600073394000056765000000",
        "000040000490001000002000740200004008004000950007050000600480503548000000020005080",
        "061000000025000000003102000140060000000427005570010048007000030000090020250030000",
        "176080243028601957000270816201300000080000000000000000000000000000000000000000195",
        "300708500790300420050000873007043050200070600001080907006010000000000000000000000",
        "100782460000091780000060091000005000000000100200900008000179800000650007700000000",
        "960000000057090648040706000820000000430000007070000000012000000094000000086000513",
        "000000403003040200240308000000400062324896010650000048010034000000000000000000000",
        "600192030851437000923000147008700000700000600490020370000000000000000000000000000",
        "074000852090000407000847906407009000953000000200000000000304001000010000040000090",
        "500600000800000200670029400200006000900002000760000382096000007000007090457000000",
        "705000030803090000109000028007800000000000760900070084090040800070060250500000000",
        "891020000000000780400000190080000009735060000049080060018000000900012000004000001",
        "390000046000930200000000903000003090000079030030021400000000004000006001063150009",
        "003000150000000090080000400609751804817300065054000000000002589090000000000000000",
        "000007810005000970700008000508900040009000000000000009000400060200300157000021498",
        "039082000526934000000000293002000000190000000000008009080200005200010000900000062",
        "000302700000000004000000000000038000147265389003000000000007600000003000201689540",
        "105000080090040150008001092000000031700000040004010067007096000000000009000002370",
        "080500700000000605251000308005000000000004050000000470000002039000800067500396100",
        "700002000600000020832000007060008005008010000000096000083100060079000000006009874",
        "030521407050000002200060350000000070500000000020900006300700000075100000002340700",
        "000200005400006000900000000000000200200600000100020070324167859008940000500802000",
        "000900712004000309000010408040000500080501600000000200000106805001000906600000100",
        "070200060000000000000000008000060047000000000005020000326070459084002071000496830",
        "079028060000000000060000000006000000005001000000500000000000000102004080007010040",
        "684090000920400000070008000050000603008006000000000000000000000700004000000000002",
        "000000000092000000000203000905000000000000000000000000000000907009000000718609245",
        "050006000000082000000000000060050020005000000203000000070000209000000130000000068",
        "002000000001040070006000000005000001040500000000067000000100000000900028009000060",
        "064000000130006000000000600000030189000000000005000300607040000000000003003000000",
        "009000800007000900000900000400000100020400500700000009078000090006000000002000000",
        "000000700008300001004700020000140000000200007000000000000000000200006000010982000",
        "608000000002009000000008070800000000000000000005000000006000020000042690009036000",
        "974006000000309000500007900000800000000003000090475200000000000000000007000000000",
        "000020000096030020827009000080000004005201000600004000000010000000000000000000000",
        "000070315000509206050000700600000000000000000530000170205000000000000000000000000",
        "000400000043000005070000004000000040000000000200000870060008050000900061400000000",
        "003006000000000000000000000009003178010080039000010060100325000000000000000000000",
        "700000490405100007020000001000000500000206030600000200007000000030000000000000000",
        "742000000000040200000260741400000100000002000009400350000000000000000000000000000",
        "000579060000000200000000000001300050000001000200000003000900000004000900169000000",
        "000000000070000300000000004005000810200000003310000005700000000000000000980072500",
        "000020000030100000000000900897500016000000703300000000023400080000000000000000000",
        "000006000050203000006000030064005000000600009000047000000060002800000000600000000",
        "234198765000060004000000000000076002000000000000001050700000000000000000000000000",
        "100080000000090000000040008000002006000034000000060020000400000790610000000020000",
        "700050000000000070100090080000000000507080000000400002000010390010920000000000000",
        "000058000000046000000030600900000000000400000300800000000080003000091080700020000",
        "300002009400003000000800000703400200080020000005000090910000000800000000000000000",
      ];
      var sudoku = [
          [3, 9, 1, 2, 8, 5, 7, 4, 6],
          [5, 4, 6, 9, 3, 7, 2, 1, 8],
          [2, 7, 8, 6, 1, 4, 9, 5, 3],
          [7, 2, 4, 8, 6, 3, 1, 9, 5],
          [8, 1, 5, 4, 7, 9, 6, 3, 2],
          [6, 3, 9, 5, 2, 1, 4, 8, 7],
          [1, 5, 2, 7, 9, 8, 3, 6, 4],
          [9, 8, 7, 3, 4, 6, 5, 2, 1],
          [4, 6, 3, 1, 5, 2, 8, 7, 9]
      ]
      function generateSudoku(){
          var random = 0;
          random = Math.floor(Math.random() * allSudoku.length);
          for (var i = 0; i < 9; i++) {
              for (var j = 0; j < 9; j++) {
                  if (allSudoku[random][i * 9 + j] === "0"){
                    sudoku[i][j] = " ";
                  } else {
                    sudoku[i][j] = parseInt(allSudoku[random][i * 9 + j])
                  }
              }
          }
      }
      
      function displaySudoku(){
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 9; j++){
                $(`.b${i*9+j+1}`).text(sudoku[i][j])
            }
        }
      }
      
      $(".generer").click(function(){
          generateSudoku();
          displaySudoku();
      })

      function isRowValid(line, number){
        for (var i = 0; i < 9; i++){
            //  line = 0;
            console.log(sudoku[line][i])
        }
      }
      isRowValid(2)
});


/*
Javascript is a computer programming language that creates interactive effects within web browsers. In this project, you can change the animation of fall leaves. If you run into any problems or need to start over, don't sweat it! You can go back to the original URL to restart: https://goo.gl/aig3SM

Go ahead and play with Javascript! 
*/

/*
You can change the settings below to tweak the number of leaves, speed of falling, and tidy up a bit. Watch how your code changes the page!
*/

// <![CDATA[
    var speed=40; // Try out a lower number for a faster animation.
    var leaves=20; // This affects the number of leaves falling at a time. 
    var untidy=4; // How often do you want the leaves tidied up? Try a lower number and the clean up crew will come more often.
    
    /****************************\
    *Falling Autumn Leaves Effect*
    *  (c)2013 mf2fm web-design  *
    *  http://www.mf2fm.com/rv   *
    * DO NOT EDIT BELOW THIS BOX *
    \****************************/
    
    var boddie;
    var dx=new Array();
    var xp=new Array();
    var yp=new Array();
    var am=new Array();
    var dy=new Array();
    var le=new Array();
    var swide=480;
    var shigh=320;
    var sleft=0;
    var starty=0;
    var offset=0;
    var tidying=0;
    var deeex=0;
    var has_focus=true;
    var ie_version=(navigator.appVersion.indexOf("MSIE")!=-1)?parseFloat(navigator.appVersion.split("MSIE")[1]):false;
    var plow=document.createElement("img");
    plow.src='./img/gettyimages-97785967-2048x2048-removebg-preview.png';
    var leafy=new Array();
    var leaf_image=new Array();
    leaf_image[0]='./img/—Pngtree—bamboo green leaf illustration_4639548.png';
    leaf_image[1]='./img/—Pngtree—bamboo leaves leaves_4606297.png';
    leaf_image[2]='./img/—Pngtree—bamboo green leaf illustration_4639548.png';
    leaf_image[3]='./img/—Pngtree—green leaf plant green texture_5783966.png';
    
    function addLoadEvent(funky) {
      var oldonload=window.onload;
      if (typeof(oldonload)!='function') window.onload=funky;
      else window.onload=function() {
        if (oldonload) oldonload();
        funky();
      }
    }
    
    addLoadEvent(september_21);
    
    function september_21() { if (document.getElementById) {
      var i;
      if (ie_version) {
        document.onfocusin=function(){has_focus=true;};
        document.onfocusout=function(){has_focus=false;};
      } 
      else {
        window.onfocus=function(){has_focus=true;};
        window.onblur=function(){has_focus=false;};
      }
      window.onscroll=set_scroll;
      window.onresize=set_width;
      document.onmousemove=mouse;
      boddie=document.createElement("div");
      boddie.style.position="fixed";
      boddie.style.bottom="0px";
      boddie.style.left="0px";
      boddie.style.width="100%";
      boddie.style.overflow="visible";
      boddie.style.backgroundColor="transparent";
      boddie.style.pointerEvents="none";
      boddie.style.zIndex="0";
      document.body.insertBefore(boddie, document.body.firstChild); 
      set_width();
      plow.style.position="absolute";
      plow.style.overflow="hidden";
      plow.style.zIndex=9999;
      plow.style.bottom="0px";
      plow.style.left="-144px";
      boddie.appendChild(plow);
      for (i=0; i<leaves; i++) start_leaf(Math.random()*shigh*3/4);
      offset=0;
      setInterval("autumn_leaves()", speed);
    }}
    
    function start_leaf(whyp) {
      starty++;
      offset++;
      var f, size;
      size=start_fall(starty, whyp);
      f=document.createElement("img");
      f.src=leaf_image[starty%leaf_image.length];
      f.width=size;
      f.style.height="auto";
      f.style.position="absolute";
      f.style.zIndex=1000+starty;
      f.style.top=yp[starty]+"px";
      f.style.left=xp[starty]+"px";
      leafy[starty]=f;
      boddie.appendChild(f);
    }
      
    function start_fall(i, whyp) {
      var size=72-Math.floor(36*Math.random());
      dx[i]=Math.random();
      am[i]=8+Math.random()*24;
      dy[i]=1+Math.random()*2;
      xp[i]=Math.random()*(swide-size);
      yp[i]=whyp-size;
      le[i]='falling';
      return size;
    }
    
    function set_width() {
      var sw, sh;
      if (typeof(window.innerWidth)=='number' && window.innerWidth) {
        sw=window.innerWidth;
        sh=window.innerHeight;
      }
      else if (document.compatMode=="CSS1Compat" && document.documentElement && document.documentElement.clientWidth) {
        sw=document.documentElement.clientWidth;
        sh=document.documentElement.clientHeight; 
      }
      else {
        sw=document.body.clientWidth;
      sh=document.body.clientHeight;
      }
      if (sw && sh && has_focus) {
        swide=sw;
        shigh=sh;
      }
      boddie.style.height=shigh+"px";
    }
    
    function autumn_leaves() {
      var i;
      var c=0;
      for (i=0; i<starty; i++) {
        if (leafy[i] && le[i]!='tidying') {
        if (yp[i]>shigh || xp[i]>swide || xp[i]<-leafy[i].width) {
          if (offset>0) offset--;
          boddie.removeChild(leafy[i]);
          leafy[i]=false;
        }
        else if (yp[i]+untidy*offset/leaves<shigh-leafy[i].height/2) {
          yp[i]+=dy[i];
          dx[i]+=0.025+Math.random()/10;
          xp[i]+=deeex;
          leafy[i].style.top=(yp[i]-am[i]/2*Math.abs(Math.sin(dx[i])))+"px";
          leafy[i].style.left=(xp[i]+am[i]*Math.sin(dx[i]))+"px";
        }
        else if (le[i]=='falling') le[i]='landed';
      }
      if (leafy[i] && le[i]=='falling') c++;
      }
      if (c<leaves) start_leaf(0);
      if (offset>untidy*leaves && !tidying && Math.random()<.05) tidy_leaves();
    }
    
    function tidy_leaves() {
      var i;
      tidying=true;
      for (i=swide; i>=-146; i-=2) setTimeout('plough('+i+')', speed*(swide-i));
      setTimeout('tidying=false; offset=0;', speed*(swide-i));
    }
    
    function plough(x) {
      var i, p;
      plow.style.left=x+"px";
      for (i=0; i<starty; i++) {
        if (leafy[i] && le[i]!='falling') {
        p=xp[i]+leafy[i].width+am[i]*Math.sin(dx[i])-dy[i];
        if (p<0) {
          boddie.removeChild(leafy[i]);
        leafy[i]=false;
        }
        else if (p>x && p<x+3) {
          le[i]='tidying';
          xp[i]-=2;
          leafy[i].style.left=(xp[i]+am[i]*Math.sin(dx[i]))+"px";
          if (Math.random()<.1) {
          yp[i]-=1;
          leafy[i].style.top=(yp[i]-am[i]/2*Math.abs(Math.sin(dx[i])))+"px";
          }
        }
        else if (p>x+144 && yp[i]<shigh-leafy[i].height/2) {
            yp[i]+=dy[i];
        dx[i]+=0.02+Math.random()/10;
        leafy[i].style.top=(yp[i]-am[i]/2*Math.abs(Math.sin(dx[i])))+"px";
        leafy[i].style.left=(xp[i]+am[i]*Math.sin(dx[i]))+"px";
        }
      }
      }
    }
    
    function set_scroll() {
      if (typeof(self.pageXOffset)=='number' && self.pageXoffset) sleft=self.pageXOffset;
      else if (document.body && document.body.scrollLeft) sleft=document.body.scrollLeft;
      else if (document.documentElement && document.documentElement.scrollLeft) sleft=document.documentElement.scrollLeft;
      else sleft=0;
    }
    
    function mouse(e) {
      var x;
      if (e) x=e.pageX;
      else {
      x=event.x;
        set_scroll();
        x+=sleft;
      }
      deeex=has_focus?Math.floor(-1.5+4*(x-sleft)/swide):0;
    }
    // ]]>