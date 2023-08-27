"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Github, HelpCircle, Youtube } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const DetailsDialog = (props: Props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="flex items-center px-2 py-1 text-white rounded-md bg-slate-800">
          Jak to funguje ? 
          <HelpCircle className="w-5 h-5 ml-1" />
        </span>
      </DialogTrigger>
      <DialogContent className="w-[70vw] max-w-[100vw] md:w-[50vw]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Vítej v Questify!</DialogTitle>
          
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
