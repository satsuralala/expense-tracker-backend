import { Plus } from "lucide-react";

export function Nav(){
    return(
        <div className="max-w-[1200px] flex justify-center" >
            <div className="flex gap-6 py-4">
                <img src="/icon.svg" alt="Icon" width="28" height="28"/>
                <div className="text-state-900 text-base font-semibold font-roboto">Dashboard</div>
                <div className="font-normal text-base font-roboto">Records</div>
            </div>
            <div>
                <button className="rounded-xl"><Plus />Record</button>
            </div>
                
        </div>
    )
}