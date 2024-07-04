import fs from 'fs';
import path from 'path'

export const STORAGE: string = path.join(__dirname, "auth.json");

export class Utils {

  /**
   * localstorageのパス取得
   * @return {string} STORAGE Path
   */
  public getConst(): string {
    return STORAGE
  }

  /**
   * auth.json作成
   * @return {void}
   */
  public jsonCreate(): void {
    this.jsonDelete()
    if (!fs.existsSync(STORAGE)) {
      fs.writeFileSync(STORAGE, '{}')
    }
  }

  /**
   * auth.json削除
   * @return {void}
   */
  public jsonDelete(): void {
    try {
      if (fs.existsSync(STORAGE)) {
        fs.unlinkSync(STORAGE)
      }
    } catch(e) {
        console.log('file delete fail')
    }
  }
}
