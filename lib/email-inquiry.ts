import { legalCompany } from '@/lib/legal-company';

export type EmailInquiryDraft = { body: string; mailto: string; recipient: string };

export function createInquiryDraft(fields: {
  name: string;
  email: string;
  company?: string;
  inquiryType?: string;
  product?: string;
  quantity?: string;
  message: string;
}, recipient: string = legalCompany.email): EmailInquiryDraft {
  const details = [
    ['Name', fields.name],
    ['Reply email', fields.email],
    ['Company', fields.company],
    ['Inquiry type', fields.inquiryType],
    ['Product / model', fields.product],
    ['Estimated quantity', fields.quantity],
  ].filter(([, value]) => value?.trim()).map(([label, value]) => `${label}: ${value!.trim()}`);
  const body = `${details.join('\r\n')}\r\n\r\n${fields.message.trim()}`;
  return {
    body,
    recipient,
    mailto: `mailto:${encodeURIComponent(recipient).replace('%40', '@')}?subject=${encodeURIComponent('MagicChip product inquiry')}&body=${encodeURIComponent(body)}`,
  };
}

export const emailInquiryCopy = {
  en: { compose: 'Prepare Email', before: 'This opens a draft in your email app. Send it there to contact us.', privacy: 'Privacy Policy', ready: 'Your email draft is ready', notice: 'Your inquiry has not been sent yet. If your email app opened, review the draft and send it there. Otherwise, copy the message below and email it to:', open: 'Open email app', copy: 'Copy message', copied: 'Message copied', copyError: 'Select and copy the message below.', back: 'Edit inquiry', message: 'Prepared message' },
  de: { compose: 'E-Mail vorbereiten', before: 'Öffnet einen Entwurf in Ihrem E-Mail-Programm. Senden Sie ihn dort ab.', privacy: 'Datenschutzerklärung', ready: 'Ihr E-Mail-Entwurf ist bereit', notice: 'Ihre Anfrage wurde noch nicht gesendet. Prüfen und senden Sie den Entwurf in Ihrem E-Mail-Programm. Andernfalls kopieren Sie den Text und senden ihn an:', open: 'E-Mail-Programm öffnen', copy: 'Nachricht kopieren', copied: 'Nachricht kopiert', copyError: 'Markieren und kopieren Sie den Text unten.', back: 'Anfrage bearbeiten', message: 'Vorbereitete Nachricht' },
  fr: { compose: 'Préparer l’e-mail', before: 'Ouvre un brouillon dans votre messagerie. Envoyez-le depuis celle-ci.', privacy: 'Politique de confidentialité', ready: 'Votre brouillon est prêt', notice: 'Votre demande n’a pas encore été envoyée. Vérifiez et envoyez le brouillon dans votre messagerie. Sinon, copiez le texte et envoyez-le à :', open: 'Ouvrir la messagerie', copy: 'Copier le message', copied: 'Message copié', copyError: 'Sélectionnez et copiez le texte ci-dessous.', back: 'Modifier la demande', message: 'Message préparé' },
  it: { compose: 'Prepara e-mail', before: 'Apre una bozza nella tua applicazione e-mail. Inviala da lì per contattarci.', privacy: 'Informativa sulla privacy', ready: 'La bozza e-mail è pronta', notice: 'La richiesta non è ancora stata inviata. Controlla e invia la bozza dalla tua applicazione e-mail. Altrimenti copia il messaggio e invialo a:', open: 'Apri applicazione e-mail', copy: 'Copia messaggio', copied: 'Messaggio copiato', copyError: 'Seleziona e copia il messaggio qui sotto.', back: 'Modifica richiesta', message: 'Messaggio preparato' },
  es: { compose: 'Preparar correo', before: 'Abre un borrador en su aplicación de correo. Envíelo desde allí.', privacy: 'Política de privacidad', ready: 'Su borrador está listo', notice: 'Su consulta aún no se ha enviado. Revise y envíe el borrador desde su aplicación de correo. Si no se abre, copie el mensaje y envíelo a:', open: 'Abrir aplicación de correo', copy: 'Copiar mensaje', copied: 'Mensaje copiado', copyError: 'Seleccione y copie el mensaje de abajo.', back: 'Editar consulta', message: 'Mensaje preparado' },
};
