"use client";

import React, { useState } from 'react'
import styles from "./links.module.css"
import NavLink from './navLink/NavLink'
import Image from 'next/image';

export default function Links() {
    const links = [
        {
            title: "HomePage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        }
    ]
    const [open, setOpen] = useState(false);

    const session = true;
    const isAdmin = true;
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}{
                    session ? (<>
                        {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )
                }
            </div>
            <Image src='/menu.png' width={30} height={30} className={styles.menuButton} onClick={()=>setOpen((prev)=>!prev)}/>
                {open && (<div className={styles.modileLinks}>
                    {
                        links.map((link) => (
                            <NavLink item={link} key={link.title} />
                        ))
                    }
                </div>)}
        </div>

    )
}
