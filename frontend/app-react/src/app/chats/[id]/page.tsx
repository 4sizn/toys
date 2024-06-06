"use client";
import Image from "next/image";

import { Avatar } from "@/components/avatar";
import { TextBubble } from "@/components/text-bubble";
import { cn } from "@/lib/utils";
import useScrollTo from "@/lib/useScrollTo";
import { useState } from "react";
import { MessageContents } from "@/components/chats/message";
import { ChatInput } from "@/components/chat-input";

type MessageType = {};
type MessageProps = MessageType;

const MyMessage = (props: MessageType) => {
  return (
    <div
      className={cn("flex flex-row-reverse")}
      style={{
        background: "red",
      }}
    >
      <Avatar src="" name=""></Avatar>
      <MessageContents
        messages={[
          {
            content: "컨텐츠입니다",
            type: "text",
          },

          {
            content: "컨텐츠입니다",
            type: "image",
          },
          {
            content: "컨텐츠입니다",
            type: "text",
          },
        ]}
      />
      <div className={cn("self-end")}>03.00pm</div>
    </div>
  );
};

const OtherMessage = (props: MessageProps) => {
  return (
    <div
      className={cn("flex")}
      style={{
        background: "red",
      }}
    >
      <Avatar src="" name=""></Avatar>
      <MessageContents
        messages={[
          {
            content: "컨텐츠입니다",
            type: "text",
          },

          {
            content: "컨텐츠입니다",
            type: "image",
          },
          {
            content: "컨텐츠입니다",
            type: "text",
          },
        ]}
      />
      <div className={cn("self-end")}>03.00pm</div>
    </div>
  );
};

export default function ChatPage() {
  const { scrollToBottom } = useScrollTo();
  const [messages, setMessages] = useState([
    {
      isMe: false,
      message: "안녕하세요",
      type: "text",
    },
    {
      isMe: true,
      message: "안녕하세요",
      type: "text",
    },
    {
      isMe: false,
      message: "안녕하세요",
      type: "text",
    },
    {
      isMe: false,
      message: "안녕하세요",
      type: "text",
    },
    {
      isMe: true,
      message: "안녕하세요",
      type: "text",
    },
    {
      isMe: false,
      message: "안녕하세요",
      type: "text",
    },
    {
      isMe: true,
      message: "안녕하세요",
      type: "text",
    },
    {
      isMe: false,
      message: "안녕하세요",
      type: "text",
    },
  ]);

  return (
    <div>
      <button onClick={() => scrollToBottom()}>Scroll to bottom</button>
      <ul className={cn("flex flex-col gap-1")}>
        <div className="flex justify-center">
          <TextBubble type="default" size={"default"}>
            2024년 6월 5일 수요일
          </TextBubble>
        </div>
        {messages.map((message, index) => (
          <li key={index}>{message.isMe ? <MyMessage /> : <OtherMessage />}</li>
        ))}
      </ul>
      <div className={cn("sticky bottom-0")}>
        <ChatInput
          onSubmit={(data) => {
            setMessages((prev) => [
              ...prev,
              {
                isMe: true,
                message: data.content,
                type: "text",
              },
            ]);
            window.setTimeout(() => {
              scrollToBottom();
              console.log("hsshin", data);
            }, 0);
          }}
        />
      </div>
    </div>
  );
}
