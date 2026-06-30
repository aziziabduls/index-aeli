'use client';

import { useState, useEffect, useCallback } from 'react';
import { destinations as initialDestinations, attractions as initialAttractions, programs as initialPrograms, reviews as initialReviews } from '@/data/tourismData';
import { Destination, Attraction, Program, Review } from '@/types';
import { generateTourismData } from './actions';
import DestinationForm from './_components/DestinationForm';
import AttractionForm from './_components/AttractionForm';
import ProgramForm from './_components/ProgramForm';

type Tab = 'destinations' | 'attractions' | 'programs';
type View = 'list' | 'form';

const STORAGE_KEY = 'admin-tourism-data-v1';

export default function DataEntryPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('destinations');
  const [view, setView] = useState<View>('list');
  const [generating, setGenerating] = useState(false);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Data state
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [programs, setPrograms] = useState<Program[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  // Editing state
  const [editDest, setEditDest] = useState<Destination | null>(null);
  const [editAttr, setEditAttr] = useState<Attraction | null>(null);
  const [editProg, setEditProg] = useState<Program | null>(null);

  // Load data
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setDestinations(parsed.destinations ?? [...initialDestinations]);
        setAttractions(parsed.attractions ?? [...initialAttractions]);
        setPrograms(parsed.programs ?? [...initialPrograms]);
        setReviews(parsed.reviews ?? [...initialReviews]);
      } catch {
        loadInitial();
      }
    } else {
      loadInitial();
    }
    setMounted(true);
  }, []);

  function loadInitial() {
    setDestinations([...initialDestinations]);
    setAttractions([...initialAttractions]);
    setPrograms([...initialPrograms]);
    setReviews([...initialReviews]);
  }

  // Persist to localStorage
  const persist = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ destinations, attractions, programs, reviews }));
  }, [destinations, attractions, programs, reviews]);

  useEffect(() => {
    if (mounted) persist();
  }, [mounted, persist]);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  // Handlers
  const handleGenerate = async () => {
    setGenerating(true);
    try {
      const result = await generateTourismData({ destinations, attractions, programs, reviews });
      setToast({ msg: result.message, ok: result.success });
    } catch (err: unknown) {
      setToast({ msg: `Error: ${err}`, ok: false });
    }
    setGenerating(false);
  };

  const handleResetToFile = () => {
    if (confirm('Reset all data to the current tourismData.ts file? Unsaved changes will be lost.')) {
      loadInitial();
      localStorage.removeItem(STORAGE_KEY);
      setToast({ msg: 'Data reset to file values.', ok: true });
    }
  };

  const openForm = (editing?: Destination | Attraction | Program) => {
    if (activeTab === 'destinations') setEditDest(editing as Destination || null);
    if (activeTab === 'attractions') setEditAttr(editing as Attraction || null);
    if (activeTab === 'programs') setEditProg(editing as Program || null);
    setView('form');
  };

  const closeForm = () => {
    setView('list');
    setEditDest(null);
    setEditAttr(null);
    setEditProg(null);
  };

  // CRUD operations
  const saveDest = (d: Destination) => {
    if (editDest) {
      setDestinations(prev => prev.map(x => x.id === editDest.id ? d : x));
    } else {
      setDestinations(prev => [...prev, d]);
    }
    closeForm();
  };

  const deleteDest = (id: string) => {
    if (confirm('Delete this destination? Related attractions and programs will NOT be deleted.')) {
      setDestinations(prev => prev.filter(x => x.id !== id));
    }
  };

  const saveAttr = (a: Attraction) => {
    if (editAttr) {
      setAttractions(prev => prev.map(x => x.id === editAttr.id ? a : x));
    } else {
      setAttractions(prev => [...prev, a]);
    }
    closeForm();
  };

  const deleteAttr = (id: string) => {
    if (confirm('Delete this attraction?')) {
      setAttractions(prev => prev.filter(x => x.id !== id));
    }
  };

  const saveProg = (p: Program) => {
    if (editProg) {
      setPrograms(prev => prev.map(x => x.id === editProg.id ? p : x));
    } else {
      setPrograms(prev => [...prev, p]);
    }
    closeForm();
  };

  const deleteProg = (id: string) => {
    if (confirm('Delete this program?')) {
      setPrograms(prev => prev.filter(x => x.id !== id));
    }
  };

  // Filtered data
  const q = searchQuery.toLowerCase();
  const filteredDests = destinations.filter(d => d.name.toLowerCase().includes(q) || d.id.toLowerCase().includes(q));
  const filteredAttrs = attractions.filter(a => a.name.toLowerCase().includes(q) || a.destinationId.toLowerCase().includes(q));
  const filteredProgs = programs.filter(p => p.name.toLowerCase().includes(q) || p.destinationId.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

  // Destination name lookup
  const destName = (id: string) => destinations.find(d => d.id === id)?.name || id;
  const attrName = (id: string) => attractions.find(a => a.id === id)?.name || id;

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-zinc-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50/80">
      {/* Toast */}

      {toast && (
        <div className={`fixed top-4 right-4 z-50 rounded-xl px-5 py-3 text-sm font-medium shadow-lg transition-all ${toast.ok ? 'bg-emerald-600 text-white' : 'bg-red-600 text-white'}`}>
          {toast.msg}
        </div>
      )}



      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 mt-20">

          <div>
            <h1 className="text-2xl font-bold text-zinc-900 tracking-tight">📋 Data Management</h1>
            <p className="text-sm text-zinc-500 mt-1">
              {destinations.length} destinations · {attractions.length} attractions · {programs.length} programs
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleResetToFile}
              className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
              Reset to File
            </button>
            <button onClick={handleGenerate} disabled={generating}
              className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 transition-colors shadow-sm disabled:opacity-50 flex items-center gap-2">
              {generating ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Generating...
                </>
              ) : (
                <>🔄 Generate tourismData.ts</>
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
          {/* Tab bar */}
          {view === 'list' && (
            <>
              <div className="flex border-b border-zinc-200 bg-zinc-50/60">
                {([
                  { key: 'destinations' as Tab, label: 'Destinations', count: destinations.length },
                  { key: 'attractions' as Tab, label: 'Attractions', count: attractions.length },
                  { key: 'programs' as Tab, label: 'Programs', count: programs.length },
                ]).map(tab => (
                  <button key={tab.key} onClick={() => { setActiveTab(tab.key); setSearchQuery(''); }}
                    className={`flex-1 px-4 py-3.5 text-sm font-medium transition-colors relative ${activeTab === tab.key ? 'text-blue-700 bg-white' : 'text-zinc-500 hover:text-zinc-700'}`}>
                    {tab.label}
                    <span className={`ml-1.5 inline-flex items-center justify-center rounded-full px-2 py-0.5 text-xs font-semibold ${activeTab === tab.key ? 'bg-blue-100 text-blue-700' : 'bg-zinc-100 text-zinc-500'}`}>
                      {tab.count}
                    </span>
                    {activeTab === tab.key && <span className="absolute bottom-0 inset-x-0 h-0.5 bg-blue-600" />}
                  </button>
                ))}
              </div>

              {/* Actions bar */}
              <div className="flex items-center gap-3 px-5 py-3 border-b border-zinc-100">
                <input
                  type="text" placeholder="Search..."
                  value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  className="flex-1 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <button onClick={() => openForm()}
                  className="shrink-0 rounded-lg bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
                  + Add New
                </button>
              </div>

              {/* Item list */}
              <div className="divide-y divide-zinc-100">
                {activeTab === 'destinations' && (
                  filteredDests.length === 0 ? (
                    <div className="px-5 py-12 text-center text-zinc-400 text-sm">No destinations found.</div>
                  ) : filteredDests.map(d => (
                    <div key={d.id} className="flex items-center gap-4 px-5 py-3 hover:bg-zinc-50/60 transition-colors group">
                      {d.image && (
                        <div className="shrink-0 w-14 h-10 rounded-md overflow-hidden bg-zinc-100">
                          <img src={d.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-zinc-900 truncate">{d.name}</p>
                        <p className="text-xs text-zinc-500 truncate">
                          📍 {d.quickFacts.capital} · 🌡 {d.weather.temperature} · {d.attractionCount} attractions
                        </p>
                      </div>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => { setEditDest(d); setView('form'); }}
                          className="rounded-lg p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button onClick={() => deleteDest(d.id)}
                          className="rounded-lg p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}

                {activeTab === 'attractions' && (
                  filteredAttrs.length === 0 ? (
                    <div className="px-5 py-12 text-center text-zinc-400 text-sm">No attractions found.</div>
                  ) : filteredAttrs.map(a => (
                    <div key={a.id} className="flex items-center gap-4 px-5 py-3 hover:bg-zinc-50/60 transition-colors group">
                      {a.image && (
                        <div className="shrink-0 w-14 h-10 rounded-md overflow-hidden bg-zinc-100">
                          <img src={a.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-zinc-900 truncate">{a.name}</p>
                        <p className="text-xs text-zinc-500 truncate">
                          🏷 {destName(a.destinationId)} · 📍 {a.location} · ⭐ {a.rating}
                        </p>
                      </div>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => { setEditAttr(a); setView('form'); }}
                          className="rounded-lg p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button onClick={() => deleteAttr(a.id)}
                          className="rounded-lg p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}

                {activeTab === 'programs' && (
                  filteredProgs.length === 0 ? (
                    <div className="px-5 py-12 text-center text-zinc-400 text-sm">No programs found.</div>
                  ) : filteredProgs.map(p => (
                    <div key={p.id} className="flex items-center gap-4 px-5 py-3 hover:bg-zinc-50/60 transition-colors group">
                      {p.image && (
                        <div className="shrink-0 w-14 h-10 rounded-md overflow-hidden bg-zinc-100">
                          <img src={p.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-zinc-900 truncate">{p.name}</p>
                        <p className="text-xs text-zinc-500 truncate">
                          🏷 {destName(p.destinationId)} → {attrName(p.attractionId)} · 💰 Rp {new Intl.NumberFormat('id-ID').format(p.price)} · ⏱ {p.duration}
                        </p>
                        <span className={`mt-0.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${p.category === 'Adventure and Challenge' ? 'bg-orange-50 text-orange-700' :
                          p.category === 'Cultural Immersion' ? 'bg-purple-50 text-purple-700' :
                            p.category === 'Culinary Journey' ? 'bg-rose-50 text-rose-700' :
                              p.category === 'Community and Social Impact' ? 'bg-teal-50 text-teal-700' :
                                'bg-green-50 text-green-700'
                          }`}>
                          {p.category}
                        </span>
                      </div>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => { setEditProg(p); setView('form'); }}
                          className="rounded-lg p-2 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 transition-colors" title="Edit">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                        </button>
                        <button onClick={() => deleteProg(p.id)}
                          className="rounded-lg p-2 text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </>
          )}

          {/* Form view */}
          {view === 'form' && (
            <div className="p-6">
              {activeTab === 'destinations' && (
                <DestinationForm destination={editDest} onSave={saveDest} onCancel={closeForm} />
              )}
              {activeTab === 'attractions' && (
                <AttractionForm attraction={editAttr} destinations={destinations} onSave={saveAttr} onCancel={closeForm} />
              )}
              {activeTab === 'programs' && (
                <ProgramForm program={editProg} destinations={destinations} attractions={attractions} onSave={saveProg} onCancel={closeForm} />
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <p className="mt-4 text-center text-xs text-zinc-400">
          Data disimpan di localStorage browser. Klik &quot;Generate tourismData.ts&quot; untuk menyimpan ke file.
        </p>
      </div>
    </div>
  );
}
