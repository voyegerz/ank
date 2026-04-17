import { useState, useEffect } from "react";

import {
  Search,
  Inbox,
  Briefcase,
  Trash2,
  Loader2,
  Calendar,
  Building,
  Mail,
  Phone,
  FileText,
} from "lucide-react";

// Shadcn Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

import inquiryService from "../../appwrite/services/inquiry";
import { useApplications } from "../../hooks/useCareerQueries";
import careersService from "../../appwrite/services/careers";

const ApplicationsPage = () => {
  const [activeTab, setActiveTab] = useState<"inquiries" | "jobs">("inquiries");
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch job applications with vacancy names
  const { data: jobApps = [], isLoading: loadingJobs } = useApplications();

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const inqRes = await inquiryService.getInquiries();
      setInquiries(inqRes.documents);
    } catch (error) {
      console.error(error);
    }
  };

  const getFilteredData = (data: any[]) => {
    return data.filter((item) => {
      const searchStr = (
        item.name ||
        item.applicant_name ||
        item.email ||
        item.applicant_email ||
        ""
      ).toLowerCase();
      return searchStr.includes(searchQuery.toLowerCase());
    });
  };

  const handleDeleteInquiry = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?"))
      return;
    try {
      await inquiryService.deleteInquiry(id);
      await fetchInquiries();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteJobApp = async (id: string, resumeId?: string) => {
    if (!window.confirm("Are you sure you want to delete this application?"))
      return;
    try {
      // Delete resume if it exists
      if (resumeId) {
        await careersService.deleteResume(resumeId);
      }
      // Delete the application document
      await careersService.deleteApplication(id);
      // Refetch applications
      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to delete application.");
    }
  };

  const filteredInquiries = getFilteredData(inquiries);
  const filteredJobs = getFilteredData(jobApps);

  const formatDate = (isoString: string) => {
    if (!isoString) return "N/A";
    const d = new Date(isoString);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight text-slate-900">
            Applications
          </h1>
          <p className="text-slate-400 text-sm font-medium">
            Manage incoming product inquiries and job applications
          </p>
        </div>
      </div>

      {/* Tabs and Search */}
      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as any)}
        className="w-full"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
          <TabsList className="py-5 bg-slate-200 border border-slate-200">
            <TabsTrigger
              value="inquiries"
              className="h-10 rounded-lg px-5 font-bold uppercase tracking-wider gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Inbox size={16} />
              Inquiries
              <Badge
                variant="secondary"
                className="ml-1 bg-slate-200 text-slate-600 data-[state=active]:bg-white/20 data-[state=active]:text-white"
              >
                {inquiries.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger
              value="jobs"
              className="rounded-lg h-10 px-5 font-bold uppercase tracking-wider gap-2 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <Briefcase size={16} />
              Job Apps
              <Badge
                variant="secondary"
                className="ml-1 bg-slate-200 text-slate-600 data-[state=active]:bg-white/20 data-[state=active]:text-white"
              >
                {jobApps.length}
              </Badge>
            </TabsTrigger>
          </TabsList>

          <div className="relative w-full md:w-80">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 z-10"
            />
            <Input
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-11 h-12 rounded-xl bg-white border-slate-200"
            />
          </div>
        </div>

        {loadingJobs ? (
          <div className="flex items-center justify-center h-64">
            <Loader2 size={32} className="animate-spin text-indigo-500" />
          </div>
        ) : (
          <>
            <TabsContent value="inquiries" className="mt-0 space-y-4">
              {filteredInquiries.length === 0 ? (
                <Card className="border-slate-200 rounded-2xl p-12 text-center text-slate-500">
                  No inquiries found.
                </Card>
              ) : (
                <div className="grid gap-4">
                  {filteredInquiries.map((inq) => (
                    <Card
                      key={inq.$id}
                      className="border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center">
                            <Inbox size={20} />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900 leading-tight">
                              {inq.name}{" "}
                              <span className="text-slate-400 text-xs ml-2 font-normal lowercase">
                                ({inq.type})
                              </span>
                            </h3>
                            <div className="flex items-center gap-3 text-xs text-slate-500 font-medium mt-1">
                              <span className="flex items-center gap-1">
                                <Mail size={12} /> {inq.email}
                              </span>
                              <span className="flex items-center gap-1">
                                <Phone size={12} /> {inq.mobile}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge
                            variant="outline"
                            className="border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-wider"
                          >
                            <Calendar size={12} className="mr-1" />{" "}
                            {formatDate(inq.$createdAt)}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDeleteInquiry(inq.$id)}
                            className="text-slate-300 hover:text-red-500 hover:bg-red-50"
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </div>

                      {inq.company_name && (
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 w-fit px-3 py-1.5 rounded-lg mb-4">
                          <Building size={14} className="text-slate-400" />
                          {inq.company_name}{" "}
                          {inq.designation && `- ${inq.designation}`}{" "}
                          {inq.country && `(${inq.country})`}
                        </div>
                      )}

                      {inq.message && (
                        <div className="bg-slate-50 rounded-xl p-4 text-sm text-slate-700">
                          <p className="font-medium">{inq.message}</p>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="jobs" className="mt-0 space-y-4">
              {filteredJobs.length === 0 ? (
                <Card className="border-slate-200 rounded-2xl p-12 text-center text-slate-500">
                  No job applications found.
                </Card>
              ) : (
                <div className="grid gap-4">
                  {filteredJobs.map((app) => (
                    <Card
                      key={app.$id}
                      className="border-slate-200 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
                          <Briefcase size={24} />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg">
                            {app.applicant_name}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mt-1">
                            <span className="flex items-center gap-1">
                              <Mail size={14} /> {app.applicant_email}
                            </span>
                            <Badge className="bg-slate-100 text-slate-600 border-none shadow-none font-bold uppercase text-[10px]">
                              {app.vacancy?.title || "Unknown Vacancy"}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Badge
                          variant="outline"
                          className="border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-wider mr-2"
                        >
                          <Calendar size={12} className="mr-1" />{" "}
                          {formatDate(app.$createdAt)}
                        </Badge>
                        {app.resume_id ? (
                          <Button
                            asChild
                            variant="outline"
                            className="bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 rounded-xl font-bold uppercase text-[11px] tracking-wider"
                          >
                            <a
                              href={careersService.getResumeDownloadUrl(
                                app.resume_id,
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FileText size={14} /> View Resume
                            </a>
                          </Button>
                        ) : (
                          <span className="text-xs text-slate-400 italic font-medium px-4">
                            No Resume
                          </span>
                        )}
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() =>
                            handleDeleteJobApp(app.$id, app.resume_id)
                          }
                          className="text-slate-300 hover:text-red-500 hover:bg-red-50"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
};

export default ApplicationsPage;
