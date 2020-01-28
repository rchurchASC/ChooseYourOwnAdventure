// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
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
            background_image: "fire.gif",
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
            message: "You retire after defeating Glass Joe saying you suffered brain damage. You are not absolute garbage but you are still bad especially since you got brain damage from Glass Joe. Maybe you were destined for retirement."
        },
    }
};
