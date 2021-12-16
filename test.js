potion.pullRepo = () => {   
    potion.codes = org.jsoup.Jsoup.connect("https://raw.githubusercontent.com/AmateurPotion/Bot/master/main.js").get().text()
}