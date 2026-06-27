'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass, MapPin, Calendar, Star, Search, Clock, Award, ShieldCheck,
  ChevronLeft, ChevronRight, CheckCircle, ArrowRight, Sparkles
} from 'lucide-react';
import { destinations, attractions, tours, reviews } from '@/data/tourismData';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedContainer } from '@/components/ui/AnimatedContainer';
import { Button, buttonVariants } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useCurrency } from '@/lib/CurrencyContext';

export default function Home() {
  const { formatPrice } = useCurrency();
  // Search State
  const [searchDest, setSearchDest] = useState('');
  const [searchAttr, setSearchAttr] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [filteredTours, setFilteredTours] = useState(tours.slice(0, 6));
  const [hasSearched, setHasSearched] = useState(false);

  // Category State
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Adventure', 'Cultural', 'Wellness', 'Nature', 'Luxury'];

  // Testimonials Slider State
  const [currentReview, setCurrentReview] = useState(0);

  // Dynamic filter for Attraction list in search bar based on selected Destination
  const searchAttractions = searchDest
    ? attractions.filter(attr => attr.destinationId === searchDest)
    : attractions;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    let results = tours;

    if (searchDest) {
      results = results.filter(t => t.destinationId === searchDest);
    }
    if (searchAttr) {
      results = results.filter(t => t.attractionId === searchAttr);
    }

    setFilteredTours(results);
    setHasSearched(true);

    // Smooth scroll down to tours section
    const toursSection = document.getElementById('tours');
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setHasSearched(false);
    if (cat === 'All') {
      setFilteredTours(tours.slice(0, 6));
    } else {
      setFilteredTours(tours.filter(t => t.category === cat));
    }
  };

  const handleNextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="w-full relative overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative h-[90vh] md:h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Parallax */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            alt="Beautiful Indonesian Tropical Shoreline"
            fill
            priority
            className="object-cover"
          />
          {/* Elegant Dark Tropical Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 via-primary-dark/30 to-luxury-bg" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white flex flex-col items-center pt-16 sm:pt-0">
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 text-sm font-semibold tracking-wider text-secondary-light uppercase"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span>Indonesia Tour & Attraction Landing Platform</span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl leading-tight sm:leading-none tracking-tight mb-6 sm:mb-8"
          >
            Discover the Best <br />
            of <span className="text-secondary-light bg-gradient-to-r from-secondary-light to-accent bg-clip-text">Indonesia</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-zinc-300 text-[13px] sm:text-xl max-w-2xl mb-4 sm:mb-16 font-medium leading-relaxed"
          >
            Explore breathtaking destinations, unforgettable attractions, and curated premium tours. Your luxury tropical gateway awaits.
          </motion.p>

          {/* FLOATING SEARCH CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-4xl glass-effect p-6 rounded-[30px] shadow-2xl text-zinc-800"
          >
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
              {/* Destination Dropdown */}
              <div className="flex flex-col text-left px-3 py-1">
                <label className="text-xs uppercase tracking-widest font-bold text-zinc-500 flex items-center gap-1.5 mb-1.5">
                  <Compass className="w-3.5 h-3.5 text-primary" /> Destination
                </label>
                <Select
                  value={searchDest}
                  onValueChange={(val) => {
                    setSearchDest(val === "all" ? "" : val || "");
                    setSearchAttr(''); // Reset attraction selection on change
                  }}
                >
                  <SelectTrigger className="w-full bg-transparent border-0 border-b border-zinc-200 py-1 font-semibold text-zinc-900 rounded-none h-auto p-0 hover:bg-transparent shadow-none">
                    <SelectValue placeholder="All Destinations" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-zinc-200 shadow-xl rounded-2xl p-1 z-50">
                    <SelectItem value="all">All Destinations</SelectItem>
                    {destinations.map(d => (
                      <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Attraction Dropdown */}
              <div className="flex flex-col text-left px-3 py-1">
                <label className="text-xs uppercase tracking-widest font-bold text-zinc-500 flex items-center gap-1.5 mb-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" /> Attraction
                </label>
                <Select
                  value={searchAttr}
                  onValueChange={(val) => setSearchAttr(val === "all" ? "" : val || "")}
                >
                  <SelectTrigger className="w-full bg-transparent border-0 border-b border-zinc-200 py-1 font-semibold text-zinc-900 rounded-none h-auto p-0 hover:bg-transparent shadow-none">
                    <SelectValue placeholder="All Attractions" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-zinc-200 shadow-xl rounded-2xl p-1 z-50">
                    <SelectItem value="all">All Attractions</SelectItem>
                    {searchAttractions.map(a => (
                      <SelectItem key={a.id} value={a.id}>{a.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Travel Date */}
              <div className="flex flex-col text-left px-3 py-1">
                <label className="text-xs uppercase tracking-widest font-bold text-zinc-500 flex items-center gap-1.5 mb-1.5">
                  <Calendar className="w-3.5 h-3.5 text-primary" /> Travel Date
                </label>
                <Popover>
                  <PopoverTrigger className="w-full bg-transparent border-0 border-b border-zinc-200 py-1 font-semibold text-zinc-900 rounded-none h-auto p-0 hover:bg-transparent shadow-none text-left flex items-center justify-between cursor-pointer">
                    <span className="text-sm">
                      {searchDate ? new Date(searchDate).toLocaleDateString(undefined, { dateStyle: 'medium' }) : 'Pick a date'}
                    </span>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 z-50 bg-white border border-zinc-200 shadow-xl rounded-2xl">
                    <CalendarComponent
                      mode="single"
                      selected={searchDate ? new Date(searchDate) : undefined}
                      onSelect={(date) => setSearchDate(date ? date.toISOString().split('T')[0] : '')}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Search Button */}
              <div className="pt-2 md:pt-0">
                <Button
                  type="submit"
                  variant="marketing"
                  size="xl"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  <span>Search Tours</span>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. POPULAR DESTINATIONS */}
      <section id="destinations" className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <AnimatedContainer animation="slideInLeft">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary mb-2 block">Tropical Archipelagos</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary-dark">
              Explore Popular Destinations
            </h2>
          </AnimatedContainer>
          <AnimatedContainer animation="fadeIn" delay={0.2} className="mt-4 md:mt-0 text-zinc-500 max-w-sm">
            Experience the rich diversity of Indonesia across our top featured regional hotspots.
          </AnimatedContainer>
        </div>

        {/* Scrollable Row */}
        {/* disable scroll y */}
        <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x scroll-smooth overflow-y-hidden">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="min-w-[280px] sm:min-w-[340px] snap-start"
            >
              <Link href={`/destinations/${dest.id}`} className="block group">
                <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-luxury transition-all duration-500 hover:shadow-luxury-hover">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    sizes="340px"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Graduated Dark Glass Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/20 to-black/10 transition-opacity duration-300" />

                  {/* Content Over the Image */}
                  <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                    <span className="text-xs uppercase tracking-widest text-secondary-light font-bold mb-1">
                      {dest.attractionCount} Attractions
                    </span>
                    <h3 className="font-display font-bold text-2xl mb-3">{dest.name}</h3>
                    <p className="text-zinc-300 text-xs line-clamp-2 mb-4 leading-relaxed font-light">
                      {dest.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white group-hover:text-secondary-light transition-colors">
                      Explore Destination <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. TOP ATTRACTIONS */}
      <section id="attractions" className="py-24 bg-white/50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <AnimatedContainer animation="slideInLeft">
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary mb-2 block">Iconic Landmarks</span>
              <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary-dark">
                Must-Visit Top Attractions
              </h2>
            </AnimatedContainer>
            <AnimatedContainer animation="fadeIn" delay={0.2} className="mt-4 md:mt-0 text-zinc-500 max-w-sm">
              Discover unique heritage sites, volcanic marvels, and breathtaking wildlife sanctuaries.
            </AnimatedContainer>
          </div>

          {/* Grid Layout - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.slice(0, 6).map((attr, index) => (
              <AnimatedContainer
                key={attr.id}
                animation="fadeInUp"
                delay={index * 0.1}
              >
                <GlassCard
                  imageSrc={attr.image}
                  imageAlt={attr.name}
                  aspectRatio="video"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> {attr.location}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-extrabold">
                      <Star className="w-3.5 h-3.5 text-green-500 fill-green-500" />
                      <span className="text-green-500 font-extrabold">
                        {attr.rating}
                      </span>
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary-dark mb-2 line-clamp-1">{attr.name}</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-5 line-clamp-2">{attr.description}</p>
                  <Link
                    href={`/attractions/${attr.id}`}
                    className="inline-flex items-center justify-center w-full h-11 border border-primary/20 hover:border-primary hover:bg-primary/5 text-primary text-sm font-semibold rounded-xl transition-all"
                  >
                    View Details & Tours
                  </Link>
                </GlassCard>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* 4. POPULAR TOURS */}
      <section id="tours" className="py-24 max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary mb-2 block">Curated Journeys</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary-dark mb-4">
            Best Selling Popular Tours
          </h2>
          <p className="text-zinc-500">
            Hand-picked itineraries designed by local experts to provide immersive, unforgettable travel memories.
          </p>
        </div>

        {/* Filter Categories */}
        <Tabs
          value={activeCategory}
          onValueChange={(val) => handleCategoryChange(val)}
          className="w-full flex flex-col items-center mb-10"
        >
          <TabsList variant="line" className="gap-2 overflow-x-auto pb-2 no-scrollbar max-w-full justify-start md:justify-center p-0 h-auto">
            {categories.map((cat) => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="px-6 py-2.5 rounded-full font-display font-semibold text-sm cursor-pointer border border-zinc-200 transition-all data-active:bg-primary data-active:text-primary-light data-active:shadow-md data-active:shadow-primary/25 bg-zinc-100 hover:bg-zinc-200/70 text-zinc-600 after:hidden"
              >
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Tours Grid */}
        <AnimatePresence mode="wait">
          {filteredTours.length > 0 ? (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredTours.map((tour) => (
                <motion.div
                  layout
                  key={tour.id}
                  className="bg-white rounded-[24px] overflow-hidden shadow-luxury border border-zinc-100/50 hover:shadow-luxury-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Tour Image */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Category Tag */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md text-primary-dark text-xs font-extrabold uppercase tracking-wider rounded-lg shadow-sm">
                      {tour.category}
                    </span>

                    {/* Duration */}
                    <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs font-semibold">
                      <Clock className="w-3.5 h-3.5" /> {tour.duration}
                    </span>
                  </div>

                  {/* Tour Details */}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
                          {destinations.find(d => d.id === tour.destinationId)?.name || 'Indonesia'}
                        </span>
                        <div className="flex items-center gap-1 text-accent font-bold text-xs">
                          <Star className="w-3.5 h-3.5 text-green-500 fill-green-500" />
                          <span className="text-green-500 font-extrabold">{tour.rating}</span>
                          <span className="text-zinc-400 font-normal">({tour.reviewsCount})</span>
                        </div>
                      </div>
                      <h3 className="font-display font-bold text-lg text-primary-dark mb-2 line-clamp-2 hover:text-primary transition-colors">
                        <Link href={`/tours/${tour.id}`}>{tour.name}</Link>
                      </h3>
                      <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 mb-6">
                        {tour.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
                      <div>
                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest block">Start from</span>
                        <span className="text-xl font-display font-extrabold text-primary-dark">
                          {formatPrice(tour.price)} <span className="text-xs font-normal text-zinc-500">/ person</span>
                        </span>
                      </div>
                      <Link
                        href={`/tours/${tour.id}`}
                        className={buttonVariants({
                          variant: "cobalt",
                          className: "h-11 px-5 text-xs flex items-center justify-center gap-1.5"
                        })}
                      >
                        <span>Book Tour</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-zinc-50 rounded-3xl border border-zinc-100">
              <Compass className="w-12 h-12 text-zinc-300 mx-auto mb-4 animate-bounce" />
              <h3 className="font-display font-semibold text-lg text-zinc-800">No tours matching your filter</h3>
              <p className="text-zinc-500 text-sm mt-1">Please try a different category or search term.</p>
            </div>
          )}
        </AnimatePresence>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section id="about" className="py-24 bg-primary-dark text-white relative overflow-hidden">
        {/* Abstract tropical decorations */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-secondary mb-2 block">Our Credentials</span>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white">
              Why Travel with INDEX-AELI?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Compass,
                title: 'Hand-picked Local Experts',
                desc: 'All itineraries are curated and led by accredited native guides who know the island secrets.'
              },
              {
                icon: Award,
                title: 'Premium Hospitality Floor',
                desc: 'A luxury-focused approach to travel, ensuring the best boutique stays and Yacht cruise access.'
              },
              {
                icon: ShieldCheck,
                title: 'Secure & Flexible Booking',
                desc: 'We support instant refunds and up to 24 hours prior booking updates without any penalties.'
              },
              {
                icon: CheckCircle,
                title: '100% Verified Reviews',
                desc: 'Every single traveler testimonial and photo gallery is submitted by real booking customers.'
              }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <AnimatedContainer
                  key={feature.title}
                  animation="fadeInUp"
                  delay={idx * 0.1}
                  className="bg-white/5 border border-white/10 p-8 rounded-[24px] backdrop-blur-md flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-2xl bg-secondary/20 text-secondary flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
                </AnimatedContainer>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. STATISTICS SECTION */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {[
            { value: '10K+', label: 'Happy Travelers' },
            { value: '500+', label: 'Luxury Tours' },
            { value: '120+', label: 'Unique Destinations' }
          ].map((stat, index) => (
            <AnimatedContainer
              key={stat.label}
              animation="scaleIn"
              delay={index * 0.1}
              className="space-y-2"
            >
              <div className="font-display font-extrabold text-4xl sm:text-5xl text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-zinc-600 font-semibold text-sm uppercase tracking-widest">{stat.label}</div>
            </AnimatedContainer>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIALS CAROUSEL */}
      <section className="py-24 max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-primary mb-2 block">Customer Stories</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-primary-dark">
            What Our Travelers Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white border border-zinc-100 rounded-[30px] p-8 md:p-12 shadow-luxury overflow-hidden">
          <div className="relative h-64 md:h-48 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 items-center text-left"
              >
                {/* Avatar */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 flex-shrink-0 mx-auto md:mx-0">
                  <Image
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Review Text */}
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: reviews[currentReview].rating }).map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 text-green-500 fill-green-500" />
                    ))}
                  </div>
                  <p className="text-zinc-600 text-sm md:text-base italic leading-relaxed">
                    "{reviews[currentReview].text}"
                  </p>
                  <div>
                    <h4 className="font-display font-bold text-primary-dark text-base">{reviews[currentReview].name}</h4>
                    <span className="text-zinc-400 text-xs font-semibold">{reviews[currentReview].country}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider navigation buttons */}
          <div className="flex justify-end gap-3.5 mt-8 md:-mt-4 relative z-10">
            <button
              onClick={handlePrevReview}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextReview}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 8. NEWSLETTER / BOOK NOW BANNER */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight mb-4">
            Ready to Begin Your Tropical Odyssey?
          </h2>
          <p className="text-zinc-200 text-base md:text-lg mb-8 max-w-xl mx-auto font-medium">
            Contact us today for custom private tours, premium villa retreats, or group event planning across Indonesia.
          </p>
          <Link
            href="/booking"
            className={buttonVariants({
              variant: "secondary",
              className: "inline-flex h-14 px-8 items-center justify-center font-display font-bold text-sm rounded-full shadow-md transition-all text-primary-dark cursor-pointer text-center"
            })}
          >
            Create Booking Securely
          </Link>
        </div>
      </section>
    </div>
  );
}
