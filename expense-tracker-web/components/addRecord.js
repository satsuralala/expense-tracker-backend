import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea"

export function AddRecord() {
  const [openRecord, setopenRecord] = useState(false);
  const [closeRecord, setcloseRecord] = useState(false);
  const [openExpense, setopenExpense] = useState(false);
  const [date, setDate] = useState();
  const formattedDate = date
    ? date.toLocaleDateString(undefined, {
        year: "numeric", // "2023"
        month: "short", // "Oct"
        day: "2-digit", // "10"
      })
    : "Select a date";

  return (
    <>
     <button className="rounded-full bg-[#0166FF] flex font-normal font-normals py-[6px] px-[98px] text-[#FFFFFF]  "  onClick={() => setopenRecord(true)}><Plus />Add</button>
      <Dialog open={openRecord} className="flex gap-0">
        <DialogContent className="w-[792px] flex">
          <div className="flex-1 ">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-[#0F172A]">
                Add Record
              </DialogTitle>
              <Separator className="my-4" />
              
            </DialogHeader>

            <div className="flex rounded-full mt-5 bg-[#F3F4F6] w-[348px]">
              <button className="hover:bg-[#0166FF] hover:text-[#F9FAFB] bg-[#F3F4F6] rounded-full w-[172px] h-[40px] text-[#1F2937] font-normal text-base">
                Expense
              </button>
              <button className="hover:bg-[#0166FF] hover:text-[#F9FAFB] bg-[#F3F4F6] rounded-full w-[172px] h-[40px] text-[#1F2937] font-normal text-base">
                Income
              </button>
            </div>

            <div value="account">
              <div className="mt-5 w-[348px] bg-[#F3F4F6] border-[#D1D5DB] border-[1px] rounded-md">
                <h1 className=" pt-3 pl-4 font-normal  text-base">Amount</h1>
                <input
                  className="bg-[#F3F4F6] pl-4 pb-3"
                  placeholder="₮ 000.00"
                />
              </div>
            </div>

            <h2 className="text-[#1F2937] text-base font-normal pt-[19px] pb-2">
              Category
            </h2>
            <Select>
              <SelectTrigger className="w-[348px] bg-[#F9FAFB] border-[#D1D5DB] border-[1px] ">
                <SelectValue className="bg-[#F9FAFB] " placeholder="Choose" />
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

            <div className="mt-[19px]">
              <h2 className="font-normal text-base text-[#1F2937] ">Date</h2>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder={formattedDate} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Calendar</SelectLabel>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex rounded-full mt-5 bg-[#16A34A] w-[348px] justify-center items-center h-[40px]">
              <div className="text-[#F9FAFB] text-base   "> Add Record</div>
            </div>
          </div>
          <div className="flex-1">
          <Separator className="mt-[33px]" />
          <div className="pl-6">
              <h2 className="text-[#1F2937] text-base font-normal pt-[15px]  pb-2">
                  Payee
              </h2>
              <Select className="pl-6">
                <SelectTrigger className="w-[348px] bg-[#F9FAFB] border-[#D1D5DB] border-[1px] ">
                  <SelectValue className="bg-[#F9FAFB] " placeholder="Write here" />
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
              <h2 className="text-[#1F2937] text-base font-normal pt-[19px]  pb-2">
                  Note
              </h2>
              <Textarea className="bg-[#F3F4F6] border-[#D1D5DB] border-[1px] w-[348px] h-[280px]" placeholder="Write here"  />




          </div>
          

          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
