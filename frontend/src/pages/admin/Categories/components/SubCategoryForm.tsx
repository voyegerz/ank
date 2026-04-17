import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface SubCategoryFormProps {
  isOpen: boolean;
  onClose: () => void;
  editingSubCategory: any | null;
  subCatName: string;
  setSubCatName: (value: string) => void;
  parentCategoryId: string;
  setParentCategoryId: (value: string) => void;
  categories: any[];
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const SubCategoryForm = ({
  isOpen,
  onClose,
  editingSubCategory,
  subCatName,
  setSubCatName,
  parentCategoryId,
  setParentCategoryId,
  categories,
  onSubmit,
  isSubmitting,
}: SubCategoryFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white rounded-3xl overflow-hidden p-5 gap-0 border-none shadow-2xl">
        <DialogHeader className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
          <DialogTitle className="text-lg font-black uppercase text-slate-900 flex items-center gap-2">
            {editingSubCategory ? "Edit Sub-Category" : "Add New Sub-Category"}
          </DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <form id="subCategoryForm" onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
                Parent Category *
              </Label>
              <Select
                required
                value={parentCategoryId}
                onValueChange={setParentCategoryId}
              >
                <SelectTrigger className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all">
                  <SelectValue placeholder="Select Parent Category" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {categories.length === 0 ? (
                    <SelectItem value="no-categories" disabled>
                      No categories available
                    </SelectItem>
                  ) : (
                    categories.map((c: any) => (
                      <SelectItem key={c.$id} value={c.$id}>
                        {c.name}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
                Sub-Category Name *
              </Label>
              <Input
                required
                autoFocus
                placeholder="e.g. Mobile Robots, Diagnostic Equipment"
                value={subCatName}
                onChange={(e) => setSubCatName(e.target.value)}
                className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all shadow-inner"
              />
            </div>
          </form>
        </div>

        <DialogFooter className="gap-15 px-6 py-5 border-t border-slate-100 bg-slate-50/50">
          <Button
            variant="ghost"
            onClick={onClose}
            className="rounded-xl font-bold"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="subCategoryForm"
            disabled={isSubmitting || categories.length === 0}
            className="rounded-xl font-bold uppercase tracking-wider px-8"
          >
            {isSubmitting && (
              <Loader2 size={16} className="mr-2 animate-spin" />
            )}
            {editingSubCategory ? "Save Changes" : "Create Sub-Category"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SubCategoryForm;
