(function(){
var K='tsk_guide_off',HB='tsk_btn_off',L='tsk_guide_lang',D={
en:{t:'How to use',s:['Log in with your PIN or account.','Tap items to add them to the order.','Choose payment: Cash or GCash.','Tap Pay to finish the sale.','Admin: manage items, stock and reports.'],o:'Show this when I open the app',c:'Close',h:'Show guide buttons'},
tl:{t:'Paano gamitin',s:['Mag-log in gamit ang PIN o account.','I-tap ang mga item para idagdag sa order.','Piliin ang bayad: Cash o GCash.','I-tap ang Pay para tapusin ang benta.','Admin: ayusin ang items, stock at reports.'],o:'Ipakita ito kapag binuksan ang app',c:'Isara',h:'Ipakita ang mga guide button'}};
function g(k){try{return localStorage.getItem(k)}catch(e){return null}}
function p(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var st=document.createElement('style');
st.textContent='@keyframes tskp{0%{box-shadow:0 0 0 0 rgba(250,204,21,.8)}100%{box-shadow:0 0 0 18px rgba(250,204,21,0)}}';
document.head.appendChild(st);
var b=document.createElement('button');
b.innerHTML='&#128161;';b.setAttribute('aria-label','Guide');
b.style.cssText='position:fixed;right:14px;bottom:14px;z-index:9999;width:52px;height:52px;border-radius:50%;border:0;background:#facc15;font-size:26px;animation:tskp 1.6s infinite';
var m=document.createElement('div');
m.style.cssText='display:none;position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.7);align-items:center;justify-content:center';
var bx=document.createElement('div');
bx.style.cssText='background:#0b1f15;color:#fff;border:2px solid #22c55e;border-radius:16px;padding:18px;width:90%;max-width:340px;max-height:85%;overflow:auto;font-size:15px';
m.appendChild(bx);
function R(){
var l=g(L)||'en',d=D[l];
bx.innerHTML='<div style="font-size:19px;font-weight:bold;margin-bottom:8px">&#128161; '+d.t+'</div>'
+'<div style="margin-bottom:8px"><button data-l="en" style="padding:4px 12px;margin-right:6px">English</button><button data-l="tl" style="padding:4px 12px">Tagalog</button></div>'
+'<ol style="padding-left:20px;line-height:1.6">'+d.s.map(function(x){return'<li>'+x+'</li>'}).join('')+'</ol>'
+'<label style="display:block;margin:10px 0;font-size:13px"><input type="checkbox" id="tskc" '+(g(K)==='1'?'':'checked')+'> '+d.o+'</label>'
+'<label style="display:block;margin:10px 0;font-size:13px"><input type="checkbox" id="tskh" '+(g(HB)==='1'?'':'checked')+'> '+d.h+'</label>'
+'<button id="tskx" style="width:100%;padding:10px;border:0;border-radius:10px;background:#22c55e;color:#04130a;font-weight:bold">'+d.c+'</button>';
bx.querySelectorAll('[data-l]').forEach(function(e){e.onclick=function(){p(L,e.getAttribute('data-l'));R()}});
bx.querySelector('#tskc').onchange=function(){p(K,this.checked?'0':'1')};
bx.querySelector('#tskh').onchange=function(){p(HB,this.checked?'0':'1');ap()};
bx.querySelector('#tskx').onclick=function(){m.style.display='none'};
}
function ap(){b.style.display=g(HB)==='1'?'none':''}ap();
b.onclick=function(){R();m.style.display='flex'};
window.tskGuide=b.onclick;
document.body.appendChild(b);document.body.appendChild(m);
if(g(K)!=='1')b.onclick();
})();
