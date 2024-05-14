import React from 'react';
import logo from '../Assets/Logo.png';
const Chatbot = () => {
  return (
    <div>
        <style>
{`
    df-messenger{
        --df-messenger-bot-message: #fffff;
        --df-messenger-button-titlebar-color: #141E46;
        --df-messenger-chat-background-color: #fffff;
        --df-messenger-user-message: #9CAFAA

    }
`}
 </style>
 
      <df-messenger
  //intent="Spanishbot"
  chat-icon={logo}
  intent="WELCOME"
  chat-title="Designerweb"
  agent-id="f2c46c05-5c1f-4ac2-b806-66bf5412712c"
  language-code="en"
  df-messenger-font-color = "red"
></df-messenger>
    </div>
  )
}

export default Chatbot