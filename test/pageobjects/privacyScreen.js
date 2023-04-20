import BaseScreen from "./baseScreen.js";

class PrivacyScreen extends BaseScreen {
    get privacyTitle() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/snowball_header_screen_name").description("Privacy & Legal, heading")')};
    get privacyList(){return $$('android=new UiSelector().className("android.widget.TextView").resourceIdMatches(".*txt_element")')};
   
    async selectElement(name){
        let elementSelector = 'android=new UiSelector().className("android.widget.TextView").resourceIdMatches(".*txt_element").text("'+
                                name+'")';
        return $(elementSelector)
    }
}

export default new PrivacyScreen();