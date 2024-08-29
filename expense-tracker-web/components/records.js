import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AddCategory } from "./category";
import { AddRecord } from "./addRecord";
 
export function Records(){
    return(
        <div className="bg-gray-100 w-full">
            <div className="max-w-[1200px] px-[120px]">
                <div className="bg-[#F9FAFB] border-[#E5E7EB] border-[1px] rounded-xl w-[282px]">
                    <div className="px-4 py-6">
                        <div className="flex flex-col gap-6">
                            <div className="font-semibold text-2xl font-roboto text-black">Records</div>
                            <button className="rounded-full bg-[#0166FF] flex font-normal font-normals py-[6px] px-[98px] text-[#FFFFFF] "><Plus />Add</button>
                            <input placeholder="Search" className="border-2 bg-[#F3F4F6] py-1 px-4 rounded-lg"/>

                            <div>
                                <div className="font-semibold text-base text-[#1F2937] font-roboto">Types</div>
                                <RadioGroup defaultValue="comfortable" className="pl-3 flex flex-col gap-1 pt-6">
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="default" id="r1" className />
                                        <Label htmlFor="r1" className="font-normal text-base text-[#1F2937]">All</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="comfortable" id="r2" />
                                        <Label htmlFor="r2" className="font-normal text-base text-[#1F2937]">Income</Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <RadioGroupItem value="compact" id="r3" />
                                        <Label htmlFor="r3" className="font-normal text-base text-[#1F2937]">Expense</Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div>
                                <div className="flex justify-between">
                                    <div className="text-base font-semibold text-[#1F2937]  font-roboto">Category</div>
                                    <button className="text-[#1F2937] font-normal text-base opacity-20">Clear</button>
                                </div>
                                {/* <div>

                                    <button className="font-normal text-base flex gap-2 text-[#1F2937] pt-3"><Plus color="#0166FF" /> Add category</button>

                                </div> */}
                                <AddRecord/>

                                
                            </div>


                        </div>
                    
                        

                    </div>
                   

                </div>

            </div>


        </div>
    )
}
