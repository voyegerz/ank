import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Filter,
  Image as ImageIcon,
  Loader2,
  Package,
} from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import catalogService from "@/appwrite/services/catalog";
import ProductForm from "./components/ProductForm";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Modals state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [prods, cats] = await Promise.all([
        catalogService.getProducts(),
        catalogService.getCategories(),
      ]);

      const productsWithImages = prods.documents.map((product) => {
        return {
          ...product,
          imageUrl: product.image_id
            ? catalogService.getProductImagePreview(product.image_id)
            : null,
        };
      });

      setProducts(productsWithImages);
      setCategories(cats.documents);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredProducts = () => {
    return products.filter((p) => {
      const matchesSearch = p.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCat =
        filterCategory === "All" || p.category === filterCategory;
      return matchesSearch && matchesCat;
    });
  };

  const openAddModal = () => {
    setEditingProduct(null);
    setIsProductModalOpen(true);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900">
            Products
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Manage your product catalog
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button
            onClick={openAddModal}
            className="rounded-xl font-bold uppercase tracking-wider"
          >
            <Plus className="mr-2" size={16} /> Add Product
          </Button>
        </div>
      </div>

      {/* Filters Area */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10"
          />
          <Input
            placeholder="Search products by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-11 h-12 rounded-xl bg-white border-slate-200"
          />
        </div>
        <div className="md:w-64">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="h-12 rounded-xl bg-white border-slate-200 text-slate-600">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-slate-400" />
                <SelectValue placeholder="All Categories" />
              </div>
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="All">All Categories</SelectItem>
              {categories.map((c) => (
                <SelectItem key={c.$id} value={c.$id}>
                  {c.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 size={32} className="animate-spin text-indigo-500" />
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <Package size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            No products found
          </h3>
          <p className="text-slate-500 text-sm max-w-sm mt-1">
            We couldn't find any products matching your current filters. Try
            adjusting your search query or category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={product.$id}
            >
              <Card
                onClick={() =>
                  navigate(`/admin/dashboard/products/${product.$id}`)
                }
                className="h-full border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group flex flex-col cursor-pointer"
              >
                {/* Product Image */}
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden flex-shrink-0">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <ImageIcon size={48} strokeWidth={1} />
                    </div>
                  )}
                </div>

                <CardHeader className="p-5">
                  <CardTitle className="text-lg font-bold text-slate-900 leading-tight line-clamp-2 uppercase">
                    {product.name}
                  </CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add / Edit Product Modal */}
      <Dialog open={isProductModalOpen} onOpenChange={setIsProductModalOpen}>
        <DialogContent className="sm:max-w-5xl h-[85vh] bg-white rounded-3xl overflow-hidden p-0 gap-0 border-none shadow-2xl">
          <DialogHeader className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
            <DialogTitle className="text-xl font-black uppercase text-slate-900 tracking-tight">
              {editingProduct ? "Edit Product" : "Add New Product"}
            </DialogTitle>
          </DialogHeader>

          <div
            className="px-8 md:px-12 max-h-[calc(85vh-140px)] overflow-y-auto custom-scrollbar"
            data-lenis-prevent
          >
            <ProductForm
              initialData={editingProduct}
              categories={categories}
              onSuccess={() => {
                setIsProductModalOpen(false);
                fetchData();
              }}
              onCancel={() => setIsProductModalOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsPage;
