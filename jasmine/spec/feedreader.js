/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    describe('RSS Feeds', function() {
        /* This test make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('have a URL', function() {
            for(let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);
            }
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('have a name', function() {
            for(let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);
            }
        });
    });

    describe("The menu", function() {
        const body = document.querySelector('body');
        const menuHidden = document.querySelector('.menu-hidden');
        const menuIcon = document.querySelector('.menu-icon-link');
        
        /* This test ensures that the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect(body.className).toContain(menuHidden.className);
        });

         /*This test ensures that the menu visibility when the menu icon is clicked.
          */
        it('changes the visibility', function() {
            menuIcon.click();
            expect(body.className).not.toContain(menuHidden.className);
            menuIcon.click();
            expect(body.className).toContain(menuHidden.className);        
        });
    });

    describe('Initial Entries', function() {
        /* This test ensures that when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0, done);
        }); 

        it('have at least a single .entry element', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {
        /* This test ensures that when a new feed is loaded
         * by the loadFeed function the content is changing.
         */
        let initialFeed;
        beforeEach(function(done) {
            loadFeed(0, done);
            initialFeed = $('.feed').html(); //get current feed
            loadFeed(1, done); //load new feed
        }); 

        it('is changing after new feed is loaded', function() {
            expect(expect($('.feed').html()).not.toEqual(initialFeed));
        });
    });
}());
