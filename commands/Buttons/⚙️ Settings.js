/*CMD
  command: ⚙️ Settings
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    [{title: "💼 Wallet Setting", 
command: "user_wallet"},
      {title: "📢 Groups", command: 
"community_chat"}
],
     [ {title: "📊 Bot Statistics", command: "Statistic"},
    {  title: "☎️ Administration", command: "administration"}]
];
Bot.sendInlineKeyboard(buttons,"*⚙️ Tools and Informations*")
