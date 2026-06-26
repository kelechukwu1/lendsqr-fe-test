"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";
import { Icon } from "../../components/Icons";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login and redirect to dashboard
    router.push("/users");
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.logo}>
          <Icon name="logo" width={174} height={36} />
        </div>
        <div className={styles.illustration}>
          <Image
            src="/images/login-image.png"
            alt="Login Illustration"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
      
      <div className={styles.rightSection}>
        <div className={styles.mobileLogo}>
          <Icon name="logo" width={140} height={30} />
        </div>
        
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>

        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <input type="email" placeholder="Email" required />
          </div>
          
          <div className={styles.inputGroup}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              className={styles.toggleVisibility}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>

          <button type="button" className={styles.forgotPassword}>
            Forgot PASSWORD?
          </button>

          <button type="submit" className={styles.submitButton}>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
}
