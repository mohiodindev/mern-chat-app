import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = new Date(message.createdAt)
    .toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "")
    .replace(/:00 /, " ")
    .replace(/:00/, "")
    .replace(/AM/, "AM")
    .replace(/PM/, "PM");

  // format as 1 jan 2021, 12:00 PM

  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {message.message}
      </div>
      <div
        className="chat-footer opacity-50 text-xs flex gap-1 items-center"
        style={{
          marginTop: "0.1rem",
          backgroundColor: "black",
          color: "white",
          padding: "0.2rem",
          borderRadius: "0.2rem",
        }}
      >
        {formattedTime}
      </div>
    </div>
  );
};
export default Message;
