import { EnhancedElementInstance, NightwatchBrowser } from "nightwatch";

export default abstract class Page {

    public browser!: NightwatchBrowser;
    public baseUrl!: string;
    
    async navigate(): Promise<void> {
        await this.browser.url(this.baseUrl);
        await this.isPageOpen();
    }

    abstract isPageOpen(): Promise<void>;

    protected async setInputValue(selector: string, value: string) {
        await this.assertElementPresentAndVisible(selector);
        await this.browser.clearValue(selector);
        await this.browser.setValue(selector, value);
        await this.browser.assert.containsText(selector, value);
    }

    protected async assertElementPresentAndVisible(selector: string) {
        await browser.assert.elementPresent(selector);
        await browser.assert.visible(selector);
    }
}