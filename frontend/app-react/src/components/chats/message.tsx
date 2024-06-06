import Image from "next/image";
import { TextBubble } from "../text-bubble";

type MessageType = "text" | "image";

type MessageProps = {
  type: MessageType;
  content: string;
};

type MessageContentsProps = {
  messages: MessageProps[];
};

const MessageContents = ({ messages }: MessageContentsProps) => {
  return (
    <ul>
      {messages.map((message, index) => {
        return (
          <li key={`${message.content}-${index}-${message.type}`}>
            {message.type === "text" && <TextMessage message={message} />}
            {message.type === "image" && <ImageMessage message={message} />}
          </li>
        );
      })}
    </ul>
  );
};

const Message = ({ message }: { message: MessageProps }) => {
  return <TextBubble>안녕하세요</TextBubble>;
};

const TextMessage = ({ message }: { message: MessageProps }) => {
  return <div>{message.content}</div>;
};

const ImageMessage = ({ message }: { message: MessageProps }) => {
  return (
    <Image
      src={"https://github.com/shadcn.png"}
      alt={"unknown"}
      width={100}
      height={100}
    />
  );
};

export { Message, MessageContents };
