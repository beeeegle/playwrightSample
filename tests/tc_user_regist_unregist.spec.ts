import { test, expect } from '@playwright/test'
import { Top } from '../page/top'
import { Signup } from '../page/signup'
import { Mypage } from '../page/mypage'
import { Utils } from '../utils/utils';

test('ホテル予約サイトユーザー登録', async ({ page }) => {
  const poTop: Top = new Top(page)
  await poTop.open()
  await expect(poTop.heading).toHaveText('このサイトはテスト自動化の学習用の練習サイトです。')
  // 新規登録へ遷移
  const poSignup: Signup = await poTop.signupClick()
  await expect(poSignup.heading).toHaveText('会員登録')
  
  // ユーザー情報入力
  await poSignup.formInput()
  const poMypage: Mypage = await poSignup.registBtnClick()
  await expect(poMypage.headingTitle).toHaveText('マイページ')
  // 退会
  await poMypage.withdrawalBtnClick()
  await poMypage.dialogAccept()
})

test.afterAll(async () => {
  const utils: Utils = new Utils()
  utils.jsonDelete()
})
