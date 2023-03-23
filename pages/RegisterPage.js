export class RegisterPage {
    constructor(page) {
        this.page = page;
        this.firstName = page.locator('[data-test="first-name"]');
        this.lastName = page.locator('[data-test="last-name"]');
        this.dateOfBirth = page.locator('[data-test="dob"]');
        this.address = page.locator('[data-test="address"]');
        this.postcode = page.locator('[data-test="postcode"]');
        this.city = page.locator('[data-test="city"]');
        this.state = page.locator('[data-test="state"]');
        this.country = page.locator('[data-test="country"]');
        this.phone = page.locator('[data-test="phone"]');
        this.email = page.locator('[data-test="email"]');
        this.password = page.locator('[data-test="password"]');
        this.submitBtn = page.locator('[data-test="register-submit"]');
    }

    async goToRegisterPage() {
        await this.page.goto('https://practicesoftwaretesting.com/#/');
        await this.page.locator('[data-test="nav-sign-in"]').click();
        await this.page.locator('[data-test="register-link"]').click();
    }

    async registerNewUser(firstName, lastName, date, address, postcode, city, state, country, phone, email, password) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.dateOfBirth.fill(date);
        await this.address.fill(address);
        await this.postcode.fill(postcode);
        await this.city.fill(city);
        await this.state.fill(state);
        await this.country.selectOption(country);
        await this.phone.fill(phone);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.submitBtn.scrollIntoViewIfNeeded();
        await this.submitBtn.click();
    }
}

