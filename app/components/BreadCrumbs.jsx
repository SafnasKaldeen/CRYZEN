"use client";

import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { usePathname } from "next/navigation";

const Bread = ({ name }) => {
  const pathname = usePathname();

  // Split the pathname into segments
  const segments = pathname.split("/").filter((seg) => seg);

  // Determine if name is passed
  const isNameProvided = typeof name === "string" || typeof name === "number";

  // Generate breadcrumb items
  const breadcrumbItems = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const isLastItem = index === segments.length - 1;

    return (
      <BreadcrumbItem
        key={href}
        // href={href}
        className={isLastItem ? "text-white" : ""}
      >
        {isLastItem && isNameProvided ? name : segment}
      </BreadcrumbItem>
    );
  });

  return (
    <Breadcrumbs className="ml-4 mb-5">
      <BreadcrumbItem className={isNameProvided ? "" : "text-white"} href="/">
        Home
      </BreadcrumbItem>
      {breadcrumbItems}
    </Breadcrumbs>
  );
};

export default Bread;
