import addPlansScreen from "../pageobjects/addPlansScreen.js";
import homeScreen from "../pageobjects/homeScreen.js";
import mapScreen from "../pageobjects/mapScreen.js";
import menuScreen from "../pageobjects/menuScreen.js";
import privacyScreen from "../pageobjects/privacyScreen.js";
import welcomeScreen from "../pageobjects/welcomeScreen.js"
import data from "../utils/data.js"

describe("Testing the DisneyApp Exercise",() =>{
    //To begin in the home page
    before('optional description', async () => {
        await welcomeScreen.skipHints();
        await homeScreen.closeWelcomeModal();
    });

    it("Category List Test", async () => {
        await homeScreen.openMap();
        await expect(mapScreen.mapFragment).toBeDisplayed();
        await mapScreen.openCategoryMenu();
        await expect(mapScreen.categoryList).toBeElementsArrayOfSize(11);
        await expect(mapScreen.hotelCategory).toBeEnabled();
        await driver.back();
    })

    it("Privacy and Legal", async () => {
        await expect(homeScreen.menuButton).toBeDisplayed();
        await homeScreen.openMenu();
        await menuScreen.scrollAllMenu();
        await expect(menuScreen.menuList).toBeElementsArrayOfSize(7);
        let menuList = await menuScreen.menuList;
        for (let menuLabel of menuList) {
            await expect(menuLabel).toBeEnabled();
        }
        await menuScreen.doTapOn(await menuScreen.privacyAndLegalButton);
        await expect(privacyScreen.privacyTitle).toBeDisplayed();
        await expect(privacyScreen.privacyList).toBeElementsArrayOfSize(10);
        let arreglo = await data.privacyLabels;
        for (let privacyLabel of arreglo) {
            await expect(privacyScreen.selectElement(privacyLabel)).toBeEnabled();
        }
    })

    it("Add Plans option", async () => {
        await addPlansScreen.addPlansTap();
        await expect(addPlansScreen.addPlanList).toBeDisplayed();
        await expect(addPlansScreen.checkDinningButton).toBeEnabled();
    })
})