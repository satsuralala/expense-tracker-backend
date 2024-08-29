import { Plus } from "lucide-react";
export function Records(){
    return(
        <div className="bg-slate-100 w-full">
            <div className="max-w-[1200px] mx-auto">
                <div className="bg-[#F9FAFB] border-[#E5E7EB] border-[1px] rounded-xl ">
                    <div className="px-4 py-6">
                        <h1 className="font-semibold text-2xl font-roboto text-black">Records</h1>
                        <button className="rounded-full bg-[#0166FF] flex font-normal font-normals py-[6px] px-[98px] text-[#FFFFFF] mt-6"><Plus />Add</button>

                        

                    </div>
                   

                </div>

            </div>


        </div>
    )
}
