/*CMD
  command: /main
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: 🔙 return
CMD*/

if(user.telegramid==869352356){
Bot.sendKeyboard("⚖️ Account Balance ⚖️ , \n➕️ Deposit  ,👨‍👩‍👧‍👧 Referral , ➖ Withdraw  ,\n  ⚙️ Settings ,  🗨 About ,\n📮 Admin Panel 📮","*🏠 Main Menu*")
}else{
let user = User.getProperty("status");
if (user=="member" | user =="administrator" | user=="creator"){

Bot.sendKeyboard("⚖️ Account Balance ⚖️ , \n➕️ Deposit  ,👨‍👩‍👧‍👧 Referral , ➖ Withdraw  ,\n  ⚙️ Settings ,  🗨 About ","*🏠 Main Menu*")
}
}
