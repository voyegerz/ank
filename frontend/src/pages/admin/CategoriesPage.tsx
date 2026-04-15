import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  Loader2,
  Layers,
  X,
  AlertCircle,
} from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import catalogService from "../../appwrite/services/catalog";

const CategoriesPage = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [catName, setCatName] = useState("");
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const cats = await catalogService.getCategories();
      setCategories(cats.documents);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingCategory) {
        await catalogService.updateCategory(editingCategory.$id, { name: catName });
      } else {
        await catalogService.createCategory({ name: catName });
      }
      await fetchData();
      closeModal();
    } catch (error) {
      console.error(error);
      alert("Failed to save category.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (!window.confirm("Are you sure? This will not delete products in this category, but they will become uncategorized."))
      return;
    try {
      await catalogService.deleteCategory(id);
      await fetchData();
    } catch (error) {
      console.error("Failed to delete category:", error);
      alert("Failed to delete category. It might be in use.");
    }
    setActiveMenuId(null);
  };

  const openEditModal = (category: any) => {
    setEditingCategory(category);
    setCatName(category.name);
    setIsModalOpen(true);
    setActiveMenuId(null);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setCatName("");
  };

  const filteredCategories = categories.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900">
            Product Categories
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Manage your product classifications
          </p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="rounded-xl font-bold uppercase tracking-wider"
        >
          <Plus className="mr-2" size={16} /> Add Category
        </Button>
      </div>

      {/* Filters Area */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10"
        />
        <Input
          placeholder="Search categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-11 h-12 rounded-xl bg-white border-slate-200"
        />
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 size={32} className="animate-spin text-indigo-500" />
        </div>
      ) : filteredCategories.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <Layers size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            No categories found
          </h3>
          <p className="text-slate-500 text-sm max-w-sm mt-1">
            Try adjusting your search query or add a new category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((cat) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={cat.$id}
            >
              <Card className="border-slate-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                    <Layers size={20} />
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="w-8 h-8 p-0 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-50">
                        <MoreVertical size={16} />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="rounded-xl w-36">
                      <DropdownMenuItem onClick={() => openEditModal(cat)} className="font-semibold text-slate-700 cursor-pointer">
                        <Edit2 size={14} className="mr-2" /> Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDeleteCategory(cat.$id)} className="font-semibold text-red-600 cursor-pointer hover:!text-red-600 hover:!bg-red-50">
                        <Trash2 size={14} className="mr-2" /> Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">
                  {cat.name}
                </h3>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <AlertCircle size={12} className="text-slate-300" />
                  <span>ID: {cat.$id.slice(0, 8)}...</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* --- ADD / EDIT CATEGORY MODAL --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md bg-white rounded-3xl overflow-hidden p-0 gap-0 border-none shadow-2xl">
          <DialogHeader className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <DialogTitle className="text-lg font-black uppercase text-slate-900 flex items-center gap-2">
              {editingCategory ? <Edit2 size={18} /> : <Plus size={18} />}
              {editingCategory ? "Edit Category" : "Add New Category"}
            </DialogTitle>
          </DialogHeader>

          <div className="p-6">
            <form id="categoryForm" onSubmit={handleCategorySubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
                  Category Name *
                </Label>
                <Input
                  required
                  autoFocus
                  placeholder="e.g. Mechanical, Software"
                  value={catName}
                  onChange={(e) => setCatName(e.target.value)}
                  className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-inner"
                />
              </div>
            </form>
          </div>

          <DialogFooter className="px-6 py-5 border-t border-slate-100 bg-slate-50/50">
            <Button variant="ghost" onClick={closeModal} className="rounded-xl font-bold">
              Cancel
            </Button>
            <Button
              type="submit"
              form="categoryForm"
              disabled={isSubmitting}
              className="rounded-xl font-bold uppercase tracking-wider px-8"
            >
              {isSubmitting && <Loader2 size={16} className="mr-2 animate-spin" />}
              {editingCategory ? "Save Changes" : "Create Category"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CategoriesPage;
