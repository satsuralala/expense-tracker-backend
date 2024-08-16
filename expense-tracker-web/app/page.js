"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [categories, setCategories] = useState([]);

  function loadlist() {
    fetch(`http://localhost:4000/categories`)
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

    fetch(`http://localhost:4000/categories/#`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        loadlist();
      });
  }

  function Delete(index) {
    if (confirm("Do u want to delete this?")) {
      fetch(`http://localhost:4000/categories/#`, {
        method: "DELETE",
        body: JSON.stringify({ id: index }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then(() => {
          loadlist();
        });
    }
  }

  function Edit(id, oldName) {
    const name = prompt("name", oldName);
    if (name) {
      fetch(`http://localhost:4000/categories/#`, {
        method: "PUT",
        body: JSON.stringify({ id: id,name: name}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then(() => {
          loadlist();
        });
    }

    fetch(`http://localhost:4000/categories`)
      .then((res) => res.json())
      .then(() => {
        loadlist();
      });
  }

  return (
    <main>
      <button onClick={createNew}>add new</button>
      {categories.map((category, index) => (
        <div className="py-5 px-5 ">
          <div key={category.id} className="text-black pb-3">
            {category.name}
          </div>
          <Button
            variant="outline"
            className="mr-4"
            onClick={() => Edit(category.id, category.name)}
          >
            edit
          </Button>
          <Button variant="destructive" onClick={() => Delete(category.id)}>
            delete
          </Button>
        </div>
      ))}
    </main>
  );
}
