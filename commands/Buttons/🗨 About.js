/*CMD
  command: 🗨 About
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Buttons

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

msg= "__Message Still Not Set__"
Api.sendMessage({chat_id:chat.chatid,text:msg,parse_mode:"markdownv2"})
