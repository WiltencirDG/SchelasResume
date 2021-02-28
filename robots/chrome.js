const puppeteer = require('puppeteer')

async function robot(profile) {

    const chrome = await openChrome()
    const page = await openNewPage(chrome)
    await navigate(page, profile)

    const experiences = await getExperiences(page);

    // await closeChrome(chrome)
    // return content

    async function openChrome() {
        console.log('> Opening Google Chrome...')
        const chrome = await puppeteer.launch({
            'args': [
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ], timeout: 60000
            , headless: false
            ,
        })
        return chrome
    }

    async function openNewPage(chrome) {
        const page = await chrome.newPage({ timeout: 60000 })
        await page.setCookie({
            'name': 'li_at',
            'value': '<sessionBrowser>',
            'domain': '.www.linkedin.com'
        })
        return page
    }

    async function navigate(page, link) {
        await page.goto(link, { waitUntil: 'networkidle2' });
    }

    async function getExperiences(page) {
        console.log('> Fetching experiences...')

        const experiences = await page.evaluate(() => Array.from(document.querySelectorAll('ul.experience__list > li'), element => element))
        console.log(experiences);
    }

    async function closeChrome(chrome) {
        console.log('> Closing Google Chrome...')
        await chrome.close()
    }
}

module.exports = robot