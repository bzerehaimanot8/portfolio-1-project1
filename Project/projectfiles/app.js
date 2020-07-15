console.log($)

const url = 'https://spreadsheets.google.com/feeds/list/1mJzZYi_NMo88Yjd___rRk1MQifOsgC_QPI900gZXxPI/od6/public/values?alt=json'

fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log('data:',
        //     data)
        console.log(data.feed.entry)
        const projects = data.feed.entry.map(entry => {
            return {
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
            }


        })
        app(projects)


    })
    // console.log(projects)
const app = (data) => {
    console.log('app is running')
    console.log(data)

    const createProjectElement = (project) => {
            const $div = $('<div>')
                // $('div').addClass('project')
            $div.append($('<h2>').text(project.title))
            $div.append($('<p>').text(project.description))
            $div.append($('<img>').attr('src', project.image))
            $div.append($('<a>').attr('href', project.url).text('link'))
            $('main').append($div)
            return $div
        }
        // $('body').append(createProjectElement(data[0]))
    data.forEach(project => {
        const $projectDiv = createProjectElement(project)
        $('main').append($projectDiv)
    })
}

// const $contact = $('<div>')
// ($contact).addClass('contact')
// $('main').append($contact)