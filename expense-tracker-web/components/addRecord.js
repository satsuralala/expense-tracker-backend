import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";


import { useState } from "react";
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




export function AddRecord() {
  const [openRecord, setopenRecord] = useState(false);
  const [closeRecord, setcloseRecord] = useState(false);
  const [openExpense, setopenExpense] = useState(false);

  return (
    <>
      <button className="font-normal text-base flex gap-2 text-[#1F2937] pt-3"
        onClick={() => setopenRecord(true)}
      >
        <Plus color="#0166FF" /> Add category
    </button>


      <Dialog open={openRecord} className="w-[792px]">

        <DialogContent className="w-[792px]">
          <DialogHeader>

            <DialogTitle className="text-xl font-semibold text-[#0F172A]">Add Record</DialogTitle>
            <Separator className="my-4" />
          </DialogHeader>

            <div  className="flex rounded-full mt-5 bg-[#F3F4F6] w-[348px]" >
              <button className="hover:bg-[#0166FF] hover:text-[#F9FAFB] bg-[#F3F4F6] rounded-full w-[172px] h-[40px] text-[#1F2937] font-normal text-base">Expense1</button>
              <button className="hover:bg-[#0166FF] hover:text-[#F9FAFB] bg-[#F3F4F6] rounded-full w-[172px] h-[40px] text-[#1F2937] font-normal text-base">Income2</button>
            </div>

            <div value="account">

              <div className="mt-5 w-[348px] bg-[#F3F4F6] border-[#D1D5DB] border-[1px] rounded-md">
                <h1 className=" pt-3 pl-4 font-normal  text-base">Amount</h1>
                <input className="bg-[#F3F4F6] pl-4 pb-3" placeholder="₮ 000.00"/>
              </div>
            </div>


            <h2 className="text-[#1F2937] text-base font-normal pt-[19px] pb-2">Category</h2>
            <Select >
              <SelectTrigger className="w-[348px] bg-[#F9FAFB] border-[#D1D5DB] border-[1px] ">
                <SelectValue   className="bg-[#F9FAFB] " placeholder="Choose"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

          
            
              
      
        </DialogContent>
      </Dialog>
    </>
  );
}
