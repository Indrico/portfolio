const totalProjects = document.getElementById('total-project');
const listProjects = document.querySelector('.projects-list');

const projects = [
    {
        image: 'Image/sentiment_analysis.png',
        title: "Twitter Sentiment Analysis", 
        hashtag: ['#Django', '#Python', '#Sentiment_Analysis', '#Twitter_API', '#Bulma', '#Responsive_Website'], 
        description: `In this project, I work with Twitter API, Django Framework, 
                      Scikit-learn library for Sentiment Analysis in Indonesia Language.
                      I'm using Support Vector Machine Algorithm to classifying those tweet.
                      For the interface I'm using Bulma CSS`,
        demoLink: 'https://indrico-analisa-sentimen.herokuapp.com/',
        code: 'https://github.com/Indrico/Sentiment_Analysis'
    },
    {
        image: 'Image/edie_homepage.png',
        title: "Edie Homepage", 
        hashtag: ['#HTML', '#CSS', '#Javascript', '#Responsive_Website'], 
        description: `In this project, I completed challenge in devChallenges.io with HTML, CSS and JS.
                      Most layout I'm created using Grid. Also for mobile navigation I'm using JS too when
                      user click the burger button, event fired.`,
        demoLink: 'https://indrico-edie-homepage.netlify.app/',
        code: 'https://github.com/Indrico/edie-homepage'
    },
    {
        image: 'Image/checkout_page.png',
        title: "Checkout Page", 
        hashtag: ['#HTML', '#CSS', '#Responsive_Website'], 
        description: `In this project, I completed challenge in devChallenges.io with HTML and CSS.
                      It's also mobile responsive and I'm using Icon from material icon. Layout created using grid.`,
        demoLink: 'https://indrico-checkout-page.netlify.app/',
        code: 'https://github.com/Indrico/checkout-page'
    },
]

showProject(projects);

function showProject(projects) {
    totalProjects.innerText = `(${projects.length})`;
    let data = ``;
    projects.forEach(project => {
        let hashtagHTML = hashtagToHTML(project);
        data += `<section class="projects">
                    <img src='${project.image}'>
                    <div class="project-description">
                        <div class="project-hashtags">
                            ${hashtagHTML}
                        </div>
                        <div class="project-heading">
                            <h2>${project.title}</h2>
                        </div>
                        <div class="project-overview">
                            <p>
                                ${project.description}    
                            </p>
                        </div>
                        <div class="demo">
                            <a href='${project.demoLink}' target="_blank" rel="nofollow"><button class="btn btn-demo">Demo</button></a>
                            <a href='${project.code}' target="_blank" rel="nofollow"><button class="btn btn-code">Code</button></a>
                        </div>
                    </div>
                </section>`;
    })

    listProjects.innerHTML = data;

    RebuildEvent();
}

function searchHashtag(hashtag) {
    let searchResult = projects.filter(project => {
        return project.hashtag.includes(hashtag.innerText);
    })

    console.log(searchResult);
    let data = ``;

    searchResult.forEach(project => {
        let hashtagHTML = hashtagToHTML(project);
        data += `<section class="projects">
                    <img src='${project.image}'>
                    <div class="project-description">
                        <div class="project-hashtags">
                            ${hashtagHTML}
                        </div>
                        <div class="project-heading">
                            <h2>${project.title}</h2>
                        </div>
                        <div class="project-overview">
                            <p>
                                ${project.description}    
                            </p>
                        </div>
                        <div class="demo">
                            <a href='${project.demoLink}' target="_blank" rel="nofollow"><button class="btn btn-demo">Demo</button></a>
                            <a href='${project.code}' target="_blank" rel="nofollow"><button class="btn btn-code">Code</button></a>
                        </div>
                    </div>
                </section>`;
    })

    listProjects.innerHTML = data;

    RebuildEvent();
}

function hashtagToHTML(project) {
    let arrayHashtag = project.hashtag.map(hashtag => {
        return `<div class="hashtag-item">${hashtag}</div>`;
    })
    
    let hashtagHTML = ``;
    arrayHashtag.forEach(hashtag => {
        hashtagHTML += hashtag;
    });

    return hashtagHTML;
}

function RebuildEvent() {
    const eventHashtag = document.querySelectorAll('.hashtag-item');
    eventHashtag.forEach(hashtag => {
        hashtag.addEventListener('click', () => {
            searchHashtag(hashtag);
        })
    })
}