var mongoose = require("mongoose");
var Feeling = require("./models/feeling");

var data = [
        {
            word: "sad",
            definition: "1. affected by unhappiness or grief; sorrowful or mournful.<br><br>2. expressive of or characterized by sorrow.", 
            category: "sad",
            partOfSpeech: "adjective"
        },
        {
            word: "sleepy",
            definition: "1. ready or inclined to sleep; drowsy.<br><br>2. of or showing drowsiness.<br><br>3. lethargic; sluggish.", 
            category: "sad",
            partOfSpeech: "adjective"
        },
        {
            word: "tired",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "exhausted",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "lazy",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "apathetic",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "nonchalant",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "bored",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "inferior",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "dissatisfied",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "lonely",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "incomplete",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "inadequate",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "distant",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "detached",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "self-pity",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "depressed",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "miserable",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "hopeless",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "closed",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "unhappy",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "ashamed",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "regretful",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "stupid",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "worried",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "lustful",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "guilty",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "timid",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "bashful",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "egotistical",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "mad",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "hurt",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "jealous",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "loss",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "shocked",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "hostile",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "selfish",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "greedy",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "domineering",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "scheming",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "conniving",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "two-faced",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "fiendish",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "angry",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "aggressive",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "frustrated",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "defensive",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "rage",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "furious",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "destructive",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "enraged",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "hysterical",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "hateful",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "irritated",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "agitated",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "cranky",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "overworked",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "critical",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "skeptical",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "gossipy",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "resentful",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "contemptuous",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "disgusted",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "suspicious",
            definition: "", 
            category: "mad",
            partOfSpeech: ""
        },
        {
            word: "scared",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "rejected",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "ignored",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "bewildered",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "humiliated",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "sulky",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "disappointed",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "confused",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "discouraged",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "forgetful",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "tempted",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "ambivalent",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "helpless",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "insignificant",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "martyred",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "worthless",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "overwhelmed",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "submissive",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "weak",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "inhibited",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "controlled",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "passive",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },
        {
            word: "pressured",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },        
        {
            word: "insecure",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },        
        {
            word: "afraid",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "frightened",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "vulnerable",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },      
        {
            word: "cautious",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "foolish",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "homesick",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "shy",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "anxious",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "uncomfortable",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "terrified",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "nervous",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "threatened",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "sick",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "nauseated",
            definition: "", 
            category: "scared",
            partOfSpeech: ""
        },       
        {
            word: "joyful",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "excited",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "daring",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "elated",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "boastful",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "ecstatic",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "sexy",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "sensual",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "seductive",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "irresistible",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "energetic",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "competitive",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "exercised",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "stimulating",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "playful",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "amused",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "tickled",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "eager",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "talkative",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "curious",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "mischievous",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "creative",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "extravagant",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "enhanced",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "inspired",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "funny",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "aware",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "delightful",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "delighted",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "impressed",
            definition: "", 
            category: "joyful",
            partOfSpeech: ""
        },       
        {
            word: "powerful",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "proud",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "cheerful",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "enthusiastic",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "euphoric",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "triumphant",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "bright",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "respected",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "satisfied",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "sophisticated",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "efficient",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "smug",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "assertive",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "adequate",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "strong",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "appreciated",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "valuable",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "supported",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "liked",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "accepted",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "hopeful",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "worthwhile",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "positive",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "expectant",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "surprised",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "esteem",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "important",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "intelligent",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "successful",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "noble",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "assured",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "superior",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "faithful",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "confident",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "open",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "helpful",
            definition: "", 
            category: "powerful",
            partOfSpeech: ""
        },       
        {
            word: "peaceful",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "nurturing",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "compassionate",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "thankful",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "grateful",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "kind",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "tender",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "trusting",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "nostalgic",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "sentimental",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "secure",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "safe",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "loving",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "serene",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "warm",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "infatuated",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "lovable",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "loved",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "glowing",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "affectionate",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "love-struck",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "intimated",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "responsive",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "close",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "involved",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "attached",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "thoughtful",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "pensive",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "relaxed",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "transcended",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "clarity",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "contented",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "satisfied",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "comfortable",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "relieved",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "happy",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },       
        {
            word: "mellow",
            definition: "", 
            category: "peaceful",
            partOfSpeech: ""
        },
        // FILLER WORDS--OUT OF ORDER
        {
            word: "abandoned",
            definition: "", 
            category: "sad",
            partOfSpeech: ""
        },
        {
            word: "afraid",
            definition: "", 
            category: "bad",
            partOfSpeech: ""
        },
        {
            word: "glorious",
            definition: "", 
            category: "good",
            partOfSpeech: ""
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