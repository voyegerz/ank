import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Briefcase,
  Loader2,
  Edit2,
  Trash2,
  MoreVertical,
  CheckCircle2,
  XCircle,
} from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

import {
  useVacancies,
  useCreateVacancy,
  useUpdateVacancy,
  useDeleteVacancy,
} from "@/hooks/useCareerQueries";

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingVacancy, setEditingVacancy] = useState<any | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(true);

  // Queries
  const { data: vacancies = [], isLoading: fetchingVacancies } = useVacancies();

  // Mutations
  const createMutation = useCreateVacancy();
  const updateMutation = useUpdateVacancy();
  const deleteMutation = useDeleteVacancy();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (editingVacancy) {
        await updateMutation.mutateAsync({
          id: editingVacancy.$id,
          data: { title, description, is_active: isActive },
        });
      } else {
        await createMutation.mutateAsync({
          title,
          description,
          is_active: isActive,
        });
      }
      closeModal();
    } catch (error) {
      console.error(error);
      alert("Failed to save vacancy.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this vacancy?"))
      return;
    try {
      await deleteMutation.mutateAsync(id);
    } catch (error) {
      console.error("Failed to delete vacancy:", error);
      alert("Failed to delete vacancy.");
    }
  };

  const openAddModal = () => {
    setEditingVacancy(null);
    setTitle("");
    setDescription("");
    setIsActive(true);
    setIsModalOpen(true);
  };

  const openEditModal = (vacancy: any) => {
    setEditingVacancy(vacancy);
    setTitle(vacancy.title);
    setDescription(vacancy.description);
    setIsActive(vacancy.is_active ?? true);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingVacancy(null);
    setTitle("");
    setDescription("");
    setIsActive(true);
  };

  const filteredVacancies = vacancies.filter((v: any) =>
    v.title?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900">
            Job Vacancies
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Manage career opportunities
          </p>
        </div>
        <Button
          onClick={openAddModal}
          className="rounded-xl font-bold uppercase tracking-wider h-11 px-6 shadow-lg shadow-primary/20"
        >
          <Plus size={16} /> Add Vacancy
        </Button>
      </div>

      {/* Filters Area */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10"
        />
        <Input
          placeholder="Search vacancies by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-11 h-12 rounded-xl bg-white border-slate-200"
        />
      </div>

      {/* Content Area */}
      {fetchingVacancies ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 size={32} className="animate-spin text-teal-500" />
        </div>
      ) : filteredVacancies.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <Briefcase size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            No vacancies found
          </h3>
          <p className="text-slate-500 text-sm max-w-sm mt-1">
            Try adjusting your search or add a new vacancy.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVacancies.map((vacancy: any) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={vacancy.$id}
            >
              <Card className="border-slate-200 max-w-2xl rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group relative">
                <CardHeader className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-bold text-slate-900 leading-tight">
                          {vacancy.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          {vacancy.is_active ? (
                            <Badge className="bg-emerald-50 text-emerald-600 text-[10px] uppercase tracking-wider border-none">
                              <CheckCircle2 size={10} className="mr-1" /> Active
                            </Badge>
                          ) : (
                            <Badge className="bg-slate-100 text-slate-500 text-[10px] uppercase tracking-wider border-none">
                              <XCircle size={10} className="mr-1" /> Inactive
                            </Badge>
                          )}
                        </div>
                      </div>
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
                          onClick={() => openEditModal(vacancy)}
                          className="font-semibold text-slate-700 cursor-pointer"
                        >
                          <Edit2 size={14} /> Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(vacancy.$id)}
                          className="font-semibold text-red-600 cursor-pointer hover:!text-red-600 hover:!bg-red-50"
                        >
                          <Trash2 size={14} /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-slate-500 text-sm line-clamp-3">
                    {vacancy.description || "No description provided."}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add / Edit Vacancy Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg bg-white rounded-3xl overflow-hidden p-0 gap-0 border-none shadow-2xl">
          <DialogHeader className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <DialogTitle className="text-lg font-black uppercase text-slate-900 flex items-center gap-2">
              {editingVacancy ? <Edit2 size={18} /> : <Plus size={18} />}
              {editingVacancy ? "Edit Vacancy" : "Add New Vacancy"}
            </DialogTitle>
          </DialogHeader>

          <div className="p-6">
            <form
              id="vacancyForm"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
                  Job Title *
                </Label>
                <Input
                  required
                  autoFocus
                  placeholder="e.g. Design Engineer"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
                  Description *
                </Label>
                <Textarea
                  required
                  placeholder="Describe the role responsibilities..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all h-32 resize-none"
                />
              </div>

              <div className="flex items-center gap-3 py-2">
                <Checkbox
                  id="isActive"
                  checked={isActive}
                  onCheckedChange={(c) => setIsActive(!!c)}
                />
                <Label
                  htmlFor="isActive"
                  className="text-sm font-bold text-slate-600 cursor-pointer"
                >
                  Active Posting (visible to applicants)
                </Label>
              </div>
            </form>
          </div>

          <DialogFooter className="px-6 py-5 border-t border-slate-100 bg-slate-50/50">
            <Button
              type="button"
              variant="ghost"
              onClick={closeModal}
              className="rounded-xl font-bold"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              form="vacancyForm"
              disabled={isSubmitting}
              className="rounded-xl font-bold uppercase tracking-wider px-8"
            >
              {isSubmitting && (
                <Loader2 size={16} className="mr-2 animate-spin" />
              )}
              {editingVacancy ? "Save Changes" : "Create Vacancy"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CareersPage;
