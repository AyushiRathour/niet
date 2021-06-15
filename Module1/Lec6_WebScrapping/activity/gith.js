const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

const gitLink="https://github.com/topics";

request(gitLink , function(err , res , data){
    processHTML(data);
   
})




function processHTML(data){
    let ch = cheerio.load(data);

    let allATags = ch('a[data-hover="Scorecard"]');
   
    let topic=ch(".f3.lh-condensed.text-center.Link--primary.mb-0.mt-1").text();

    // console.log(topic.trim().length);
    topic.replace(" ",'');
    console.log(topic)
    for(let i=0;i<topic.length;i++){
        // topic.trim();
        // console.log(topic[i])
    }


    function topicsClick()
    {
        let Top=ch(".f3.color-text-secondary.text-normal.lh-condensed>.text-bold");
        console.log(Top)
        for(let i=0;i<10;i++)
        {


        }
    }
    topicsClick()
    
}


