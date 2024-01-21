"use client";

import { useFormState, useFormStatus } from "react-dom";
import { signIn } from "@/service/auth/auth";
import { AuthError } from "next-auth";

import { authenticate } from "@/app/lib/actions";

export default function LoginForm() {
  const [errorMessage, formAction] = useFormState(authenticate, null);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          required
        />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input
          id="password"
          type="password"
          required
          placeholder="패스워드를 입력해주세요"
        />
      </div>
      <SubmitButton />
    </form>
  );
}

function SubmitButton() {
  const status = useFormStatus();

  return (
    <button disabled={status.pending} type="submit">
      {status.pending ? "로그인 중..." : "로그인"}
    </button>
  );
}
