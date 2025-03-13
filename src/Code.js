/**
 * MEC - Mind Engineering Coaching Tool
 * 森山雄太コーチング用のGASプロジェクト
 */

// コーポレートカラー
const CORPORATE_COLOR = '#c50502';

/**
 * ウェブアプリとして公開した際のエントリーポイント
 */
function doGet() {
  const now = new Date();
  const formattedDate = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy年MM月dd日 HH:mm:ss');
  
  const html = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
          }
          .header {
            color: ${CORPORATE_COLOR};
            font-size: 2em;
            margin-bottom: 20px;
          }
          .date {
            color: #666;
            font-size: 1.2em;
            margin-bottom: 30px;
          }
          .footer {
            margin-top: 50px;
            font-size: 0.8em;
            color: #999;
          }
        </style>
      </head>
      <body>
        <div class="header">マインドエンジニアリング・コーチング</div>
        <div class="date">現在の日時: ${formattedDate}</div>
        <p>GitHub Actionsによる自動デプロイのテスト成功！</p>
        <div class="footer">© 2025 森山雄太 MEC</div>
      </body>
    </html>
  `;
  
  return HtmlService.createHtmlOutput(html);
}

/**
 * テスト関数
 */
function myFunction() {
  Logger.log('This is a test function');
  return 'Function executed!';
}

/**
 * 日付フォーマット関数
 * @param {Date} date - フォーマットする日付
 * @return {string} フォーマットされた日付文字列
 */
function formatDate(date) {
  return Utilities.formatDate(date, 'Asia/Tokyo', 'yyyy-MM-dd');
}
