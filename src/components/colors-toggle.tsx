// "use client";

// import { useState, useEffect } from "react";
// import { colors } from "@/data";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { Button } from "@/components/ui/button";

// export function ColorToggle() {
//   const [selectedColor, setSelectedColor] = useState<string>("orange");

//   useEffect(() => {
//     const color = getColor();
//     setSelectedColor(color);
//     setColorInDocument(color);
//   }, []);

//   const handleColorChange = (color: string) => {
//     setColor(color);
//     setSelectedColor(color);
//     setColorInDocument(color);
//   };

//   const setColor = (color: string): void => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("selectedColor", color);
//     }
//   };

//   const getColor = (): string => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("selectedColor") || "orange";
//     }
//     return "orange";
//   };

//   const setColorInDocument = (color: string) => {
//     if (typeof document !== "undefined") {
//       document.body.className = `theme-${color}`;
//     }
//   };

//   return (
//     <AlertDialog>
//       <AlertDialogTrigger asChild>
//         <Button
//           variant="outline"
//           size="icon"
//           className="bg-primary h-9 w-9 rounded-full border-2 border-primary hover:bg-primary"
//         ></Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogDescription>
//             <div className="flex flex-wrap flex-shrink-0 gap-3 justify-center items-center p-4 border-2 border-solid border-primary border-bold rounded-xl mb-2">
//               {colors.map(({ id, name, color }) => (
//                 <TooltipProvider key={id}>
//                   <Tooltip>
//                     <TooltipTrigger>
//                       <Button
//                         onClick={() => handleColorChange(name)}
//                         className="rounded-lg w-[50px] h-[50px] shadow-lg"
//                         style={{ backgroundColor: color }}
//                       >
//                         {" "}
//                       </Button>
//                     </TooltipTrigger>
//                     <TooltipContent>
//                       <p>{name}</p>
//                     </TooltipContent>
//                   </Tooltip>
//                 </TooltipProvider>
//               ))}
//             </div>
//           </AlertDialogDescription>
//           <AlertDialogFooter>
//             <AlertDialogAction>Done!</AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogHeader>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// }
