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
        amount:"",
        text:"",
        desc:"Choose to support us without a reward if you simply believe in our project,As a backer, you will be signed up to recieve products updates via email."
    },
    {
        id:"two",
        header:"Bamboo Stand",
        subHeader:"Pledge $25 or more",
        amount:"101",
        text:"left",
        desc:"You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer memeber list",
    },
    {
        id:"three",
        header:"Black Edition Stand",
        subHeader:"Pledge &75 or more",
        amount:"64",
        text:"left",
        desc:"You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list.Shipping is included",
    },
    {
        id:"four",
        header:"Mahogany Special Edition",
        subHeader:"Pledge $200 or more",
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
const bookSVG=document.querySelector('#svg_color');
const bookFlag=document.querySelector('#bookflag');
const bookCircle=document.querySelector('#bookcircle');
const bookMarkerText=document.querySelector('.bookmark_text');
let bookmarkUpdate=false;
bookFlag.setAttribute('fill','#B1B1B1');
bookCircle.setAttribute('fill','#2F2F2F');
bookMarkerText.innerText="Bookmark";
backerInfo.map((data)=>{
    backerNode.innerHTML+=`
    <div class="backer_data ${data.id}">
        <div class="bf_amount">${data.amount}</div>
        <div class="bf_desc">${data.amountDesc}</div>
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
              </div>
            </div>
        <div class="radio_menu"></div>
    `;
});
modalShutterBtn.addEventListener('click',function(){
    modalShutter.classList.remove('shut');
    closeBtn.addEventListener('click',function(){
        modalShutter.classList.add('shut');
    });
});
document.querySelector('.four input[type="radio"]').setAttribute('disabled','true');
const radioSelectors=document.querySelectorAll('.radio_section input[type="radio"]');
radioSelectors.forEach((e)=>{
    e.addEventListener('click',(e2)=>{
        let classes=e2.target.parentElement.classList;
        let classesPart=document.querySelector(`.${classes[1]}`);
        console.log(classesPart);
        console.log(classes[1]);
        // classesPart=`<div class="modal_pledge_menu">
        //       <div class="modal_text">
        //         Enter your pledge
        //       </div>
        //       <div class="modal_pledge_menu_amount">
        //         <i class="fas fa-dollar-sign"></i><input type="text" class="pledge_amount">
        //         <button class="pledge_continue">Conitnue</button>
        //       </div>
        //     </div>`;
    });
});