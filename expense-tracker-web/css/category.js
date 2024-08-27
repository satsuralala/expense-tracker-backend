import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { IoMdHome } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { MdAirportShuttle } from "react-icons/md";
import { MdAutoStories } from "react-icons/md";
import { MdCastConnected } from "react-icons/md";
import { MdChildFriendly } from "react-icons/md";
import { Separator } from "@/components/ui/separator"


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";






export function AddCategory() {
  const [selectedIcon, setSelectedIcon] = useState();
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="bg-[#0166FF] h-8 w-[250px]">Add</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add category</DialogTitle>
          <Separator className="my-4 mt-9" />
          
        </DialogHeader>
        <div className="flex gap-4 align-baseline ">
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline"> {selectedIcon}</Button>
                </PopoverTrigger>
                <PopoverContent >
                    <div className="  flex gap-6 ">
                      <button onClick={() => handleIconClick(<IoHomeSharp />)}><IoHomeSharp /></button>
                      <button onClick={() => handleIconClick(<MdAirportShuttle />)}><MdAirportShuttle /></button>
                      <button onClick={() => handleIconClick(<MdAutoStories />)}><MdAutoStories /></button>
                      <button onClick={() => handleIconClick(<MdCastConnected />)}><MdCastConnected /></button>
                      <button onClick={() => handleIconClick(<MdChildFriendly />)}><MdChildFriendly /></button>
                      
            
                        
                    </div>
                </PopoverContent>
            </Popover>
                <Input id="name" placeholder="Name" className="col-span-3"/>
                
        </div>

        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
