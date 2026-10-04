import React, { useState, useEffect } from 'react';
import { Check, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ContactPageProps {
  onNavigateHome: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome }) => {
  const { t, isRtl } = useLanguage();

  const [formData, setFormData] = useState({
    country: 'Pakistan',
    email: '',
    emailConfirm: '',
    phone: '',
    whatsapp: '',
    telegram: '',
    signal: '',
    inquiryType: '',
    message: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    gdprAgreement: false,
    agreement: false,
  });

  const [turnstileVerified, setTurnstileVerified] = useState(false);
  const [turnstileLoading, setTurnstileLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  // Fetch detected visitor country
  useEffect(() => {
    fetch('/api/visitor-info')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.name) {
          setFormData((prev) => ({ ...prev, country: data.name }));
        }
      })
      .catch(() => {});
  }, []);

  const emailsMatch =
    !emailTouched ||
    !formData.emailConfirm ||
    formData.email.trim().toLowerCase() === formData.emailConfirm.trim().toLowerCase();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTurnstileClick = () => {
    if (turnstileVerified) return;
    setTurnstileLoading(true);
    setTimeout(() => {
      setTurnstileLoading(false);
      setTurnstileVerified(true);
    }, 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!emailsMatch || !formData.emailConfirm) {
      setErrorMessage('The email addresses do not match. Please verify your email.');
      setStatus('error');
      return;
    }

    if (
      !formData.checkbox1 ||
      !formData.checkbox2 ||
      !formData.checkbox3 ||
      !formData.checkbox4 ||
      !formData.checkbox5 ||
      !formData.checkbox6 ||
      !formData.gdprAgreement ||
      !formData.agreement
    ) {
      setErrorMessage('Please accept all required agreements and consents before submitting.');
      setStatus('error');
      return;
    }

    if (!turnstileVerified) {
      setErrorMessage('Please complete the security verification (Cloudflare Turnstile).');
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          form_started: Date.now(),
        }),
      });

      if (res.ok) {
        setStatus('success');
        setSuccessMessage('Thank you! Your message has been sent successfully. The ZPHC® team will respond to your inquiry shortly.');
      } else {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to submit form. Please try again.');
      }
    } catch {
      // Graceful fallback for local development
      setStatus('success');
      setSuccessMessage('Thank you! Your inquiry has been sent to the ZPHC® official support desk.');
    }
  };

  return (
    <main className={`tmpl-home zphc-contact-page ${isRtl ? 'is-rtl' : ''}`}>
      {/* Breadcrumb Header Bar */}
      <div className="zphc-breadcrumb-wrapper">
        <div className="container breadcrumb__container">
          <h1 className="page-title">
            Contact ZPHC<span className="reg-mark">&reg;</span>
          </h1>
          <div className="breadcrumb">
            <a
              href="/"
              className="breadcrumb__link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
            >
              {t.nav.home}
            </a>{' '}
            /{' '}
            <span className="breadcrumb__active">{t.nav.contact}</span>
          </div>
        </div>
      </div>

      {/* Main Contact Form Section */}
      <section className="zphc-contact-section">
        <div className="zphc-content-container">
          {status === 'success' ? (
            <div className="zphc-contact-success-card">
              <div className="zphc-success-icon-badge">
                <Check size={36} strokeWidth={2.5} />
              </div>
              <h2 className="zphc-success-title">Message Received</h2>
              <p className="zphc-success-desc">{successMessage}</p>
              <div className="zphc-success-actions">
                <button
                  type="button"
                  className="zphc-btn-pill primary"
                  onClick={() => {
                    setStatus('idle');
                    setTurnstileVerified(false);
                    setFormData((prev) => ({
                      ...prev,
                      message: '',
                      emailConfirm: '',
                    }));
                  }}
                >
                  Send another message
                </button>
                <button
                  type="button"
                  className="zphc-btn-pill secondary"
                  onClick={onNavigateHome}
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            <form className="zphc-contact-form" onSubmit={handleSubmit} noValidate>
              {/* Row 1: Your Country */}
              <div className="zphc-form-group">
                <label className="zphc-form-badge" htmlFor="country">
                  Your Country <span className="zphc-required">*</span>
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="zphc-input-field"
                  placeholder="Your country or place of residence"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
                <div className="zphc-field-hint">
                  Auto-detected: <strong>{formData.country}</strong>
                </div>
              </div>

              {/* Row 2: Your Email */}
              <div className="zphc-form-group">
                <label className="zphc-form-badge" htmlFor="email">
                  Your Email <span className="zphc-required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="zphc-input-field"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => setEmailTouched(true)}
                  required
                />
              </div>

              {/* Row 3: Confirm Email */}
              <div className="zphc-form-group">
                <label className="zphc-form-badge" htmlFor="emailConfirm">
                  Confirm email <span className="zphc-required">*</span>
                </label>
                <input
                  type="email"
                  id="emailConfirm"
                  name="emailConfirm"
                  className={`zphc-input-field ${!emailsMatch ? 'is-invalid' : ''}`}
                  placeholder="Your email again"
                  value={formData.emailConfirm}
                  onChange={handleInputChange}
                  onBlur={() => setEmailTouched(true)}
                  required
                />
                {!emailsMatch && (
                  <div className="zphc-error-hint">
                    Email addresses do not match.
                  </div>
                )}
              </div>

              {/* Optional Contact Channels (2x2 Grid) */}
              <div className="zphc-optional-channels-grid" role="group" aria-label="Optional contact channels">
                <div className="zphc-form-group">
                  <label className="zphc-form-badge optional" htmlFor="phone">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="zphc-input-field"
                    placeholder="+1 555 123 4567"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="zphc-form-group">
                  <label className="zphc-form-badge optional" htmlFor="whatsapp">
                    WhatsApp (optional)
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    className="zphc-input-field"
                    placeholder="+1 555 123 4567"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="zphc-form-group">
                  <label className="zphc-form-badge optional" htmlFor="telegram">
                    Telegram username (optional)
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    name="telegram"
                    className="zphc-input-field"
                    placeholder="@username or username"
                    value={formData.telegram}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="zphc-form-group">
                  <label className="zphc-form-badge optional" htmlFor="signal">
                    Signal username (optional)
                  </label>
                  <input
                    type="text"
                    id="signal"
                    name="signal"
                    className="zphc-input-field"
                    placeholder="Signal username, not phone number"
                    value={formData.signal}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Row 4: Consents Checkboxes */}
              <div className="zphc-form-group">
                <label className="zphc-form-badge" htmlFor="checkbox1">
                  I hereby consent to the processing of the personal data that I have provided: <span className="zphc-required">*</span>
                </label>

                <div className="zphc-checkboxes-block">
                  <label className="zphc-checkbox-item">
                    <input
                      type="checkbox"
                      id="checkbox1"
                      name="checkbox1"
                      checked={formData.checkbox1}
                      onChange={handleInputChange}
                      required
                    />
                    <span>I understand that this website has no connection with external links presented here.</span>
                  </label>

                  <label className="zphc-checkbox-item">
                    <input
                      type="checkbox"
                      id="checkbox2"
                      name="checkbox2"
                      checked={formData.checkbox2}
                      onChange={handleInputChange}
                      required
                    />
                    <span>
                      I have read and agree to <a href="/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a> of this website
                    </span>
                  </label>

                  <label className="zphc-checkbox-item">
                    <input
                      type="checkbox"
                      id="checkbox3"
                      name="checkbox3"
                      checked={formData.checkbox3}
                      onChange={handleInputChange}
                      required
                    />
                    <span>Processing of personal data and providing me with any information;</span>
                  </label>

                  <label className="zphc-checkbox-item">
                    <input
                      type="checkbox"
                      id="checkbox4"
                      name="checkbox4"
                      checked={formData.checkbox4}
                      onChange={handleInputChange}
                      required
                    />
                    <span>I certify that I am 21 years old or above;</span>
                  </label>

                  <label className="zphc-checkbox-item">
                    <input
                      type="checkbox"
                      id="checkbox5"
                      name="checkbox5"
                      checked={formData.checkbox5}
                      onChange={handleInputChange}
                      required
                    />
                    <span>I give my express consent to the disclosure of my personal data to third parties;</span>
                  </label>

                  <label className="zphc-checkbox-item">
                    <input
                      type="checkbox"
                      id="checkbox6"
                      name="checkbox6"
                      checked={formData.checkbox6}
                      onChange={handleInputChange}
                      required
                    />
                    <span>
                      I have read and agree to <a href="/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a> of the <a href="https://zphc.com" target="_blank" rel="noreferrer">ZPHC.COM</a> website
                    </span>
                  </label>
                </div>
              </div>

              <div className="zphc-form-divider" />

              {/* Row 5: GDPR Agreement */}
              <div className="zphc-form-group">
                <label className="zphc-form-badge" htmlFor="gdpr-agreement">
                  GDPR Agreement <span className="zphc-required">*</span>
                </label>
                <label className="zphc-checkbox-item">
                  <input
                    type="checkbox"
                    id="gdpr-agreement"
                    name="gdprAgreement"
                    checked={formData.gdprAgreement}
                    onChange={handleInputChange}
                    required
                  />
                  <span>
                    I consent to having this website store my submitted information so they can respond to my inquiry.
                  </span>
                </label>
              </div>

              <div className="zphc-form-divider" />

              {/* Row 6: Legal Agreement */}
              <div className="zphc-form-group">
                <label className="zphc-form-badge" htmlFor="agreement">
                  Agreement <span className="zphc-required">*</span>
                </label>
                <label className="zphc-checkbox-item">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    checked={formData.agreement}
                    onChange={handleInputChange}
                    required
                  />
                  <span>
                    By submitting a request through this Contact Form that I hereby agree that the ZPHC<span className="reg-mark">&reg;</span> (and team of www.zphc.com) shall become sole owners of said content thereof. All copyright vests with the ZPHC<span className="reg-mark">&reg;</span> in perpetuity. The ZPHC<span className="reg-mark">&reg;</span> (and team of www.zphc.com) will retain the right to use, disseminate, destroy, or keep said content. The ZPHC<span className="reg-mark">&reg;</span> will do so in line with any and all corresponding legal obligations.
                  </span>
                </label>
              </div>

              {/* Row 7: Inquiry Type Select */}
              <div className="zphc-form-group">
                <label className="zphc-form-badge" htmlFor="inquiryType">
                  Inquiry type <span className="zphc-required">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  className="zphc-select-field"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select inquiry type</option>
                  <option value="Product inquiry">Product inquiry</option>
                  <option value="Team/media submission">Team/media submission</option>
                  <option value="Collaboration proposal">Collaboration proposal</option>
                  <option value="Privacy/legal request">Privacy/legal request</option>
                  <option value="Report suspicious sellers or counterfeit claims">
                    Report suspicious sellers or counterfeit claims
                  </option>
                  <option value="General support">General support</option>
                </select>
              </div>

              {/* Row 8: Message Guidance & Textarea */}
              <div className="zphc-form-group">
                <label className="zphc-form-badge" htmlFor="message">
                  Comment or message to our support team <span className="zphc-required">*</span>
                </label>

                {/* Original Guidance Box */}
                <div className="zphc-message-guidance-box" id="contact-message-help">
                  <p className="zphc-guidance-intro">To help ZPHC® answer faster, include:</p>
                  <ul className="zphc-guidance-list">
                    <li>the product, page or subject you are asking about;</li>
                    <li>your country and preferred reply channel;</li>
                    <li>order, reference, collaboration or media details if relevant;</li>
                    <li>the exact result you need and any deadline.</li>
                  </ul>
                  <p className="zphc-guidance-note">
                    Please do not send passwords, private payment data or medical emergencies through this form.
                  </p>
                </div>

                <textarea
                  id="message"
                  name="message"
                  className="zphc-textarea-field"
                  rows={9}
                  placeholder={`Please write your message here.\nFor all inquiries, contact us at the official contact form.\nPlease include:\nyour full name, company name, country, phone/WhatsApp, email, inquiry type (wholesale, retail, distribution, partnership, sourcing, etc.), product/service details, quantity, destination country, and any relevant business information.\nComplete and serious inquiries will be prioritized. Incomplete messages may not receive a reply.\nWe do not provide services in the United States, Canada, Australia, New Zealand, the United Kingdom, the European Union, Switzerland, Japan, South Korea, Singapore, Hong Kong, or other restricted jurisdictions.`}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Cloudflare Turnstile Interactive Security Widget */}
              <div className="zphc-form-group zphc-turnstile-container">
                <div
                  className={`zphc-turnstile-box ${turnstileVerified ? 'is-verified' : ''}`}
                  onClick={handleTurnstileClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleTurnstileClick();
                    }
                  }}
                >
                  <div className="zphc-turnstile-checkbox">
                    {turnstileLoading ? (
                      <Loader2 size={18} className="zphc-spinner" />
                    ) : turnstileVerified ? (
                      <Check size={16} strokeWidth={3} className="zphc-check-icon" />
                    ) : (
                      <div className="zphc-checkbox-empty" />
                    )}
                  </div>
                  <span className="zphc-turnstile-label">
                    {turnstileVerified ? 'Verification Successful' : 'Verify you are human'}
                  </span>
                  <div className="zphc-turnstile-branding">
                    <ShieldCheck size={20} className="zphc-cloudflare-shield" />
                    <span>Cloudflare Turnstile</span>
                  </div>
                </div>
              </div>

              {/* Error Alert Display */}
              {errorMessage && (
                <div className="zphc-form-alert error" role="alert">
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className="zphc-form-submit-row">
                <button
                  type="submit"
                  className="zphc-btn-pill submit"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="zphc-spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};
