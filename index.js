function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToHeadphonedRoommate(string) {
    switch (string) {
        case whisper(string):
            return "I can't hear you!";
        case shout(string):
            return "YES INDEED!";
        case "Let's have dinner together!":
            return "I would love to!";
        default:
            return "undefined";
    }
}

module.exports = {
    shout,
    whisper,
    logShout,
    logWhisper,
    sayHiToHeadphonedRoommate,
};
