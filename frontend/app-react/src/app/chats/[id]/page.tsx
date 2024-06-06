"use client";
import Image from "next/image";

import { Avatar } from "@/components/avatar";
import { TextBubble } from "@/components/text-bubble";
import { cn } from "@/lib/utils";
import useScrollTo from "@/lib/useScrollTo";
import { useEffect, useRef } from "react";
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

  return (
    <div>
      <button onClick={() => scrollToBottom()}>Scroll to bottom</button>
      <ul className={cn("flex flex-col gap-1")}>
        <div className="flex justify-center">
          <TextBubble type="default" size={"default"}>
            2024년 6월 5일 수요일
          </TextBubble>
        </div>
        <li>
          <MyMessage />
        </li>
        <li>
          <OtherMessage />
        </li>
        <li>
          <MyMessage />
        </li>
        <li>
          <OtherMessage />
        </li>
        <li>
          <MyMessage />
        </li>
        <li>
          <OtherMessage />
        </li>
        <li>
          <MyMessage />
        </li>
        <li>
          <OtherMessage />
        </li>
        <li>
          <MyMessage />
        </li>
        <li>
          <OtherMessage />
        </li>
      </ul>
      <div className={cn("sticky bottom-0")}>
        <ChatInput
          onSubmit={(data) => {
            console.log("hsshin", data);
          }}
        />
      </div>
    </div>
  );
}
