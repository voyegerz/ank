import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Loader2,
  Image as ImageIcon,
  CheckCircle2,
  Edit2,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  useProduct,
  useCategories,
  useDeleteProduct,
} from "@/hooks/useCatalogQueries";
import ProductForm from "./components/ProductForm";

const AdminProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Queries
  const { data: product, isLoading: loadingProduct } = useProduct(id || "");
  const { data: categories = [], isLoading: loadingCategories } =
    useCategories();

  // Mutations
  const deleteMutation = useDeleteProduct();

  const loading = loadingProduct || loadingCategories;

  const handleDelete = async () => {
    if (!product || !id) return;
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      await deleteMutation.mutateAsync({ id, imageId: product.image_id });
      navigate("/admin/dashboard/products");
    } catch (error) {
      console.error("Failed to delete product", error);
      alert("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="animate-spin text-primary mb-4" size={32} />
        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
          Loading Product Details...
        </p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-8 text-center bg-white rounded-3xl border border-slate-100 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-2 uppercase">
          Product Not Found
        </h2>
        <Button
          onClick={() => navigate("/admin/dashboard/products")}
          className="rounded-xl font-bold uppercase tracking-wider"
        >
          Back to List
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-20">
      {/* Top Bar with Navigation & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/admin/dashboard/products")}
          className="group text-slate-500 hover:text-slate-900 transition-colors p-0 hover:bg-transparent"
        >
          <ArrowLeft
            size={16}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-xs font-black uppercase tracking-[0.2em]">
            Back to Catalog
          </span>
        </Button>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button
            variant="outline"
            onClick={() => setIsEditModalOpen(true)}
            className="flex-1 md:flex-none rounded-xl border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-[10px] h-10 px-6 gap-2"
          >
            <Edit2 size={14} /> Edit Product
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            className="flex-1 md:flex-none rounded-xl font-bold uppercase tracking-widest text-[10px] h-10 px-6 gap-2 bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border-none shadow-none"
          >
            <Trash2 size={14} /> Delete
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-3 flex items-center justify-center object-contain aspect-square w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white bg-slate-50"
        >
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} className="w-70" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-200">
              <ImageIcon size={100} strokeWidth={1} />
            </div>
          )}
          {product.category && (
            <div className="absolute top-8 left-8">
              <Badge className="bg-white/90 backdrop-blur-md text-primary font-black uppercase px-4 py-2 rounded-full shadow-lg border-none tracking-[0.2em] text-[10px]">
                
              </Badge>
            </div>
          )}
        </motion.div>

        {/* Right: Details Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10 py-4"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-primary font-black uppercase tracking-[0.3em] text-[10px]">
              <span>{product.category?.name || "Standard Catalog"}</span>
              <div className="h-px w-12 bg-slate-200" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase leading-[1.1] tracking-tight">
              {product.name}
            </h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
              {product.description ||
                "No description provided for this product yet. High-quality engineering and design guaranteed."}
            </p>
          </div>

          {/* Key Specifications */}
          {product.key_specs && product.key_specs.length > 0 && (
            <div className="space-y-6 pt-10 border-t border-slate-100">
              <h3 className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-6">
                Key Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                {product.key_specs.map((spec: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle2
                      size={18}
                      className="text-primary mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                    />
                    <span className="text-slate-700 font-bold uppercase tracking-wider text-[11px] leading-tight">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Edit Modal */}
      <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
        <DialogContent className="sm:max-w-5xl h-[85vh] bg-white rounded-3xl overflow-hidden  border-none shadow-2xl">
          <DialogHeader className="px-8  border-b border-slate-100 bg-slate-50/50">
            <DialogTitle className="text-xl font-black uppercase text-slate-900 tracking-tight">
              Edit Product
            </DialogTitle>
          </DialogHeader>

          <div
            className="px-8 py-8 md:px-12 md:py-10 max-h-[calc(85vh-140px)] overflow-y-auto custom-scrollbar"
            data-lenis-prevent
          >
            <ProductForm
              initialData={product}
              categories={categories}
              onSuccess={() => {
                setIsEditModalOpen(false);
              }}
              onCancel={() => setIsEditModalOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminProductDetail;
