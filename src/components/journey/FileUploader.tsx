'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { uploadLimits } from '@/lib/journey';
import styles from './journey.module.css';

interface Props {
  files: File[];
  onChange: (files: File[]) => void;
  title: string;
  hint: string;
}

function fmtSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

/**
 * Optional media/document upload. Validates type, size, count and total client-side
 * (re-validated server-side). Images preview as thumbnails; files can be removed. Kept in
 * React state only — never persisted to storage — so nothing sensitive lingers.
 */
export function FileUploader({ files, onChange, title, hint }: Props) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  const [error, setError] = useState('');
  const [previews, setPreviews] = useState<Record<string, string>>({});

  useEffect(() => {
    const map: Record<string, string> = {};
    files.forEach((f) => {
      if (f.type.startsWith('image/')) map[f.name + f.size] = URL.createObjectURL(f);
    });
    setPreviews(map);
    return () => Object.values(map).forEach((u) => URL.revokeObjectURL(u));
  }, [files]);

  const add = (incoming: FileList | null) => {
    if (!incoming) return;
    setError('');
    const next = [...files];
    let total = files.reduce((s, f) => s + f.size, 0);
    for (const f of Array.from(incoming)) {
      if (!uploadLimits.accept.includes(f.type)) {
        setError(`Dit bestandstype kunnen we niet gebruiken: ${f.name}. Gebruik JPG, PNG, WEBP of PDF.`);
        continue;
      }
      if (f.size > uploadLimits.maxFileBytes) {
        setError(`"${f.name}" is groter dan 10 MB.`);
        continue;
      }
      if (next.length >= uploadLimits.maxFiles) {
        setError(`U kunt maximaal ${uploadLimits.maxFiles} bestanden toevoegen.`);
        break;
      }
      if (total + f.size > uploadLimits.maxTotalBytes) {
        setError('De bijlagen zijn samen groter dan 25 MB.');
        break;
      }
      if (next.some((e) => e.name === f.name && e.size === f.size)) continue;
      next.push(f);
      total += f.size;
    }
    onChange(next);
    if (inputRef.current) inputRef.current.value = '';
  };

  const remove = (i: number) => {
    setError('');
    onChange(files.filter((_, idx) => idx !== i));
  };

  return (
    <div>
      <div
        className={styles.drop}
        data-drag={drag}
        onDragOver={(e) => {
          e.preventDefault();
          setDrag(true);
        }}
        onDragLeave={() => setDrag(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDrag(false);
          add(e.dataTransfer.files);
        }}
      >
        <div className={styles.dropTitle}>{title}</div>
        <div className={styles.dropHint}>{hint}</div>
        <label htmlFor={inputId} className={styles.dropBtn}>
          Bestanden kiezen
        </label>
        <input
          id={inputId}
          ref={inputRef}
          type="file"
          className="visually-hidden"
          multiple
          accept={uploadLimits.acceptAttr}
          onChange={(e) => add(e.target.files)}
        />
      </div>

      {error && (
        <p className={styles.error} role="alert" style={{ marginTop: 12 }}>
          {error}
        </p>
      )}

      {files.length > 0 && (
        <ul className={styles.files} aria-label="Toegevoegde bestanden">
          {files.map((f, i) => (
            <li key={f.name + f.size} className={styles.fileChip}>
              {previews[f.name + f.size] ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img className={styles.thumb} src={previews[f.name + f.size]} alt="" />
              ) : (
                <span className={`${styles.thumb} ${styles.thumbDoc}`}>PDF</span>
              )}
              <span className={styles.fileName}>{f.name}</span>
              <span className={styles.fileSize}>{fmtSize(f.size)}</span>
              <button type="button" className={styles.remove} onClick={() => remove(i)} aria-label={`${f.name} verwijderen`}>
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden="true">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
