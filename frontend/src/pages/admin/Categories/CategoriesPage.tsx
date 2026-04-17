import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  MoreVertical,
  Edit2,
  Trash2,
  Loader2,
  Layers,
  GitBranch,
} from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  useCategories,
  useCreateCategory,
  useUpdateCategory,
  useDeleteCategory,
  useSubCategories,
  useCreateSubCategory,
  useUpdateSubCategory,
  useDeleteSubCategory,
} from "../../../hooks/useCatalogQueries";
import CategoryForm from "./components/CategoryForm";
import SubCategoryForm from "./components/SubCategoryForm";

const CategoriesPage = () => {
  const [activeTab, setActiveTab] = useState("subcategories");
  const [searchQuery, setSearchQuery] = useState("");
  const [subSearchQuery, setSubSearchQuery] = useState("");

  // Category Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any | null>(null);
  const [catName, setCatName] = useState("");

  // Sub-Category Modal State
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [editingSubCategory, setEditingSubCategory] = useState<any | null>(
    null,
  );
  const [subCatName, setSubCatName] = useState("");
  const [parentCategoryId, setParentCategoryId] = useState("");

  // Queries
  const { data: categories = [], isLoading: fetchingCategories } =
    useCategories();
  const { data: subCategories = [], isLoading: fetchingSubCategories } =
    useSubCategories();

  // Mutations
  const createMutation = useCreateCategory();
  const updateMutation = useUpdateCategory();
  const deleteMutation = useDeleteCategory();
  const createSubMutation = useCreateSubCategory();
  const updateSubMutation = useUpdateSubCategory();
  const deleteSubMutation = useDeleteSubCategory();

  const isSubmitting = createMutation.isPending || updateMutation.isPending;
  const isSubSubmitting =
    createSubMutation.isPending || updateSubMutation.isPending;

  const handleCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingCategory) {
        await updateMutation.mutateAsync({
          id: editingCategory.$id,
          data: { name: catName },
        });
      } else {
        await createMutation.mutateAsync({ name: catName });
      }
      closeModal();
    } catch (error) {
      console.error(error);
      alert("Failed to save category.");
    }
  };

  const handleDeleteCategory = async (id: string) => {
    if (
      !window.confirm(
        "Are you sure? Products in this category will become uncategorized.",
      )
    )
      return;
    try {
      await deleteMutation.mutateAsync(id);
    } catch (error) {
      console.error("Failed to delete category:", error);
      alert("Failed to delete category. It might be in use.");
    }
  };

  const openEditModal = (category: any) => {
    setEditingCategory(category);
    setCatName(category.name);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    setCatName("");
  };

  const openSubEditModal = (subCat: any) => {
    setEditingSubCategory(subCat);
    setSubCatName(subCat.name);
    setParentCategoryId(subCat.category || subCat.category?.$id || "");
    setIsSubModalOpen(true);
  };

  const closeSubModal = () => {
    setIsSubModalOpen(false);
    setEditingSubCategory(null);
    setSubCatName("");
    setParentCategoryId("");
  };

  const handleSubCategorySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingSubCategory) {
        await updateSubMutation.mutateAsync({
          id: editingSubCategory.$id,
          data: { name: subCatName, category: parentCategoryId },
        });
      } else {
        await createSubMutation.mutateAsync({
          name: subCatName,
          category: parentCategoryId,
        });
      }
      closeSubModal();
    } catch (error) {
      console.error(error);
      alert("Failed to save sub-category.");
    }
  };

  const handleDeleteSubCategory = async (id: string) => {
    if (!window.confirm("Are you sure? This will remove the sub-category."))
      return;
    try {
      await deleteSubMutation.mutateAsync(id);
    } catch (error) {
      console.error("Failed to delete sub-category:", error);
      alert("Failed to delete sub-category.");
    }
  };

  const filteredCategories = categories.filter((c: any) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredSubCategories = subCategories.filter((sc: any) =>
    sc.name.toLowerCase().includes(subSearchQuery.toLowerCase()),
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
            Manage your product classifications and sub-categories
          </p>
        </div>
        <Button
          onClick={() =>
            activeTab === "categories"
              ? setIsModalOpen(true)
              : setIsSubModalOpen(true)
          }
          className="rounded-xl font-bold uppercase tracking-wider h-11 px-6 shadow-lg shadow-primary/20"
        >
          <Plus size={16} /> Add{" "}
          {activeTab === "categories" ? "Category" : "Sub-Category"}
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className=" bg-white border border-slate-200 rounded-xl py-5">
          <TabsTrigger
            value="categories"
            className="h-10 rounded-lg px-6 font-bold uppercase text-xs tracking-wider data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            <Layers size={14} className="mr-2" />
            Categories
          </TabsTrigger>
          <TabsTrigger
            value="subcategories"
            className="h-10 rounded-lg px-6 font-bold uppercase text-xs tracking-wider data-[state=active]:bg-primary data-[state=active]:text-white"
          >
            <GitBranch size={14} className="mr-2" />
            Sub-Categories
          </TabsTrigger>
        </TabsList>

        {/* Categories Tab */}
        <TabsContent value="categories" className="mt-6 space-y-6">
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
          {fetchingCategories ? (
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
              {filteredCategories.map((cat: any) => (
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
                          <Button
                            variant="ghost"
                            className="w-8 h-8 p-0 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                          >
                            <MoreVertical size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="rounded-xl w-36"
                        >
                          <DropdownMenuItem
                            onClick={() => openEditModal(cat)}
                            className="font-semibold text-slate-700 cursor-pointer"
                          >
                            <Edit2 size={14} /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteCategory(cat.$id)}
                            className="font-semibold text-red-600 cursor-pointer hover:!text-red-600 hover:!bg-red-50"
                          >
                            <Trash2 size={14} /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">
                      {cat.name}
                    </h3>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Sub-Categories Tab */}
        <TabsContent value="subcategories" className="mt-6 space-y-6">
          {/* Filters Area */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10"
            />
            <Input
              placeholder="Search sub-categories..."
              value={subSearchQuery}
              onChange={(e) => setSubSearchQuery(e.target.value)}
              className="pl-11 h-12 rounded-xl bg-white border-slate-200"
            />
          </div>

          {/* Content Area */}
          {fetchingSubCategories ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 size={32} className="animate-spin text-indigo-500" />
            </div>
          ) : filteredSubCategories.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                <GitBranch size={24} className="text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                No sub-categories found
              </h3>
              <p className="text-slate-500 text-sm max-w-sm mt-1">
                Try adjusting your search query or add a new sub-category.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredSubCategories.map((subCat: any) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={subCat.$id}
                >
                  <Card className="border-slate-200 rounded-2xl p-5 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group relative">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                        <GitBranch size={20} />
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-8 h-8 p-0 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                          >
                            <MoreVertical size={16} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="rounded-xl w-36"
                        >
                          <DropdownMenuItem
                            onClick={() => openSubEditModal(subCat)}
                            className="font-semibold text-slate-700 cursor-pointer"
                          >
                            <Edit2 size={14} /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDeleteSubCategory(subCat.$id)}
                            className="font-semibold text-red-600 cursor-pointer hover:!text-red-600 hover:!bg-red-50"
                          >
                            <Trash2 size={14} /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>

                    <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">
                      {subCat.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span className="bg-slate-100 px-2 py-1 rounded-md">
                        Parent: {subCat.category?.name || "Unknown"}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      {/* --- ADD / EDIT CATEGORY MODAL --- */}
      <CategoryForm
        isOpen={isModalOpen}
        onClose={closeModal}
        editingCategory={editingCategory}
        catName={catName}
        setCatName={setCatName}
        onSubmit={handleCategorySubmit}
        isSubmitting={isSubmitting}
      />

      {/* --- ADD / EDIT SUB-CATEGORY MODAL --- */}
      <SubCategoryForm
        isOpen={isSubModalOpen}
        onClose={closeSubModal}
        editingSubCategory={editingSubCategory}
        subCatName={subCatName}
        setSubCatName={setSubCatName}
        parentCategoryId={parentCategoryId}
        setParentCategoryId={setParentCategoryId}
        categories={categories}
        onSubmit={handleSubCategorySubmit}
        isSubmitting={isSubSubmitting}
      />
    </div>
  );
};

export default CategoriesPage;
