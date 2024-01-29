import { auth } from "@/service/auth/auth";
import { SignIn, SignOut } from "./auth-components";

export default async function UserButton() {
  const session = await auth();
  console.log("hsshin session", session);
  if (session?.user) {
    return <SignIn />;
  } else {
    return <SignOut />;
  }
}
