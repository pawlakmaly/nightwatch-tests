import { NightwatchBrowser } from "nightwatch";
import Page from "./commonPage";

export default class EcosiaPage extends Page {

    private SEARCH_INPUT = 'input[type="search"]';
    private CTA_BUTTON = '[data-track-id="above_fold_install_cta"]'


    constructor(browser: NightwatchBrowser, baseUrl: string) {
        super();
        this.browser = browser;
        this.baseUrl = baseUrl;
    }

    async isPageOpen(): Promise<void> {
        await this.assertElementPresentAndVisible(this.SEARCH_INPUT);
        await this.assertElementPresentAndVisible(this.CTA_BUTTON);
    }

}