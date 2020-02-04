// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "macFight.png",
    levels: {

        start: {
            message: "You have your first fight next week. How do you prepare?",
            choices: [
                {
                    text: "Train",
                    nextLevel: "fightTwo",
                },

                {
                    text: "Slack off",
                    nextLevel: "trash",
                },
            ]
        },

        trash: {
            background_image: "lose.png",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You lost to Glass Joe. You are an embarrassment to boxing. You are absolute garage to the point where you are not allowed to box anymore. YOU SUCK!",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

        fightTwo: {
            background_image: "sp.jpg",
            message: "You have defeated your first opponent. What will you do for your next fight?",
            choices: [
                {
                    text: "Train",
                    nextLevel: "finalFight",
                },
                {
                    text: "Retire",
                    nextLevel: "retire1",
                },
            ]
        },
        retire1: {
            background_image: "lose.png",
            message: "You retire after defeating Glass Joe saying you suffered brain damage. You are not absolute garbage but you are still bad especially since you got brain damage from Glass Joe. Maybe you were destined for retirement.",
            choices: [
                {
                    text: "Start Over",
                    nextLevel: "start"
                }
            ]
        },
        finalFight: {
            background_image: "download.jpeg",
            message: "This is it. Your final battle to win the championship. Are you ready?",
            choices: [
                {
                    text: "YES!",
                    nextLevel: "goodTry"
                },
                {
                    text: "Nah B!",
                    nextLevel: "smartMan"
                }
            ]
        },
        goodTry: {
            background_image: "sleep.png",
            message: "Well you had to fight Mike Tyson and ten seconds into the first round you were fast asleep. You've been forced to retire but it's ok. You survived longer than the last guy and he just walked out of the ring.",
            choices: [
                {
                    text: "Play Again",
                    nextLevel: "start"
                }
            ]
        },
        smartMan: {
            background_image: "MAC.png",
            message: "YOU ARE A VERY SMART MAN! You did your research and learned that you had to fight Mike Tyson and you ain't payed enough for that. So you retire early with a good career and avoid severe brain damage.",
            choices: [
                {
                    text: "Play Again",
                    nextLevel: "start"
                }
            ]
        }
    }
};
