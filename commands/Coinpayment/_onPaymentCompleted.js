/*CMD
  command: /onPaymentCompleted
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Coinpayment
  answer: 
  keyboard: 
  aliases: 
CMD*/



Bot.sendMessage("Payment completed");

let amount = options.amount;

let res = Libs.ResourcesLib.userRes("miner");
res.add(amount)

Bot.sendMessage("Added to balance, Doge Miners: " + amount);
