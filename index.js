const robots = {
    chrome: require('./robots/chrome'),
    state: require('./robots/state'),
    pdf: require('./robots/generator'),
};

async function start() {
    // let profileLink = process.argv[2];

    await robots.pdf('https://www.linkedin.com/in/<profile>')

    // const resumeData = robots.state.load()
    // await robots.pdf(resumeData)
}

start();