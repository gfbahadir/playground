import { signal } from "@preact/signals-react";
 export const count = signal(0);

 export const addCount= ()=>{
    count.value++;
 }

export const getCount= ()=>{
    return count;
 }
