import { expect, type Locator, type Page } from '@playwright/test';
import { Signup } from '../page/signup'

export class Top {
  readonly page: Page
  readonly registBtn: Locator
  readonly heading: Locator

  constructor(page: Page) {
    this.page = page
    this.registBtn = page.locator('text=会員登録').first()
    this.heading = page.locator("//h2[@class='my-4']")
  }

  /**
   * URLオープン 
   * @return {void}
   */
  async open() {
    await this.page.goto('https://hotel.testplanisphere.dev/ja/index.html')
  }

  /**
   * 会員登録リンククリック
   * @return {Signup}
   */
  async signupClick(): Promise<Signup> {
    await this.registBtn.click()
    return new Signup(this.page)
  }
}