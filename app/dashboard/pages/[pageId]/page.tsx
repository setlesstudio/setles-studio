"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Save,
  Check,
  Globe,
  Plus,
  Trash2,
  Edit2,
  Sparkles,
  Layers,
  ArrowRight,
  User,
  Quote,
  Eye,
  Settings
} from "lucide-react";
import {
  getStoredPages,
  savePages,
  getStoredServices,
  saveServices,
  getStoredPricing,
  savePricing,
  getStoredTestimonials,
  saveTestimonials,
  getStoredValueProps,
  saveValueProps,
  PageSEO,
  ServiceTile,
  PricingTile,
  TestimonialTile,
  ValuePropTile
} from "@/lib/dashboard-store";
import { CharacterCounterInput, parseHeroTitle } from "@/components/DashboardComponents";

export default function PageEditorPage() {
  const router = useRouter();
  const params = useParams();
  const pageId = params?.pageId as string;

  // Page level states
  const [page, setPage] = useState<PageSEO | null>(null);
  const [heroTitle, setHeroTitle] = useState("");
  const [heroText, setHeroText] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");

  // Tiles states based on pageId
  const [servicesList, setServicesList] = useState<ServiceTile[]>([]);
  const [pricingList, setPricingList] = useState<PricingTile[]>([]);
  const [testimonialList, setTestimonialList] = useState<TestimonialTile[]>([]);
  const [valuePropsList, setValuePropsList] = useState<ValuePropTile[]>([]);

  // Editor states
  const [savedAlert, setSavedAlert] = useState(false);
  const [previewTab, setPreviewTab] = useState<"editor" | "preview">("editor");

  // Tile Form Modal state
  const [editingTileType, setEditingTileType] = useState<"service" | "pricing" | "testimonial" | "valueprop" | null>(null);
  const [editingTileIndex, setEditingTileIndex] = useState<number | null>(null);
  // Shared temporary tile values
  const [tempService, setTempService] = useState<Partial<ServiceTile>>({});
  const [tempPricing, setTempPricing] = useState<Partial<PricingTile>>({});
  const [tempTestimonial, setTempTestimonial] = useState<Partial<TestimonialTile>>({});
  const [tempValueProp, setTempValueProp] = useState<Partial<ValuePropTile>>({});

  useEffect(() => {
    const pages = getStoredPages();
    const existing = pages.find((p) => p.pageId === pageId);
    if (existing) {
      setPage(existing);
      setHeroTitle(existing.heroTitle || "");
      setHeroText(existing.heroText || "");
      setHeroImage(existing.heroImage || "");
      setMetaTitle(existing.metaTitle || "");
      setMetaDescription(existing.metaDescription || "");

      // Load specific tiles
      setServicesList(getStoredServices());
      setPricingList(getStoredPricing());
      setTestimonialList(getStoredTestimonials());
      setValuePropsList(getStoredValueProps());
    } else {
      router.push("/dashboard/pages");
    }
  }, [pageId, router]);

  const handleSavePage = () => {
    if (!page) return;

    // Save Page details
    const pages = getStoredPages();
    const updated = pages.map((p) =>
      p.pageId === pageId
        ? { ...p, heroTitle, heroText, heroImage, metaTitle, metaDescription }
        : p
    );
    savePages(updated);

    // Save specific lists depending on which lists were manipulated
    if (pageId === "home" || pageId === "services") {
      saveServices(servicesList);
      saveValueProps(valuePropsList);
    }
    if (pageId === "pricing") {
      savePricing(pricingList);
      saveTestimonials(testimonialList);
    }

    setSavedAlert(true);
    setTimeout(() => {
      setSavedAlert(false);
      router.push("/dashboard/pages");
    }, 800);
  };

  // SEO Helpers
  const getSEOIndicatorColor = (length: number, min: number, max: number) => {
    if (length === 0) return "bg-ink/10";
    if (length >= min && length <= max) return "bg-emerald-500";
    return "bg-amber-500";
  };

  // Tile builders trigger
  const openTileEdit = (type: any, idx: number | null) => {
    setEditingTileType(type);
    setEditingTileIndex(idx);

    if (type === "service") {
      if (idx !== null) {
        setTempService({ ...servicesList[idx] });
      } else {
        setTempService({ id: "", number: `0${servicesList.length + 1}`, title: "", short: "", long: "", image: "", deliverables: [] });
      }
    } else if (type === "pricing") {
      if (idx !== null) {
        setTempPricing({ ...pricingList[idx] });
      } else {
        setTempPricing({ name: "", description: "", price: "", unit: "/ project", features: [], cta: "Get Started", href: "" });
      }
    } else if (type === "testimonial") {
      if (idx !== null) {
        setTempTestimonial({ ...testimonialList[idx] });
      } else {
        setTempTestimonial({ name: "", role: "", quote: "", image: "" });
      }
    } else if (type === "valueprop") {
      if (idx !== null) {
        setTempValueProp({ ...valuePropsList[idx] });
      } else {
        setTempValueProp({ title: "", text: "" });
      }
    }
  };

  const saveTileForm = () => {
    if (editingTileType === "service") {
      const clone = [...servicesList];
      const serviceId = tempService.title?.toLowerCase().replace(/\s+/g, "-") || "";
      const updatedItem = { ...tempService, id: tempService.id || serviceId } as ServiceTile;

      if (editingTileIndex !== null) {
        clone[editingTileIndex] = updatedItem;
      } else {
        clone.push(updatedItem);
      }
      setServicesList(clone);
    } else if (editingTileType === "pricing") {
      const clone = [...pricingList];
      const updatedItem = { ...tempPricing } as PricingTile;
      if (editingTileIndex !== null) {
        clone[editingTileIndex] = updatedItem;
      } else {
        clone.push(updatedItem);
      }
      setPricingList(clone);
    } else if (editingTileType === "testimonial") {
      const clone = [...testimonialList];
      const updatedItem = { ...tempTestimonial } as TestimonialTile;
      if (editingTileIndex !== null) {
        clone[editingTileIndex] = updatedItem;
      } else {
        clone.push(updatedItem);
      }
      setTestimonialList(clone);
    } else if (editingTileType === "valueprop") {
      const clone = [...valuePropsList];
      const updatedItem = { ...tempValueProp } as ValuePropTile;
      if (editingTileIndex !== null) {
        clone[editingTileIndex] = updatedItem;
      } else {
        clone.push(updatedItem);
      }
      setValuePropsList(clone);
    }

    setEditingTileType(null);
    setEditingTileIndex(null);
  };

  const deleteTileItem = (type: string, idx: number) => {
    if (confirm("Are you sure you want to delete this tile?")) {
      if (type === "service") {
        setServicesList(servicesList.filter((_, i) => i !== idx));
      } else if (type === "pricing") {
        setPricingList(pricingList.filter((_, i) => i !== idx));
      } else if (type === "testimonial") {
        setTestimonialList(testimonialList.filter((_, i) => i !== idx));
      } else if (type === "valueprop") {
        setValuePropsList(valuePropsList.filter((_, i) => i !== idx));
      }
    }
  };

  if (!page) return null;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Editor top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-ink/[0.06] pb-5">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/pages"
            className="p-2 hover:bg-white rounded-xl border border-ink/5 text-ink-soft hover:text-ink transition-all shadow-sm"
          >
            <ArrowLeft size={16} />
          </Link>
          <div>
            <h1 className="font-display text-xl font-bold text-ink">
              Edit Page: {page.title}
            </h1>
            <p className="text-xs text-ink-soft mt-0.5">
              Customize the Page Hero copy, visual tiles, and search engine metadata configurations.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          {savedAlert && (
            <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 animate-pulse">
              <Check size={14} /> Content Saved
            </span>
          )}

          <button
            onClick={handleSavePage}
            className="inline-flex items-center gap-2 bg-brand text-white hover:bg-brand-dark px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:shadow-lg hover:shadow-brand/20 cursor-pointer"
          >
            <Save size={14} />
            Save Layout Content
          </button>
        </div>
      </div>

      {/* Editor Content split columns */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left 2 Columns: Main Page Forms */}
        <div className="lg:col-span-2 space-y-6">
          {/* Layout switches */}
          <div className="flex gap-2 p-1.5 bg-white border border-ink/[0.06] rounded-2xl max-w-xs">
            <button
              onClick={() => setPreviewTab("editor")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                previewTab === "editor"
                  ? "bg-brand text-white shadow-sm"
                  : "text-ink-soft hover:bg-cream/40"
              }`}
            >
              Layout Editor
            </button>
            <button
              onClick={() => setPreviewTab("preview")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
                previewTab === "preview"
                  ? "bg-brand text-white shadow-sm"
                  : "text-ink-soft hover:bg-cream/40"
              }`}
            >
              Visual Simulator
            </button>
          </div>

          {previewTab === "editor" ? (
            <div className="space-y-6">
              {/* Form Card 1: Page Hero Section Settings */}
              <div className="bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm space-y-4">
                <h3 className="font-display text-base font-bold text-ink flex items-center gap-2">
                  <Layers className="text-brand" size={18} /> Hero Banner Settings
                </h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Modify the main intro heading, body summary, and cover image slot for this page's PageHero header.
                </p>

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                      Hero Display Title
                    </label>
                    <input
                      type="text"
                      value={heroTitle}
                      onChange={(e) => setHeroTitle(e.target.value)}
                      placeholder="Intro title..."
                      className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm text-ink placeholder:text-ink-soft/40"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                      Hero Description Text
                    </label>
                    <textarea
                      value={heroText}
                      onChange={(e) => setHeroText(e.target.value)}
                      rows={3}
                      placeholder="Intro caption summary..."
                      className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm text-ink placeholder:text-ink-soft/40 resize-y leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-ink/75 mb-2">
                      Hero Background Image URL / Cloudinary Path
                    </label>
                    <input
                      type="text"
                      value={heroImage}
                      onChange={(e) => setHeroImage(e.target.value)}
                      placeholder="Paste image path..."
                      className="w-full px-4 py-3 rounded-xl border border-ink/10 focus:outline-none focus:border-brand bg-cream/20 text-sm text-ink placeholder:text-ink-soft/40"
                    />
                  </div>
                </div>
              </div>

              {/* Form Card 2: Tile lists builder depending on pageId */}
              <div className="bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-ink/[0.05] pb-4">
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">Modular Grid Tiles</h3>
                    <p className="text-xs text-ink-soft mt-0.5">Manage grid components rendered on this page.</p>
                  </div>
                  {/* Show corresponding tile insert options */}
                  {pageId === "home" && (
                    <button
                      onClick={() => openTileEdit("valueprop", null)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-white hover:bg-brand-dark rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <Plus size={12} /> Add Value Prop
                    </button>
                  )}
                  {pageId === "services" && (
                    <button
                      onClick={() => openTileEdit("service", null)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand text-white hover:bg-brand-dark rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer"
                    >
                      <Plus size={12} /> Add Service
                    </button>
                  )}
                  {pageId === "pricing" && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => openTileEdit("pricing", null)}
                        className="inline-flex items-center gap-1 bg-brand text-white hover:bg-brand-dark px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                      >
                        <Plus size={10} /> Add Plan
                      </button>
                      <button
                        onClick={() => openTileEdit("testimonial", null)}
                        className="inline-flex items-center gap-1 bg-ink text-white hover:bg-black px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                      >
                        <Plus size={10} /> Add Review
                      </button>
                    </div>
                  )}
                </div>

                {/* Render Tiles List */}
                <div className="space-y-3 pt-2">
                  {/* Home Page: Value Props list */}
                  {pageId === "home" && valuePropsList.map((prop, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-cream/40 rounded-2xl border border-ink/[0.03]">
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-ink truncate">{prop.title}</h4>
                        <p className="text-xs text-ink-soft mt-0.5 truncate">{prop.text}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => openTileEdit("valueprop", idx)}
                          className="p-1.5 hover:bg-white rounded-lg text-ink-soft hover:text-brand border border-transparent hover:border-ink/5"
                        >
                          <Edit2 size={12} />
                        </button>
                        <button
                          onClick={() => deleteTileItem("valueprop", idx)}
                          className="p-1.5 hover:bg-red-50 rounded-lg text-ink-soft hover:text-red-600 border border-transparent hover:border-red-50"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Services Page: Services list */}
                  {pageId === "services" && servicesList.map((service, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-cream/40 rounded-2xl border border-ink/[0.03]">
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-ink truncate">
                          {service.number}. {service.title}
                        </h4>
                        <p className="text-xs text-ink-soft mt-0.5 truncate">{service.short}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => openTileEdit("service", idx)}
                          className="p-1.5 hover:bg-white rounded-lg text-ink-soft hover:text-brand border border-transparent hover:border-ink/5"
                        >
                          <Edit2 size={12} />
                        </button>
                        <button
                          onClick={() => deleteTileItem("service", idx)}
                          className="p-1.5 hover:bg-red-50 rounded-lg text-ink-soft hover:text-red-600 border border-transparent hover:border-red-50"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  ))}

                  {/* Pricing Page: Plans and Testimonials */}
                  {pageId === "pricing" && (
                    <div className="space-y-6">
                      {/* Section: Packages */}
                      <div className="space-y-2.5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-ink-soft/75">Pricing Packages</h4>
                        {pricingList.map((tier, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-cream/40 rounded-2xl border border-ink/[0.03]">
                            <div className="min-w-0">
                              <h5 className="text-sm font-bold text-ink flex items-center gap-1.5">
                                {tier.name}
                                {tier.badge && (
                                  <span className="text-[9px] font-bold bg-brand-soft text-brand-dark px-1.5 py-0.5 rounded">
                                    {tier.badge}
                                  </span>
                                )}
                              </h5>
                              <p className="text-xs text-ink-soft mt-0.5">
                                {tier.price} {tier.unit} • {tier.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => openTileEdit("pricing", idx)}
                                className="p-1.5 hover:bg-white rounded-lg text-ink-soft hover:text-brand border border-transparent hover:border-ink/5"
                              >
                                <Edit2 size={12} />
                              </button>
                              <button
                                onClick={() => deleteTileItem("pricing", idx)}
                                className="p-1.5 hover:bg-red-50 rounded-lg text-ink-soft hover:text-red-600 border border-transparent hover:border-red-50"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Section: Testimonials */}
                      <div className="space-y-2.5 pt-4 border-t border-ink/[0.05]">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-ink-soft/75">Client Reviews</h4>
                        {testimonialList.map((t, idx) => (
                          <div key={idx} className="flex items-center justify-between p-4 bg-cream/40 rounded-2xl border border-ink/[0.03]">
                            <div className="min-w-0">
                              <h5 className="text-sm font-bold text-ink">{t.name} ({t.role})</h5>
                              <p className="text-xs text-ink-soft mt-0.5 truncate italic">"{t.quote}"</p>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                onClick={() => openTileEdit("testimonial", idx)}
                                className="p-1.5 hover:bg-white rounded-lg text-ink-soft hover:text-brand border border-transparent hover:border-ink/5"
                              >
                                <Edit2 size={12} />
                              </button>
                              <button
                                onClick={() => deleteTileItem("testimonial", idx)}
                                className="p-1.5 hover:bg-red-50 rounded-lg text-ink-soft hover:text-red-600 border border-transparent hover:border-red-50"
                              >
                                <Trash2 size={12} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {pageId === "contact" && (
                    <p className="text-xs text-ink-soft/70 italic text-center py-4">
                      The contact page uses standard layouts. No customized modular grids are required.
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            /* VISUAL WEB SIMULATOR (Renders the PageHero & Custom Tiles with SetlesStudio CSS) */
            <div className="bg-cream rounded-3xl overflow-hidden border border-ink/[0.06] shadow-sm max-w-4xl mx-auto flex flex-col min-h-[500px]">
              {/* simulated header info */}
              <div className="bg-white/80 border-b border-ink/[0.06] p-3 text-center text-[10px] font-bold text-ink-soft/70 tracking-wider">
                💻 SETLESSTUDIO INTERACTIVE PREVIEW
              </div>

              {/* RENDER DYNAMIC PageHero MOCK */}
              <section className="relative bg-ink py-16 px-8 text-white text-left overflow-hidden min-h-[300px] flex flex-col justify-center">
                {heroImage && (
                  <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <img src={heroImage} alt="Hero Background" className="object-cover w-full h-full object-top" />
                  </div>
                )}
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-2xl">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                    {page.title.toUpperCase()}
                  </p>
                  <h2 className="mt-2 font-display text-2xl sm:text-4xl font-bold leading-tight tracking-tight">
                    {parseHeroTitle(heroTitle) || "Hero Title Placeholder"}
                  </h2>
                  <p className="mt-4 text-xs sm:text-sm text-white/70 leading-relaxed max-w-xl">
                    {heroText || "Hero text caption description placeholder."}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <span className="px-5 py-2.5 rounded-full bg-brand text-xs font-bold cursor-pointer">
                      Get Started
                    </span>
                    <span className="px-5 py-2.5 rounded-full border border-white/20 hover:bg-white text-xs font-bold cursor-pointer transition-colors">
                      Learn More
                    </span>
                  </div>
                </div>
              </section>

              {/* RENDER DYNAMIC MODULAR TILES MOCK */}
              <section className="p-8 bg-white space-y-8 flex-1">
                {/* Home tiles (Value Props) */}
                {pageId === "home" && (
                  <div className="space-y-6">
                    <div className="text-center max-w-lg mx-auto">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-brand">Value Props</p>
                      <h3 className="font-display font-bold text-lg text-ink mt-1">Why Brands Choose Us</h3>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {valuePropsList.map((v, i) => (
                        <div key={i} className="p-5 rounded-2xl border border-ink/[0.06] bg-cream/20">
                          <h4 className="font-bold text-sm text-ink">{v.title}</h4>
                          <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">{v.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services Page: Services List grid */}
                {pageId === "services" && (
                  <div className="space-y-6">
                    <div className="text-center max-w-lg mx-auto">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-brand">Services</p>
                      <h3 className="font-display font-bold text-lg text-ink mt-1">Our Fashion Visual Capabilities</h3>
                    </div>
                    <div className="grid gap-5 sm:grid-cols-2">
                      {servicesList.map((s, i) => (
                        <div key={i} className="p-5 rounded-2xl border border-ink/[0.06] bg-white shadow-sm flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-bold text-brand">{s.number}</span>
                              {s.image && (
                                <div className="h-10 w-10 rounded-lg overflow-hidden border border-ink/5 bg-cream">
                                  <img src={s.image} alt={s.title} className="object-cover w-full h-full" />
                                </div>
                              )}
                            </div>
                            <h4 className="font-display font-bold text-sm text-ink mt-3">{s.title}</h4>
                            <p className="text-xs text-ink-soft mt-2 leading-relaxed">{s.short}</p>
                          </div>
                          {s.deliverables && s.deliverables.length > 0 && (
                            <div className="mt-4 pt-3 border-t border-ink/[0.04] space-y-1">
                              {s.deliverables.slice(0, 3).map((d, idx) => (
                                <p key={idx} className="text-[10px] text-ink-soft/80 flex items-center gap-1">• {d}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Pricing Page: Packages and reviews */}
                {pageId === "pricing" && (
                  <div className="space-y-8">
                    {/* Packages */}
                    <div className="grid gap-4 sm:grid-cols-3">
                      {pricingList.map((tier, i) => (
                        <div
                          key={i}
                          className={`p-5 rounded-3xl border shadow-sm flex flex-col justify-between ${
                            tier.featured
                              ? "border-brand bg-brand-soft/20 relative"
                              : "border-ink/[0.06] bg-white"
                          }`}
                        >
                          <div>
                            <div className="flex justify-between items-start">
                              <h4 className="font-bold text-sm text-ink">{tier.name}</h4>
                              {tier.badge && (
                                <span className="bg-brand text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase">
                                  {tier.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">{tier.description}</p>
                            <h3 className="font-display text-xl font-bold text-ink mt-3">
                              {tier.price} <span className="text-[10px] text-ink-soft font-normal">{tier.unit}</span>
                            </h3>
                          </div>
                          <div className="mt-5 space-y-1.5 pt-3 border-t border-ink/[0.04]">
                            {tier.features?.slice(0, 4).map((f, idx) => (
                              <p key={idx} className="text-[10px] text-ink-soft flex items-center gap-1">✓ {f}</p>
                            ))}
                          </div>
                          <button className={`w-full mt-4 py-2 rounded-full text-xs font-bold ${tier.featured ? "bg-brand text-white" : "bg-ink text-white"}`}>
                            {tier.cta}
                          </button>
                        </div>
                      ))}
                    </div>

                    {/* Testimonials */}
                    <div className="space-y-6 pt-6 border-t border-ink/[0.05]">
                      <h4 className="text-center font-display font-bold text-sm text-ink">What Brands Say About Us</h4>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {testimonialList.slice(0, 2).map((t, i) => (
                          <div key={i} className="p-5 rounded-2xl border border-ink/[0.06] bg-cream/10 space-y-3">
                            <Quote className="text-brand/35 h-5 w-5" />
                            <p className="text-xs text-ink-soft italic leading-relaxed">"{t.quote}"</p>
                            <div className="flex items-center gap-2">
                              {t.image ? (
                                <div className="h-6 w-6 rounded-full overflow-hidden border border-ink/5">
                                  <img src={t.image} alt={t.name} className="object-cover w-full h-full" />
                                </div>
                              ) : (
                                <div className="h-6 w-6 rounded-full bg-cream text-brand flex items-center justify-center text-[10px] font-bold">
                                  {t.name[0]}
                                </div>
                              )}
                              <div>
                                <h5 className="text-[11px] font-bold text-ink">{t.name}</h5>
                                <p className="text-[9px] text-ink-soft/70">{t.role}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>
          )}
        </div>

        {/* Right 1 Column: SEO Panel & Google SERP Simulator */}
        <div className="space-y-6">
          {/* Google Search Engine Preview Simulator */}
          <div className="bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm">
            <h3 className="font-display text-sm font-bold text-ink mb-4 flex items-center gap-1.5">
              <Globe className="text-brand" size={16} /> Google Search Simulator
            </h3>
            <div className="p-4 bg-cream/30 rounded-2xl border border-ink/[0.03] space-y-1.5 font-sans">
              <div className="text-xs text-ink-soft/75 truncate flex items-center gap-1.5">
                <span>https://setlesstudio.com</span>
                <span>›</span>
                <span className="truncate text-ink-soft">{pageId === "home" ? "" : pageId}</span>
              </div>
              <div className="text-blue-800 font-display text-base font-semibold leading-snug hover:underline cursor-pointer line-clamp-2">
                {metaTitle || heroTitle || `${page.title} | SetlesStudio`}
              </div>
              <div className="text-[12px] text-ink-soft leading-relaxed line-clamp-3">
                {metaDescription || heroText || "Write a metadata description for search engine listings here."}
              </div>
            </div>
          </div>

          {/* SEO Input Config */}
          <div className="bg-white rounded-3xl border border-ink/[0.06] p-6 shadow-sm space-y-4">
            <h3 className="font-display text-sm font-bold text-ink">SEO Tag Settings</h3>

            <CharacterCounterInput
              label="Meta Title"
              value={metaTitle}
              onChange={setMetaTitle}
              placeholder="Google Title Tag..."
              min={40}
              max={60}
            />

            <CharacterCounterInput
              label="Meta Description"
              value={metaDescription}
              onChange={setMetaDescription}
              placeholder="Search listing snippet copy..."
              min={120}
              max={160}
              type="textarea"
            />
          </div>
        </div>
      </div>

      {/* TILE FORM POPUP MODAL (Simulated inline Form drawer) */}
      {editingTileType !== null && (
        <div className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl border border-ink/[0.06] p-6 max-w-md w-full shadow-xl space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-ink/[0.05] pb-3">
              <h3 className="font-display font-bold text-ink">
                {editingTileIndex !== null ? "Edit Tile Data" : "Add New Tile"}
              </h3>
              <span className="text-[10px] font-bold bg-brand-soft text-brand-dark px-2 py-0.5 rounded uppercase">
                {editingTileType}
              </span>
            </div>

            {/* Service Form fields */}
            {editingTileType === "service" && (
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Number Identifier</label>
                  <input
                    type="text"
                    value={tempService.number || ""}
                    onChange={(e) => setTempService({ ...tempService, number: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="e.g. 01"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Service Title</label>
                  <input
                    type="text"
                    value={tempService.title || ""}
                    onChange={(e) => setTempService({ ...tempService, title: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="e.g. Footwear AI Campaign"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Summary Caption</label>
                  <textarea
                    value={tempService.short || ""}
                    onChange={(e) => setTempService({ ...tempService, short: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none resize-none"
                    placeholder="Short marketing snippet..."
                    rows={2}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Detailed Description</label>
                  <textarea
                    value={tempService.long || ""}
                    onChange={(e) => setTempService({ ...tempService, long: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none resize-none"
                    placeholder="Detailed services copy..."
                    rows={3}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Thumbnail Image URL</label>
                  <input
                    type="text"
                    value={tempService.image || ""}
                    onChange={(e) => setTempService({ ...tempService, image: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="/images/studio-pink.png"
                  />
                </div>
              </div>
            )}

            {/* Pricing Form fields */}
            {editingTileType === "pricing" && (
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Plan Name</label>
                  <input
                    type="text"
                    value={tempPricing.name || ""}
                    onChange={(e) => setTempPricing({ ...tempPricing, name: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="Starter"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Badge Tag</label>
                  <input
                    type="text"
                    value={tempPricing.badge || ""}
                    onChange={(e) => setTempPricing({ ...tempPricing, badge: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="Most Popular"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Short description</label>
                  <input
                    type="text"
                    value={tempPricing.description || ""}
                    onChange={(e) => setTempPricing({ ...tempPricing, description: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="Perfect for ecommerce startups"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Price Quote</label>
                    <input
                      type="text"
                      value={tempPricing.price || ""}
                      onChange={(e) => setTempPricing({ ...tempPricing, price: e.target.value })}
                      className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                      placeholder="$299"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Unit</label>
                    <input
                      type="text"
                      value={tempPricing.unit || ""}
                      onChange={(e) => setTempPricing({ ...tempPricing, unit: e.target.value })}
                      className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                      placeholder="/ project"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Action CTA</label>
                  <input
                    type="text"
                    value={tempPricing.cta || ""}
                    onChange={(e) => setTempPricing({ ...tempPricing, cta: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                  />
                </div>
              </div>
            )}

            {/* Testimonial Form fields */}
            {editingTileType === "testimonial" && (
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Client Name</label>
                  <input
                    type="text"
                    value={tempTestimonial.name || ""}
                    onChange={(e) => setTempTestimonial({ ...tempTestimonial, name: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="Emily Thompson"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Client Role / Region</label>
                  <input
                    type="text"
                    value={tempTestimonial.role || ""}
                    onChange={(e) => setTempTestimonial({ ...tempTestimonial, role: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="Paris, France"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Quote Text</label>
                  <textarea
                    value={tempTestimonial.quote || ""}
                    onChange={(e) => setTempTestimonial({ ...tempTestimonial, quote: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none resize-none"
                    placeholder="Write client testimonial quote..."
                    rows={4}
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Client Image URL</label>
                  <input
                    type="text"
                    value={tempTestimonial.image || ""}
                    onChange={(e) => setTempTestimonial({ ...tempTestimonial, image: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="/images/clients/client-john.jpg"
                  />
                </div>
              </div>
            )}

            {/* Value Prop Form fields */}
            {editingTileType === "valueprop" && (
              <div className="space-y-3">
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Feature Title</label>
                  <input
                    type="text"
                    value={tempValueProp.title || ""}
                    onChange={(e) => setTempValueProp({ ...tempValueProp, title: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none"
                    placeholder="10x More Affordable"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-ink-soft block mb-1 uppercase tracking-wider">Feature Summary Copy</label>
                  <textarea
                    value={tempValueProp.text || ""}
                    onChange={(e) => setTempValueProp({ ...tempValueProp, text: e.target.value })}
                    className="w-full px-3 py-2 border border-ink/10 rounded-xl focus:border-brand text-xs text-ink outline-none resize-none"
                    placeholder="Summary of why this feature matters..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Form actions */}
            <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-ink/[0.05]">
              <button
                onClick={() => setEditingTileType(null)}
                className="px-4 py-2 border border-ink/10 hover:bg-cream rounded-full text-xs font-bold text-ink transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={saveTileForm}
                className="px-5 py-2 bg-brand hover:bg-brand-dark text-white rounded-full text-xs font-bold transition-colors cursor-pointer"
              >
                Apply Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
