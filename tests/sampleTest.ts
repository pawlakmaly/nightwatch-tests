import { NightwatchBrowser } from "nightwatch";
import EcosiaPage from "../pages/ecosiaPage";

module.exports = {
    'Class as Page Object Demo': async function (browser: NightwatchBrowser) {
        const ecosiaPage = new EcosiaPage(browser, 'https://ecosia.org/');
        await ecosiaPage.navigate();
    }
  };