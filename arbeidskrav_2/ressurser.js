const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


document.querySelector("main h2").innerHTML = resources[0].category
    document.querySelector("main p").innerHTML = resources[0].text
    listHTML = ""
    resources.slice(0,1).map((array) => { 
        array.sources.map(source =>            
            listHTML += `<li><a href=${source.url}>${source.title}</a></li>`
        )    
        document.querySelector("main ul li a").innerHTML = listHTML
})

function button1() {
    changeColor()
    document.querySelector("main h2").innerHTML = resources[0].category
    document.querySelector("main p").innerHTML = resources[0].text
    listHTML = ""
    resources.slice(0,1).map((array) => { 
        array.sources.map(source =>            
            listHTML += `<li><a href=${source.url}>${source.title}</a></li>`
        )    
        document.querySelector("main ul li a").innerHTML = listHTML
})
}

function button2() {
    changeColor()
    document.querySelector("main h2").innerHTML = resources[1].category
    document.querySelector("main p").innerHTML = resources[1].text
    listCSS = ""
    resources.slice(1,2).map((array) => { 
        array.sources.map(source =>            
            listCSS += `<li><a href=${source.url}>${source.title}</a></li>`
        )    
        document.querySelector("main ul li a").innerHTML = listCSS
})
}

function button3() {
    changeColor()
    document.querySelector("main h2").innerHTML = resources[2].category
    document.querySelector("main p").innerHTML = resources[2].text
    listJS = ""
    resources.slice(2,3).map((array) => { 
        array.sources.map(source =>            
            listJS += `<li><a href=${source.url}>${source.title}</a></li>`
        )    
        document.querySelector("main ul li a").innerHTML = listJS
})
}

function button4() {
    changeColor()
    document.querySelector("main h2").innerHTML = resources[3].category
    document.querySelector("main p").innerHTML = resources[3].text
    listReact = ""
    resources.slice(3,4).map((array) => { 
        array.sources.map(source =>            
            listReact += `<li><a href=${source.url}>${source.title}</a></li>`
        )    
        document.querySelector("main ul li a").innerHTML = listReact
})
}

function button5() {
    changeColor()
    document.querySelector("main h2").innerHTML = resources[4].category
    document.querySelector("main p").innerHTML = resources[4].text
    listSanity = ""
    resources.slice(4,5).map((array) => { 
        array.sources.map(source =>            
            listSanity += `<li><a href=${source.url}>${source.title}</a></li>`
        )    
        document.querySelector("main ul li a").innerHTML = listSanity
})
}

function changeColor() {
    let colors = document.querySelectorAll("nav a")

    colors.forEach(color => {
    color.addEventListener("click", e => {
    document.querySelector("nav a.active").classList.remove("active")
    e.target.classList.add("active")
  })
})
}