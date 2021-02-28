const { LinkedInProfileScraper } = require('linkedin-profile-scraper')

async function robot(resume) {

    const scraper = new LinkedInProfileScraper({
        sessionCookieValue: '<sessionBrowser>',
        keepAlive: false
    });

    await scraper.setup()

    const result = await scraper.run(resume)

    console.log(result)
}

module.exports = robot
