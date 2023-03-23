export class VerifyProducts {

    constructor(page) {
        this.page = page;
        this.beforeCheck;
        this.afterCheck;
    }

    async goToProducts() {
        await this.page.goto('https://practicesoftwaretesting.com/#/');
        await this.page.locator('[data-test="nav-categories"]').click();
        await this.page.locator('[data-test="nav-power-tools"]').click();
        this.beforeCheck = await this.page.locator('[class="card-img-top"]').count();
    }
    
    async checkDrillProducts() {
        await this.page.locator('[data-test="category-11"]').check();
        this.afterCheck = await this.page.locator('[class="card-img-top"]').count();
    }
}

