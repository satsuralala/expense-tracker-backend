"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [categories, setCategories] = useState([]);

  function loadlist() {
    fetch(`http://localhost:4000/categories`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }

  useEffect(() => {
    loadlist();
  }, []);

  function createNew() {
    const name = prompt("Enter category name:");
    if (name) {
      fetch(`http://localhost:4000/categories`, {
        method: "POST",
        body: JSON.stringify({ name: name }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then(() => {
        loadlist();
      });
    }
  }

  function deleteCategory(id) {
    if (confirm("Do you want to delete this?")) {
      fetch(`http://localhost:4000/categories/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.status == 404) {
          alert("category no found");
        }
        loadlist();
      });
    }
  }

  function editCategory(id, oldName) {
    const name = prompt("Enter new category name:", oldName);
    if (name) {
      fetch(`http://localhost:4000/categories/${id}`, {
        method: "PUT",
        body: JSON.stringify({ name }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })

        .then(() => {
          loadlist();
        });
    }
  }

  return (
    <main>
      <Button onClick={createNew}>Add New</Button>
      {categories.map((category) => (
        <div className="py-5 px-5" key={category.id}>
          <div className="text-black pb-3">{category.name}</div>
          <Button
            variant="outline"
            className="mr-4"
            onClick={() => editCategory(category.id, category.name)}
          >
            Edit
          </Button>
          <Button
            variant="destructive"
            onClick={() => deleteCategory(category.id)}
          >
            Delete
          </Button>
        </div>
      ))}
    </main>
  );
}
