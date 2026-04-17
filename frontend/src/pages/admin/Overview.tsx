import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Package,
  FileText,
  Inbox,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";

// Shadcn Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useProducts } from "../../hooks/useCatalogQueries";
import { useCaseStudies } from "../../hooks/useContentQueries";
import { useInquiries } from "../../hooks/useInquiryQueries";
import { useApplications } from "../../hooks/useCareerQueries";

const Overview = () => {
  const navigate = useNavigate();

  // Queries — reuses cached data from other admin pages
  const { data: products = [], isLoading: loadingProducts } = useProducts();
  const { data: caseStudies = [], isLoading: loadingStudies } =
    useCaseStudies();
  const { data: inquiries = [], isLoading: loadingInquiries } = useInquiries();
  const { data: applications = [], isLoading: loadingApps } = useApplications();

  const loading =
    loadingProducts || loadingStudies || loadingInquiries || loadingApps;

  const stats = {
    products: products.length,
    caseStudies: caseStudies.length,
    inquiries: inquiries.length,
    jobApplications: applications.length,
  };

  const cards = [
    {
      title: "Products",
      count: stats.products,
      icon: Package,
      color: "from-indigo-500 to-blue-600",
      bgLight: "bg-indigo-50",
      textColor: "text-indigo-600",
      path: "/admin/dashboard/products",
      description: "Manage your product catalog",
    },
    {
      title: "Case Studies",
      count: stats.caseStudies,
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      bgLight: "bg-purple-50",
      textColor: "text-purple-600",
      path: "/admin/dashboard/case-studies",
      description: "Published project showcases",
    },
    {
      title: "Applications",
      count: stats.inquiries + stats.jobApplications,
      icon: Inbox,
      color: "from-emerald-500 to-teal-500",
      bgLight: "bg-emerald-50",
      textColor: "text-emerald-600",
      path: "/admin/dashboard/applications",
      description: `${stats.inquiries} inquiries · ${stats.jobApplications} job forms`,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight"
        >
          Dashboard
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-slate-400 text-sm font-medium mt-1"
        >
          Overview of your content management system
        </motion.p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * 0.08,
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={() => navigate(card.path)}
            className="cursor-pointer"
          >
            <Card className="group border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden rounded-2xl">
              {/* Gradient accent top-line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              <CardHeader className="flex flex-row items-start justify-between p-6 pb-4">
                <div
                  className={`w-12 h-12 ${card.bgLight} rounded-xl flex items-center justify-center`}
                >
                  <card.icon size={22} className={card.textColor} />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-slate-300 group-hover:text-slate-500 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </CardHeader>

              <CardContent className="p-6 pt-0">
                {loading ? (
                  <div className="h-10 w-20 bg-slate-100 rounded-lg animate-pulse mb-2" />
                ) : (
                  <p className="text-4xl font-black text-slate-900 tracking-tight mb-1">
                    {card.count}
                  </p>
                )}
                <CardTitle className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-xs text-slate-400 font-medium mt-1">
                  {card.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="border-slate-200 rounded-2xl">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <TrendingUp size={18} className="text-slate-400" />
              <CardTitle className="text-sm font-black text-slate-900 uppercase tracking-wider">
                Quick Summary
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Total Products",
                  value: stats.products,
                  color: "text-indigo-600",
                  bg: "bg-indigo-50/50",
                },
                {
                  label: "Case Studies",
                  value: stats.caseStudies,
                  color: "text-purple-600",
                  bg: "bg-purple-50/50",
                },
                {
                  label: "Inquiries",
                  value: stats.inquiries,
                  color: "text-emerald-600",
                  bg: "bg-emerald-50/50",
                },
                {
                  label: "Job Applications",
                  value: stats.jobApplications,
                  color: "text-orange-600",
                  bg: "bg-orange-50/50",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`${item.bg} rounded-xl p-4 transition-colors`}
                >
                  {loading ? (
                    <div className="h-7 w-12 bg-slate-200 rounded animate-pulse mb-1" />
                  ) : (
                    <p className={`text-2xl font-black ${item.color}`}>
                      {item.value}
                    </p>
                  )}
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Overview;
