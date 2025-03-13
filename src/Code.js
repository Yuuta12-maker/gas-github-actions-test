function doGet() {
  return HtmlService.createHtmlOutput('<h1 style="color:#c50502;">Hello, MEC!</h1>');
}

function myFunction() {
  Logger.log('This is a test function');
  return 'Function executed!';
}