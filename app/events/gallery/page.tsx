"use client";

import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Camera, Calendar, MapPin, Users, Search, Filter, X, ChevronLeft, ChevronRight, ArrowRight, Grid3X3, List, ZoomIn, Heart, Share2, Download, Folder, Play, Image as ImageIcon } from "lucide-react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

type MediaItem = {
    id: string;
    title: string;
    dateLabel: string;
    dateISO: string;
    location: string;
    category: string;
    participants: string;
    image: string;
    description: string;
    likes: number;
    downloads: number;
    views: number;
    type: 'photo' | 'video';
    duration?: string;
};

type Album = {
    id: string;
    title: string;
    description: string;
    coverImage: string;
    mediaCount: number;
    photoCount: number;
    videoCount: number;
    dateLabel: string;
    dateISO: string;
    location: string;
    category: string;
    tags: string[];
};

export default function GalleryPage() {
    const router = useRouter();
    const { t, language } = useLanguage();

    // Get translated content
    const galleryT = translations[language].GallerylodingPage;

    // Initialize with empty arrays to avoid hydration mismatch
    const [albums, setAlbums] = useState<Album[]>([]);
    const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

    // Initialize data on client side only
    useEffect(() => {
        const initializedAlbums: Album[] = galleryT.albumsData.map(albumData => ({
            ...albumData,
            coverImage: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
            mediaCount: Math.floor(Math.random() * 50) + 20,
            photoCount: Math.floor(Math.random() * 40) + 15,
            videoCount: Math.floor(Math.random() * 10) + 2,
            dateLabel: "January 2024",
            dateISO: "2024-01-31"
        }));

        const initializedMediaItems: MediaItem[] = galleryT.mediaItems.map((item, index) => ({
            ...item,
            dateLabel: "January 15, 2024",
            dateISO: "2024-01-15",
            participants: "Community Members",
            image: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
            likes: Math.floor(Math.random() * 200) + 50,
            downloads: Math.floor(Math.random() * 100) + 20,
            views: Math.floor(Math.random() * 2000) + 500,
            type: index % 3 === 0 ? 'video' : 'photo',
            duration: index % 3 === 0 ? "2:45" : undefined
        }));

        setAlbums(initializedAlbums);
        setMediaItems(initializedMediaItems);
    }, [galleryT.albumsData, galleryT.mediaItems]);

    // State for current view
    const [currentView, setCurrentView] = useState<'albums' | 'album-detail'>('albums');
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
    const [showMediaModal, setShowMediaModal] = useState(false);

    // Extract unique categories from albums
    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(albums.map(album => album.category))];
        return uniqueCategories;
    }, [albums]);

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<"latest" | "popular" | "name">("latest");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [page, setPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);
    const pageSize = 12;

    const filteredAndSortedAlbums = useMemo(() => {
        // Filter by search and categories
        const filtered = albums.filter((album) => {
            const matchesSearch =
                search === "" ||
                album.title.toLowerCase().includes(search.toLowerCase()) ||
                album.location.toLowerCase().includes(search.toLowerCase()) ||
                album.category.toLowerCase().includes(search.toLowerCase()) ||
                album.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));

            const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(album.category);

            return matchesSearch && matchesCategory;
        });

        // Sort
        filtered.sort((a, b) => {
            switch (sort) {
                case "latest":
                    return b.dateISO.localeCompare(a.dateISO);
                case "popular":
                    return b.mediaCount - a.mediaCount;
                case "name":
                    return a.title.localeCompare(b.title);
                default:
                    return b.dateISO.localeCompare(a.dateISO);
            }
        });
        return filtered;
    }, [albums, search, sort, selectedCategories]);

    const totalPages = Math.ceil(filteredAndSortedAlbums.length / pageSize);
    const start = (page - 1) * pageSize;
    const visibleAlbums = filteredAndSortedAlbums.slice(start, start + pageSize);

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
        setPage(1);
    };

    const clearFilters = () => {
        setSearch("");
        setSelectedCategories([]);
        setPage(1);
    };

    const handleAlbumClick = (album: Album) => {
        setSelectedAlbum(album);
        setCurrentView('album-detail');
    };

    const handleBackToAlbums = () => {
        setCurrentView('albums');
        setSelectedAlbum(null);
    };

    const handleMediaClick = (media: MediaItem) => {
        setSelectedMedia(media);
        setShowMediaModal(true);
    };

    const handleCloseModal = () => {
        setShowMediaModal(false);
        setSelectedMedia(null);
    };

    const formatNumber = (num: number) => {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    };

    // Show loading state while data is being initialized
    if (albums.length === 0 && currentView === 'albums') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
                <TopBar />
                <Navigation />
                <div className="container mx-auto px-4 py-16">
                    <div className="flex items-center justify-center h-64">
                        <div className="text-center">
                            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-muted-foreground">Loading gallery...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
            {/* Top Navigation */}
            <TopBar />
            <Navigation />

            {/* Breadcrumbs */}
            <Breadcrumbs
                items={[
                    { label: t.nav.home, href: "/" },
                    { label: galleryT.breadcrumb, href: "/gallery" },
                    ...(currentView === 'album-detail' && selectedAlbum ? [
                        { label: selectedAlbum.title, href: `#` }
                    ] : [])
                ]}
            />

            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-[var(--primary)] via-[var(--primary)/0.9] to-[var(--primary)/0.8] overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-0 left-0 w-72 h-72 bg-card/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-card/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-24 h-24 bg-card/20 rounded-2xl flex items-center justify-center backdrop-blur-lg border border-card/30">
                            <Camera className="w-12 h-12 text-card" />
                        </div>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-bold text-card mb-6 bg-gradient-to-r from-card to-[var(--primary)/0.2] bg-clip-text text-transparent">
                        {currentView === 'albums' ? galleryT.hero.title : selectedAlbum?.title}
                    </h1>

                    <p className="text-xl text-[var(--primary)/0.9] max-w-3xl mx-auto leading-relaxed">
                        {currentView === 'albums'
                            ? galleryT.hero.description
                            : selectedAlbum?.description
                        }
                    </p>

                    {currentView === 'album-detail' && selectedAlbum && (
                        <div className="flex justify-center gap-8 mt-12">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-card">{selectedAlbum.mediaCount}</div>
                                <div className="text-[var(--primary)/0.8]">{galleryT.albums.mediaCount}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-card">{selectedAlbum.photoCount}</div>
                                <div className="text-[var(--primary)/0.8]">{galleryT.albums.photoCount}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-card">{selectedAlbum.videoCount}</div>
                                <div className="text-[var(--primary)/0.8]">{galleryT.albums.videoCount}</div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Back Button for Album Detail View */}
            {currentView === 'album-detail' && (
                <section className="bg-card/80 backdrop-blur-xl py-6 border-b border-card/20">
                    <div className="container mx-auto px-4">
                        <button
                            onClick={handleBackToAlbums}
                            className="flex items-center gap-3 px-6 py-3 text-primary hover:text-primary/80 font-semibold transition-all duration-300 hover:bg-primary/10 rounded-2xl"
                        >
                            <ChevronLeft className="w-5 h-5" />
                            {galleryT.albumDetail.backToAlbums}
                        </button>
                    </div>
                </section>
            )}
             <main className="relative pt-6">
                  <div className="container-x py-4">
          <Breadcrumbs items={[
            { label: t.nav.home, href: "/" },
            { label: galleryT.breadcrumb, href: "/gallery" },
           
          ]} />
        </div>
        <section className=" py-16">
          <div className="container-x text-center">

       

            {/* Search & Filter Section - Sticky */}
            <section className="sticky top-16 z-10 bg-card shadow-sm py-6 border-b border-border">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-2/5">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder={currentView === 'albums'
                                    ? galleryT.search.albums
                                    : galleryT.search.media
                                }
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(1);
                                }}
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none bg-background text-foreground"
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch("")}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                            {/* View Mode Toggle */}
                            <div className="flex bg-muted rounded-lg p-1.5 border border-border">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-md transition-all duration-300 ${viewMode === "grid"
                                            ? "bg-background shadow-sm border border-border"
                                            : "hover:bg-muted/80"
                                        }`}
                                    title={galleryT.viewMode.grid}
                                >
                                    <Grid3X3 className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={() => setViewMode("masonry")}
                                    className={`p-2 rounded-md transition-all duration-300 ${viewMode === "masonry"
                                            ? "bg-background shadow-sm border border-border"
                                            : "hover:bg-muted/80"
                                        }`}
                                    title={galleryT.viewMode.masonry}
                                >
                                    <List className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Sort By */}
                            <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2.5">
                                <span className="text-foreground font-medium whitespace-nowrap">{galleryT.sort.label}:</span>
                                <select
                                    value={sort}
                                    onChange={(e) => {
                                        setSort(e.target.value as "latest" | "popular" | "name");
                                        setPage(1);
                                    }}
                                    className="bg-transparent border-none focus:ring-0 focus:outline-none text-foreground"
                                >
                                    <option value="latest">{galleryT.sort.newest}</option>
                                    <option value="popular">{galleryT.sort.popular}</option>
                                    <option value="name">{galleryT.sort.name}</option>
                                </select>
                            </div>

                            {/* Filter Toggle (only show for albums view) */}
                            {currentView === 'albums' && (
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium border border-primary/20"
                                >
                                    <Filter className="w-5 h-5" />
                                    <span>{galleryT.filters.button}</span>
                                    {selectedCategories.length > 0 && (
                                        <span className="bg-primary text-primary-foreground text-sm rounded-full h-6 w-6 flex items-center justify-center">
                                            {selectedCategories.length}
                                        </span>
                                    )}
                                </button>
                            )}

                            {/* Clear Filters */}
                            {(search || selectedCategories.length > 0) && (
                                <button
                                    onClick={clearFilters}
                                    className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-primary transition-colors font-medium"
                                >
                                    <X className="w-5 h-5" />
                                    <span>{galleryT.filters.clearAll}</span>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Category Filters (only show for albums view) */}
                    {showFilters && currentView === 'albums' && (
                        <div className="mt-6 pt-6 border-t border-border">
                            <h3 className="text-lg font-medium text-foreground mb-4">{galleryT.filters.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => toggleCategory(category)}
                                        className={`px-4 py-2 rounded-full font-medium transition-all border ${selectedCategories.includes(category)
                                                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                                                : "bg-muted text-foreground border-border hover:bg-muted/80"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    {/* Results Count */}
                    <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <p className="text-lg text-muted-foreground">
                                {currentView === 'albums' ? (
                                    <>
                                        {galleryT.albums.resultsCount
                                            .replace("{count}", visibleAlbums.length.toString())
                                            .replace("{total}", filteredAndSortedAlbums.length.toString())
                                        }
                                    </>
                                ) : (
                                    <>
                                        Showing <span className="font-bold text-primary">{mediaItems.length}</span> {galleryT.albumDetail.mediaItems}{" "}
                                        <span className="font-bold text-foreground">{selectedAlbum?.title}</span>
                                    </>
                                )}
                            </p>
                            {(search || selectedCategories.length > 0) && currentView === 'albums' && (
                                <p className="text-sm text-muted-foreground mt-1">
                                    Filtered by: {search && `"${search}"`} {selectedCategories.length > 0 && `${selectedCategories.join(", ")}`}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="text-sm text-muted-foreground bg-card px-4 py-2 rounded-lg border border-border">
                                Page <span className="font-bold text-primary">{page}</span> of <span className="font-bold">{totalPages}</span>
                            </div>
                        </div>
                    </div>

                    {/* Albums View */}
                    {currentView === 'albums' ? (
                        visibleAlbums.length === 0 ? (
                            <div className="text-center py-24">
                                <div className="w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl flex items-center justify-center mx-auto mb-8">
                                    <Folder className="w-16 h-16 text-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-foreground mb-4">{galleryT.albums.noResults.title}</h3>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {visibleAlbums.map((album) => (
                                    <div
                                        key={album.id}
                                        className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-border"
                                        onMouseEnter={() => setHoveredCard(album.id)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                        onClick={() => handleAlbumClick(album)}
                                    >
                                        {/* Album Cover */}
                                        <div className="aspect-video overflow-hidden relative">
                                            <img
                                                src={album.coverImage}
                                                alt={album.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                            {/* Media Type Badges */}
                                            <div className="absolute top-4 left-4 flex gap-2">
                                                <span className="px-3 py-1 bg-blue-500 text-card rounded-full text-sm font-semibold backdrop-blur-sm flex items-center gap-1">
                                                    <ImageIcon className="w-3 h-3" />
                                                    {album.photoCount}
                                                </span>
                                                <span className="px-3 py-1 bg-red-500 text-card rounded-full text-sm font-semibold backdrop-blur-sm flex items-center gap-1">
                                                    <Play className="w-3 h-3" />
                                                    {album.videoCount}
                                                </span>
                                            </div>

                                            {/* Hover Action */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                                <div className="flex items-center gap-2 text-card font-semibold">
                                                    {galleryT.albums.viewAlbum}
                                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Album Info */}
                                        <div className="p-6">
                                            <h3 className="font-bold text-foreground text-xl mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                                {album.title}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    ) : (
                        /* Album Detail View - Media Items */
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {mediaItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-border"
                                    onMouseEnter={() => setHoveredCard(item.id)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    onClick={() => handleMediaClick(item)}
                                >
                                    {/* Media Thumbnail */}
                                    <div className="aspect-square overflow-hidden relative">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />

                                        {/* Video Overlay */}
                                        {item.type === 'video' && (
                                            <>
                                                <div className="absolute inset-0 bg-black/20"></div>
                                                <div className="absolute top-4 right-4 bg-red-500 text-card px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                                                    <Play className="w-3 h-3" />
                                                    {galleryT.albumDetail.video}
                                                </div>
                                                {item.duration && (
                                                    <div className="absolute bottom-4 right-4 bg-black/70 text-card px-2 py-1 rounded text-sm">
                                                        {item.duration}
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {/* Hover Actions */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        

                                        {/* Hover Info */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold backdrop-blur-sm">
                                                    {item.type === 'video' ? galleryT.albumDetail.video : galleryT.albumDetail.photo}
                                                </span>
                                               
                                            </div>
                                            <div className="flex items-center gap-2 text-card font-semibold">
                                                {item.type === 'video' ? galleryT.albumDetail.viewVideo : galleryT.albumDetail.viewPhoto}
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Media Info */}
                                    <div className="p-6">
                                        <h3 className="font-bold text-foreground text-lg mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Calendar className="w-4 h-4" />
                                                <span>{item.dateLabel}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <MapPin className="w-4 h-4" />
                                                <span className="line-clamp-1">{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Pagination (only for albums view) */}
                    {currentView === 'albums' && totalPages > 1 && (
                        <div className="flex items-center justify-center gap-4 mt-20">
                            <button
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-300 hover:shadow-lg"
                                disabled={page === 1}
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                            >
                                <ChevronLeft className="w-5 h-5" />
                                {galleryT.pagination.previous}
                            </button>

                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                                    <button
                                        key={p}
                                        onClick={() => setPage(p)}
                                        className={`px-5 py-4 rounded-2xl border font-semibold transition-all duration-300 ${p === page
                                                ? "bg-primary text-primary-foreground shadow-sm border-primary"
                                                : "border-border bg-card hover:bg-muted hover:shadow-lg"
                                            }`}
                                    >
                                        {p}
                                    </button>
                                ))}
                            </div>

                            <button
                                className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all duration-300 hover:shadow-lg"
                                disabled={page === totalPages}
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                            >
                                {galleryT.pagination.next}
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Media Modal */}
            {showMediaModal && selectedMedia && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4 py-6 overflow-y-auto">
  <div className="relative bg-card rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden animate-in fade-in duration-300">
    {/* Close Button */}
    <button
      onClick={handleCloseModal}
      className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-card rounded-full flex items-center justify-center transition-all duration-200"
      aria-label="Close modal"
    >
      <X className="w-6 h-6" />
    </button>

    {/* Modal Content */}
    <div className="flex flex-col lg:flex-row">
      {/* Media Display */}
      <div className="relative w-full lg:w-2/3 bg-black flex items-center justify-center">
        {selectedMedia.type === 'photo' ? (
          <img
            src={selectedMedia.image}
            alt={selectedMedia.title}
            className="w-full h-full max-h-[70vh] object-contain transition-transform duration-300 hover:scale-[1.02]"
          />
        ) : (
          <div className="relative w-full h-80 sm:h-96 lg:h-[500px] bg-black flex items-center justify-center">
            <div className="text-center text-card">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-80 hover:opacity-100 transition" />
              <p className="text-lg font-medium">Video Player Placeholder</p>
              <p className="text-sm text-gray-400 mt-2">{selectedMedia.duration}</p>
            </div>
          </div>
        )}
      </div>

      {/* Media Info */}
      <div className="lg:w-1/3 p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-border bg-card overflow-y-auto max-h-[80vh]">
        <h2 className="text-2xl font-bold text-foreground mb-4 leading-tight">
          {selectedMedia.title}
        </h2>

        <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
          {selectedMedia.description}
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <Calendar className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground">{selectedMedia.dateLabel}</span>
          </div>
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground">{selectedMedia.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm sm:text-base">
            <Users className="w-4 h-4 text-muted-foreground" />
            <span className="text-foreground">{selectedMedia.participants}</span>
          </div>
        </div>

        
      </div>
    </div>
  </div>
</div>

            )}
               </div>
        </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}