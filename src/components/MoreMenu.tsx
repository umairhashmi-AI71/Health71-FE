"use client";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { MoreVertical } from "lucide-react";

export default function MoreMenu() {

    const clickHandeler = (key : string) => {
        alert(key)
    }
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <MoreVertical className="h-5 w-5 text-gray-600" />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="More actions"
        className="min-w-[220px] rounded-xl shadow-lg border border-gray-200 bg-white p-2" 
      >
        <DropdownItem key="accept" className="hover:bg-[#E8E2DB] p-3" onClick={() => clickHandeler('accept')}>
          Accept
        </DropdownItem>
        <DropdownItem key="deny" className="hover:bg-[#E8E2DB] p-3" onClick={() => clickHandeler('deny')}>
          Deny
        </DropdownItem>
        <DropdownItem key="details" className=" hover:bg-[#E8E2DB] p-3" onClick={() => clickHandeler('details')}>
          Detail
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}