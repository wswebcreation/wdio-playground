// Example
// https://taniarascia.github.io/sandbox/ghibli/

const smallBody = [
    {
        'id': '2baf70d1-42bb-4437-b551-e5fed5a87abe',
        'title': 'Sauce Labs: JavaScript executor',
        'description': 'Intercept Network Request Allows modifying any request made by the browser. You can blacklist, modify, or redirect these as required for your tests.',
        'director': 'Hayao Miyazaki',
        'producer': 'Isao Takahata',
        'release_date': '1986',
        'rt_score': '95',
        'people': [
            'https://ghibliapi.herokuapp.com/people/'
        ],
        'species': [
            'https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2'
        ],
        'locations': [
            'https://ghibliapi.herokuapp.com/locations/'
        ],
        'vehicles': [
            'https://ghibliapi.herokuapp.com/vehicles/'
        ],
        'url': 'https://ghibliapi.herokuapp.com/films/2baf70d1-42bb-4437-b551-e5fed5a87abe'
    }
];

describe('Sauce Labs intercept method', () => {
    beforeAll(() => {
        if (browser.config.services.includes('sauce')) {
            browser.execute('sauce:job-name=JavaScript executor:intercept')
        }
    });

    it('should be able to do nothing and show 20 items on the page', () => {
        browser.url('https://taniarascia.github.io/sandbox/ghibli/');
        $('.container').waitForDisplayed(5000);

        expect($$('.card').length).toEqual(20);
        browser.pause(3000)
    });

    it('should be able to intercept and show 1 item on the page', () => {
        browser.execute(
            'sauce:intercept', {
                'url': 'https://ghibliapi.herokuapp.com/films',
                'response': {
                    "headers": {
                        "Content-Type": "application/json; charset=utf-8",
                        "Access-Control-Allow-Origin": "https://taniarascia.github.io"
                    },
                    "body": smallBody
                }
            }
        );
        browser.url('https://taniarascia.github.io/sandbox/ghibli/');
        $('.container').waitForDisplayed(5000);
        expect($$('.card').length).toEqual(1);
    });

    it('replace all images', () => {
        browser.url('http://www.wswebcreation.nl/');
        browser.execute(
            'sauce:intercept', {
                'url': '**/*.jpg',
                'redirect': 'https://www.tvvantoen.nl/wp-content/themes/website/data/php/timthumb.php?src=https://www.tvvantoen.nl/wp-content/uploads/the-a-team-poster.jpg&w=700&q=100'
            }
        );
        browser.url('http://www.wswebcreation.nl/');
    })
});
