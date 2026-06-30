'use client';

import { useState } from 'react';

interface ArrayInputProps {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
  placeholder?: string;
  multiline?: boolean;
}

export default function ArrayInput({ label, values, onChange, placeholder, multiline }: ArrayInputProps) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onChange([...values, input.trim()]);
      setInput('');
    }
  };

  const handleRemove = (index: number) => {
    onChange(values.filter((_, i) => i !== index));
  };

  const handlePasteBulk = () => {
    if (input.trim()) {
      const lines = input.split('\n').map(l => l.trim()).filter(Boolean);
      onChange([...values, ...lines]);
      setInput('');
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-zinc-700">{label}</label>
      <div className="flex gap-2">
        {multiline ? (
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={placeholder || `Add ${label.toLowerCase()}...`}
            rows={2}
            className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-y"
          />
        ) : (
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={placeholder || `Add ${label.toLowerCase()}...`}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAdd();
              }
            }}
            className="flex-1 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        )}
        <button
          type="button"
          onClick={multiline ? handlePasteBulk : handleAdd}
          className="shrink-0 rounded-lg bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-200 transition-colors"
        >
          {multiline ? 'Add All' : 'Add'}
        </button>
      </div>
      {values.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {values.map((v, i) => (
            <span
              key={i}
              className="group inline-flex items-center gap-1 rounded-md bg-blue-50 px-2.5 py-1 text-xs text-blue-700 border border-blue-100"
            >
              <span className="max-w-[280px] truncate">{v}</span>
              <button
                type="button"
                onClick={() => handleRemove(i)}
                className="ml-0.5 text-blue-400 hover:text-red-500 transition-colors font-bold"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
