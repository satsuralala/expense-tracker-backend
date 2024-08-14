"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Home() {
  const [categories, setCategories] = useState([]);

  function loadlist() {
    fetch(`http://localhost:4000/categories/list`)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setCategories(data);
      });
  }

  useEffect(() => {
    loadlist();
  }, []);

  function createNew() {
    const name = prompt("name");

    fetch(`http://localhost:4000/categories/create?name=${name}`)
      .then((res) => res.json())
      .then(() => {
        loadlist();
      });
  }

  return (
    <main>
      <button onClick={createNew}>add new</button>
      {categories.map((category) => (
        <div key={category.name} className="text-white">
          {category.name}
        </div>
      ))}
    

    </main>
  );
}
