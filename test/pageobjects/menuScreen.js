import BaseScreen from "./baseScreen.js";

class MapScreen extends BaseScreen {
    get menuContainer(){return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/parentMoreContainer")')};
    get privacyAndLegalButton(){return $('android=new UiSelector().className("android.widget.RelativeLayout").description("Privacy & Legal button")')};
    get menuList(){return $$('android=new UiSelector().className("android.widget.RelativeLayout").descriptionContains("")')};
    
    async scrollAllMenu(){
        let isDisplayed = false;
        while(!isDisplayed){
            await this.scrollDown(await this.privacyAndLegalButton);
            isDisplayed = await this.privacyAndLegalButton.isDisplayed();
        }
    }
}

export default new MapScreen();