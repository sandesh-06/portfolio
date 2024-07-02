"use client";
import React from "react";
import { Label } from "../../ui/Label";
import { Input } from "../../ui/Input";
import { cn } from "../../../utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md bg-transparent w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input ">
      <h2 className="font-semibold font-jost text-xl md:text-4xl text-neutral-800 dark:text-neutral-200">
        Get in touch
      </h2>
      <p className="text-sm md:text-lg max-w-sm mt-2 font-semibold dark:text-neutral-300">
      Let&apos;s collaborate to build more cool stuffs
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label className="text-xl" htmlFor="firstname">
              Name
            </Label>
            <Input  id="firstname" placeholder="Jackie Chan" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="text-xl" htmlFor="lastname">
              Country/City
            </Label>
            <Input id="lastname" placeholder="India" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label className="text-xl" htmlFor="email">
            Email Address
          </Label>
          <Input id="email" placeholder="jacckie@mail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label className="text-xl" htmlFor="password">
            Message
          </Label>
          <Input
            id="password"
            placeholder="Your portfolio looks cool :)"
            type="text"
            className="h-24"
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br from-cyan-800 to-blue-800 relative group/btn  blockbg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Submit info &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-200 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
