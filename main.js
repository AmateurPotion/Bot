function Run() {
    pass = true;
    securityCheck = (arg) => {
        return true;
    };

    for(let i = 0, n = arguments.length; i < n; i++) {
        if(pass) {
            pass = securityCheck(arguments[i])
        } else {
            break;
        }
    }

    if(pass) {
        msg.reply(arguments);
    } else {
        msg.reply("security false arguments...");
    }
}