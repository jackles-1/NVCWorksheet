var mongoose = require("mongoose");
var Feeling = require("./models/feeling");

var data = [
        {
            word: "sad",
            definition: "", 
            category: "sad"
        },
        {
            word: "sleepy",
            definition: "", 
            category: "sad"
        },
        {
            word: "tired",
            definition: "", 
            category: "sad"
        },
        {
            word: "exhausted",
            definition: "", 
            category: "sad"
        },
        {
            word: "lazy",
            definition: "", 
            category: "sad"
        },
        {
            word: "apathetic",
            definition: "", 
            category: "sad"
        },
        {
            word: "nonchalant",
            definition: "", 
            category: "sad"
        },
        {
            word: "bored",
            definition: "", 
            category: "sad"
        },
        {
            word: "inferior",
            definition: "", 
            category: "sad"
        },
        {
            word: "dissatisfied",
            definition: "", 
            category: "sad"
        },
        {
            word: "lonely",
            definition: "", 
            category: "sad"
        },
        {
            word: "incomplete",
            definition: "", 
            category: "sad"
        },
        {
            word: "inadequate",
            definition: "", 
            category: "sad"
        },
        {
            word: "distant",
            definition: "", 
            category: "sad"
        },
        {
            word: "detached",
            definition: "", 
            category: "sad"
        },
        {
            word: "self-pity",
            definition: "", 
            category: "sad"
        },
        {
            word: "depressed",
            definition: "", 
            category: "sad"
        },
        {
            word: "miserable",
            definition: "", 
            category: "sad"
        },
        {
            word: "hopeless",
            definition: "", 
            category: "sad"
        },
        {
            word: "closed",
            definition: "", 
            category: "sad"
        },
        {
            word: "unhappy",
            definition: "", 
            category: "sad"
        },
        {
            word: "ashamed",
            definition: "", 
            category: "sad"
        },
        {
            word: "regretful",
            definition: "", 
            category: "sad"
        },
        {
            word: "stupid",
            definition: "", 
            category: "sad"
        },
        {
            word: "worried",
            definition: "", 
            category: "sad"
        },
        {
            word: "lustful",
            definition: "", 
            category: "sad"
        },
        {
            word: "guilty",
            definition: "", 
            category: "sad"
        },
        {
            word: "timid",
            definition: "", 
            category: "sad"
        },
        {
            word: "bashful",
            definition: "", 
            category: "sad"
        },
        {
            word: "egotistical",
            definition: "", 
            category: "sad"
        },
        {
            word: "mad",
            definition: "", 
            category: "mad"
        },
        {
            word: "hurt",
            definition: "", 
            category: "mad"
        },
        {
            word: "jealous",
            definition: "", 
            category: "mad"
        },
        {
            word: "loss",
            definition: "", 
            category: "mad"
        },
        {
            word: "shocked",
            definition: "", 
            category: "mad"
        },
        {
            word: "hostile",
            definition: "", 
            category: "mad"
        },
        {
            word: "selfish",
            definition: "", 
            category: "mad"
        },
        {
            word: "greedy",
            definition: "", 
            category: "mad"
        },
        {
            word: "domineering",
            definition: "", 
            category: "mad"
        },
        {
            word: "scheming",
            definition: "", 
            category: "mad"
        },
        {
            word: "conniving",
            definition: "", 
            category: "mad"
        },
        {
            word: "two-faced",
            definition: "", 
            category: "mad"
        },
        {
            word: "fiendish",
            definition: "", 
            category: "mad"
        },
        {
            word: "angry",
            definition: "", 
            category: "mad"
        },
        {
            word: "aggressive",
            definition: "", 
            category: "mad"
        },
        {
            word: "frustrated",
            definition: "", 
            category: "mad"
        },
        {
            word: "defensive",
            definition: "", 
            category: "mad"
        },
        {
            word: "rage",
            definition: "", 
            category: "mad"
        },
        {
            word: "furious",
            definition: "", 
            category: "mad"
        },
        {
            word: "destructive",
            definition: "", 
            category: "mad"
        },
        {
            word: "enraged",
            definition: "", 
            category: "mad"
        },
        {
            word: "hysterical",
            definition: "", 
            category: "mad"
        },
        {
            word: "hateful",
            definition: "", 
            category: "mad"
        },
        {
            word: "irritated",
            definition: "", 
            category: "mad"
        },
        {
            word: "agitated",
            definition: "", 
            category: "mad"
        },
        {
            word: "cranky",
            definition: "", 
            category: "mad"
        },
        {
            word: "overworked",
            definition: "", 
            category: "mad"
        },
        {
            word: "critical",
            definition: "", 
            category: "mad"
        },
        {
            word: "skeptical",
            definition: "", 
            category: "mad"
        },
        {
            word: "gossipy",
            definition: "", 
            category: "mad"
        },
        {
            word: "resentful",
            definition: "", 
            category: "mad"
        },
        {
            word: "contemptuous",
            definition: "", 
            category: "mad"
        },
        {
            word: "disgusted",
            definition: "", 
            category: "mad"
        },
        {
            word: "suspicious",
            definition: "", 
            category: "mad"
        },
        {
            word: "scared",
            definition: "", 
            category: "scared"
        },
        {
            word: "rejected",
            definition: "", 
            category: "scared"
        },
        {
            word: "ignored",
            definition: "", 
            category: "scared"
        },
        {
            word: "bewildered",
            definition: "", 
            category: "scared"
        },
        {
            word: "humiliated",
            definition: "", 
            category: "scared"
        },
        {
            word: "sulky",
            definition: "", 
            category: "scared"
        },
        {
            word: "disappointed",
            definition: "", 
            category: "scared"
        },
        {
            word: "confused",
            definition: "", 
            category: "scared"
        },
        {
            word: "discouraged",
            definition: "", 
            category: "scared"
        },
        {
            word: "forgetful",
            definition: "", 
            category: "scared"
        },
        {
            word: "tempted",
            definition: "", 
            category: "scared"
        },
        {
            word: "ambivalent",
            definition: "", 
            category: "scared"
        },
        {
            word: "helpless",
            definition: "", 
            category: "scared"
        },
        {
            word: "insignificant",
            definition: "", 
            category: "scared"
        },
        {
            word: "martyred",
            definition: "", 
            category: "scared"
        },
        {
            word: "worthless",
            definition: "", 
            category: "scared"
        },
        {
            word: "overwhelmed",
            definition: "", 
            category: "scared"
        },
        {
            word: "submissive",
            definition: "", 
            category: "scared"
        },
        {
            word: "weak",
            definition: "", 
            category: "scared"
        },
        {
            word: "inhibited",
            definition: "", 
            category: "scared"
        },
        {
            word: "controlled",
            definition: "", 
            category: "scared"
        },
        {
            word: "passive",
            definition: "", 
            category: "scared"
        },
        {
            word: "pressured",
            definition: "", 
            category: "scared"
        },        
        {
            word: "insecure",
            definition: "", 
            category: "scared"
        },        
        {
            word: "afraid",
            definition: "", 
            category: "scared"
        },       
        {
            word: "frightened",
            definition: "", 
            category: "scared"
        },       
        {
            word: "vulnerable",
            definition: "", 
            category: "scared"
        },      
        {
            word: "cautious",
            definition: "", 
            category: "scared"
        },       
        {
            word: "foolish",
            definition: "", 
            category: "scared"
        },       
        {
            word: "homesick",
            definition: "", 
            category: "scared"
        },       
        {
            word: "shy",
            definition: "", 
            category: "scared"
        },       
        {
            word: "anxious",
            definition: "", 
            category: "scared"
        },       
        {
            word: "uncomfortable",
            definition: "", 
            category: "scared"
        },       
        {
            word: "terrified",
            definition: "", 
            category: "scared"
        },       
        {
            word: "nervous",
            definition: "", 
            category: "scared"
        },       
        {
            word: "threatened",
            definition: "", 
            category: "scared"
        },       
        {
            word: "sick",
            definition: "", 
            category: "scared"
        },       
        {
            word: "nauseated",
            definition: "", 
            category: "scared"
        },
        // FILLER WORDS--OUT OF ORDER
        {
            word: "abandoned",
            definition: "", 
            category: "ignored"
        },
        {
            word: "afraid",
            definition: "", 
            category: "bad"
        },
        {
            word: "glorious",
            definition: "", 
            category: "good"
        },
        {
            word: "joyful",
            definition: "", 
            category: "joyful"
        },
        {
            word: "powerful",
            definition: "", 
            category: "powerful"
        },
        {
            word: "peaceful",
            definition: "", 
            category: "peaceful"}
    ]
    
function seedDB(){
    Feeling.remove({}, function(err){
        if(err){
            console.log("Error in seeds.js remove.");
        }
        else{
            data.forEach(function(seed){
               Feeling.create(seed, function(err, feeling){
                   if(err){
                       console.log("Error in seeds.js forEach");
                   }
               }); 
            });
        }
    });
};

module.exports = seedDB;