"use client";

import { Icon } from "lucide-react";
import { Value } from "@radix-ui/react-select";
import { Nav } from "@/components/nav";
import { Records } from "../components/records";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Separator } from "../components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { useEffect, useState } from "react";
import {
  Baby,
  BookOpen,
  BriefcaseMedical,
  Drama,
  House,
  HousePlug,
  Phone,
  Shirt,
  ShowerHead,
  TvMinimal,
  Check,
} from "lucide-react";
import { Button } from "../components/ui/button";

const categoryIcon = [
  { iconname: "home", Icon: House },
  { iconname: "housePlug", Icon: HousePlug },
  { iconname: "tv", Icon: TvMinimal },
  { iconname: "water", Icon: ShowerHead },
  { iconname: "phone", Icon: Phone },
  { iconname: "medicine", Icon: BriefcaseMedical },
  { iconname: "drama", Icon: Drama },
  { iconname: "baby", Icon: Baby },
  { iconname: "shirt", Icon: Shirt },
  { iconname: "book", Icon: BookOpen },
];

const categoryColor = [
  { colorname: "green", value: "#41CC00" },
  { colorname: "blue", value: "#0166FF" },
  { colorname: "red", value: "#FF0000" },
  { colorname: "yellow", value: "#FFD700" },
  { colorname: "purple", value: "#800080" },
  { colorname: "orange", value: "#FFA500" },
];

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Plus } from "lucide-react";

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

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("home");
  const [selectedColor, setSelectedColor] = useState("blue");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);


  const SelectedIcon = categoryIcon.find(
    (chosenIcon) => selectedIcon === chosenIcon.iconname
  )?.Icon;

  const [categories, setCategories] = useState([]);
  const [openRecord, setopenRecord] = useState(false);
  const [openExpense, setopenExpense] = useState(false);

  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [payee, setPayee] = useState("");
  const [note, setNote] = useState("");

  const formattedDate = "";

  function loadlist() {
    fetch(`http://localhost:4000/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }

  useEffect(() => {
    loadlist();
  }, []);

  function createNew() {
    setLoading(true);
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        color: selectedColor,
        icon: selectedIcon,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      loadlist();
      reset();
      setOpen(false);
      toast("successfully added");
      setLoading(false);
    });
  }

  function createNewTransaction() {
    setLoading(true);
    fetch(`http://localhost:4000/transactions`, {
      method: "POST",
      body: JSON.stringify({
        type: type,
        amount: amount,
        categoryId: CategoryId,
        date: date,
        time: time,
        payee: payee,
        note: note,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      loadlist();
      reset();
      setOpen(false);
      setLoading(false);
    });
  }

  function deleteCategory(id) {
    if (confirm("Do you want to delete this?")) {
      fetch(`http://localhost:4000/categories/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.status == 404) {
          alert("category not found");
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

  function reset() {
    setName("");
    setSelectedColor("blue");
    setSelectedIcon("home");
  }

  const [type, setType] = useState("");
  const [amount, setAmount] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [CategoryId, setCategoryId] = useState(null);
  return (
    <main>
      <Nav></Nav>
      <div className="bg-gray-100 w-full">
        <div className="max-w-[1200px] px-[120px]">
          <div className="bg-[#F9FAFB] border-[#E5E7EB] border-[1px] rounded-xl w-[282px]">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-6">
                <div className="font-semibold text-2xl font-roboto text-black">
                  Records
                </div>
                <>
                  <button
                    className="rounded-full bg-[#0166FF] flex font-normal font-normals py-[6px] px-[98px] text-[#FFFFFF]  "
                    onClick={() => setopenRecord(true)}
                  >
                    <Plus />
                    Add
                  </button>
                  <Dialog
                    open={openRecord}
                    className="flex gap-0"
                    onClose={() => setOpen(false)}
                  >
                    <DialogContent className="w-[792px] flex">
                      <div className="flex-1 ">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold text-[#0F172A]">
                            Add Record
                          </DialogTitle>
                          <Separator className="my-4" />
                        </DialogHeader>

                        <div className="flex rounded-full mt-5 bg-[#F3F4F6] w-[348px]">
                          <button
                            value={type}
                            onClick={() => {
                            
                              setType("EXPENSE");
                            }}
                            className={`
                               rounded-full w-[172px] h-[40px] 
                               font-normal text-base 
                              ${type === "EXPENSE" ? 'bg-[#0166FF] text-[#F9FAFB]' : 'bg-[#F3F4F6] text-[#1F2937]'}`
                            }
                          >
                            Expense
                          </button>
                          <button
                            value={type}
                            onClick={() => {
                      
                              setType("INCOME");
                            }}
                            className={`
                              rounded-full w-[172px] h-[40px] 
                               font-normal text-base 
                              ${type === "INCOME" ? 'bg-[#16A34A] text-[#F9FAFB]' : 'bg-[#F3F4F6] text-[#1F2937]'}`
                            }

                          >
                            Income
                          </button>
                        </div>

                        <div value="account">
                          
                        </div>

                        <h2 className="text-[#1F2937] text-base font-normal pt-[19px] pb-2">
                          Category
                        </h2>
                        <Select
                          value={selectedCategory || ""}
                          onValueChange={(value) => {
                            setSelectedCategory(value);
                            setCategoryId(value);
                          }}
                          placeholder="Choose"
                        >
                          <SelectTrigger className="w-[348px] bg-[#F9FAFB] border-[#D1D5DB] border-[1px] ">
                            <SelectValue
                              className="bg-[#F9FAFB] "
                              placeholder="Choose category"
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Categories</SelectLabel>
                              {categories.map((category) => (
                                <SelectItem
                                  key={category.id}
                                  value={category.id}
                                  onClick={() => setCategoryId(category.id)}
                                >
                                  <div className="flex items-center gap-2">
                                    <ShowCategory
                                      iconname={category.icon}
                                      colorname={category.color}
                                    />
                                    <div>{category.name}</div>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        <div className="mt-[19px]">
                          <h2 className="font-normal text-base text-[#1F2937] ">
                            Date
                          </h2>
                          <div className="flex gap-3">
                            <input
                              type="date"
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              placeholder="Select a date"
                              required
                              className="w-[168px] h-[48px] bg-[#F9FAFB] rounded-sm border-[#D1D5DB] border-[1px] "
                            />
                            <input
                              type="time"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                              placeholder="Select a time"
                              required
                              className="w-[168px] h-[48px] bg-[#F9FAFB] rounded-sm border-[#D1D5DB] border-[1px] "
                            />
                          </div>
                        </div>
                        <button
                          onClick={createNewTransaction}
                          className={`flex rounded-full mt-5  w-[348px] justify-center items-center h-[40px]  text-base ${type === "INCOME" ? 'bg-[#16A34A] text-[#F9FAFB]' : 'bg-[#0166FF] text-[#F9FAFB]'} `}
                        >
                          Add Record
                        </button>

                        
                      </div>
                      <div className="flex-1">
                        <Separator className="mt-[33px]" />
                        <div className="pl-6">
                          <h2 className="text-[#1F2937] text-base font-normal pt-[15px]  pb-2">
                            Payee
                          </h2>
                          <input
                            type="text"
                            value={payee}
                            onChange={(e) => setPayee(e.target.value)}
                            placeholder="Enter the payee's name"
                            required
                            className="w-[348px] h-[48px] bg-[#F9FAFB] border-[#D1D5DB] border-[1px] rounded-lg"
                          />

                          <h2 className="text-[#1F2937] text-base font-normal pt-[19px]  pb-2">
                            Note
                          </h2>
                          <textarea
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="bg-[#F3F4F6] border-[#D1D5DB] border-[1px] w-[348px] h-[280px] rounded-lg"
                            placeholder="Write here"
                          />
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </>

                <input
                  placeholder="Search"
                  className="border-2 bg-[#F3F4F6] py-1 px-4 rounded-lg"
                />

                <div>
                  <div className="font-semibold text-base text-[#1F2937] font-roboto">
                    Types
                  </div>
                  <RadioGroup
                    defaultValue="comfortable"
                    className="pl-3 flex flex-col gap-1 pt-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" className />
                      <Label
                        htmlFor="r1"
                        className="font-normal text-base text-[#1F2937]"
                      >
                        All
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label
                        htmlFor="r2"
                        className="font-normal text-base text-[#1F2937]"
                      >
                        Income
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="compact" id="r3" />
                      <Label
                        htmlFor="r3"
                        className="font-normal text-base text-[#1F2937]"
                      >
                        Expense
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <div className="flex justify-between">
                    <div className="text-base font-semibold text-[#1F2937]  font-roboto">
                      Category
                    </div>
                    <button className="text-[#1F2937] font-normal text-base opacity-20">
                      Clear
                    </button>
                  </div>
                  <>
                    <Toaster />
                    {categories.map((category) => (
                      <div
                        key={category.iconname}
                        className="flex pl-[13px] gap-2"
                      >
                        <ShowCategory
                          iconname={category.icon}
                          colorname={category.color}
                        />
                        {category.name}
                      </div>
                    ))}

                    <button
                      className="font-normal text-base flex gap-2 text-[#1F2937] pt-3 pl-3"
                      onClick={() => setOpen(true)}
                    >
                      <Plus color="#0166FF" /> Add category
                    </button>
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Add category</DialogTitle>

                          <Separator className="my-4 mt-9" />
                        </DialogHeader>
                        <div className="flex gap-4 mt-4 align-baseline">
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline">
                                {SelectedIcon ? (
                                  <SelectedIcon color={selectedColor} />
                                ) : (
                                  "..."
                                )}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                              <div className="grid grid-cols-6 gap-2">
                                {categoryIcon.map(({ iconname, Icon }) => (
                                  <div
                                    key={iconname}
                                    className="cursor-pointer"
                                    onClick={() => setSelectedIcon(iconname)}
                                  >
                                    <Icon
                                      className="w-8 h-8"
                                      color={
                                        selectedIcon === iconname
                                          ? selectedColor
                                          : undefined
                                      }
                                    />
                                  </div>
                                ))}
                              </div>
                              <Separator className="my-4" />
                              <div className="grid grid-cols-6 gap-2">
                                {categoryColor.map(({ colorname, value }) => (
                                  <div
                                    key={colorname}
                                    onClick={() => setSelectedColor(colorname)}
                                    className={`cursor-pointer w-8 h-8 rounded-full flex justify-center items-center text-white ${
                                      selectedColor === value
                                        ? "ring-2 ring-white"
                                        : ""
                                    }`}
                                    style={{ backgroundColor: value }}
                                  >
                                    {selectedColor === colorname && (
                                      <Check className="w-4 h-4 " />
                                    )}
                                  </div>
                                ))}
                              </div>
                            </PopoverContent>
                          </Popover>
                          <Input
                            disabled={loading}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                        <DialogFooter>
                          <Button
                            disabled={loading}
                            className="w-full bg-green-700 rounded-full hover:bg-green-900 mt-8"
                            onClick={createNew}
                          >
                            Add
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function ShowCategory({ iconname, colorname }) {
  console.log({ iconname, colorname });

  const iconObject = categoryIcon.find((item) => item.iconname === iconname);
  const colorObject = categoryColor.find(
    (item) => item.colorname === colorname
  );
  if (!iconObject) {
    return <House />;
  }
  let hexColor;
  if (!colorObject) {
    hexColor = "#000";
  } else {
    hexColor = colorObject.value;
  }
  const { Icon } = iconObject;

  console.log({ iconObject });

  return <Icon style={{ color: hexColor }} />;
}
