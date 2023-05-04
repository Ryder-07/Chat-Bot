var names = document.querySelector(".mob_name");
console.log(`${names}`);

function get_reply(str) {
  var data = {
    "hi|hello": [
      "ohayo onee-chan",
      "Good morning master what shall i do for you",
      "i am at your service senpai",
    ],
    "who are you": [
      `i am your assistant today my name is ${names}`,
      "I am  a chat bot designed by Rudra",
      "nice to meet you i am shinobu",
      "watashiwa shinobu dayo (My name is shinobu )",
      "I am a Shinobu,Created by Rudra,Inspired from demon slayer",
    ],
    "how are you|how do you do|how do you feel": [
      "I am good",
      "I am  chatbot so i don't feel such emotions",
      "i am feeling lovely today how bout you",
      "senpai i am greatful that you asked this ,in your presence i am feeling heavenly💖",
      "thank you for asking,but sadly i am a program so i don't have any such feelings",
    ],
    "what are you doing": [
      "i am here at you service to assist you with any of your queries",
      "don't worry you will be fine , I am the strongest",
      "Know your place you fool💀",
      "Have some faith in me senpai",
    ],
    " bot007": [
      "Those who stand at the top determine what’s wrong and what’s right! This very place is neutral ground! Justice will prevail, you say? But, of course, it will! Whoever wins this war becomes justice!",
      "Fear is not evil. It tells you what weakness is. And once you know your weakness, you can become stronger as well as kinder.",
      "What good are dreams, if all you do is work? There’s more to life than hitting the books, I hope you know.",
      "The loneliest people are the kindest. The saddest people smile the brightest. The most damaged people are the wisest. All because they don’t wish to see anyone else suffer the way they did.",
      "Even if I searched the world over, no one could compare to you.",
    ],
  };
  var rep = [];
  var rep_array = [];
  str = str.toLowerCase();
  for (var reply in data) {
    var arr = reply.toLowerCase().split("|");
    if(arr.some(substring=>str.includes(substring+" ") || str.includes(" "+ substring) || str==substring)){
      rep=data[reply];
    }
    if (rep.length>0){
      rep_array=rep;
    }
    else{
      rep_array=data["bot007"]
    }
  }
  return rep_array[Math.floor(Math.random()*rep_array.length)]
}

onload = function () {
  var message = document.getElementById("msg");
  var message_box = document.getElementById("message_box");
  var send = document.getElementById("send");
  send.onclick = function sent() {
    var text = message.value.trim();
    if (text.length > 0) {
      message_box.innerHTML += `<section id="user_section" >
        <div class="user_message">${text}<div>
      </section>`;
      message.value = "";
    } else {
      alert("please enter a valid value");
    }
    var final_rep =get_reply(text);
    setTimeout(function(){ 
      message_box.innerHTML += `<section id="bot_section" >
        <div class="bot_message">${final_rep}<div>
      </section>`;
      message_box.scrollTop = message_box.innerHTML.length;

    },500)
  
  };

  message.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      send.click();
    }
  });
  
};
