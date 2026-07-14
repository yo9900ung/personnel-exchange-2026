"use strict";
const services=[
{"서비스ID":"A001","서비스명":"주민등록 발급 안내","안내분야":"민원","소관기관":"국토교통부","온라인안내":"가능","콜센터":"1374"},
{"서비스ID":"A002","서비스명":"전입신고 안내","안내분야":"민원","소관기관":"보건복지부","온라인안내":"가능","콜센터":"1352"},
{"서비스ID":"A003","서비스명":"인감증명 안내","안내분야":"민원","소관기관":"국토교통부","온라인안내":"가능","콜센터":"1313"},
{"서비스ID":"A004","서비스명":"민원접수 안내","안내분야":"민원","소관기관":"교육부","온라인안내":"가능","콜센터":"1341"},
{"서비스ID":"A005","서비스명":"정부24 이용 안내","안내분야":"민원","소관기관":"국토교통부","온라인안내":"가능","콜센터":"1356"},
{"서비스ID":"A006","서비스명":"기초연금 안내","안내분야":"복지","소관기관":"행정안전부","온라인안내":"불가","콜센터":"1386"},
{"서비스ID":"A007","서비스명":"복지급여 안내","안내분야":"복지","소관기관":"고용노동부","온라인안내":"가능","콜센터":"1319"},
{"서비스ID":"A008","서비스명":"장애인지원 안내","안내분야":"복지","소관기관":"보건복지부","온라인안내":"가능","콜센터":"1337"},
{"서비스ID":"A009","서비스명":"아동수당 안내","안내분야":"복지","소관기관":"지자체","온라인안내":"가능","콜센터":"1326"},
{"서비스ID":"A010","서비스명":"지방세 납부 안내","안내분야":"세금","소관기관":"보건복지부","온라인안내":"가능","콜센터":"1357"},
{"서비스ID":"A011","서비스명":"취득세 안내","안내분야":"세금","소관기관":"국토교통부","온라인안내":"가능","콜센터":"1341"},
{"서비스ID":"A012","서비스명":"재산세 안내","안내분야":"세금","소관기관":"지자체","온라인안내":"가능","콜센터":"1317"},
{"서비스ID":"A013","서비스명":"자동차등록 안내","안내분야":"교통","소관기관":"국토교통부","온라인안내":"가능","콜센터":"1399"},
{"서비스ID":"A014","서비스명":"운전면허 안내","안내분야":"교통","소관기관":"보건복지부","온라인안내":"불가","콜센터":"1357"},
{"서비스ID":"A015","서비스명":"주정차단속 안내","안내분야":"교통","소관기관":"국토교통부","온라인안내":"가능","콜센터":"1367"},
{"서비스ID":"A016","서비스명":"재난지원금 안내","안내분야":"재난","소관기관":"행정안전부","온라인안내":"불가","콜센터":"1356"},
{"서비스ID":"A017","서비스명":"대피소 안내","안내분야":"재난","소관기관":"국세청","온라인안내":"가능","콜센터":"1359"},
{"서비스ID":"A018","서비스명":"안전신고 안내","안내분야":"재난","소관기관":"국세청","온라인안내":"가능","콜센터":"1357"},
{"서비스ID":"A019","서비스명":"국민취업지원 안내","안내분야":"일자리","소관기관":"지자체","온라인안내":"가능","콜센터":"1386"},
{"서비스ID":"A020","서비스명":"구직급여 안내","안내분야":"일자리","소관기관":"국토교통부","온라인안내":"불가","콜센터":"1350"},
{"서비스ID":"A021","서비스명":"청년일자리 안내","안내분야":"일자리","소관기관":"지자체","온라인안내":"가능","콜센터":"1392"},
{"서비스ID":"A022","서비스명":"평생교육 안내","안내분야":"교육","소관기관":"국토교통부","온라인안내":"가능","콜센터":"1379"},
{"서비스ID":"A023","서비스명":"학자금 안내","안내분야":"교육","소관기관":"지자체","온라인안내":"가능","콜센터":"1324"},
{"서비스ID":"A024","서비스명":"교육비지원 안내","안내분야":"교육","소관기관":"행정안전부","온라인안내":"가능","콜센터":"1368"}
];
const searchInput=document.getElementById("service-search"),categorySelect=document.getElementById("category-filter"),resetButton=document.getElementById("reset-button"),tableBody=document.getElementById("service-table-body"),mobileList=document.getElementById("mobile-list"),resultCount=document.getElementById("result-count"),emptyState=document.getElementById("empty-state"),tableCard=document.getElementById("table-card");
const esc=v=>String(v).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;");
function highlight(text,keyword){const safe=esc(text);if(!keyword)return safe;const re=keyword.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return safe.replace(new RegExp(`(${re})`,"gi"),"<mark>$1</mark>")}
function filtered(){const k=searchInput.value.trim().toLocaleLowerCase("ko-KR"),c=categorySelect.value;return services.filter(s=>(!k||s["서비스명"].toLocaleLowerCase("ko-KR").includes(k))&&(c==="전체"||s["안내분야"]===c))}
function row(s,k){const cls=s["온라인안내"]==="가능"?"available":"unavailable";return `<tr><td class="service-name">${highlight(s["서비스명"],k)}</td><td><span class="category-badge">${esc(s["안내분야"])}</span></td><td>${esc(s["소관기관"])}</td><td><span class="online-badge ${cls}">${esc(s["온라인안내"])}</span></td><td class="call-center">${esc(s["콜센터"])}</td></tr>`}
function card(s,k){const cls=s["온라인안내"]==="가능"?"available":"unavailable";return `<article class="service-card"><div class="service-card-top"><h2>${highlight(s["서비스명"],k)}</h2><span class="category-badge">${esc(s["안내분야"])}</span></div><dl><dt>소관기관</dt><dd>${esc(s["소관기관"])}</dd><dt>온라인</dt><dd><span class="online-badge ${cls}">${esc(s["온라인안내"])}</span></dd><dt>콜센터</dt><dd>${esc(s["콜센터"])}</dd></dl></article>`}
function render(){const list=filtered(),k=searchInput.value.trim();tableBody.innerHTML=list.map(s=>row(s,k)).join("");mobileList.innerHTML=list.map(s=>card(s,k)).join("");resultCount.innerHTML=`현재 <strong>${list.length}</strong>건 표시 / 전체 ${services.length}건`;const ok=list.length>0;emptyState.classList.toggle("visible",!ok);tableCard.hidden=!ok;mobileList.hidden=!ok}
searchInput.addEventListener("input",render);categorySelect.addEventListener("change",render);resetButton.addEventListener("click",()=>{searchInput.value="";categorySelect.value="전체";render();searchInput.focus()});render();