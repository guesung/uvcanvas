import {
  Placeholder,
} from "@/components/docs/ReexportComponents";
import React from "react";

export interface ComponentItemProps {
  name: string;
  id: string;
  desc: string;
  component: React.ComponentType;
}

export const componentList: ComponentItemProps[] = [
  {
    name: "Lumiflex",
    id: "lumiflex",
    desc: "Shader Gradient",
    component: React.lazy(() => import("@/components/registry/Lumiflex")),
  },
  {
    name: "Zenitho",
    id: "zenitho",
    desc: "Shader from Stripe",
    component: React.lazy(() => import("@/components/registry/Zenitho")),
  },
  {
    name: "Novatrix",
    id: "novatrix",
    desc: "Placeholder",
    component: Placeholder,
  },
  {
    name: "Velustro",
    id: "velustro",
    desc: "Placeholder",
    component: Placeholder,
  },
  {
    name: "Tranquiluxe",
    id: "tranquiluxe",
    desc: "Placeholder",
    component: Placeholder,
  },
  {
    name: "Opulento",
    id: "opulento",
    desc: "Placeholder",
    component: Placeholder,
  },
];

export interface NavGroup {
  title: string;
  links: Array<{
    title: string;
    href: string;
  }>;
}

export const navigation: NavGroup[] = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
      { title: "All Components", href: "/docs/components" },
      { title: "Changelog", href: "/docs/changelog" },
    ],
  },
  {
    title: "Components",
    links: [
      ...componentList.map((item, index) => ({
        title: item.name,
        href: "/docs/components/" + item.id,
      })),
    ],
  },
];
