"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((res => res.json()))
      .then((data) => {
        console.log("data", data);
      });
  }, []);

  return (
    <main>
      {articles.map((article) => (
        <div key={article.id} className="text-white">{article.title}</div>
      ))}
    </main>
  );
}
