"use client";
import { useSelector } from "@/app/store";
import { useRouter } from "next/navigation";

const AuthCheck = ({children}) => {
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  if(!isAuthenticated) {
    router.push('/login');
  } else {
    return (
      <>
        {children}
      </>
    );
  }
};

export default AuthCheck;