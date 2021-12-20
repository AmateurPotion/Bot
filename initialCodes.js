import "index";

potion = {
    name: "PModule",
    update: function update() {
        potion.codes = org.jsoup.Jsoup.connect("https://raw.githubusercontent.com/AmateurPotion/Bot/master/main.js").get().text();

        eval("potion.run=" + potion.codes);
    },
    save: function save() {
        Database.writeObject(potion.name, potion);
    },
    init: function init() {
        const source = Database.readString(potion.name);
        eval(source);
    },
    codes: "",
    run: function run(args) {}
}

// minimal
potion = {
    name: "PModule",
    init: function init() {
        source = Database.readString(potion.name);
        eval(source);
    }
}