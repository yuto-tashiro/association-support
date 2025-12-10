# Formspree セットアップガイド

フォームから直接 info@hiluco.co.jp にメールを送信するための設定手順です。

## 🚀 セットアップ手順（5分で完了）

### 1. Formspreeアカウント作成

1. https://formspree.io/ にアクセス
2. **Get Started** をクリック
3. メールアドレスで無料アカウントを作成（月50件まで無料）

### 2. 新しいフォームを作成

1. ダッシュボードで **+ New Form** をクリック
2. フォーム名を入力（例: "協会・学会運営サポート問い合わせ"）
3. **Email** に `info@hiluco.co.jp` を入力
4. **Create Form** をクリック

### 3. フォームIDを取得

作成後、以下のようなURLが表示されます:
```
https://formspree.io/f/YOUR_FORM_ID
```

この `YOUR_FORM_ID` の部分（例: `xpznqwer`）をコピーします。

### 4. index.htmlを更新

`index.html` の234行目付近を編集:

**変更前:**
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**変更後:**
```html
<form class="contact-form" id="contactForm" action="https://formspree.io/f/xpznqwer" method="POST">
```

`YOUR_FORM_ID` を実際のフォームIDに置き換えてください。

### 5. GitHubにプッシュ

```bash
cd "/Users/tashiroyuto/Dropbox/Mac/Desktop/association support"
git add .
git commit -m "Configure Formspree for contact form"
git push
```

## ✅ 完了！

これで、フォームから送信されたメッセージが自動的に info@hiluco.co.jp に届くようになります。

## 📧 受信メールの内容

以下の情報がメールで届きます:
- 協会・学会名
- お名前
- メールアドレス
- 電話番号
- ご希望のサービス
- お問い合わせ内容

## 🔧 その他の設定（オプション）

### 自動返信メールの設定

Formspreeダッシュボードで:
1. フォームを選択
2. **Settings** > **Autoresponder** に移動
3. 自動返信メッセージを設定

### スパム対策

Formspreeには自動的にスパム対策が含まれています。
さらに強化したい場合は、reCAPTCHAを有効化できます。

## 💰 料金プラン

- **Free**: 月50件まで無料
- **Basic**: 月$10で1,000件まで
- **Pro**: 月$40で10,000件まで

最初は無料プランで十分です。

## 🆘 トラブルシューティング

### フォームが送信されない場合

1. ブラウザのコンソールでエラーを確認
2. FormspreeのフォームIDが正しいか確認
3. info@hiluco.co.jp のメールアドレスが正しいか確認

### メールが届かない場合

1. 迷惑メールフォルダを確認
2. Formspreeダッシュボードで送信履歴を確認
3. info@hiluco.co.jp のメールアドレスが有効か確認

## 代替案

Formspreeが使えない場合の代替サービス:
- **Netlify Forms** (Netlifyでホスティングする場合)
- **Google Forms** (Googleフォームに転送)
- **EmailJS** (クライアントサイドのみで動作)
