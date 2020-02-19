/*CMD
  command: /adminlogin
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin panel
  answer: 
  keyboard: 
  aliases: 📮 admin panel 📮
CMD*/

if(user.telegramid==869352356){
User.addToGroup('Admin')
Bot.sendKeyboard("👤 User Settings , 🛠 Withrawal Settings \n 🔊 Brodcasting , 🔐 Log Out" , " *Hi * @" +user.username+" Welcome To Admin Panel");
}
