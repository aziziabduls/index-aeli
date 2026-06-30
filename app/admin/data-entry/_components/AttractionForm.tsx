'use client';

import { useState, useEffect } from 'react';
import { Attraction, Destination } from '@/types';
import ArrayInput from './ArrayInput';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const emptyAttraction: Attraction = {
  id: '', name: '', slug: '', destinationId: '', image: '', description: '',
  location: '', rating: 4.5, history: '', openingHours: '',
  facilities: [], gallery: [],
};

interface Props {
  attraction: Attraction | null;
  destinations: Destination[];
  onSave: (a: Attraction) => void;
  onCancel: () => void;
}

export default function AttractionForm({ attraction, destinations, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Attraction>({ ...emptyAttraction });

  useEffect(() => {
    if (attraction) {
      setForm({ ...attraction, facilities: [...attraction.facilities], gallery: [...attraction.gallery] });
    } else {
      setForm({ ...emptyAttraction, facilities: [], gallery: [] });
    }
  }, [attraction]);

  const set = (key: keyof Attraction, value: any) => setForm(prev => ({ ...prev, [key]: value }));

  const handleNameChange = (name: string) => {
    const slug = slugify(name);
    setForm(prev => ({ ...prev, name, slug, id: attraction ? prev.id : slug }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.id || !form.destinationId) return;
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          {attraction ? `Edit: ${attraction.name}` : 'Add New Attraction'}
        </h2>
        <button type="button" onClick={onCancel} className="text-sm text-zinc-500 hover:text-zinc-700">
          ← Back to list
        </button>
      </div>

      <fieldset className="space-y-4">
        <legend className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Basic Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Name *</label>
            <input type="text" required value={form.name} onChange={e => handleNameChange(e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">ID / Slug</label>
            <input type="text" value={form.id} onChange={e => { set('id', e.target.value); set('slug', e.target.value); }}
              className="w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Destination *</label>
          <select required value={form.destinationId} onChange={e => set('destinationId', e.target.value)}
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="">-- Select Destination --</option>
            {destinations.map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
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
          <textarea value={form.description} onChange={e => set('description', e.target.value)} rows={3}
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Location</label>
            <input type="text" value={form.location} onChange={e => set('location', e.target.value)}
              placeholder="e.g. Central Jakarta"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Rating</label>
            <input type="number" step="0.1" min="0" max="5" value={form.rating} onChange={e => set('rating', parseFloat(e.target.value) || 0)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">History</label>
          <textarea value={form.history} onChange={e => set('history', e.target.value)} rows={3}
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y" />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">Opening Hours</label>
          <input type="text" value={form.openingHours} onChange={e => set('openingHours', e.target.value)}
            placeholder="e.g. 08:00 AM - 04:00 PM"
            className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>
      </fieldset>

      <ArrayInput label="Facilities" values={form.facilities} onChange={v => set('facilities', v)} placeholder="e.g. Parking, Restrooms..." />
      <ArrayInput label="Gallery URLs" values={form.gallery} onChange={v => set('gallery', v)} placeholder="https://images.unsplash.com/..." />

      <div className="flex items-center justify-end gap-3 border-t border-zinc-200 pt-4">
        <button type="button" onClick={onCancel}
          className="rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
          Cancel
        </button>
        <button type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors shadow-sm">
          {attraction ? 'Update Attraction' : 'Add Attraction'}
        </button>
      </div>
    </form>
  );
}
