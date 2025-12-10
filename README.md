# 協会・学会運営サポート | HILUCO

理学療法士などセラピストの協会・学会運営をサポートする新規事業のランディングページです。

## 🌟 特徴

- **モダンなデザイン**: HILUCOのブランドカラー（ダークブルー/ネイビー）を使用したアカデミックでスタイリッシュなデザイン
- **レスポンシブ対応**: デスクトップ、タブレット、モバイルで最適な表示
- **Font Awesomeアイコン**: プロフェッショナルなベクターアイコンを使用
- **スムーズなアニメーション**: Intersection Observerによるスクロールアニメーション
- **お問い合わせフォーム**: メールクライアント統合

## 📋 サービス内容

1. **学会参加者の管理** - 参加登録、会員情報管理、参加証発行
2. **運営者間の情報共有** - 共有プラットフォーム、議事録管理
3. **金銭管理** - 請求書発行、入金確認、収支レポート
4. **演題募集・査読管理** - 演題募集システム、査読進捗管理
5. **広報・問い合わせ対応** - メール配信、SNS運用、問い合わせ窓口
6. **事後処理・フォローアップ** - アンケート集計、報告書作成

## 🚀 デプロイ方法

### GitHub Pagesでの公開

1. GitHubリポジトリの **Settings** に移動
2. 左サイドバーの **Pages** をクリック
3. **Source** で `main` ブランチを選択
4. **Save** をクリック
5. 数分後、`https://yuto-tashiro.github.io/association-support/` でアクセス可能になります

### ローカルでの確認

```bash
# リポジトリをクローン
git clone https://github.com/yuto-tashiro/association-support.git
cd association-support

# index.htmlをブラウザで開く
open index.html  # macOS
# または
start index.html  # Windows
```

## 📧 お問い合わせフォームの設定

フォームから直接 `info@hiluco.co.jp` にメールを送信するには、Formspreeの設定が必要です。

### Formspree セットアップ（5分）

1. https://formspree.io/ でアカウント作成（無料）
2. 新しいフォームを作成し、`info@hiluco.co.jp` を設定
3. フォームIDを取得（例: `xpznqwer`）
4. `index.html` の234行目を編集:
   ```html
   <form class="contact-form" id="contactForm" action="https://formspree.io/f/xpznqwer" method="POST">
   ```
   `YOUR_FORM_ID` を実際のIDに置き換え

詳しい手順は [SETUP_FORMSPREE.md](SETUP_FORMSPREE.md) を参照してください。

> **Note**: Formspreeを設定しない場合は、メールクライアント（Gmail、Outlookなど）が起動する従来の方式で動作します。

## 🛠️ 技術スタック

- **HTML5** - セマンティックマークアップ
- **CSS3** - グラスモーフィズム、アニメーション
- **JavaScript (ES6+)** - Intersection Observer、フォーム処理
- **Font Awesome 6.5.1** - アイコンライブラリ
- **Google Fonts** - Noto Sans JP & Inter

## 📁 ファイル構成

```
association-support/
├── index.html      # メインHTMLファイル
├── style.css       # スタイルシート
├── script.js       # JavaScriptファイル
└── README.md       # このファイル
```

## 🎨 デザインシステム

### カラーパレット
- Primary: `#1a2332` (Dark Navy)
- Secondary: `#2c3e50` (Medium Blue)
- Accent: `#3498db` (Light Blue)
- Accent Light: `#5dade2`

### タイポグラフィ
- 日本語: Noto Sans JP
- 英数字: Inter

## 📧 お問い合わせ

株式会社HILUCO  
Email: info@hiluco.co.jp  
Website: https://hiluco.jp/

## 📄 ライセンス

© 2024 HILUCO Inc. All rights reserved.
