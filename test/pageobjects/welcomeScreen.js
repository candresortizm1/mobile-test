import BaseScreen from "./baseScreen.js";

class WelcomeScreen extends BaseScreen {
    get getStartedButton() { return $('android=new UiSelector().resourceIdMatches(".*permission_primary_btn").text("Get Started")')}
    get interactTitle() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/permission_title").text("Interact in Amazing Ways")')};
    get locationTitle() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/permission_title").text("Location Services:")')};
    get skipButton() { return $('android=new UiSelector().resourceIdMatches(".*skip_text")')};

    async skipHints(){
        await this.doTapOn(await this.getStartedButton);
        await this.locationTitle.waitForDisplayed();
        await this.doTapOn(await this.skipButton);
        await this.interactTitle.waitForDisplayed();
        await this.doTapOn(await this.skipButton);
    }

}

export default new WelcomeScreen();
