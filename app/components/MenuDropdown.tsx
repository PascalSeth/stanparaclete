'use client'
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

export function MenuDropdown() {
  return (
    <Sheet>
      <SheetTrigger asChild>
       <Menu className='text-white cursor-pointer'/>
      </SheetTrigger>
      <SheetContent side={'top'} className='
      bg-gradient-to-r from-gray-400 text-white  to-purple-950
      z-[9999] h-fit  p-6 rounded-lg'>
        <SheetHeader>
          <SheetTitle className='text-gray-900 text-xl font-semibold'>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <Link href='/Expertise'>
            Expertise
          </Link>
          <Link href='/AboutUs'>
            AboutUs
          </Link>
          <Link href='/Projects'>
            Projects
          </Link>
          <Link href='/ContactUs'>
            <button className='w-full p-2 border border-purple-600 bg-gradient-to-bl hover:bg-gradient hover:from-purple-400 hover:to-pink-600 from-purple-300 to-pink-700 rounded-[1pc]'>
              Contact Us
            </button>
          </Link>
        </div>
      
      </SheetContent>
    </Sheet>
  );
}

