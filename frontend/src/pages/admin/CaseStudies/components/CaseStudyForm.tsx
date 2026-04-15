import { useState, useEffect } from "react";
import { Plus, Trash2, Loader2, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import contentService from "../../../../appwrite/services/content";

interface CaseStudyFormProps {
  initialData?: any;
  onSuccess: () => void;
  onCancel: () => void;
}

const CaseStudyForm = ({ initialData, onSuccess, onCancel }: CaseStudyFormProps) => {
  const [csTitle, setCsTitle] = useState("");
  const [csContent, setCsContent] = useState("");
  const [csImage, setCsImage] = useState<File | null>(null);
  const [csItems, setCsItems] = useState<{ label: string; description: string; $id?: string }[]>(
    [{ label: "", description: "" }]
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialData) {
      setCsTitle(initialData.title || "");
      setCsContent(initialData.content || "");
      setCsItems(
        initialData.items && initialData.items.length > 0
          ? initialData.items.map((it: any) => ({
              label: it.label,
              description: it.description,
              $id: it.$id,
            }))
          : [{ label: "", description: "" }]
      );
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let studyId = initialData?.$id;
      let image_id = initialData?.image_id;

      // 1. Image Upload
      if (csImage) {
        const fileObj = await contentService.uploadProjectImage(csImage);
        image_id = fileObj.$id;
      }

      const studyData = {
        title: csTitle,
        content: csContent,
        image_id,
      };

      // 2. Create or Update Study
      if (initialData) {
        await contentService.updateCaseStudy(initialData.$id, studyData);
      } else {
        const newStudy = await contentService.createCaseStudy(studyData);
        studyId = newStudy.$id;
      }

      // 3. Handle Items (Relational Logic)
      if (studyId) {
        const filteredItems = csItems.filter(
          (item) => item.label.trim() !== "" || item.description.trim() !== ""
        );

        if (initialData) {
          // Handle deletions
          const existingItemIds = initialData.items?.map((item: any) => item.$id) || [];
          const currentItemIds = filteredItems.map((item) => item.$id).filter(Boolean);
          const toDelete = existingItemIds.filter((id: string) => !currentItemIds.includes(id));

          if (toDelete.length > 0) {
            for (const id of toDelete) {
              await contentService.deleteStudyItem(id);
            }
          }

          // Handle updates and adds
          for (const item of filteredItems) {
            if (item.$id) {
              await contentService.updateStudyItem(item.$id, {
                label: item.label,
                description: item.description,
              });
            } else {
              await contentService.addItemToStudy(studyId, {
                label: item.label,
                description: item.description,
              });
            }
          }
        } else {
          // Fresh creation adds
          for (const item of filteredItems) {
            await contentService.addItemToStudy(studyId, {
              label: item.label,
              description: item.description,
            });
          }
        }
      }

      onSuccess();
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Failed to save case study.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form id="csForm" onSubmit={handleSubmit} className="space-y-10">
      <div className="space-y-2">
        <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
          Project Title *
        </Label>
        <Input
          required
          placeholder="Enter project name"
          value={csTitle}
          onChange={(e) => setCsTitle(e.target.value)}
          className="h-12 rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
          Content Details *
        </Label>
        <Textarea
          required
          placeholder="Describe the project achievements..."
          value={csContent}
          onChange={(e) => setCsContent(e.target.value)}
          className="rounded-xl bg-slate-50 border-slate-200 focus:bg-white transition-all h-40"
        />
      </div>

      <div className="space-y-6 pt-8 border-t border-slate-100">
        <div className="flex items-center justify-between">
          <Label className="text-[11px] font-black uppercase text-slate-400 tracking-widest">
            Project Highlights / Milestones
          </Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setCsItems([...csItems, { label: "", description: "" }])}
            className="h-8 px-3 rounded-xl text-[10px] uppercase font-bold border-slate-200 hover:bg-slate-50"
          >
            <Plus size={14} className="mr-1.5" /> Add Milestone Row
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {csItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-slate-50 p-6 rounded-[2rem] border border-slate-100 transition-all hover:bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1 space-y-4">
                  <Input
                    placeholder="Milestone Label (e.g. The Challenge)"
                    value={item.label}
                    onChange={(e) => {
                      const newItems = [...csItems];
                      newItems[index].label = e.target.value;
                      setCsItems(newItems);
                    }}
                    className="h-11 rounded-2xl bg-white border-slate-200 text-sm font-black uppercase tracking-tight"
                  />
                  <Textarea
                    placeholder="Detailed description of this milestone..."
                    value={item.description}
                    onChange={(e) => {
                      const newItems = [...csItems];
                      newItems[index].description = e.target.value;
                      setCsItems(newItems);
                    }}
                    className="rounded-2xl bg-white border-slate-200 text-sm min-h-[100px] leading-relaxed"
                  />
                </div>
                {csItems.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      const newItems = csItems.filter((_, i) => i !== index);
                      setCsItems(newItems);
                    }}
                    className="h-11 w-11 text-slate-300 hover:text-red-600 hover:bg-red-50 rounded-2xl shrink-0"
                  >
                    <Trash2 size={18} />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-[11px] font-black uppercase text-slate-500 tracking-wider">
          Cover Image
        </Label>
        <div className="flex items-center gap-4">
          {initialData?.image_id && !csImage && (
            <img
              src={contentService.getProjectImagePreview(initialData.image_id)}
              alt="Current"
              className="h-14 w-14 rounded-lg object-cover border border-slate-200"
            />
          )}
          <Input
            type="file"
            accept="image/*"
            onChange={(e) => setCsImage(e.target.files?.[0] || null)}
            className="h-12 rounded-xl bg-slate-50 border-dashed border-2 cursor-pointer pt-2"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-slate-100">
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
          {isSubmitting && <Loader2 size={16} className="mr-2 animate-spin" />}
          {initialData ? "Save Changes" : "Create Case Study"}
        </Button>
      </div>
    </form>
  );
};

export default CaseStudyForm;
