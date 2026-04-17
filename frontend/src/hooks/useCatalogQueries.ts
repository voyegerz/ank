import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import catalogService from "../appwrite/services/catalog";

// Query Keys
export const catalogKeys = {
  all: ["catalog"] as const,
  categories: ["catalog", "categories"] as const,
  products: ["catalog", "products"] as const,
  product: (id: string) => ["catalog", "product", id] as const,
};

// --- CATEGORIES ---

export const useCategories = () => {
  return useQuery({
    queryKey: catalogKeys.categories,
    queryKeyHashFn: (queryKey) => JSON.stringify(queryKey),
    queryFn: async () => {
      const response = await catalogService.getCategories();
      return response.documents;
    },
  });
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string }) => catalogService.createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: catalogKeys.categories });
    },
  });
};

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: { name: string } }) =>
      catalogService.updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: catalogKeys.categories });
    },
  });
};

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      // First, update all products in this category to remove category reference
      const productsResponse = await catalogService.getProducts(id);

      // Update products to have no category
      for (const product of productsResponse.documents) {
        await catalogService
          .updateProduct(product.$id, { category: null })
          .catch(console.error);
      }

      // Then delete the category
      return catalogService.deleteCategory(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: catalogKeys.categories });
      queryClient.invalidateQueries({ queryKey: catalogKeys.products });
    },
  });
};

// --- SUB-CATEGORIES ---

export const useSubCategories = (categoryId?: string) => {
  return useQuery({
    queryKey: [...catalogKeys.products, "subcategories", categoryId || "all"],
    queryFn: async () => {
      const response = await catalogService.getSubCategories(categoryId);
      return response.documents;
    },
    enabled: true,
  });
};

/**
 * Two-Step Resolver: Fetch sub-categories by category name
 * 1. Resolves category name to ID
 * 2. Fetches sub-categories for that category
 */
export const useSubCategoriesByCategoryName = (categoryName?: string) => {
  return useQuery({
    queryKey: [
      ...catalogKeys.products,
      "subcategories",
      "byName",
      categoryName || "all",
    ],
    queryFn: async () => {
      if (!categoryName) {
        return [];
      }
      const response =
        await catalogService.getSubCategoriesByCategoryName(categoryName);
      return response.documents;
    },
    enabled: !!categoryName,
  });
};

export const useSubCategory = (id: string) => {
  return useQuery({
    queryKey: ["subcategory", id],
    queryFn: async () => {
      return await catalogService.getSubCategory(id);
    },
    enabled: !!id,
  });
};

export const useCreateSubCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { name: string; category: string }) =>
      catalogService.createSubCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: catalogKeys.products });
    },
  });
};

export const useUpdateSubCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: { name?: string; category?: string };
    }) => catalogService.updateSubCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: catalogKeys.products });
    },
  });
};

export const useDeleteSubCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => catalogService.deleteSubCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: catalogKeys.products });
    },
  });
};

// --- PRODUCTS ---

export const useProducts = (categoryId?: string) => {
  return useQuery({
    queryKey: [...catalogKeys.products, categoryId || "all"],
    queryFn: async () => {
      const response = await catalogService.getProducts(categoryId);
      return response.documents.map((product: any) => ({
        ...product,
        imageUrl: product.image_id
          ? catalogService.getProductImagePreview(product.image_id)
          : null,
      }));
    },
  });
};

/**
 * Two-Step Resolver: Fetch products by category name/slug
 * 1. Resolves category name to ID
 * 2. Fetches products for that category
 */
export const useProductsByCategoryName = (categoryName?: string) => {
  return useQuery({
    queryKey: [...catalogKeys.products, "byName", categoryName || "all"],
    queryFn: async () => {
      let response;
      if (!categoryName || categoryName === "all") {
        response = await catalogService.getProducts();
      } else {
        response = await catalogService.getProductsByCategoryName(categoryName);
      }
      return response.documents.map((product: any) => ({
        ...product,
        imageUrl: product.image_id
          ? catalogService.getProductImagePreview(product.image_id)
          : null,
      }));
    },
    enabled: !!categoryName,
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: catalogKeys.product(id),
    queryFn: async () => {
      const product = await catalogService.getProduct(id);

      return {
        ...product,
        imageUrl: product.image_id
          ? catalogService.getProductImagePreview(product.image_id)
          : null,
      } as any;
    },
    enabled: !!id,
  });
};

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: any) => catalogService.createProduct(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: catalogKeys.products });
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      catalogService.updateProduct(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: catalogKeys.products });
      queryClient.invalidateQueries({ queryKey: catalogKeys.product(id) });
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, imageId }: { id: string; imageId?: string }) => {
      // First delete the product image if it exists
      if (imageId) {
        await catalogService.deleteProductImage(imageId).catch(console.error);
      }
      // Then delete the product
      return catalogService.deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: catalogKeys.products });
    },
  });
};
