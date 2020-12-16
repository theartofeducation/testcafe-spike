import { Selector } from 'testcafe';

fixture `Google Test Search`
    .page `https://www.google.com`;

test('Search for AOEU', async t => {
    await t
        //Type "The Art of Education University in the text field"
        .typeText('.gLFyf', 'The Art of Education University')
        //Clicks the google search button
        .click('.gNO89b')
        //Clicks "The Art of Education University" link
        .click('.yuRUbf')
         //Opens the AOEU menu
        .click('#mobile-menu-toggle')
        //Opens the Help Center
        .click('.nav-item.help-nav-item')
         //Maximizes the new tab view
        .maximizeWindow()
        //Types "NOW Conference" in the Search Bar
        .typeText('.kb-search__bar', 'NOW Conference')
        //Hits Enter
        .pressKey('enter')
        //Maximizes the new tab view
        .maximizeWindow();
        //This selects the third search result listed
        const link = Selector(".kb-search-results__title").withText(" Experience");
        await t.click(link)
        //Maximizes the new tab view
        .maximizeWindow();
        //Clicks the NOW Conference Link nested into the "Now Conference Experience" paragraph
        const link2 = Selector(".kb-article.tinymce-content")
            .child('p')
            .child('a')
            .withAttribute('href', 'https://theartofeducation.edu/products/event/summer-2019-art-ed-now/');
        await t.click(link2)
        //Maximizes the new tab view
        .maximizeWindow()
        .wait(5000);
        
});
