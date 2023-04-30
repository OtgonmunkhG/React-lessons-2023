import { useSession, signIn, signOut } from "next-auth/react";
import styles from "../styles/header.module.css";
export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  const handleLogin = (e: any) => {
    e.preventDefault();
    signIn();
  };

  const handleLogout = (e: any) => {
    e.preventDefault();
    signOut();
  };
  return (
    <div>
      <header>
        <noscript>
          <style>{`.nojs-show {opacity:1 ; top: 0;}`}</style>
        </noscript>
        <div>
          <div className={styles.signedInStatus}>
            {!session && (
              <div
                className={`.nojs-show ${
                  !session && loading ? styles.loading : styles.loaded
                }`}
              >
                <p>You are not signed in</p>
                <a href={`/api/auth/signin`} onClick={handleLogin}>
                  Sign in
                </a>
              </div>
            )}

            {session?.user && (
              <div className={styles.navItems}>
                {session?.user.image && (
                 <div>
                   <span
                    style={{ backgroundImage: `url(${session.user.image})` }}
                    className={styles.avatar}
                  ></span>
                  <span className={styles.signedInText}>
                  <div>
                  <small>Signed in as</small>
                  <br />
                  <strong>{session.user.email || session.user.name}</strong>
                  </div>
                </span>
                 </div>
                )}
                
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={handleLogout}
                >
                  Sing out
                </a>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
