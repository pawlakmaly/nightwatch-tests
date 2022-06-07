import { NightwatchBrowser } from "nightwatch";
import Page from "./commonPage";

export default class EcosiaPage extends Page {
    public baseUrl: string;

    private SEARCH_INPUT = 'input[type="search"]';
    private CTA_BUTTON = '[data-track-id="above_fold_install_cta"]'


    constructor(browser: NightwatchBrowser) {
        super();
        this.browser = browser;
    }

    async isPageOpen(): Promise<void> {
        await this.assertElementPresentAndVisible(this.SEARCH_INPUT);
        await this.assertElementPresentAndVisible(this.CTA_BUTTON);
    }

    async assertionThatFails(): Promise<void> {
        await this.assertElementPresentAndVisible('nonExistingElement');
    }

    async tryCatchExample(): Promise<any> {
        try {
            return await this.browser.assert.elementPresent('nonExistingElement');
        } catch (error) {
            return true
        }
    }
}