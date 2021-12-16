(...args) => {
    pass = true;
    securityCheck = (arg) => {
        return true;
    };

    for(let i = 0, n = args.length; i < n; i++) {
        if(pass) {
            pass = securityCheck(args[i])
        } else {
            break;
        }
    }

    if(pass) {
        msg.reply(args);
    } else {
        msg.reply("security false arguments...");
    }
}