/*CMD
  command: 🛠 Withrawal Settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [{title: "Automatically" 
, command: "Automatically"},
    {title: "Manually", command: 
"Manually"}],
    [{title: "❌ Disable Withrawals", command: 
"StopPayments"}]
];
Bot.sendInlineKeyboard(buttons,"⚙️* Withrawal Settings* \nYou can Setup Your Withrawal Setting Here")
