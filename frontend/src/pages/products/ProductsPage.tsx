import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import CommonHero from "../../components/CommonHero";
import Marquee from "../../components/products/Marquee";

import { useCategories, useProducts } from "@/hooks/useCatalogQueries";
import type { Product } from "@/types/product";
import { transformProducts } from "@/utils/productTransform";

// Map URL slugs to category names and configuration
const CATEGORY_CONFIG: Record<
  string,
  {
    name: string;
    title: string;
    subtitle: string;
    caption: string;
    watermark: string;
    defaultImage: string;
    heroImage?: string;
  }
> = {
  decor: {
    name: "Botanicals & Decor",
    title: "Botanicals & Decor",
    caption: "ANK Professional Collection",
    subtitle:
      "Where nature meets precision engineering. Explore our curated range of biophilic design solutions for the modern workplace.",
    watermark: "04",
    defaultImage:
      "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2000",
  },
  medical: {
    name: "Medical & Healthcare",
    title: "Medical & Healthcare",
    caption: "ANK Healthcare Solutions",
    subtitle:
      "ISO-compliant medical furniture and equipment for modern healthcare facilities. Designed for hygiene, durability, and patient comfort.",
    watermark: "02",
    defaultImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
  },
  software: {
    name: "Software & Automation",
    title: "Software & Automation",
    caption: "ANK Digital Solutions",
    subtitle:
      "Enterprise-grade software solutions and automation tools designed to streamline operations and drive efficiency.",
    watermark: "01",
    defaultImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
  },
  industrial: {
    name: "Industrial Equipment",
    title: "Industrial Equipment",
    caption: "ANK Industrial Solutions",
    subtitle:
      "Heavy-duty industrial machinery and equipment engineered for maximum performance and reliability in demanding environments.",
    watermark: "03",
    defaultImage:
      "https://images.unsplash.com/photo-1565514020126-6786cb41771b?auto=format&fit=crop&q=80&w=2000",
  },
  courses: {
    name: "Courses & Training",
    title: "Courses & Training",
    caption: "ANK Academy",
    subtitle:
      "Professional courses and training programs designed to upskill your workforce in the latest technologies and methodologies.",
    watermark: "05",
    defaultImage:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2000",
  },
  modelling: {
    name: "Project Modelling",
    title: "Project Modelling",
    caption: "ANK Design Studio",
    subtitle:
      "Advanced 3D modelling and prototyping services to bring your concepts to life with precision and creativity.",
    watermark: "06",
    defaultImage:
      "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&q=80&w=2000",
  },
  "diy-robotics": {
    name: "DIY Robotics",
    title: "DIY Robotics",
    caption: "ANK Robotics Lab",
    subtitle:
      "Build your own robots with our comprehensive DIY kits and components. Perfect for learning and experimentation.",
    watermark: "07",
    defaultImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000",
  },
  "diy-robotics-kit": {
    name: "DIY Robotics Kit",
    title: "DIY Robotics Kit",
    caption: "ANK Starter Kits",
    subtitle:
      "Complete robotics starter kits with everything you need to begin your journey into robotics and automation.",
    watermark: "08",
    defaultImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000",
  },
};

const STATIC_CATEGORIES = ["All", "Lighting"];

const ProductsPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Get config for this category
  const config = categorySlug ? CATEGORY_CONFIG[categorySlug] : null;

  // Fetch categories to get the category ID
  const { data: categories, isLoading: isLoadingCategories } = useCategories();

  // Find category ID by name
  const categoryId = useMemo(() => {
    if (!config || !categories) return undefined;
    return categories.find(
      (cat: any) => cat.name.toLowerCase() === config.name.toLowerCase(),
    )?.$id;
  }, [categories, config]);

  // Fetch products for this category
  const {
    data: productsData,
    isLoading: isLoadingProducts,
    error,
  } = useProducts(categoryId);

  // Transform fetched products using shared utility
  const products: Product[] = useMemo(
    () =>
      transformProducts(productsData, {
        defaultImage: config?.defaultImage,
      }),
    [productsData, config?.defaultImage],
  );

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const marqueeImages =
    products.length > 0
      ? products.map((p) => p.image)
      : [
          "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1558444479-c8a51bc73a48?auto=format&fit=crop&q=80&w=800",
          "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800",
        ];

  // Handle unknown category
  if (!config) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">
              Category Not Found
            </h1>
            <p className="text-slate-500 mb-6">
              The requested product category does not exist.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Go Home
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  const isLoading = isLoadingCategories || isLoadingProducts;

  return (
    <PageLayout>
      <CommonHero
        bgImage={config.defaultImage}
        title={config.title}
        caption={config.caption}
        subtitle={config.subtitle}
        watermarkNumber={config.watermark}
      />

      {/* Marquee Strip */}
      <div className="w-full bg-slate-50 overflow-hidden">
        <Marquee images={marqueeImages} />
      </div>

      {/* Main Content */}
      <div className="w-full bg-white">
        {/* Product Header */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs font-black text-slate-900/40 uppercase tracking-wider mb-2">
                OUR PRODUCTS
              </p>
              <h2 className="text-3xl font-bold text-slate-900">
                {config.title} Collection
              </h2>
            </div>
            <p className="text-sm text-slate-500 hidden sm:block">
              {isLoading
                ? "Loading..."
                : `${filteredProducts.length} products available`}
            </p>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-slate-50 p-4 rounded-2xl">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {STATIC_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === cat
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-20">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2
                className="animate-spin text-indigo-600 mb-4"
                size={40}
              />
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                Loading products...
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <p className="text-red-500 mb-2">Failed to load products</p>
              <p className="text-slate-400 text-sm">Please try again later</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-3xl">
              <p className="text-slate-500 text-lg font-medium mb-2">
                No products found
              </p>
              <p className="text-slate-400 text-sm">
                Try adjusting your search or category filter
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-pointer"
                    onClick={() =>
                      navigate(`/products/${categorySlug}/${product.id}`)
                    }
                  >
                    {/* Product Image */}
                    <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-bold uppercase tracking-wider text-slate-700 rounded-full">
                          {product.category}
                        </span>
                      </div>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <ArrowRight size={18} className="text-slate-900" />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-slate-500 text-sm line-clamp-2 mb-4">
                        {product.description}
                      </p>

                      {/* Features */}
                      {product.features && product.features.length > 0 && (
                        <div className="space-y-1">
                          {product.features.slice(0, 2).map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs text-slate-600"
                            >
                              <CheckCircle2
                                size={12}
                                className="text-emerald-500"
                              />
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Price */}
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="text-lg font-bold text-slate-900">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

    </PageLayout>
  );
};

export default ProductsPage;
