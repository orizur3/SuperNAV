//fixed additional categories to products
// asynchronous problem with loading each product page and retreiving the data - the program dosent wait until the page is loaded.
// check if the JS in the requested page is complete before scraping the page
const Puppeteer = require('puppeteer');
const $ = require('cheerio');
const request = require('request');

//const url = 'https://groceries.asda.com/';
class Scraper {

  static loadPage(url) {
    let browserTemp;
    return Puppeteer.launch().then(browser => {
      browserTemp = browser;
      return browser.newPage();
    }).then(page => {
      // page.waitForSelector('body');
      return page.goto(url).then(() => {
        return page.content()
      });
      //.then(contentPage => {
      //  contentPage.waitForFunction('document.querySelector("body")');
      //});
    }).finally(() => {
      browserTemp.close();
    });
  }
  static categoryParser(url) {
    const start = Date.now();
    return this.loadPage(url).then(html => {
      const categoryUrls = [];
      $('div[id="primary-nav-items"]', html).find('#primary-nav-items > div > div > li').each((i, e) => {
        categoryUrls.push({
          url: $(e).find('a').attr().href,
          category: $(e).find('span').text()
        });
      });
      return categoryUrls;
    }).then(categoryUrls => {
      categoryUrls = categoryUrls.slice(0, 8);
      console.log(categoryUrls);
      const promises = [];
      const array = categoryUrls.forEach(categoryUrl => {
        //request.get({ uri: headingUri, headers: headerData, maxRedirects: 100 }).setMaxListeners(0);
        promises.push(this.productParser(url + categoryUrl.url));//.then(products => {
        //  //products.forEach(product => {
        //    products[0]['category'] = categoryUrl.category;
        //  //});
        //  return products;
      });
      return Promise.all(promises);
    });
    return promise//Promise.all(array).then(arrey => {
    //   console.log(arrey);
    //   return array;
    //});
    //}).then(array => {
    //console.log(array);
    //  return array;
    //});
    //});
  }

  static productParser(url) {
    const promise = this.loadPage(url).then(html => {
      const products = Promise.resolve([]);
      return products.then(products => {
        return Promise.resolve(
          $('.product.active', html).each((i, e) => {
            const name = Promise.resolve($(e).find('div.product-content > span.title.productTitle > a > span').text());
            const price = Promise.resolve($(e).find('.price > span').text());
            name.then(name => {
              price.then(price => {
                const json = {
                  name: name,
                  price: price
                };
                products.push(json);
              });
            });
          })).then(() => {
            //console.log(products);
            return products;
          });
      });
    });
    return promise;
  }
  static longScraper() {
    Puppeteer.launch().then(async browser => {
      const page = await browser.newPage();
      await page.goto('https://groceries.asda.com');

    })
  }
}

module.exports = Scraper;
      //const promise = Promise.resolve(
      //  setTimeout(
      //    function () {
      //      $('.product.active', html).each((i, e) => {
      //        const name = Promise.resolve($(e).find('div.product-content > span.title.productTitle > a > span').text())
      //        const price = Promise.resolve($(e).find('.price > span').text())
      //        name.then(name => {
      //          price.then(price => {
      //            const json = {
      //              name: name,
      //              price: price
      //            };
      //            products.push(json);
      //          });
      //        });
      //      });
      //    }, 20000));
      //return promise.then(() => {
      //  console.log(products);
      //  return products;
      //});




  //static test(url) {
  //  const promise = this.loadPage(url).then(html => {
  //   // console.log(html);
  //    const categoryUrls = [];
  //    $('div[id="primary-nav-items"]', html).find('#primary-nav-items > div > div > li').each((i, e) => {
  //      categoryUrls.push({
  //        url: $(e).find('a').attr().href,
  //        category: $(e).find('span').text()
  //      });
  //    });

  //    return categoryUrls;
  //  }).then(categoryUrls => {
  //    categoryUrls.splice(3, 13);
  //    console.log(categoryUrls.length);
  //    const promises = [];
  //    categoryUrls.forEach(categoryUrl => {
  //      categoryUrl.url = url + categoryUrl.url;
  //      let promise = this.productParser(categoryUrl.url).then(products => {
  //        const fullProducts = [];
  //        products.forEach(product => {
  //          fullProducts.push({ name: product.name, price: product.price, category: categoryUrl.category });
  //        });
  //        // console.log(fullProducts);
  //        return fullProducts;
  //      });
  //      promises.push(promise);
  //    });
  //    console.log(promises);
  //    return Promise.all(promises);
  //    //console.log(promises);
  //    //  return Promise.all(promises).then(array => {
  //    //    console.log(array);
  //    //    return array;
  //    //  });
  //  });
  //  return promise;
  //}
