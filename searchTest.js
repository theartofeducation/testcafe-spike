import { Selector } from 'testcafe'

fixture `Google Test Search`
    .page `https://www.google.com`

test('it returns theartofeducation.edu when searching for the art of education', async t => {
    let googleSearchBox = ".gLFyf"
    let googleSearchButton = ".gNO89b"
    let googleSearchResult = ".yuRUbf"
    let attendButton = '.btn.btn-3d.btn-green'

    await t
        .maximizeWindow()
        .typeText(googleSearchBox, 'The Art of Education University')
        .click(googleSearchButton)
        .click(googleSearchResult)
        .click('.search-message')
        .typeText('#search-site', "NOW Conference")
        .maximizeWindow()
        .pressKey('enter')
        .maximizeWindow()

        // This selects the 2021 Winter Conference Search Result
        let link = Selector(".attachment-square.size-square.wp-post-image").withAttribute('alt', "Winter 2021 NOW Conference")
        await t.click(link)
        .maximizeWindow()

        // Clicks the "I want to attend with my Art Team" button
        await t.click(attendButton)
        .wait(5000)
})
