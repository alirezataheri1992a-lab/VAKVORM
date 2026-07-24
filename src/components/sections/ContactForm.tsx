'use client';

import { useActionState } from 'react';
import { submitInquiry, type InquiryState } from '@/lib/inquiry';
import styles from './ContactForm.module.css';

const initial: InquiryState = { status: 'idle' };

interface Props {
  email: string;
  phoneHref: string;
  phoneDisplay: string;
}

export function ContactForm({ email, phoneHref, phoneDisplay }: Props) {
  const [state, action, pending] = useActionState(submitInquiry, initial);

  if (state.status === 'success') {
    return (
      <div className={styles.done} role="status">
        <span className="label">Verzonden</span>
        <p className={styles.doneText}>
          Bedankt voor uw aanvraag. We nemen zo snel mogelijk contact met u op.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className={styles.form} noValidate>
      {/* honeypot */}
      <div aria-hidden="true" className={styles.hp}>
        <label>
          Bedrijf
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className={styles.row}>
        <Field label="Naam" name="name" required error={state.errors?.name} autoComplete="name" />
        <Field
          label="E-mail"
          name="email"
          type="email"
          required
          error={state.errors?.email}
          autoComplete="email"
        />
      </div>
      <div className={styles.row}>
        <Field label="Telefoon" name="phone" type="tel" autoComplete="tel" />
        <Field label="Type project" name="projectType" placeholder="Renovatie, badkamer, interieur…" />
      </div>
      <Field label="Locatie" name="location" placeholder="Plaats of wijk" />

      <div className={styles.field}>
        <label htmlFor="message" className="label">
          Uw project <span className={styles.req}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={styles.textarea}
          aria-invalid={!!state.errors?.message}
        />
        {state.errors?.message && <span className={styles.error}>{state.errors.message}</span>}
      </div>

      {(state.status === 'error' || state.status === 'unconfigured') && state.message && (
        <p className={styles.notice} role="alert">
          {state.message}
          {state.status === 'unconfigured' && (
            <span className={styles.fallback}>
              <a href={`mailto:${email}`}>{email}</a>
              <a href={`tel:${phoneHref}`}>{phoneDisplay}</a>
            </span>
          )}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={pending}>
        {pending ? 'Versturen…' : 'Aanvraag versturen'}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required,
  error,
  placeholder,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className={styles.field}>
      <label htmlFor={name} className="label">
        {label} {required && <span className={styles.req}>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={styles.input}
        aria-invalid={!!error}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
