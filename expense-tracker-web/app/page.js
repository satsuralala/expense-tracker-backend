"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { AddCategory } from "@/components/category";

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
        body: JSON.stringify({
          name: name,
          color: color,
        }),
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
      }).then(() => {
        loadlist();
      });
    }
  }

  return (
    <main>
      {/* <Button onClick={createNew}>Add New</Button>
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
      ))} */}
      {/* <div className="bg-[#FFFFFF] py-4 px-[120px] ">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-6 items-center">
            <Image src="/images/icon.png" className="w-7 h-7" />
            <button className="text-slate-900">Dashboard</button>
            <button>Records</button> 

            <div className="flex">
            <Badge className="bg-blue-500">+Record</Badge>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
          </div>

        </div>

      </div> */}
      <AddCategory />
    </main>
  );
}
