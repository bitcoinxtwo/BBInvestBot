/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Join System
  answer: 💡 *To use this bot you must join this channel:* @doublerobotpayments
  keyboard: ✅ Joined
  aliases: 
CMD*/

function doTouchOwnLink(){
  Bot.runCommand("/main");
}

function doAttracted(channel){
  Bot.runCommand("/main")
}
function doAtractedByUser(refUser){
  Bot.runCommand("/main")
}
function doAlreadyAttracted(){
  Bot.runCommand("/main");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions);
