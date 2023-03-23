export class WishList {
    constructor(page) {
        this.page = page;
    }

    async AddToList() {
        await this.page.locator('[data-test="nav-home"]').click();
        await this.page.locator('[data-test="product-1"]').click();
        await this.page.locator('[data-test="add-to-favorites"]').click();
        await this.page.locator('[data-test="nav-user-menu"]').click();
        await this.page.locator('[data-test="nav-my-favorites"]').click();
    }
}
