console.log($)

const url = 'https://spreadsheets.google.com/feeds/list/1mJzZYi_NMo88Yjd___rRk1MQifOsgC_QPI900gZXxPI/od6/public/values?alt=json'
/* where js handles http request and retrieves the data from the url*/

fetch(url)

    /* the then method waits for this data to be retrieved then pulls just the json string out and coverts it into a js object using the .json method*/

    .then(response => response.json())
    .then(data => {

        /* use data.feed.entry to locate the array that has our project entries, then we use the map method to return a new array for our key values*/

        const projects = data.feed.entry.map(entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t,
                backend: entry.gsx$backend.$t,
                frontend: entry.gsx$frontend.$t
            }
        })

        app(projects) /* invokes the application with projects array as arguments*/
    })

const app = (data) => {

    /* all the application logic follows, in this case creating the structure of each div that each our projects will go in and appending it to the container it is assigned*/

    const createProjectElement = (project) => {
        const $div = $('<div>')
        $div.addClass('project')
        $div.append($('<h2>').text(project.title))
        $div.append($('<p>').text(project.description))
        $div.append($('<img>').attr('src', project.image).addClass('projectimage'))

        // $div.append($('<a>').attr('href', project.url).text('deployed site'))
        // $div.append($('<a>').attr('href', project.backend).text('backend'))
        // $div.append($('<a>').attr('href', project.frontend).text('frontend'))
        // $('main').append($div)

        const $div1 = $('<div>')
        $div1.addClass('links')
        $div1.append($('<a>').attr('href', project.url).text('deployed site  |  ').addClass('live'))
        $div1.append($('<a>').attr('href', project.backend).text('backend  |  ').addClass('back'))
        $div1.append($('<a>').attr('href', project.frontend).text('frontend').addClass('front'))
        $div.append($div1)

        const $div2 = $('<div>').addClass('overlay')
        const $div3 = $('<div>').addClass('text').text('Hello World')
        $div2.append($div3)
        $div.append($div2)
        $('main').append($div)


        return $div
    }

    /* making sure that each project implemented into the google sheet is appended to the container*/

    data.forEach(project => {
        const $projectDiv = createProjectElement(project)
        $('main').append($projectDiv)
    })
}

/* what allowed me to toggle between different classes to apply different styling conditions in the case of my hamburger menu */

function onClickMenu() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}


/* When the user scrolls down 20px from the top of the document, slide down the navbar */
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementByClassName("container1").style.top = "0";
//   } else {
//     document.getElementByClassName("container1").style.top = "-50px";
//   }
// }