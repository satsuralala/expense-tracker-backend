"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Button } from "@/components/ui/button"





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

  function Delete(index) {
    if(window.confirm("Do u want to delete this?")){
      fetch(`http://npm i nodemonlocalhost:4000/categories/delete?index=${index}`)
      .then((res) => res.json())
      .then(() => {
        loadlist();
      });
    }
  }
    function Edit(index,oldName) {
      const name = prompt("name",oldName);
      if(name){
        fetch(`http://localhost:4000/categories/edit?index=${index}&name=${name}`)
        .then((res) => res.json())
        .then(() => {
          loadlist();
        });

      }
        
  
  
      
    fetch(`http://localhost:4000/categories/create?name=${name}`)
      .then((res) => res.json())
      .then(() => {
        loadlist();
      });
  }

  return (
    <main>
      <button onClick={createNew}>add new</button>
      {categories.map((category,index) => (
        <div className="py-5 px-5 ">
          <div key={category.name} className="text-black pb-3">{category.name}</div>
          <Button variant="outline" className="mr-4" onClick={()=>Edit(index,category.name)}>edit</Button>
          <Button variant="destructive" onClick={()=>Delete(index)} >delete</Button>

        </div>
       
      ))}
   


    

    </main>
  );
}
