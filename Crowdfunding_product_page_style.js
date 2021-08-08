const backerInfo=[
    {   
        id:"one",
        amount:'$89,914',
        amountDesc:'of $100,000 backed',
    },
    {
        id:"two",
        amount:'5,007',
        amountDesc:'total backers',
    },
    {
        id:"three",
        amount:'56',
        amountDesc:'days left',
    }
];
const pledgeInfo=[
    {
        id:"one",
        header:"Bamboo Stand",
        linkText:"Pledge $25 or more",
        pledgeDesc:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer memeber list",
        pledgeNum:"101",
        plegeBtn:"Select Reward"
    },
    {
        id:"two",
        header:"Black Edition Stand",
        linkText:"Pledge $75 or more",
        pledgeDesc:"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list.Shipping is included",
        pledgeNum:"64",
        plegeBtn:"Select Reward"
    },
    {
        id:"three",
        header:"Mahogany Special Edition",
        linkText:"Pledge $200 or more",
        pledgeDesc:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to ur Backer member list. Shipping is included",
        pledgeNum:"0",
        plegeBtn:"Out of stock"
    }
];
const modalPledge=[
    {
        id:"one",
        header:"Pledge with no reward",
        subHeader:"",
        min:0,
        max:0,
        amount:"",
        text:"",
        desc:"Choose to support us without a reward if you simply believe in our project,As a backer, you will be signed up to recieve products updates via email."
    },
    {
        id:"two",
        header:"Bamboo Stand",
        subHeader:"Pledge $25 or more",
        min:25,
        max:74,
        amount:"101",
        text:"left",
        desc:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer memeber list",
    },
    {
        id:"three",
        header:"Black Edition Stand",
        subHeader:"Pledge &75 or more",
        min:75,
        max:199,
        amount:"64",
        text:"left",
        desc:"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list.Shipping is included",
    },
    {
        id:"four",
        header:"Mahogany Special Edition",
        subHeader:"Pledge $200 or more",
        min:200,
        max:10000,
        amount:"0",
        text:"left",
        desc:"You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to ur Backer member list. Shipping is included"
    }
];
const backerNode=document.querySelector('.backer_section');
const closeBtn=document.querySelector('#close_svg');
const pledgeNode=document.querySelector('.pledge_offer');
const menuNode=document.querySelector('.modal_pledge_radio');
const modalShutterBtn=document.querySelector('.backer_btn');
const modalShutter=document.querySelector('.modal');
const heroBackground=document.querySelector('.hero');
const menuBtn=document.querySelector('#menu_bar');
const menuSection=document.querySelector('.media_menu_section');
const bookSVG=document.querySelector('#svg_color');
const bookFlag=document.querySelector('#bookflag');
const bookCircle=document.querySelector('#bookcircle');
const bookMarkerText=document.querySelector('.bookmark_text');
let bookmarkUpdate=true;
let menuBtnUpdate=true;
bookFlag.setAttribute('fill','#B1B1B1');
bookCircle.setAttribute('fill','#2F2F2F');
bookMarkerText.innerText="Bookmark";
backerInfo.map((data)=>{
    backerNode.innerHTML+=`
    <div class="backer_data ${data.id}">
        <div class="bf_amount">${data.amount}</div>
        <div class="bf_desc">${data.amountDesc}</div>
        <div class="bf_border_bt"></div>
    </div>
    `;
});
pledgeInfo.map((data)=>{
    pledgeNode.innerHTML+=`
    <div class="pledge_border">
            <div class="pledge_header">
            <div class="pledge_hr_${data.id}">${data.header}</div>
            <a class="pledge_link_${data.id}">${data.linkText}</a>
          </div>
          <div class="pledge_desc_${data.id}">
                ${data.pledgeDesc}
            </div>
          <div class="pledge_btn_sec">
            <div class="pledge_number_${data.id}">${data.pledgeNum}<span class="text">Left</span></div>
            <button class="pledge_reward_${data.id}">${data.plegeBtn}</button>
          </div>
    </div>
    `;
});
menuBtn.addEventListener('click',function(){
    menuBtnUpdate ? menuBtn.src='images/icon-close-menu.svg':menuBtn.src='images/icon-hamburger.svg';
    menuBtnUpdate ? menuSection.classList.add('media'):menuSection.classList.remove('media');
    menuBtnUpdate ? modalShutter.classList.add('hero_front'):modalShutter.classList.remove('hero_front');
    menuBtnUpdate ? heroBackground.classList.add('hero_side'):heroBackground.classList.remove('hero_side');
    menuBtnUpdate ? menuBtnUpdate=false: menuBtnUpdate=true;
});
bookMarkerText.addEventListener('click',markerUpdate);
bookSVG.addEventListener('click',markerUpdate);
function markerUpdate(){
    bookmarkUpdate ? bookFlag.setAttribute('fill','white'):bookFlag.setAttribute('fill','#B1B1B1');
    bookmarkUpdate ? bookCircle.setAttribute('fill','hsl(176, 72%, 28%)'):bookCircle.setAttribute('fill','#2F2F2F');
    bookmarkUpdate ? bookMarkerText.innerText="Bookmarked":bookMarkerText.innerText="Bookmark";
    bookmarkUpdate ? bookMarkerText.style.color="hsl(176, 72%, 28%)":bookMarkerText.style.color="hsl(0, 0%, 48%)";
    bookmarkUpdate ? bookmarkUpdate=false: bookmarkUpdate=true;
}
modalPledge.map((data)=>{
    menuNode.innerHTML+=`
     <div class="radio_section ${data.id}">
            <div class="radio">
              <input type="radio" name="modal_pledge_radio" id="radio">
              <div class="radio_section_info">
                <div class="radio_text">
                  <div class="radio_text_header">
                    <div class="radio_text_header_one">${data.header}</div>
                    <div class="radio_text_header_two">${data.subHeader}</div>
                  </div>
                  <div class="number_left">${data.amount}<span class="text">${data.text}</span></div>
                </div>
                <div class="radio_desc">${data.desc}
                </div>
                <div class="number_left2">${data.amount}<span class="text">${data.text}</span></div>
              </div>
            </div>
              <div class="radio_menu"></div>
            </div>
    `;
});
function shuttingDown(){
        modalShutter.classList.add('shut');
        modalShutter.classList.remove('hero_front');
        heroBackground.classList.remove('hero_side');
        document.querySelectorAll('.radio_menu').forEach((e)=>{
            e.innerHTML='';
        });
        document.querySelectorAll('.radio_section input[type="radio"]').forEach((e)=>{
            e.setAttribute('checked',false);
        });
        document.querySelectorAll('.radio_section input[type="radio"]').forEach((e)=>{
            e.checked=false;
        });
}
modalShutterBtn.addEventListener('click',function(){
    modalShutter.classList.remove('shut');
    modalShutter.classList.add('hero_front');
    heroBackground.classList.add('hero_side');
    closeBtn.addEventListener('click',shuttingDown);
});
const radioSelectors=document.querySelectorAll('.radio_section input[type="radio"]');
const radioHeaderSelectors=document.querySelectorAll('.radio_text_header_one');
radioSelectors[3].setAttribute('disabled',true);
radioSelectors.forEach((e)=>{
    e.addEventListener('click',(e2)=>{
        let allClassesDom=e.parentElement.parentElement.parentElement.classList[0];
        let classDom=e2.target.parentElement.parentElement.classList;
        console.log(classDom);
        let classPart=document.querySelector(`.${classDom[1]} .radio_menu`);
        let allClassesDomPart=document.querySelectorAll(`.${allClassesDom} .radio_menu`);
        allClassesDomPart.forEach((e)=>{
            e.innerHTML=``;
        });
        let min,max;
        modalPledge.filter((e)=>{
                if(e.id==classDom[1]){
                    min=`${e.min}`;
                    max=`${e.max}`;
                }
            });
        classPart.innerHTML=`<div class="modal_pledge_menu">
              <div class="modal_text">
                Enter your pledge
              </div>
              <div class="modal_pledge_menu_amount">
                <i class="fas fa-dollar-sign"></i><input type="number" min=${min} max=${max} class="pledge_amount">
                <button class="pledge_continue">Conitnue</button>
              </div>
            </div>`;
    });
});
radioHeaderSelectors.forEach((e)=>{
    e.addEventListener('click',(e2)=>{
        let headerSection=e2.target.parentElement.parentElement.parentElement;
        let headerSectionBorder=headerSection.parentElement.parentElement;
        let headerSectionAllRadio=headerSection.parentElement.parentElement.parentElement.classList[0];
        // console.log(headerSectionBorder);
        let headerSectionAllBorder=document.querySelectorAll(`.modal_pledge_radio .radio_section`);
        // console.log(headerSectionAllBorder);
        let headerSectionAllRadioDom=document.querySelectorAll(`.${headerSectionAllRadio} input[type="radio"]`);
        let headertTextSection=headerSection.parentElement.parentElement.classList[1];    
        let headerTextSectionDom=document.querySelector(`.${headertTextSection} .radio_menu`);
        let headerTextSectionAllDom=document.querySelectorAll(`.${headerSectionAllRadio} .radio_menu`);
        headerSectionAllRadioDom.forEach((e)=>{
            e.setAttribute('checked',false);
        });
        headerSection.previousElementSibling.checked=true;
        headerTextSectionAllDom.forEach((e)=>{
            e.innerHTML=``;
        });
         let min,max;
        modalPledge.filter((e)=>{
                if(e.id==headertTextSection){
                    min=`${e.min}`;
                    max=`${e.max}`;
                }
            });
            headerSectionAllBorder.forEach((e)=>{
                e.style.border=``;
            });
           headerSectionBorder.style.border="2px solid hsl(176, 50%, 47%)"; 
        if(headertTextSection=='one'){
            headerTextSectionDom.innerHTML=``;
            shuttingDown();
    heroBackground.classList.add('hero_side');
    document.querySelector('.congrat_section').classList.remove('shut');
    document.querySelector('.congrat_btn').addEventListener('click',function(){
    heroBackground.classList.remove('hero_side');
    document.querySelector('.congrat_section').classList.add('shut');
});
        }else{
            headerTextSectionDom.innerHTML=`<div class="modal_pledge_menu">
              <div class="modal_text">
                Enter your pledge
              </div>
              <div class="modal_pledge_menu_amount">
                <i class="fas fa-dollar-sign"></i><input type="number" min=${min} max=${max} class="pledge_amount">
                <button class="pledge_continue">Conitnue</button>
              </div>
            </div>`;
        }
    });
});
const pledgeBtn=document.querySelector('.modal_pledge_start_form');
pledgeBtn.addEventListener('submit',function(e){
    e.preventDefault();
    shuttingDown();
    heroBackground.classList.add('hero_side');
    document.querySelector('.congrat_section').classList.remove('shut');
    document.querySelector('.congrat_btn').addEventListener('click',function(){
    heroBackground.classList.remove('hero_side');
    document.querySelector('.congrat_section').classList.add('shut');
});
});