function init(){
    config = {
        "pageTitle": 'Miki oldala',
        "socials": [
            {
                "name": "facebook",
                "url": "",
                "icon": "fa-facebook"
            },
            {
                "name": "github",
                "url": "https://github.com/antalmiklos",
                "icon": "fa-github"
            },
            {
                "name": "instagram",
                "url": "",
                "icon": "fa-instagram"
            }
        ],
        
    }

    document.title = config.pageTitle;

    return config;
}

function setSocials(config){
    var socialContainer = document.getElementById('socials');
    config.socials.forEach(e => {
        var socialElement = document.createElement('div');
        var socialLink = document.createElement('a');
        socialLink.href = e.url;
        socialLink.target = '_blank';
        socialElement.classList.add('social');
        socialLink.classList.add('fa');
        socialLink.classList.add(e.icon);
        socialElement.appendChild(socialLink);
        socialContainer.appendChild(socialElement);
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    config = init();
    setSocials(config);
});