import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useState } from "react";
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
  Plus,
} from "lucide-react";
import { Button } from "./ui/button";
import Home from "@/app/page";

const categoryIcon = [
  { iconname: "home", icon: House },
  { iconname: "housePlug", icon: HousePlug },
  { iconname: "tv", icon: TvMinimal },
  { iconname: "water", icon: ShowerHead },
  { iconname: "phone", icon: Phone },
  { iconname: "medicine", icon: BriefcaseMedical },
  { iconname: "drama", icon: Drama },
  { iconname: "baby", icon: Baby },
  { iconname: "shirt", icon: Shirt },
  { iconname: "book", icon: BookOpen },
];

const categoryColor = [
  { colorname: "green", value: "#41CC00" },
  { colorname: "blue", value: "#0166FF" },
  { colorname: "red", value: "#FF0000" },
  { colorname: "yellow", value: "#FFD700" },
  { colorname: "purple", value: "#800080" },
  { colorname: "orange", value: "#FFA500" },
];

export function AddCategory() {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedColor, setSelectedColor] = useState();
  const [name, setName]=useState("");

  const SelectedIcon = categoryIcon.find(
    (chosenIcon) => selectedIcon === chosenIcon.iconname
  )?.icon;

  return (
    <main>
     
      <button
        className="font-normal text-base flex gap-2 text-[#1F2937] pt-3"
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
                  {categoryIcon.map(({ iconname, icon: Icon }) => (
                    <div
                      key={iconname}
                      className="cursor-pointer"
                      onClick={() => setSelectedIcon(iconname)}
                    >
                      <Icon
                        className="w-8 h-8"
                        color={
                          selectedIcon === iconname ? selectedColor : undefined
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
                      onClick={() => setSelectedColor(value)}
                      className={`cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${
                        selectedColor === value ? "ring-2 ring-white" : ""
                      }`}
                      style={{ backgroundColor: value }}
                    >
                      {selectedColor === value && (
                        <Check className="w-4 h-4 text-white" />
                      )}
                    </div>
                  ))}
                </div>
            
              </PopoverContent>
            </Popover>
            <Input id="name" value={name} onChange={(e)=> setName(e.target.value)} className="col-span-3" />
          </div>
          <DialogFooter>
            <Button
              className="w-full bg-green-700 rounded-full hover:bg-green-900 mt-8"
              onClick={createNew}
            >
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
