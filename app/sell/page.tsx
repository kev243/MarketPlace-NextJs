"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";
import { type JSONContent } from "@tiptap/react";

export default function SellRoute() {
  const [json, setJson] = useState<null | JSONContent>(null);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your product witch ease</CardTitle>
            <CardDescription>
              Pleasee describe your product here in detail so that it can be
              sold
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input type="text" placeholder="Name of your product" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Category</Label>
              <SelectCategory />
            </div>

            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input
                placeholder="29$"
                type="number"
                name="price"
                required
                min={1}
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Small Summary</Label>
              <Textarea
                name="smallDescription"
                placeholder="Pleae describe your product shortly right here..."
                required
                minLength={10}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <input
                type="hidden"
                name="description"
                value={JSON.stringify(json)}
              />
              <Label>Description</Label>
              <TipTapEditor json={json} setJson={setJson} />
              {/* {state?.errors?.["description"]?.[0] && (
            <p className="text-destructive">
              {state?.errors?.["description"]?.[0]}
            </p>
          )} */}
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
}
