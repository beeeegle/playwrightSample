import { test, expect } from '@playwright/test';

test('フシギダネの情報をGETする', async ({ request }) => {
  // GETリクエストを送信 (baseURLからの相対パスを指定)
  const response = await request.get(`pokemon/1`);

  // --- 検証フェーズ ---

  // 1. ステータスコードの検証
  // レスポンスが正常（2xx系）であることを確認
  expect(response.ok()).toBeTruthy();

  // 2. レスポンスボディ（JSON）の検証
  const responseBody = await response.json();

  // レスポンスのJSONが期待通りの構造と値を持っているか検証
  expect(responseBody).toEqual(expect.objectContaining({
      name: 'bulbasaur',
      base_experience: 64,
      is_default: true,
      species: expect.objectContaining({
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon-species/1/'
      }),
      abilities: expect.arrayContaining([
        expect.objectContaining({
            ability: expect.objectContaining({ name: 'overgrow' })
        })
      ])
    })
  );

  // 型だけを検証することも可能
  expect(responseBody.base_experience).toEqual(expect.any(Number));
  expect(responseBody.name).toEqual(expect.any(String));
});