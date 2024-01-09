import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function withAuth(Component) {
  return function AuthComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token");

      if (!token) {
        router.push("/login");
      }
    }, [router]);

    return <Component {...props} />;
  };
}
