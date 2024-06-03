"use client";

import { usePathname } from "next/navigation";

export function getPathname() {
    return usePathname();
}
