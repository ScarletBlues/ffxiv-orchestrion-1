import config from 'ember-get-config';

export default function() {
    this.namespace = config.baseURL;

    this.get('tracks', function() {

        var data = {
            data: [
                {id:1,
                 type:'tracks',
                 attributes: {name:"Prelude - Discoveries", type: "Achievement", source:"Reward for unlocking 10 songs"}},
                {id:2,
                 type:'tracks',
                 attributes: {name:"Torn from the Heavens", type: "Gold Saucer", source:"50,000 MGP"}},
                {id:3,
                 type:'tracks',
                 attributes: {name:"A Cold Wind", type: "Gold Saucer", source:"5,000 MGP"}},
                {id:4,
                 type:'tracks',
                 attributes: {name:"Contention", type: "Purchased", source:"Hismena at Idyllshire (5,5) - 750 esoterics"}},
                {id:5,
                 type:'tracks',
                 attributes: {name:"Wailers and Waterwheels", type:"Purchased", source:"Maisenta at New Gridania (11,11) - 5,000 gil"}},
                {id:6,
                 type:'tracks',
                 attributes: {name:"I Am the Sea", type:"Purchased", source:"Bango Zango at Limsa Lominsa Lower Decks (10,11) - 5,000 gil"}},
                {id:7,
                 type:'tracks',
                 attributes: {name:"A New Hope", type:"Purchased", source:"Roarich at Ul'dah Steps of Nald (10,9) - 5,000 gil"}},
                {id:8,
                 type:'tracks',
                 attributes: {name:"Solid", type:"Purchased", source:"Frine at The Pillars (6,9) - 5,000 gil"}},
                {id:9,
                 type:'tracks',
                 attributes: {name:"The Waking Sands", type:"Purchased", source:"Haneko Burneko at The Waking Sands (6,5) - 5,000 gil"}},
                {id:10,
                 type:'tracks',
                 attributes: {name:"Painted Foothills", type:"Crafted", source:"ALC Lv60 (Master III) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Mythrite Ink, 1x Faded Copy of Painted Foothills (drops from hunts in the Dravanian Forelands)"}},
                {id:11,
                 type:'tracks',
                 attributes: {name:"Lost in the Clouds", type:"Crafted", source:"ALC Lv60 (Master III) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Mythrite Ink, 1x Faded Copy of Lost in the Clouds (drops from hunts in the Sea of Clouds)"}},
                {id:12,
                 type:'tracks',
                 attributes: {name:"Another Round", type:"Crafted", source:"ALC Lv50 - 1x Blank Grade 1 Orchestrion Roll, 1x Enchanted Mythril Ink, 1x Faded Copy of Another Round (bought from Auriana at Mor Dhona (22,6) for 1,000 poetics)"}},
                {id:13,
                 type:'tracks',
                 attributes: {name:"Agent of Inquiry", type:"Gold Saucer", source:"30,000 MGP"}},
                {id:14,
                 type:'tracks',
                 attributes: {name:"Four-sided Circle", type:"Gold Saucer", source:"10,000 MGP"}},
                {id:15,
                 type:'tracks',
                 attributes: {name:"Sport of Kings", type:"Gold Saucer", source:"15,000 MGP"}},
                {id:16,
                 type:'tracks',
                 attributes: {name:"The Only Path", type:"Crafted", source:"ALC Lv50 - 1x Blank Grade 1 Orchestrion Roll, 1x Enchanted Electrum Ink, 1x Faded Copy of The Only Path (drops from any treasure maps)"}},
                {id:17,
                 type:'tracks',
                 attributes: {name:"A World Apart", type:"Crafted", source:"ALC Lv50 - 1x Blank Grade 1 Orchestrion Roll, 1x Enchanted Electrum Ink, 1x Faded Copy of A World Apart (supposedly from airship voyages)"}},
                {id:18,
                 type:'tracks',
                 attributes: {name:"When a Tree Falls", type:"Trade", source:"Amber Trader at Foundation (10,10) - 10x Amber-encased Vilekin"}},
                {id:19,
                 type:'tracks',
                 attributes: {name:"Tenacity", type:"Trade", source:"Amber Trader at Foundation (10,10) - 5x Amber-encased Vilekin"}},
                {id:20,
                 type:'tracks',
                 attributes: {name:"Blood for Blood", type:"Crafted", source:"ALC Lv60 (Master III) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Hardsilver Ink, 1x Faded Copy of Blood for Blood (bought from Storm Sergeant at Wolves' Den Pier for 5,000 wolf marks)"}},
                {id:21,
                 type:'tracks',
                 attributes: {name:"Starved", type:"Crafted", source:"ALC Lv60 (Master III) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Hardsilver Ink, 1x Faded Copy of Starved (bought from Storm Sergeant at Wolves' Den Pier for 10,000 wolf marks)"}},
                {id:22,
                 type:'tracks',
                 attributes: {name:"A Light in the Storm", type:"Crafted", source:"ALC Lv50 (Master I) - 1x Blank Grade 1 Orchestrion Roll, 1x Enchanted Gold Ink, 1x Faded Copy of A Light in the Storm (drops from Pharos Sirius (incl. HM))"}},
                {id:23,
                 type:'tracks',
                 attributes: {name:"The Dark's Embrace", type:"Crafted", source:"ALC Lv30 - 1x Blank Grade 1 Orchestrion Roll, 1x Enchanted Silver Ink, 1x Faded Copy of The Dark's Embrace (drops from Copperbell (Hard))"}},
                {id:24,
                 type:'tracks',
                 attributes: {name:"The Scars of Battle", type:"Crafted", source:"ALC Lv50 (Master I) - 1x Blank Grade 1 Orchestrion Roll, 1x Enchanted Gold Ink, 1x Faded Copy of The Scars of Battle (drops from The Lost City of Amdapor (incl. HM))"}},
                {id:25,
                 type:'tracks',
                 attributes: {name:"Dark Vows", type:"Crafted", source:"ALC Lv30 - 1x Blank Grade 1 Orchestrion Roll, 1x Enchanted Silver Ink, 1x Faded Copy of Dark Vows (drops from Tam-Tara (Hard))"}},
                {id:26,
                 type:'tracks',
                 attributes: {name:"Riptide", type:"Crafted", source:"ALC Lv30 - 1x Blank Grade 1 Orchestrion Roll, 1x Enchanted Silver Ink, 1x Faded Copy of Riptide (drops from Sastasha (Hard))"}},
                {id:27,
                 type:'tracks',
                 attributes: {name:"Imagination", type:"Crafted", source:"ALC Lv60 (Master III) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Hardsilver Ink, 1x Faded Copy of Imagination (drops from The Aetherochemical Research Facility)"}},
                {id:28,
                 type:'tracks',
                 attributes: {name:"Down the Up Staircase", source:"ALC Lv60 (Master III ★) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Aurum Regis Ink, 1x Faded Copy of Down the Up Staircase (drops from The Antitower)"}},
                {id:29,
                 type:'tracks',
                 attributes: {name:"Ultima", type: "Achievement", source:"Achievement reward for unlocking 30 songs"}},
                {id:30,
                 type:'tracks',
                 attributes: {name:"The Maker's Ruin", type:"Crafted", source:"ALC Lv50 (Master I) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Rose Gold Ink, 1x Faded Copy of The Maker's Ruin (drops from Ultima HM)"}},
                {id:31,
                 type:'tracks',
                 attributes: {name:"Primal Judgment", type:"Crafted", source:"ALC Lv50 (Master I) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Rose Gold Ink, 1x Faded Copy of Primal Judgment (drops from Ifrit EX)"}},
                {id:32,
                 type:'tracks',
                 attributes: {name:"Fallen Angel", type:"Crafted", source:"ALC Lv50 (Master I) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Rose Gold Ink, 1x Faded Copy of Fallen Angel (drops from Garuda EX)"}},
                {id:33,
                 type:'tracks',
                 attributes: {name:"Under the Weight", type:"Crafted", source:"ALC Lv50 (Master I) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Rose Gold Ink, 1x Faded Copy of Under the Weight (drops from Titan EX)"}},
                {id:34,
                 type:'tracks',
                 attributes: {name:"Heroes", type:"Crafted", source:"ALC Lv60 (Master III ★) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Aurum Regis Ink, 1x Faded Copy of Heroes (drops from Thordan EX)"}},
                {id:35,
                 type:'tracks',
                 attributes: {name:"Fiend", type:"Crafted", source:"ALC Lv60 (Master III ★) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Aurum Regis Ink, 1x Faded Copy of Fiend (drops from Sephirot EX)"}},
                {id:36,
                 type:'tracks',
                 attributes: {name:"Hubris", type:"Crafted", source:"ALC Lv50 (Master II) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Platinum Ink, 1x Faded Copy of Hubris (drops from Labyrinth of the Ancients)"}},
                {id:37,
                 type:'tracks',
                 attributes: {name:"Tumbling Down", type:"Crafted", source:"ALC Lv50 (Master II) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Platinum Ink, 1x Faded Copy of Tumbling Down (drops from Labyrinth of the Ancients)"}},
                {id:38,
                 type:'tracks',
                 attributes: {name:"Now I Know the Truth", type:"Crafted", source:"ALC Lv50 (Master II) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Platinum Ink, 1x Faded Copy of Now I Know the Truth (drops from Syrcus Tower)"}},
                {id:39,
                 type:'tracks',
                 attributes: {name:"Out of the Labyrinth", type:"Crafted", source:"ALC Lv50 (Master II) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Platinum Ink, 1x Faded Copy of Out of the Labyrinth (drops from Syrcus Tower)"}},
                {id:40,
                 type:'tracks',
                 attributes: {name:"Blind to the Dark", type:"Crafted", source:"ALC Lv50 (Master II) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Platinum Ink, 1x Faded Copy of Blind to the Dark (drops from World of Darkness))"}},
                {id:41,
                 type:'tracks',
                 attributes: {name:"Hunger", type:"Crafted", source:"ALC Lv50 (Master II) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Platinum Ink, 1x Faded Copy of Hunger (drops from World of Darkness)"}},
                {id:42,
                 type:'tracks',
                 attributes: {name:"Eternal Wind", type:"Crafted", source:"ALC Lv60 (Master III ★) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Aurum Regis Ink, 1x Faded Copy of Tumbling Down, 1x Faded Copy of Out of the Labyrinth, 1x Faded Copy of Hunger)"}},
                {id:43,
                 type:'tracks',
                 attributes: {name:"Thunderer", type:"Crafted", source:"ALC Lv50 (Master II) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Platinum Ink, 1x Faded Copy of Thunderer (drops from BCoB Turn 5)"}},
                {id:44,
                 type:'tracks',
                 attributes: {name:"Rise of the White Raven", type:"Crafted", source:"ALC Lv50 (Master II) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Platinum Ink, 1x Faded Copy of Rise of the White Raven (drops from SCoB Turn 4)"}},
                {id:45,
                 type:'tracks',
                 attributes: {name:"From the Ashes", type:"Crafted", source:"ALC Lv50 (Master II) - 1x Blank Grade 2 Orchestrion Roll, 1x Enchanted Platinum Ink, 1x Faded Copy of From the Ashes (drops from FCoB Turn 3)"}},
                {id:46,
                 type:'tracks',
                 attributes: {name:"Answers", type:"Crafted", source:"ALC Lv60 (Master IV ★★ Specialist-only) - 1x Blank Grade 3 Orchestrion Roll, 1x Enchanted Aurum Regis Ink, 1x Faded Copy of Thunderer, 1x Faded Copy of Rise of the White Raven, 1x Faded Copy of Answers (drops from FCoB Turn 4)"}},
                {id:47,
                 type:'tracks',
                 attributes: {name:"Pa-Paya", type:"Quest", source:"Speculated to be from seasonal event"}}

            ]
        };

        data.data = data.data.map(function(track){
            var obj = track;
            obj["attributes"]["iscollected"] = localStorage.getItem("track-"+track.id) === "true";

            return obj;

        });

        return data;
    });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
