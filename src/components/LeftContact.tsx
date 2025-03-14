import React from "react";
import Zalo from "@public/community/zalo.svg";
import Facebook from "@public/community/facebook_1.svg";
import X from "@public/community/x.svg";
import Linkedin from "@public/community/linkedin.svg";
import Reddit from "@public/community/reddit.svg";
import Link from "next/link";

const contacts = [
  {
    name: "Zalo",
    icon: <Zalo />,
    link: "https://zalo.me/0978-600-600",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com",
  },
  {
    name: "X",
    icon: <X />,
    link: "https://www.x.com",
  },
  {
    name: "Linkedin",
    icon: <Linkedin />,
    link: "https://www.linkedin.com",
  },
  {
    name: "Reddit",
    icon: <Reddit />,
    link: "https://www.reddit.com",
  },
];

const LeftContact = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {contacts.map((contact) => (
        <Link
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 h-12 w-12 rounded-2xl border border-green-300 hover:bg-green-100 "
          key={contact.name}
        >
          {contact.icon}
        </Link>
      ))}
    </div>
  );
};

export default LeftContact;
