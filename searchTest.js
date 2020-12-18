import { Selector } from 'testcafe'

fixture `Google Test Search`
    .page `https://www.google.com`

test('it returns theartofeducation.edu when searching for the art of education', async t => {
    let googleSearchBox = ".gLFyf"
    let googleSearchButton = ".gNO89b"
    let googleSearchResult = ".yuRUbf"

    await t
        .typeText(googleSearchBox, 'The Art of Education University')
        .click(googleSearchButton)
        .click(googleSearchResult)
        .click('#mobile-menu-toggle')
        .click('.nav-item.help-nav-item')
        .maximizeWindow()
        .typeText('.kb-search__bar', 'NOW Conference')
        .pressKey('enter')
        .maximizeWindow()

        // This selects the third search result listed
        let link = Selector(".kb-search-results__title").withText(" Experience")
        await t.click(link)
        .maximizeWindow()

        // Clicks the NOW Conference Link nested into the "Now Conference Experience" paragraph
        link = Selector(".kb-article.tinymce-content")
            .child('p')
            .child('a')
            .withAttribute('href', 'https://theartofeducation.edu/products/event/summer-2019-art-ed-now/')

        await t.click(link)
        .maximizeWindow()
        .wait(5000)
})
