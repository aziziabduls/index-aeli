'use client';

import { useState, useEffect } from 'react';
import { Program, Destination, Attraction, ItineraryItem } from '@/types';
import ArrayInput from './ArrayInput';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const CATEGORIES: Program['category'][] = [
  'Nature and Eco-Tourism',
  'Cultural Immersion',
  'Culinary Journey',
  'Community and Social Impact',
  'Adventure and Challenge',
];

const emptyProgram: Program = {
  id: '', name: '', slug: '', destinationId: '', attractionId: '', image: '', description: '',
  duration: '', price: 0, rating: 4.5, reviewsCount: 0,
  category: 'Adventure and Challenge',
  highlights: [], included: [], excluded: [],
  meetingPoint: 'Lokasi Kegiatan', itinerary: [], gallery: [],
};

interface Props {
  program: Program | null;
  destinations: Destination[];
  attractions: Attraction[];
  onSave: (p: Program) => void;
  onCancel: () => void;
}

export default function ProgramForm({ program, destinations, attractions, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Program>({ ...emptyProgram });
  const [itinTitle, setItinTitle] = useState('');
  const [itinActivities, setItinActivities] = useState('');
  const [editItinIdx, setEditItinIdx] = useState<number | null>(null);

  useEffect(() => {
    if (program) {
      setForm({
        ...program,
        highlights: [...program.highlights],
        included: [...program.included],
        excluded: [...program.excluded],
        itinerary: program.itinerary.map(it => ({ ...it, activities: [...it.activities] })),
        gallery: [...program.gallery],
      });
    } else {
      setForm({
        ...emptyProgram,
        highlights: [], included: [], excluded: [],
        itinerary: [], gallery: [],
      });
    }
  }, [program]);

  const set = (key: keyof Program, value: any) => setForm(prev => ({ ...prev, [key]: value }));

  const filteredAttractions = attractions.filter(a => a.destinationId === form.destinationId);

  const handleNameChange = (name: string) => {
    const slug = slugify(name);
    setForm(prev => ({
      ...prev,
      name,
      slug,
      id: program ? prev.id : (prev.destinationId ? `${prev.destinationId}-${slug}` : slug),
    }));
  };

  const handleDestChange = (destId: string) => {
    const slug = form.slug;
    setForm(prev => ({
      ...prev,
      destinationId: destId,
      attractionId: '',
      id: program ? prev.id : (destId ? `${destId}-${slug}` : slug),
    }));
  };

  // Itinerary management
  const addItineraryItem = () => {
    if (!itinTitle.trim()) return;
    const activities = itinActivities.split('\n').map(l => l.trim()).filter(Boolean);
    const newItem: ItineraryItem = { title: itinTitle.trim(), activities };

    if (editItinIdx !== null) {
      setForm(prev => ({
        ...prev,
        itinerary: prev.itinerary.map((it, i) => i === editItinIdx ? newItem : it),
      }));
      setEditItinIdx(null);
    } else {
      setForm(prev => ({ ...prev, itinerary: [...prev.itinerary, newItem] }));
    }
    setItinTitle('');
    setItinActivities('');
  };

  const editItineraryItem = (idx: number) => {
    const item = form.itinerary[idx];
    setItinTitle(item.title);
    setItinActivities(item.activities.join('\n'));
    setEditItinIdx(idx);
  };

  const removeItineraryItem = (idx: number) => {
    setForm(prev => ({ ...prev, itinerary: prev.itinerary.filter((_, i) => i !== idx) }));
    if (editItinIdx === idx) {
      setEditItinIdx(null);
      setItinTitle('');
      setItinActivities('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.id || !form.destinationId || !form.attractionId) return;
    onSave(form);
  };

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('id-ID').format(val);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          {program ? `Edit: ${program.name}` : 'Add New Program'}
        </h2>
        <button type="button" onClick={onCancel} className="text-sm text-zinc-500 hover:text-zinc-700">
          ← Back to list
        </button>
      </div>

      {/* Basic Info */}
      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Basic Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-zinc-700 mb-1">Program Name *</label>
            <input type="text" required value={form.name} onChange={e => handleNameChange(e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">ID</label>
            <input type="text" value={form.id} onChange={e => set('id', e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-600 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Slug</label>
            <input type="text" value={form.slug} onChange={e => set('slug', e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-600 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Destination *</label>
            <select required value={form.destinationId} onChange={e => handleDestChange(e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">-- Select Destination --</option>
              {destinations.map(d => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Attraction *</label>
            <select required value={form.attractionId} onChange={e => set('attractionId', e.target.value)}
              disabled={!form.destinationId}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:bg-zinc-100">
              <option value="">-- Select Attraction --</option>
              {filteredAttractions.map(a => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
            {form.destinationId && filteredAttractions.length === 0 && (
              <p className="mt-1 text-xs text-amber-600">No attractions for this destination yet.</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Image URL</label>
          <input type="text" value={form.image} onChange={e => set('image', e.target.value)}
            placeholder="https://images.unsplash.com/..."
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          {form.image && (
            <div className="mt-2 w-32 h-20 rounded-md overflow-hidden bg-zinc-100">
              <img src={form.image} alt="" className="w-full h-full object-cover" />
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Description</label>
          <textarea value={form.description} onChange={e => set('description', e.target.value)} rows={4}
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y" />
        </div>
      </fieldset>

      {/* Details */}
      <fieldset className="space-y-4 border border-zinc-100 rounded-xl p-4 bg-zinc-50/50">
        <legend className="text-sm font-semibold text-zinc-500 uppercase tracking-wider px-2">Details</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Duration</label>
            <input type="text" value={form.duration} onChange={e => set('duration', e.target.value)}
              placeholder="e.g. 4 jam"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Price (Rp)</label>
            <input type="number" value={form.price} onChange={e => set('price', parseInt(e.target.value) || 0)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
            {form.price > 0 && <p className="text-xs text-zinc-500 mt-0.5">Rp {formatPrice(form.price)}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Rating</label>
            <input type="number" step="0.1" min="0" max="5" value={form.rating} onChange={e => set('rating', parseFloat(e.target.value) || 0)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Reviews Count</label>
            <input type="number" value={form.reviewsCount} onChange={e => set('reviewsCount', parseInt(e.target.value) || 0)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Category</label>
            <select value={form.category} onChange={e => set('category', e.target.value as Program['category'])}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              {CATEGORIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Meeting Point</label>
            <input type="text" value={form.meetingPoint} onChange={e => set('meetingPoint', e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>
      </fieldset>

      {/* Array fields */}
      <ArrayInput label="Highlights" values={form.highlights} onChange={v => set('highlights', v)} placeholder="Add highlight..." multiline />
      <ArrayInput label="Included" values={form.included} onChange={v => set('included', v)} placeholder="What's included..." />
      <ArrayInput label="Excluded" values={form.excluded} onChange={v => set('excluded', v)} placeholder="What's excluded..." />

      {/* Itinerary */}
      <fieldset className="space-y-4 border border-zinc-100 rounded-xl p-4 bg-zinc-50/50">
        <legend className="text-sm font-semibold text-zinc-500 uppercase tracking-wider px-2">Itinerary</legend>

        {/* Existing items */}
        {form.itinerary.length > 0 && (
          <div className="space-y-2">
            {form.itinerary.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-white p-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-blue-700">{item.title}</p>
                  {item.activities.length > 0 && (
                    <ul className="mt-1 space-y-0.5">
                      {item.activities.map((a, ai) => (
                        <li key={ai} className="text-xs text-zinc-600 truncate">• {a}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex gap-1 shrink-0">
                  <button type="button" onClick={() => editItineraryItem(idx)}
                    className="rounded p-1 text-zinc-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                  <button type="button" onClick={() => removeItineraryItem(idx)}
                    className="rounded p-1 text-zinc-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Add/Edit form */}
        <div className="space-y-3 rounded-lg border border-dashed border-zinc-300 p-3 bg-white">
          <p className="text-xs font-medium text-zinc-500">{editItinIdx !== null ? 'Edit Step' : 'Add New Step'}</p>
          <div>
            <label className="block text-xs font-medium text-zinc-600 mb-1">Time / Title</label>
            <input type="text" value={itinTitle} onChange={e => setItinTitle(e.target.value)}
              placeholder="e.g. 08:00 – 09:00"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-600 mb-1">Activities (one per line)</label>
            <textarea value={itinActivities} onChange={e => setItinActivities(e.target.value)} rows={3}
              placeholder={"Activity 1\nLocation\nNotes"}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y" />
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={addItineraryItem}
              className="rounded-lg bg-zinc-800 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-900 transition-colors">
              {editItinIdx !== null ? 'Update Step' : '+ Add Step'}
            </button>
            {editItinIdx !== null && (
              <button type="button" onClick={() => { setEditItinIdx(null); setItinTitle(''); setItinActivities(''); }}
                className="rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-600 hover:bg-zinc-50 transition-colors">
                Cancel Edit
              </button>
            )}
          </div>
        </div>
      </fieldset>

      {/* Gallery */}
      <ArrayInput label="Gallery URLs" values={form.gallery} onChange={v => set('gallery', v)} placeholder="https://images.unsplash.com/..." />

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 border-t border-zinc-200 pt-4">
        <button type="button" onClick={onCancel}
          className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
          Cancel
        </button>
        <button type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
          {program ? 'Update Program' : 'Add Program'}
        </button>
      </div>
    </form>
  );
}
