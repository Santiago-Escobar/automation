Feature('Automation Practice');

Scenario('Test case # 1', ({ I }) => {

    // Go to website
    I.amOnPage('http://automationpractice.com');
    I.wait('#search_query_top',20);

    // Search an item
    I.fillField('#search_query_top','dress');
    I.wait('.ac_results',20);
    I.click('.ac_results ul li:nth-child(1)');
    I.wait('add_to_cart',20);

    I.click('#add_to_cart');
    I.wait('#layer_cart',20);
    I.click('//*[@id="layer_cart"]/div[1]/div[2]/div[4]/a');
});
