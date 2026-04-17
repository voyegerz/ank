import type { Product, Course, ProductTransformOptions } from "@/types/product";

export const transformProducts = (
  productsData: any[] | undefined,
  options: ProductTransformOptions = {},
): Product[] => {
  const { defaultImage, getIcon, getComplexity } = options;

  if (!productsData) return [];

  return productsData.map((product: any) => ({
    id: product.$id,
    name: product.name,
    category: product.category.name || "General",
    subCategory: product.subCategory.name || "General",
    price: product.price || "On Request",
    image: product.imageUrl || product.image_id || defaultImage || "",
    description: product.description || "",
    features: product.key_specs || [],
    icon: getIcon ? getIcon(product.category?.name || "General") : undefined,
    complexity: getComplexity ? getComplexity(product) : undefined,
  }));
};

export const transformCourses = (
  coursesData: any[] | undefined,
  options: ProductTransformOptions = {},
): Course[] => {
  const { defaultImage, getIcon, getLevel } = options;

  if (!coursesData) return [];

  return coursesData.map((course: any) => ({
    id: course.$id,
    name: course.name,
    category: course.category?.name || "General",
    subCategory: course.subCategory?.name || "General",
    duration: course.duration || "Self-paced",
    image: course.imageUrl || course.image_id || defaultImage || "",
    description: course.description || "",
    curriculum: course.key_specs || [],
    level: getLevel ? getLevel(course) : "Intermediate",
    icon: getIcon ? getIcon(course.category?.name || "General") : undefined,
  }));
};
