import { NightwatchBrowser } from "nightwatch";
import EcosiaPage from "../pages/ecosiaPage";

let ecosiaPage: EcosiaPage;

module.exports = {
    'Class as Page Object Demo': async function (browser: NightwatchBrowser) {
        ecosiaPage = new EcosiaPage(browser, 'https://ecosia.org/');
        await ecosiaPage.navigate();
    },

    'Try catch example': async (browser: NightwatchBrowser) => {
        // assert 
        console.log(await ecosiaPage.tryCatchExample());
    },

    'Test cases that fails 1': async (browser: NightwatchBrowser) => {
        await ecosiaPage.assertionThatFails();
    },

    'Test cases that fails 2 - should not be executed if 1 fails': async (browser: NightwatchBrowser) => {
        await ecosiaPage.assertionThatFails();
    },

    'This test case should not be executed': async (browser: NightwatchBrowser) => {
        await ecosiaPage.isPageOpen();
    }
};