import BaseScreen from "./baseScreen.js";

class AddPlansScreen extends BaseScreen {
    get addPlanList() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/actionSheetListView")')};
    get checkDinningButton(){return $$('android=new UiSelector().descriptionContains("Check Dining Availability")')};
   
    async addPlansTap(){
        await this.doTapOn(await this.addPlansButton);
    }
}

export default new AddPlansScreen();