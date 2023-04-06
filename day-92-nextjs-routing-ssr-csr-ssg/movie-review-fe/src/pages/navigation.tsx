import React from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function NavigationPage(): JSX.Element {
  const [navigate, setNavigate] = React.useState(false);
  const router = useRouter();
  React.useEffect(() => {
    if (navigate) {
      router.push("/contact");
    }
  }, [navigate]);
  return (
    <div>
      <h1>navigation </h1>
    </div>
  );
}
