import { type ClassValue, clsx } from "clsx"
import { actionAsyncStorage } from "next/dist/client/components/action-async-storage.external"
import { twMerge } from "tailwind-merge"
import { callbackify } from "util"

// cn is a great util which helps us create a dynamic classes inside tailwind 
// But why we need this why do we both clsx and tailwind merge ?
// coz there are cases where we could create conflicting classes and instead of writing our own complicated util 
// to decide which one should we prioritized, we have this nice little util which will gonna help us 

// example

// import {cn} from "@/lib/utils"
// const state = true;
// className={cn(
//   "bg-indigo-500",
//   state && "bg-red-500"
// )}
// so the basis of the state it will gonna it will override bg-indigo-500 basically 
// can be used when you have to change something on the basis of other info or 
// lets say the state is not hard coded as true and its taking a axios call
// some thing like -: Axis3DIcon.get("https://google.com"); and we assign that value here 
// and on the basis of that we wanna change the value of that

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
