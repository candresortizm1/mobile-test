//class with general actions and common elements
export default class BaseScreen{
    get locationButton() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/tab_icon").descriptionContains("2of5")')};
    get menuButton() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/tab_icon").descriptionContains("5of5")')};
    get addPlansButton() {return $('android=new UiSelector().resourceId("com.disney.wdpro.dlr:id/tab_animated_icon").descriptionContains("3of5")')};

    async doTapOn(element) {
        await element.waitForDisplayed({time:30000});
        await element.touchAction('tap');
    }

    async scrollDown(element) {
        await driver.touchAction([ 
            {action: 'longPress', x: 200, y: 1000}, 
            { action: 'moveTo', x: 200, y: 10}, 
            'release' 
        ]);
    }

    async lock() {
        await driver.lock();
    }

    async unlock() {
        await driver.unlock();
    }
}