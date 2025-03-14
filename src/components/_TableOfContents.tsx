"use client";

import React from "react";

interface Heading {
  id: string;
  text: string;
  tag: string;
}

export default function ToC() {
  const [headings, setHeadings] = React.useState<Heading[]>([]);

  React.useEffect(() => {
    const wrapperElement = document.querySelector(".mdx-css-wrapper");
    const h2Elements = Array.from(wrapperElement?.querySelectorAll("h2, h3") || []);
    const extractedHeadings = h2Elements.map((h) => ({
      id: (h as HTMLElement).id,
      text: (h as HTMLElement).innerText,
      tag: h.tagName.toLowerCase(),
    }));

    setHeadings(extractedHeadings);
  }, []);

  return (
    <nav className="toc min-h-[80vh]">
      <h3 className="font-bold text-lg">Nội dung bài viết</h3>
      <ul className="pl-4 list-none">
        {headings.map(({ id, text, tag }) => (
          <li key={id}>
            <a href={`#${id}`} className={`text-green-600 hover:underline ${tag === "h3" ? "ml-4" : ""}`}>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
