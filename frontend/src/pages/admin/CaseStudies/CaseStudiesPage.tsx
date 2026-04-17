import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Image as ImageIcon,
  Loader2,
  FileText,
} from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

import {
  useCaseStudies,
  useStudyItems,
} from "../../../hooks/useContentQueries";
import CaseStudyForm from "./components/CaseStudyForm";

const CaseStudiesPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Modals state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudy, setEditingStudy] = useState<any | null>(null);

  // Queries
  const { data: studies = [], isLoading: loadingStudies } = useCaseStudies();
  const { data: items = [], isLoading: loadingItems } = useStudyItems();

  const loading = loadingStudies || loadingItems;

  const caseStudies = useMemo(() => {
    return studies.map((study: any) => ({
      ...study,
      items: items.filter((item: any) => {
        const relationId =
          typeof item.caseStudies === "string"
            ? item.caseStudies
            : item.caseStudies?.$id;
        return relationId === study.$id;
      }),
    }));
  }, [studies, items]);

  const getFilteredStudies = () => {
    return caseStudies.filter((c) =>
      c.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  };

  const openAddModal = () => {
    setEditingStudy(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingStudy(null);
  };

  const filteredStudies = getFilteredStudies();

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900">
            Case Studies
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Manage projects and success stories
          </p>
        </div>
        <Button
          onClick={openAddModal}
          className="rounded-xl font-bold uppercase tracking-wider h-11 px-6 shadow-lg shadow-primary/20"
        >
          <Plus size={16} /> Add Case Study
        </Button>
      </div>

      {/* Search */}
      <div className="relative w-full md:w-96">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10"
        />
        <Input
          placeholder="Search case studies..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-11 h-12 rounded-xl bg-white border-slate-200 focus:ring-primary/20"
        />
      </div>

      {/* Content Area */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 size={32} className="animate-spin text-purple-500" />
        </div>
      ) : filteredStudies.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
            <FileText size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            No case studies found
          </h3>
          <p className="text-slate-500 text-sm max-w-sm mt-1">
            We couldn't find any case studies matching your search.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              key={study.$id}
            >
              <Card
                onClick={() =>
                  navigate(`/admin/dashboard/case-studies/${study.$id}`)
                }
                className="h-full border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group flex flex-col cursor-pointer"
              >
                <div className="aspect-video bg-slate-100 relative overflow-hidden flex-shrink-0">
                  {study.imageUrl ? (
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <ImageIcon size={48} strokeWidth={1} />
                    </div>
                  )}
                </div>

                <CardHeader className="p-5 pb-2">
                  <CardTitle className="text-lg font-bold text-slate-900 leading-tight line-clamp-2">
                    {study.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 flex-1">
                  <CardDescription className="text-slate-500 text-sm line-clamp-3">
                    {study.content || "No details available."}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-5 pt-0 border-t border-slate-50 mt-auto">
                  <div className="flex items-center justify-between w-full">
                    <Badge
                      variant="outline"
                      className="border-slate-100 text-slate-400 font-bold text-[10px] uppercase tracking-wider"
                    >
                      {study.items?.length || 0} Sub-Items
                    </Badge>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-5xl h-[85vh] bg-white rounded-3xl overflow-hidden p-0 gap-0 border-none shadow-2xl">
          <DialogHeader className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
            <DialogTitle className="text-xl font-black uppercase text-slate-900 tracking-tight">
              {editingStudy ? "Edit Case Study" : "Add New Case Study"}
            </DialogTitle>
          </DialogHeader>

          <div
            className="px-8 py-8 md:px-12 md:py-10 max-h-[calc(85vh-140px)] overflow-y-auto custom-scrollbar"
            data-lenis-prevent
          >
            <CaseStudyForm
              initialData={editingStudy}
              onSuccess={() => {
                setIsModalOpen(false);
              }}
              onCancel={closeModal}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CaseStudiesPage;
