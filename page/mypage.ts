import { expect, type Locator, type Page } from '@playwright/test';

export class Mypage {
  readonly page: Page
  readonly headingTitle: Locator
  readonly withdrawalBtn: Locator
  readonly confirmAlert: Locator

  constructor(page: Page) {
    this.page = page
    this.headingTitle = page.getByRole('heading', { name: 'マイページ' })
    this.withdrawalBtn = page.getByRole('button', { name: '退会する'})
  }

  /**
   * 「退会する」ボタンクリック
   * @return {void}
   */
  public async withdrawalBtnClick() {
    await this.page.screenshot({ path: './output/withdrawalBtnClick.png' })
    await this.withdrawalBtn.click()
  }

  /**
   * 確認ダイアログのOKをクリック
   * @return {void}
   */
  public async dialogAccept() {
    console.log("dialogAccept start.")
    this.page.on('dialog', dialog => {
      dialog.accept()
    })
    this.page.on('dialog', dialog => {
      dialog.accept()
    })
    await this.page.context().clearCookies()
    await this.page.context().storageState()
  }
}