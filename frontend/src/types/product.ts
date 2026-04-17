import type { ReactNode } from "react";

export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  icon?: ReactNode;
  complexity?: "Beginner" | "Intermediate" | "Advanced";
}

export interface Course {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  duration: string;
  image: string;
  description: string;
  curriculum: string[];
  level: "Beginner" | "Intermediate" | "Advanced";
  icon?: ReactNode;
}

export interface ProductTransformOptions {
  defaultImage?: string;
  getIcon?: (category: string) => ReactNode;
  getComplexity?: (product: any) => "Beginner" | "Intermediate" | "Advanced";
  getLevel?: (product: any) => "Beginner" | "Intermediate" | "Advanced";
  categories?: any[]; // Array of categories to lookup names by ID
  subCategories?: any[]; // Array of sub-categories to lookup names by ID
}
