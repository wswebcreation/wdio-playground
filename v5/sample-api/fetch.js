const fetch = require('node-fetch');
const authentication = Buffer.from(`${ process.env.SAUCE_USERNAME }:${ process.env.SAUCE_ACCESS_KEY }`).toString('base64');
const JOB_ID = '';
const headers = {
    'Authorization': `Basic ${ authentication }`,
};

fetch(`https://saucelabs.com/rest/v1/${ process.env.SAUCE_USERNAME }/jobs/${ JOB_ID }`, {
    method: 'DELETE',
    headers,
})
    .then(res => res.json())
    .then(json => console.log(json));
