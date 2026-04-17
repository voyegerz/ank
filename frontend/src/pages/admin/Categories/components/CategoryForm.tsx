import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface CategoryFormProps {
  isOpen: boolean;
  onClose: () => void;
  editingCategory: any | null;
  catName: string;
  setCatName: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const CategoryForm = ({
  isOpen,
  onClose,
  editingCategory,
  catName,
  setCatName,
  onSubmit,
  isSubmitting,
}: CategoryFormProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-white rounded-3xl overflow-hidden p-0 gap-0 border-none shadow-2xl">
        <DialogHeader className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
          <DialogTitle className="text-lg font-black uppercase text-slate-900 flex items-center gap-2">
            {editingCategory ? "Edit Category" : "Add New Category"}
          </DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <form
            id="categoryForm"
            onSubmit={onSubmit}
            className="space-y-4"
          >
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
          <Button
            variant="ghost"
            onClick={onClose}
            className="rounded-xl font-bold"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            form="categoryForm"
            disabled={isSubmitting}
            className="rounded-xl font-bold uppercase tracking-wider px-8"
          >
            {isSubmitting && (
              <Loader2 size={16} className="mr-2 animate-spin" />
            )}
            {editingCategory ? "Save Changes" : "Create Category"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CategoryForm;
