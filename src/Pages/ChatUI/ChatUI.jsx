import React from "react";
import styling from "./ChatUI.module.css";
import { IoIosSearch } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";

const ChatUI = () => {
  return (
    <>
      {/* Whole Chat UI */}
      <div className={styling.chatUiParent}>
        {/* Left Side of Chat UI */}
        <div className={styling.chatUiLeftParent}>
          <div className={styling.chatUiSearchParent}>
            <input
              className={styling.chatUiSearch}
              type="text"
              placeholder="Search"
            />
            <IoIosSearch className={styling.searchIcon} />
          </div>

          <div className={styling.chatUiInfoContainer}>
            {/* Chat UI Info */}
            <div className={styling.chatUiInfoParent}>
              <div className={styling.avatarDiv}>
                <img src="../avatar.jpg" alt="" className={styling.avatar} />
              </div>
              <div className={styling.chatUiTextParent}>
                <p className={styling.chatUiNameText}>Zahid</p>
                <p className={styling.chatUiTimeText}>Time</p>
              </div>
            </div>
            {/* Chat UI Info */}

            {/* Chat UI Info */}
            <div className={styling.chatUiInfoParent}>
              <div className={styling.avatarDiv}>
                <img src="../avatar.jpg" alt="" className={styling.avatar} />
              </div>
              <div className={styling.chatUiTextParent}>
                <p className={styling.chatUiNameText}>Zahid</p>
                <p className={styling.chatUiTimeText}>Time</p>
              </div>
            </div>
            {/* Chat UI Info */}

            {/* Chat UI Info */}
            <div className={styling.chatUiInfoParent}>
              <div className={styling.avatarDiv}>
                <img src="../avatar.jpg" alt="" className={styling.avatar} />
              </div>
              <div className={styling.chatUiTextParent}>
                <p className={styling.chatUiNameText}>Zahid</p>
                <p className={styling.chatUiTimeText}>Time</p>
              </div>
            </div>
            {/* Chat UI Info */}

            {/* Chat UI Info */}
            <div className={styling.chatUiInfoParent}>
              <div className={styling.avatarDiv}>
                <img src="../avatar.jpg" alt="" className={styling.avatar} />
              </div>
              <div className={styling.chatUiTextParent}>
                <p className={styling.chatUiNameText}>Zahid</p>
                <p className={styling.chatUiTimeText}>Time</p>
              </div>
            </div>
            {/* Chat UI Info */}

            {/* Chat UI Info */}
            <div className={styling.chatUiInfoParent}>
              <div className={styling.avatarDiv}>
                <img src="../avatar.jpg" alt="" className={styling.avatar} />
              </div>
              <div className={styling.chatUiTextParent}>
                <p className={styling.chatUiNameText}>Zahid</p>
                <p className={styling.chatUiTimeText}>Time</p>
              </div>
            </div>
            {/* Chat UI Info */}

            {/* Chat UI Info */}
            <div className={styling.chatUiInfoParent}>
              <div className={styling.avatarDiv}>
                <img src="../avatar.jpg" alt="" className={styling.avatar} />
              </div>
              <div className={styling.chatUiTextParent}>
                <p className={styling.chatUiNameText}>Zahid</p>
                <p className={styling.chatUiTimeText}>Time</p>
              </div>
            </div>
            {/* Chat UI Info */}

            {/* Chat UI Info */}
            <div className={styling.chatUiInfoParent}>
              <div className={styling.avatarDiv}>
                <img src="../avatar.jpg" alt="" className={styling.avatar} />
              </div>
              <div className={styling.chatUiTextParent}>
                <p className={styling.chatUiNameText}>Zahid</p>
                <p className={styling.chatUiTimeText}>Time</p>
              </div>
            </div>
            {/* Chat UI Info */}

            {/* Chat UI Info */}
            <div className={styling.chatUiInfoParent}>
              <div className={styling.avatarDiv}>
                <img src="../avatar.jpg" alt="" className={styling.avatar} />
              </div>
              <div className={styling.chatUiTextParent}>
                <p className={styling.chatUiNameText}>Zahid</p>
                <p className={styling.chatUiTimeText}>Time</p>
              </div>
            </div>
            {/* Chat UI Info */}

            {/* Chat UI Info */}
            <div className={styling.chatUiInfoParent}>
              <div className={styling.avatarDiv}>
                <img src="../avatar.jpg" alt="" className={styling.avatar} />
              </div>
              <div className={styling.chatUiTextParent}>
                <p className={styling.chatUiNameText}>Zahid</p>
                <p className={styling.chatUiTimeText}>Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Chat UI */}
        <div className={styling.chatUiRightParent}>
          {/*Right Side Header */}
          <div className={styling.header}>
            <div className={styling.headerLeft}>
              <div>
                <img
                  className={styling.avatarRight}
                  src="./avatar.jpg"
                  alt=""
                />
              </div>
              <div>Zahid</div>
            </div>

            <div className={styling.headerRight}>
              <div>
                <button className={styling.allBtn}>
                  <IoCallSharp />
                </button>
              </div>
              <div>
                <button className={styling.allBtn}>
                  <BsThreeDotsVertical />
                </button>
              </div>
            </div>
          </div>
          {/* End of Right Side Header */}

          {/* Chat UI Chat */}
          <div className={styling.chatUiChatParent}>
            {/* Chat UI Chat Body */}
            <div className={styling.chatUiBody}></div>
            {/* End of Chat UI Chat Body */}

            {/* Chat UI Chat Footer */}
            <div className={styling.chatUiChatFooter}>
              <div className={styling.footerLeft}>
                <div>
                  <button className={styling.allBtn}>
                    <ImAttachment />
                  </button>
                </div>
                <div className={styling.footerInputDiv}>
                  <input
                    className={styling.footerInput}
                    type="text"
                    placeholder="Type a message..."
                  />
                </div>
              </div>

              <div className={styling.footerRight}>
                <div className={styling.sendBtnDiv}>
                  <button className={styling.sendBtn}>Send</button>
                </div>
              </div>
            </div>
            {/* End of Chat UI Chat Footer */}
          </div>
          {/* End of Chat UI Chat */}
        </div>
      </div>
    </>
  );
};

export default ChatUI;
