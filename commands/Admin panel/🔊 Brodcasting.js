/*CMD
  command: 🔊 Brodcasting
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
    {title: "🛂 Private Message", command: "/send_user"},
    {title: "🔊 Global Message", command: 
"/send_g"}
];
Bot.sendInlineKeyboard(buttons,"*🔊 Brodcasting*\nSend message to all your bot your Bot users and users of your Bot")
