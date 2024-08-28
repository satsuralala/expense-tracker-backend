import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
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
} from "lucide-react";
import { Button } from "./ui/button";

const categoryIcon = [
  { name: "home", icon: House },
  { name: "housePlug", icon: HousePlug },
  { name: "tv", icon: TvMinimal },
  { name: "water", icon: ShowerHead },
  { name: "phone", icon: Phone },
  { name: "medicine", icon: BriefcaseMedical },
  { name: "drama", icon: Drama },
  { name: "baby", icon: Baby },
  { name: "shirt", icon: Shirt },
  { name: "book", icon: BookOpen },
];

const categoryColor = [
  { name: "green", value: "#41CC00" },
  { name: "blue", value: "#0166FF" },
  { name: "red", value: "#FF0000" },
  { name: "yellow", value: "#FFD700" },
  { name: "purple", value: "#800080" },
  { name: "orange", value: "#FFA500" },
];

export function AddCategory() {
  const [open, setOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("");
  const [selectedColor, setSelectedColor] = useState();

  const SelectedIcon = categoryIcon.find(
    (chosenIcon) => selectedIcon === chosenIcon.name
  )?.icon;

  return (
    <main>
      <Button variant="secondary" onClick={() => setOpen(true)}>
        Add new category
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add category</DialogTitle>
            <Separator className="my-4 mt-9" />
          </DialogHeader>
          <div className="flex gap-4 align-baseline">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  {SelectedIcon ? <SelectedIcon /> : "..."}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid grid-cols-6 gap-2">
                  {categoryIcon.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="cursor-pointer"
                      onClick={() => setSelectedIcon(name)}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="grid grid-cols-6 gap-2">
                  {categoryColor.map(({ name, value }) => (
                    <div
                      key={name}
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
            <Input id="name" placeholder="Name" className="col-span-3" />
          </div>
          <DialogFooter>
            <Button
              className="w-full bg-green-700 rounded-full hover:bg-green-900"
              onClick={() => {
                if (selectedIcon && selectedColor) {
                  setOpen(false);
                }
              }}
            >
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
