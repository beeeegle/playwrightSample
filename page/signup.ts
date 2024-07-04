import { type Locator, type Page } from '@playwright/test';
import { Mypage } from '../page/mypage'
import { STORAGE } from '../utils/utils';

const cookies = [
  {
    name: "my_cookie_name",
    value: "my_cookie_value",
    domain: "my_cookie_domain",
    path: "/",
  },
];

export class Signup {
  readonly page: Page
  readonly heading: Locator
  readonly email: Locator
  readonly pw: Locator
  readonly pwConfirm: Locator
  readonly userName: Locator
  readonly registBtn: Locator
  

  constructor(page: Page) {
    this.page = page
    this.heading = page.locator("//h2[@class='my-3']")
    this.email = page.locator('#email')
    this.pw = page.locator('#password')
    this.pwConfirm = page.locator('#password-confirmation')
    this.userName = page.locator('#username')
    this.registBtn = page.getByRole('button', { name: '登録' })
  }

  /**
   * 会員情報フォーム入力
   * @return {void}
   */
  public async formInput() {
    await this.email.fill('sample@test.co.jp')
    await this.pw.fill('testtest')
    await this.pwConfirm.fill('testtest')
    await this.userName.fill('テスト太郎')
    // await this.page.screenshot({ path: 'screenshot.png' })
  }

  /**
   * 「登録」ボタンクリック
   * @return {Mypage}
   */
  public async registBtnClick(): Promise<Mypage> {
    await this.registBtn.click()
    await this.page.context().addCookies(cookies);
    await this.page.context().storageState({ path: STORAGE })
    return new Mypage(this.page)
  }
}