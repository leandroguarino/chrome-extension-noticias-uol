MyExtension = class {
    constructor(){
        
    }
    start(){
        let news = $("[data-uol-see-later='title']")
        let titles = []
        for(let i in news){
            let title = news[i].innerText
            let link = news[i].parentNode //pega o link da notícia
            if (title && link){
                titles.push({
                    "title": title,
                    "url": link.href
                })
            }
        }
        chrome.runtime.sendMessage({
            status: "COMPLETE",
            titles: titles
        })
    }    
}

var myExtension = new MyExtension()
myExtension.start()