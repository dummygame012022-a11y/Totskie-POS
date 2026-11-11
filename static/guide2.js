(function(){
var L='tsk_guide_lang';
function lg(){try{return localStorage.getItem(L)==='tl'?1:0}catch(e){return 0}}
var H={
addCustomItemToCart:['Adds this custom item to the order.','Idinadagdag ang custom item sa order.'],
addStaff:['Adds a new staff member with a PIN.','Nagdadagdag ng bagong staff na may PIN.'],
applyManualOrPresetDiscount:['Applies the discount you typed or chose.','Inilalapat ang discount na tinype o pinili.'],
selectDiscountPreset:['Picks a ready-made discount.','Pumipili ng handang discount.'],
backspaceNumpad:['Deletes the last digit.','Binubura ang huling numero.'],
clearNumpad:['Clears the number you typed.','Binubura ang tinype na numero.'],
pressNumpad:['Types a number.','Nagta-type ng numero.'],
changeQty:['Adds or reduces the quantity of this item.','Nagdadagdag o nagbabawas ng dami ng item.'],
completeKotOrder:['Marks this kitchen order as done.','Minamarkahang tapos na ang order sa kusina.'],
toggleKdsStatus:['Changes the status of this kitchen order.','Binabago ang status ng order sa kusina.'],
confirmModifiers:['Saves the options and adds the item.','Sine-save ang options at idinadagdag ang item.'],
copyReceiptToClipboard:['Copies the receipt so you can paste it.','Kinokopya ang resibo para ma-paste.'],
printReceipt:['Prints the receipt.','Piprint ang resibo.'],
deleteCategory:['Deletes this category.','Binubura ang category na ito.'],
renameCategory:['Changes the name of this category.','Pinapalitan ang pangalan ng category.'],
saveRenameCat:['Saves the new category name.','Sine-save ang bagong pangalan ng category.'],
editProduct:['Edit this item, its price or stock.','I-edit ang item, presyo o stock.'],
promptDeleteProduct:['Deletes this item from the menu.','Binubura ang item sa menu.'],
promptVoidTransaction:['Cancels this sale. Use only for mistakes.','Kinakansela ang benta. Para lang sa pagkakamali.'],
filterCategory:['Shows only items in this category.','Ipinapakita lang ang items sa category na ito.'],
openCustomerModal:['Adds the customer name to the order.','Nilalagay ang pangalan ng customer sa order.'],
saveCustomerName:['Saves the customer name.','Sine-save ang pangalan ng customer.'],
openSalesHistoryModal:['Shows past sales and receipts.','Ipinapakita ang mga nakaraang benta at resibo.'],
removeGcashQr:['Removes the saved GCash QR.','Tinatanggal ang naka-save na GCash QR.'],
restoreHeldOrder:['Brings this saved order back to continue it.','Ibinabalik ang naka-save na order para ituloy.'],
saveOrderNote:['Saves the note on this order.','Sine-save ang note sa order.'],
toggleSidebar:['Opens or closes the side menu.','Binubuksan o isinasara ang side menu.'],
holdCurrentOrder:['Saves this order for later.','Sine-save ang order para ituloy mamaya.'],
clearCart:['Removes all items from this order.','Tinatanggal lahat ng item sa order.'],
openCustomModal:['Adds an item that is not on your menu.','Nagdadagdag ng item na wala sa menu.'],
setOrderType:['Sets Dine-In, Take-Out or Delivery.','Pinipili kung Dine-In, Take-Out o Delivery.'],
applyDiscount:['Applies a discount to the order.','Naglalagay ng discount sa order.'],
openNoteModal:['Adds a note to the order, like no onions.','Naglalagay ng note sa order, hal. walang sibuyas.'],
openPaymentModal:['Opens payment. Choose Cash or GCash, then confirm.','Binubuksan ang bayad. Piliin ang Cash o GCash, tapos i-confirm.'],
openZReportModal:['Shows the shift report and cash drawer.','Ipinapakita ang shift report at cash drawer.'],
openKdsModal:['Shows orders for the kitchen.','Ipinapakita ang mga order para sa kusina.'],
openItemManagerModal:['Add or edit items, prices and stock.','Magdagdag o mag-edit ng items, presyo at stock.'],
openHeldOrdersModal:['Shows saved orders so you can continue them.','Ipinapakita ang mga naka-save na order.'],
openSettingsModal:['Store name, tax, service charge and GCash QR.','Pangalan ng tindahan, tax, service charge at GCash QR.'],
tskGuide:['Opens this guide.','Binubuksan ang gabay na ito.'],
openStaffModal:['Manage staff PINs.','Ayusin ang PIN ng staff.'],
openDataModal:['Export sales data or reset the app.','I-export ang sales data o i-reset ang app.'],
logoutNow:['Logs you out.','Nag-log out.'],
switchPaymentMethod:['Choose how the customer pays: Cash or GCash.','Piliin kung paano magbabayad: Cash o GCash.'],
setExactCash:['Customer pays the exact amount.','Eksaktong bayad ang customer.'],
setPresetCash:['Quick button for the cash given.','Mabilis na button para sa perang ibinigay.'],
confirmAndProcessPayment:['Finishes the sale and records the payment.','Tinatapos ang benta at nire-record ang bayad.'],
exportSalesCsv:['Downloads your sales report as a file.','Dina-download ang sales report bilang file.'],
exportInventoryCsv:['Downloads your inventory list as a file.','Dina-download ang listahan ng inventory.'],
exportSalesRange:['Downloads sales for the dates you choose.','Dina-download ang benta sa piniling petsa.'],
saveStoreSettings:['Saves your store settings.','Sine-save ang store settings.'],
openAddProductForm:['Add a new item to your menu.','Magdagdag ng bagong item sa menu.'],
saveProductData:['Saves this item.','Sine-save ang item na ito.'],
toggleCategorySection:['Show or hide the categories.','Ipakita o itago ang mga category.'],
addNewCategory:['Adds a new category.','Nagdadagdag ng bagong category.'],
resetToDefaults:['Warning: resets the app data.','Babala: nire-reset ang data ng app.'],
clearSalesHistory:['Warning: deletes the sales history.','Babala: binubura ang sales history.']
};
var ui=[{tour:'Tour',learn:'Tap to learn',next:'Next',skip:'Skip',done:'Done',bar:'Tap any button to see what it does. Tap here to stop.',none:'Tap a button.',end:'Open the menu for items, reports and settings. Use Tap to learn on any button.'},
{tour:'Tour',learn:'I-tap para matuto',next:'Susunod',skip:'Laktawan',done:'Tapos',bar:'I-tap ang anumang button para malaman ang gamit. I-tap dito para huminto.',none:'Mag-tap ng button.',end:'Buksan ang menu para sa items, reports at settings. Gamitin ang I-tap para matuto sa kahit anong button.'}];
function U(){return ui[lg()]}
function T(n){var h=H[n];if(h)return h[lg()];if(/^(close|cancel)/i.test(n))return lg()?'Isinasara ang window.':'Closes this window.';return lg()?'Wala pang paliwanag.':'No explanation yet.'}
function mk(c){var d=document.createElement('div');d.style.cssText=c;document.body.appendChild(d);return d}
var bs='padding:7px 11px;border:0;border-radius:14px;background:#22c55e;color:#04130a;font-weight:bold;font-size:12px;margin-right:6px';
var tip=mk('position:fixed;left:12px;right:12px;z-index:10003;background:#0b1f15;color:#fff;border:2px solid #22c55e;border-radius:12px;padding:12px;font-size:15px;display:none');
var hl=mk('position:fixed;z-index:10002;pointer-events:none;border:3px solid #facc15;border-radius:8px;box-shadow:0 0 0 9999px rgba(0,0,0,.6);display:none');
var bar=mk('position:fixed;top:0;left:0;right:0;z-index:10004;background:#facc15;color:#000;padding:10px;text-align:center;font-weight:bold;font-size:14px;display:none');
var pill=mk('position:fixed;right:14px;bottom:74px;z-index:9999;display:flex');
var S=['toggleSidebar','holdCurrentOrder','clearCart','openCustomModal','setOrderType','applyDiscount','openNoteModal','openPaymentModal'],i=0,on=false,last=-1;
function vis(n){var a=document.querySelectorAll('[onclick*="'+n+'"]');for(var k=0;k<a.length;k++){var r=a[k].getBoundingClientRect();if(r.width>0&&r.height>0&&r.right>0&&r.left<innerWidth&&r.bottom>0&&r.top<innerHeight)return a[k]}return null}
function stop(){hl.style.display='none';tip.style.display='none';i=0}
function learn(f){on=f;bar.textContent=U().bar;bar.style.display=f?'block':'none';if(f)stop();else tip.style.display='none'}
function step(){
var u=U();
while(i<S.length&&!vis(S[i]))i++;
if(i>=S.length){hl.style.display='none';tip.style.top='auto';tip.style.bottom='90px';tip.innerHTML=u.end+'<div style="margin-top:8px"><button id="tn" style="'+bs+'">'+u.done+'</button></div>';tip.style.display='block';tip.querySelector('#tn').onclick=stop;return}
var el=vis(S[i]),r=el.getBoundingClientRect();
hl.style.display='block';hl.style.left=(r.left-4)+'px';hl.style.top=(r.top-4)+'px';hl.style.width=(r.width+8)+'px';hl.style.height=(r.height+8)+'px';
if(r.top>innerHeight/2){tip.style.bottom='auto';tip.style.top='12px'}else{tip.style.top='auto';tip.style.bottom='90px'}
tip.innerHTML=T(S[i])+'<div style="margin-top:8px"><button id="tn" style="'+bs+'">'+u.next+'</button><button id="ts" style="'+bs+'">'+u.skip+'</button></div>';
tip.style.display='block';
tip.querySelector('#tn').onclick=function(){i++;step()};
tip.querySelector('#ts').onclick=stop;
}
function lab(){var u=U();pill.innerHTML='<button id="pt" style="'+bs+'">&#9654; '+u.tour+'</button><button id="pl" style="'+bs+'">&#128070; '+u.learn+'</button>';
pill.querySelector('#pt').onclick=function(){learn(false);i=0;step()};
pill.querySelector('#pl').onclick=function(){learn(true)}}
lab();last=lg();function pv(){var o=false;try{o=localStorage.getItem('tsk_btn_off')==='1'}catch(e){}pill.style.display=o?'none':'flex'}pv();
setInterval(function(){if(last!==lg()){last=lg();lab()}pv()},1000);
bar.onclick=function(){learn(false)};
document.addEventListener('click',function(e){
if(!on||bar.contains(e.target)||pill.contains(e.target))return;
e.preventDefault();e.stopPropagation();
var el=e.target.closest('[onclick]'),a=el&&el.getAttribute('onclick'),n=a&&(a.match(/^\s*([A-Za-z_]+)/)||[])[1];
tip.style.top='auto';tip.style.bottom='90px';
tip.innerHTML=n?T(n):U().none;tip.style.display='block';
},true);
})();
