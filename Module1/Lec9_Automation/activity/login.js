const puppeteer=require("puppeteer");
const id="cohos67244@herrain.com";
const pass="12345678";
let tab;

let openPagePromise=puppeteer.launch({
    headless:false , 
    defaultViewport:null,
    args:["--start-maximized"],
    // executablePath:"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
});

openPagePromise.then(function(browserInstance){
    let pagesPromise= browserInstance.pages();
    return pagesPromise;
})
.then(function(pages){
    let page=pages[0];
    tab=page;
    let gotoPromise=tab.goto("https://www.hackerrank.com/auth/login")
    return gotoPromise;
})
.then(function(){
    let idPromise=tab.type("#input-1", id);
    return idPromise;
})
.then(function(){
    let passPromise=tab.type("#input-2", pass);
    return passPromise;
})
.then(function(){
    let loginPromise=tab.click(".ui-btn.ui-btn-large");
    return loginPromise;
})
.then (function(){
    let waitandClickPromise=waitAndclick("#base-card-1-link",tab);
    console.log("hii");
    return waitandClickPromise;
})
.then (function(){
    let waitandClickPromise=waitAndclick('a[data-attr1="warmup"]',tab);
    console.log("hii111");

    return waitandClickPromise;
})
.then (function(){
    let waitPromise=tab.waitForSelector(".js-track-click.challenge-list-item",{visible:true});
    return waitPromise;
})
.then(function(){
        let AllATagPromise=tab.$$(".js-track-click.challenge-list-item");
        
        return AllATagPromise;
    })
.then(function(allATags){

    let quesLinksPromise=[];
    for(let i=0;i<allATags.length;i++)
    {
        let quesPromise=tab.evaluate(function(elem){return elem.getAttribute("href"); }, allATags[i]);
        quesLinksPromise.push(quesPromise);
    }
    let combinedPromise=Promise.all(quesLinksPromise);
     return combinedPromise;
})

.then (function(allQuesLink){
    let oneQuesSolvePromise=solveQues(allQuesLink[0]);
    return oneQuesSolvePromise;
})
.then(function(){
    console.log("one Ques Solved!!!");
})
.then(function(){
    console.log("goto google successful!!!");
})
.catch(function(err){
    console.log("Inside catch");
    console.log(err);
})


function waitAndclick(selector) {
    return new Promise(function (scb, fcb) {
        let waitPromise=tab.waitForSelector(selector,{visible:true});
        waitPromise.then(function(){
            let clickPromise=tab.click(selector);
            return clickPromise;
        })
        .then(function(){
            scb();
        })
        .catch(function(){
            fcb();
        })
      
    });
  }

function solveQues(quesLink){
    return new Promise(function (scb, fcb) {
        let completeLink="https://www.hackerrank.com"+quesLink;
        let gotoPromise=tab.goto(completeLink);
        gotoPromise.then(function(){
            console.log("go to 1st ques");
        })
    
    })
    
}








// browserOpenp.then(function(browserInstance){
//     let pagesP=browserInstance.pages();
//     return pagesP;  //promise<Pending>
// })
// .then(function(pages){
//     let page=pages[0];
//     tab=page;
//     let goToP=tab.goto("https://www.hackerrank.com/auth/login");
//     return goToP;
// })
// .then(function(){
//     let idTypeP=tab.type("#input-1",id);
//     return idTypeP;
// })
// .then(function(){
//     let pwTypeP=tab.type("#input-2",id);
//     return pwTypeP;
// })
// .then(function(){
//     let loginP=tab.click(.ui-btn.ui-btn-large);
//     return loginP;
// })
// .then(function(){
//     console.log("login successful")
// })
// .catch(function(err){
//     console.log("Inside Catch")
//     console.log(err);
// })









