"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Navbar.module.scss";
import { Icon } from "../Icons";
import { NotificationDropdown } from "./NotificationDropdown";
import { ProfileDropdown } from "./ProfileDropdown";

import { useSidebar } from "../../context/SidebarContext";
import { Menu, X } from "lucide-react";
import { useForm } from "react-hook-form";


export const Navbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isOpen: isSidebarOpen, toggleSidebar } = useSidebar();
  
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      search: searchParams.get("search") || "",
    },
  });

  // Synchronize searchValue with URL parameter when it changes externally
  useEffect(() => {
    setValue("search", searchParams.get("search") || "");
  }, [searchParams, setValue]);

  const onSubmit = (data: { search: string }) => {
    const params = new URLSearchParams(searchParams.toString());
    const query = data.search.trim();
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    // Reset to page 1 on new search submission
    params.set("page", "1");
    router.push(`/users?${params.toString()}`);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <button 
          type="button" 
          className={styles.hamburger} 
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link href="/" className={styles.logo}>
          <Icon name="logo" width={145} height={30} />
        </Link>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Search for anything" 
            {...register("search")}
          />
          <button type="submit">
            <Icon name="search" width={14} height={14} />
          </button>
        </form>
      </div>

      
      <div className={styles.right}>
        <Link href="#" className={styles.docs}>
          Docs
        </Link>

        {/* Notifications */}
        <div className={styles.dropdownWrapper}>
          <button 
            type="button" 
            className={styles.bellButton}
            onClick={() => { setShowNotifications(!showNotifications); setShowProfile(false); }}
            aria-label="View notifications"
          >
            <Icon name="bell" width={20} height={20} />
          </button>
          
          {showNotifications && (
            <NotificationDropdown onClose={() => setShowNotifications(false)} />
          )}
        </div>

        {/* Profile */}
        <div className={styles.dropdownWrapper}>
          <button 
            type="button" 
            className={styles.profileButton}
            onClick={() => { setShowProfile(!showProfile); setShowNotifications(false); }}
          >
            <Image
              src="/images/user-avatar.png"
              alt="Profile Avatar"
              width={48}
              height={48}
              className={styles.avatar}
            />
            <span className={styles.name}>Adedeji</span>
            <Icon name="arrow-down" width={10} height={10} />
          </button>

          {showProfile && (
            <ProfileDropdown onClose={() => setShowProfile(false)} />
          )}
        </div>
      </div>
    </nav>
  );
};
