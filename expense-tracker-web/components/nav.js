import { Plus } from "lucide-react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"

export function Nav(){
    return(
        <div className="max-w-[1200px] flex items-center  px-[120px] " >
            <div className="flex  gap-6 py-4  items-center">
                <img src="/icon.svg" alt="Icon" width="40" height="40"/>
                <div className="text-state-900 text-base font-semibold font-roboto">Dashboard</div>
                <div className="font-normal text-base font-roboto">Records</div>
                
            </div>
            <div className="flex gap-6 py-4  ml-auto" >
                <button className="rounded-full bg-[#0166FF] flex   text-white py-2 px-3 pl-"><Plus />Record</button>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
          
            </div>

        </div>
    )
}