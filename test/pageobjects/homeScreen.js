import BaseScreen from "./baseScreen.js";

class HomeScreen extends BaseScreen {
    get headerLogo(){return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/tmplogin_imgvw_logo")')};
    get modalDismissIcon() {return $('android=new UiSelector().resourceId("dismiss-icon")')};

    async closeWelcomeModal(){
        await this.doTapOn(await this.modalDismissIcon);
    }

    async openMap(){
        await this.doTapOn(await this.locationButton);
    }

    async openMenu(){
        await this.doTapOn(await this.menuButton);
    }
}

export default new HomeScreen();