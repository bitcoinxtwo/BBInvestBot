/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment
  answer: Done
  keyboard: 
  aliases: 
CMD*/


Bot.sendMessage("It is bitcoin Double 24Hours bot. Setup is not allowed")  // remove this line

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Libs.CoinPayments.setPrivateKey("15b2FfeFe26ed028BCEf1A7F1aeC6b40c554E81ddcd8526d37a565a5A92522cB");
Libs.CoinPayments.setPublicKey('cd1ffef4653b9e434f40e4708182c94e22111addcba9812e8afd1436402b7869');

// Get your BB Api Key from Bots.Business App in Profile
Libs.CoinPayments.setBBApiKey('qKPoTcj-Tsd2XK2DcoSf-70wEBYv47SNupKyjn09');
