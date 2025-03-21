import React from "react";
import styling from "./subComponentsStyling/Chat.module.css";
import profilePic from "./chatPerson.jpg";
import { MdSend } from "react-icons/md";
const Chat = () => {
  return (
    <>
      <div className={styling.ChatParent}>
        <div className={styling.picAndName}>
          <img src={profilePic} alt="" className={styling.profilePic} />
          <p className={profilePic.name}>Touseef From Naxon Solution</p>
        </div>
        <p className={styling.question}>
          Cheers! Thank You for Choosing Our Services. How can we help you?
        </p>

        <form action="submit">
          <input
            className={styling.input}
            type="text"
            placeholder="Name"
            required
          />
          <input
            className={styling.input}
            type="text"
            placeholder="Email"
            required
          />
          <input
            className={styling.input}
            type="text"
            placeholder="Write Your Message"
            required
          />
          <button className={styling.sendBtn}>
            <MdSend />
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
