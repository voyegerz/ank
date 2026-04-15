import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Loader2,
  Image as ImageIcon,
  Edit2,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import contentService from "../../../appwrite/services/content";
import { Query } from "appwrite";
import CaseStudyForm from "./components/CaseStudyForm";

const AdminCaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [study, setStudy] = useState<any>(null);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Edit Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchDetail = async () => {
    if (!id) return;
    try {
      const [studyRes, itemsRes] = await Promise.all([
        contentService.getCaseStudy(id),
        contentService.getStudyItems([Query.equal("caseStudies", [id])]),
      ]);
      setStudy(studyRes);
      setItems(itemsRes.documents);
    } catch (error) {
      console.error("Failed to fetch project details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDetail();
  }, [id]);

  const handleDelete = async () => {
    if (!study) return;
    if (!window.confirm("Are you sure you want to delete this case study?"))
      return;
    try {
      await contentService.deleteCaseStudy(study.$id);
      if (study.image_id) {
        await contentService
          .deleteProjectImage(study.image_id)
          .catch(console.error);
      }
      navigate("/admin/dashboard/case-studies");
    } catch (error) {
      console.error("Failed to delete case study", error);
      alert("Failed to delete case study");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="animate-spin text-primary mb-4" size={32} />
        <p className="text-slate-400 text-sm font-medium uppercase tracking-widest">
          Loading Data...
        </p>
      </div>
    );
  }

  if (!study) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-slate-900 mb-2">
          Project Not Found
        </h2>
        <Button onClick={() => navigate("/admin/dashboard/case-studies")}>
          Back to List
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/admin/dashboard/case-studies")}
          className="group text-slate-500 hover:text-slate-900 transition-colors p-0 hover:bg-transparent"
        >
          <ArrowLeft
            size={16}
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          />
          <span className="text-xs font-black uppercase tracking-[0.2em]">
            Back to Case Studies
          </span>
        </Button>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button
            variant="outline"
            onClick={() => setIsModalOpen(true)}
            className="flex-1 md:flex-none rounded-xl border-slate-200 text-slate-600 font-bold uppercase tracking-widest text-[10px] h-10 px-6 gap-2"
          >
            <Edit2 size={14} /> Edit Study
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Basic Info */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl overflow-hidden">
            <CardHeader className="bg-slate-50 border-b border-slate-100 p-6">
              <CardTitle className="text-2xl font-black uppercase text-slate-900 leading-tight">
                {study.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="prose prose-slate max-w-none text-slate-600 font-medium leading-relaxed">
                {study.content.split("\n").map(
                  (p: string, i: number) =>
                    p && (
                      <p key={i} className="mb-4">
                        {p}
                      </p>
                    ),
                )}
              </div>
            </CardContent>
          </Card>

          {/* Highlights Accordion */}
          {items.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-sm font-black uppercase text-slate-400 tracking-wider px-2">
                Project Highlights
              </h3>
              <Accordion
                type="single"
                collapsible
                className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                {items.map((item, index) => (
                  <AccordionItem
                    key={item.$id}
                    value={`item-${index}`}
                    className="px-6 border-slate-100 last:border-none"
                  >
                    <AccordionTrigger className="uppercase tracking-tight text-slate-900 hover:no-underline">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-500 font-medium leading-relaxed">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>

        {/* Right: Media */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm rounded-2xl overflow-hidden aspect-square">
            <div className="w-full h-full bg-slate-50 relative">
              {study.image_id ? (
                <img
                  src={contentService.getProjectImagePreview(study.image_id)}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-200">
                  <ImageIcon size={64} strokeWidth={1} />
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Edit Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-5xl h-[85vh] bg-white rounded-3xl overflow-hidden p-0 gap-0 border-none shadow-2xl">
          <DialogHeader className="px-8 py-6 border-b border-slate-100 bg-slate-50/50">
            <DialogTitle className="text-xl font-black uppercase text-slate-900 tracking-tight">
              Edit Case Study
            </DialogTitle>
          </DialogHeader>

          <div
            className="px-8 py-8 md:px-12 md:py-10 max-h-[calc(85vh-140px)] overflow-y-auto custom-scrollbar"
            data-lenis-prevent
          >
            <CaseStudyForm
              initialData={{ ...study, items }}
              onSuccess={() => {
                setIsModalOpen(false);
                fetchDetail();
              }}
              onCancel={() => setIsModalOpen(false)}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCaseStudyDetail;
