'use client';

import { useState, useEffect } from 'react';
import { Destination } from '@/types';
import ArrayInput from './ArrayInput';

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const emptyDestination: Destination = {
  id: '', name: '', slug: '', image: '', description: '',
  attractionCount: 0,
  quickFacts: { capital: '', population: '', language: '', timezone: '' },
  weather: { temperature: '', condition: '' },
  bestTimeToVisit: '',
  gallery: [],
};

interface Props {
  destination: Destination | null;
  onSave: (d: Destination) => void;
  onCancel: () => void;
}

export default function DestinationForm({ destination, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Destination>({ ...emptyDestination });

  useEffect(() => {
    if (destination) {
      setForm({ ...destination, quickFacts: { ...destination.quickFacts }, weather: { ...destination.weather }, gallery: [...destination.gallery] });
    } else {
      setForm({ ...emptyDestination, quickFacts: { ...emptyDestination.quickFacts }, weather: { ...emptyDestination.weather }, gallery: [] });
    }
  }, [destination]);

  const set = (key: keyof Destination, value: any) => setForm(prev => ({ ...prev, [key]: value }));
  const setQF = (key: string, value: string) => setForm(prev => ({ ...prev, quickFacts: { ...prev.quickFacts, [key]: value } }));
  const setW = (key: string, value: string) => setForm(prev => ({ ...prev, weather: { ...prev.weather, [key]: value } }));

  const handleNameChange = (name: string) => {
    const slug = slugify(name);
    setForm(prev => ({ ...prev, name, slug, id: destination ? prev.id : slug }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.id) return;
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
        <h2 className="text-lg font-semibold text-zinc-900">
          {destination ? `Edit: ${destination.name}` : 'Add New Destination'}
        </h2>
        <button type="button" onClick={onCancel} className="text-sm text-zinc-500 hover:text-zinc-700">
          ← Back to list
        </button>
      </div>

      {/* Basic Info */}
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
            <label className="block text-sm font-medium text-zinc-700 mb-1">Attraction Count</label>
            <input type="number" value={form.attractionCount} onChange={e => set('attractionCount', parseInt(e.target.value) || 0)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Best Time to Visit</label>
            <input type="text" value={form.bestTimeToVisit} onChange={e => set('bestTimeToVisit', e.target.value)}
              placeholder="e.g. April to October (Dry Season)"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>
      </fieldset>

      {/* Quick Facts */}
      <fieldset className="space-y-4 border border-zinc-100 rounded-xl p-4 bg-zinc-50/50">
        <legend className="text-sm font-semibold text-zinc-500 uppercase tracking-wider px-2">Quick Facts</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Capital</label>
            <input type="text" value={form.quickFacts.capital} onChange={e => setQF('capital', e.target.value)}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Population</label>
            <input type="text" value={form.quickFacts.population} onChange={e => setQF('population', e.target.value)}
              placeholder="e.g. 4.3 Million"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Language</label>
            <input type="text" value={form.quickFacts.language} onChange={e => setQF('language', e.target.value)}
              placeholder="e.g. Balinese & Indonesian"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Timezone</label>
            <input type="text" value={form.quickFacts.timezone} onChange={e => setQF('timezone', e.target.value)}
              placeholder="e.g. GMT+8 (WITA)"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
        </div>
      </fieldset>

      {/* Weather */}
      <fieldset className="space-y-4 border border-zinc-100 rounded-xl p-4 bg-zinc-50/50">
        <legend className="text-sm font-semibold text-zinc-500 uppercase tracking-wider px-2">Weather</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Temperature</label>
            <input type="text" value={form.weather.temperature} onChange={e => setW('temperature', e.target.value)}
              placeholder="e.g. 28°C"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">Condition</label>
            <input type="text" value={form.weather.condition} onChange={e => setW('condition', e.target.value)}
              placeholder="e.g. Sunny & Tropical"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" />
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
          {destination ? 'Update Destination' : 'Add Destination'}
        </button>
      </div>
    </form>
  );
}
