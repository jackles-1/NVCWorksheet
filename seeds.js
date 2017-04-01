var mongoose = require("mongoose");
var Feeling = require("./models/feeling");

// Possible groups: good, bad, sad, scared, ignored, peaceful

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
        {
            word: "joyful",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "excited",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "daring",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "elated",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "boastful",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "ecstatic",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "sexy",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "sensual",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "seductive",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "irresistible",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "energetic",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "competitive",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "exercised",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "stimulating",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "playful",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "amused",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "tickled",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "eager",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "talkative",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "curious",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "mischievous",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "creative",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "extravagant",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "enhanced",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "inspired",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "funny",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "aware",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "delightful",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "delighted",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "impressed",
            definition: "", 
            category: "joyful"
        },       
        {
            word: "powerful",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "proud",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "cheerful",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "enthusiastic",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "euphoric",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "triumphant",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "bright",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "respected",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "satisfied",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "sophisticated",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "efficient",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "smug",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "assertive",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "adequate",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "strong",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "appreciated",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "valuable",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "supported",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "liked",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "accepted",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "hopeful",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "worthwhile",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "positive",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "expectant",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "surprised",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "esteem",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "important",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "intelligent",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "successful",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "noble",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "assured",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "superior",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "faithful",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "confident",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "open",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "helpful",
            definition: "", 
            category: "powerful"
        },       
        {
            word: "peaceful",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "nurturing",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "compassionate",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "thankful",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "grateful",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "kind",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "tender",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "trusting",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "nostalgic",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "sentimental",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "secure",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "safe",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "loving",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "serene",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "warm",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "infatuated",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "lovable",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "loved",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "glowing",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "affectionate",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "love-struck",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "intimated",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "responsive",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "close",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "involved",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "attached",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "thoughtful",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "pensive",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "relaxed",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "transcended",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "clarity",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "contented",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "satisfied",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "comfortable",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "relieved",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "happy",
            definition: "", 
            category: "peaceful"
        },       
        {
            word: "mellow",
            definition: "", 
            category: "peaceful"
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
        }
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