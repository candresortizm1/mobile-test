import BaseScreen from "./baseScreen.js";

class MapScreen extends BaseScreen {
    get mapFragment(){return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/map_view_fragment")')};
    get categoryMenu(){return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/categoryTitle")')};
    get categoryList(){return $$('android=new UiSelector().className("android.widget.LinearLayout").descriptionContains("Category").enabled(true)')};
    get categoryListContainer() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/facilityTypeList")')};
    get hotelCategory(){return $('android=new UiSelector().className("android.widget.LinearLayout").descriptionContains("Hotels, Category").enabled(true)')};
    
    async openCategoryMenu(){
        await this.doTapOn(await this.categoryMenu);
        await this.categoryListContainer.waitForDisplayed();
    }
}

export default new MapScreen();