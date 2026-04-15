import { useState, useEffect } from "react";
import { Plus, Trash2, Loader2, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import catalogService from "@/appwrite/services/catalog";

interface ProductFormProps {
  initialData?: any;
  categories: any[];
  onSuccess: () => void;
  onCancel: () => void;
}

const ProductForm = ({
  initialData,
  categories,
  onSuccess,
  onCancel,
}: ProductFormProps) => {
  const [prodName, setProdName] = useState("");
  const [prodDesc, setProdDesc] = useState("");
  const [prodCategoryId, setProdCategoryId] = useState("");
  const [prodSpecs, setProdSpecs] = useState<string[]>([""]);
  const [prodImage, setProdImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setProdName(initialData.name || "");
      setProdDesc(initialData.description || "");
      setProdCategoryId(initialData.category?.$id || "");
      setProdSpecs(
        initialData.key_specs && initialData.key_specs.length > 0
          ? initialData.key_specs
          : [""],
      );
      setProdImage(null);
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let uploadedImageId = initialData?.image_id;

      // 1. Image Upload
      if (prodImage) {
        const fileResponse = await catalogService.uploadProductImage(prodImage);
        uploadedImageId = fileResponse.$id;
        // Delete old image if it exists
        if (initialData?.image_id) {
          await catalogService
            .deleteProductImage(initialData.image_id)
            .catch(console.error);
        }
      }

      const productData = {
        name: prodName,
        category: prodCategoryId,
        description: prodDesc,
        key_specs: prodSpecs.filter((s) => s.trim() !== ""),
        image_id: uploadedImageId,
      };

      // 2. Create or Update
      if (initialData) {
        await catalogService.updateProduct(initialData.$id, productData);
      } else {
        if (!uploadedImageId) {
          alert("Please upload a product image.");
          setIsSubmitting(false);
          return;
        }
        await catalogService.createProduct(productData);
      }

      onSuccess();
    } catch (error) {
      console.error("Product submission failed:", error);
      alert("Failed to save product.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const addSpec = () => setProdSpecs([...prodSpecs, ""]);
  const removeSpec = (index: number) => {
    if (prodSpecs.length > 1) {
      setProdSpecs(prodSpecs.filter((_, i) => i !== index));
    }
  };
  const updateSpec = (index: number, val: string) => {
    const newSpecs = [...prodSpecs];
    newSpecs[index] = val;
    setProdSpecs(newSpecs);
  };

  return (
    <form id="productForm" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Basic Info */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
              Product Name *
            </Label>
            <Input
              required
              placeholder="Enter product name"
              value={prodName}
              onChange={(e) => setProdName(e.target.value)}
              className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
              Category *
            </Label>
            <Select
              required
              value={prodCategoryId}
              onValueChange={setProdCategoryId}
            >
              <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent className="rounded-xl">
                {categories.map((c) => (
                  <SelectItem key={c.$id} value={c.$id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
              Description *
            </Label>
            <Textarea
              required
              placeholder="Describe the product..."
              value={prodDesc}
              onChange={(e) => setProdDesc(e.target.value)}
              className="rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all h-40"
            />
          </div>
        </div>

        {/* Right Side: Media & Specs */}
        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
              Product Image
            </Label>
            <div className="flex flex-col gap-4">
              {initialData?.image_id && !prodImage && (
                <div className="h-32 w-full rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center p-2">
                  <img
                    src={catalogService.getProductImagePreview(
                      initialData.image_id,
                    )}
                    alt="Current"
                    className="h-full object-contain"
                  />
                </div>
              )}
              <div className="relative">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setProdImage(e.target.files?.[0] || null)}
                  className="h-14 rounded-xl bg-slate-50 border-dashed border-2 cursor-pointer pt-3 pl-4"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between">
              <Label className="text-[11px] font-black uppercase text-slate-400 tracking-widest">
                Key Specifications
              </Label>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={addSpec}
                className="h-8 px-3 rounded-xl text-[10px] uppercase font-bold border-slate-200 hover:bg-slate-50"
              >
                <Plus size={14} className="mr-1.5" /> Add Spec
              </Button>
            </div>
            <div className="space-y-3 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
              {prodSpecs.map((spec, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder={`Spec #${index + 1}`}
                    value={spec}
                    onChange={(e) => updateSpec(index, e.target.value)}
                    className="h-10 rounded-xl bg-white border-slate-200"
                  />
                  {prodSpecs.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeSpec(index)}
                      className="h-10 w-10 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-xl shrink-0"
                    >
                      <Trash2 size={16} />
                    </Button>
                  )}
                </div>
              ))}
            </div>

            <div className=" grid grid-cols-2 flex justify-end gap-3 pt-8 border-t border-slate-100">
              <Button
                type="button"
                variant="ghost"
                onClick={onCancel}
                className="rounded-xl font-bold uppercase tracking-widest text-[11px] h-12 px-6"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="rounded-xl font-bold uppercase tracking-widest text-[11px] h-12 px-10 shadow-xl shadow-primary/20"
              >
                {isSubmitting && (
                  <Loader2 size={16} className="mr-2 animate-spin" />
                )}
                {initialData ? "Save Changes" : "Create Product"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
