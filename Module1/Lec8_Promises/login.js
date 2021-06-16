













browserOpenp.then(function(browserInstance){
    let pagesP=browserInstance.pages();
    return pagesP;  //promise<Pending>
})
.then(function(pages){
    let page=pages[0];
    tab=page;
    let goToP=tab.goto("https://www.hackerrank.com/auth/login");
    return goToP;
})
.then(function(){
    let idTypeP=tab.type("#input-1",id);
    return idTypeP;
})
.then(function(){
    let pwTypeP=tab.type("#input-2",id);
    return pwTypeP;
})
.then(function(){
    let loginP=tab.click(.ui-btn.ui-btn-large);
    return loginP;
})
.then(function(){
    console.log("login successful")
})
.catch(function(err){
    console.log("Inside Catch")
    console.log(err);
})
