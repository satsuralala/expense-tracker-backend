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

import { Separator } from "@/components/ui/separator"


import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react";
import { Baby, BookOpen, BriefcaseMedical, Drama, House, HousePlug, Phone, Shirt, ShowerHead, TvMinimal } from "lucide-react";


const categoryIcon = [
  {
    name: "home",
    icon: House, 
  },
  {
    name: "housePlug",
    icon: HousePlug,
  },
  {
    name: "tv",
    icon: TvMinimal,
  },
  {
    name: "water",
    icon: ShowerHead,
  },
  {
    name: "phone",
    icon: Phone,
  },
  {
    name: "medicine",
    icon: BriefcaseMedical,
  },
  {
    name: "drama",
    icon: Drama, 
  },
  {
    name: "baby",
    icon: Baby,
  },
  {
    name: "shirt",
    icon: Shirt,
  },
  {
    name: "book",
    icon: BookOpen,
  },
];

const categoryColor=[
  {
    name:"green",
    value:"#41CC00"
  },
  {
    name:"green",
    value:"#41CC00"
  },
  {
    name:"green",
    value:"#41CC00"
  },
  {
    name:"green",
    value:"#41CC00"
  },
  {
    name:"green",
    value:"#41CC00"
  }
]



export default function AddCategory() {
  const [selectedIcon, setSelectedIcon] = useState();
  const [open, setOpen]=useState(false);

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
                    <Button variant="outline"> <House /> </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80" >
                    <div className=" grid grid-cols-6">
                      {categoryIcon.map(({name, icon})=>(
                        <div key={name}>
                          <icon></icon>
                        </div>
                      ))}
                      {categoryColor.map(({name, value})=>(
                        <div key={name} className="w-8 h-8 rounded-full" style={{backgroundColor:value}}></div>
                      ))}
                   
                        
                    </div>
                </PopoverContent>
            </Popover>
                <Input id="name" placeholder="Name" className="col-span-3"/>
                
        </div>

        <DialogFooter>
          <Button className="w-full bg-green-700 rounded-full hover:bg-green-900 " >Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
