/**
 * Configurações da página em um lugar só.
 * Preencha os campos abaixo antes de publicar. Nenhum deles é obrigatório para o build.
 */

// Endereço final do site, sem barra no final (usado na prévia de compartilhamento).
// Ex.: 'https://protocolos.paulajardim.com.br'
export const SITE_URL = '';

// Link do formulário de aplicação. Todos os botões "aplicar" apontam para ele.
export const APPLY_URL = '';

// WhatsApp (somente números, com DDI e DDD). Ex.: '5511999999999'
// Usado nos botões apenas se APPLY_URL estiver vazio.
export const WHATSAPP_NUMBER = '';

// Mensagem inicial opcional para o WhatsApp.
export const WHATSAPP_MESSAGE = '';

// ID do Pixel da Meta (somente números). Se vazio, o Pixel não é carregado.
export const META_PIXEL_ID = '';

// Evento enviado ao Pixel quando alguém clica em um botão de aplicação.
export const META_PIXEL_CLICK_EVENT = 'Lead';

/* ---------------------------------------------------------------------------
 * Derived values (no need to edit below this line)
 * ------------------------------------------------------------------------- */

const whatsappUrl = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}${WHATSAPP_MESSAGE ? `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}` : ''}`
  : '';

export const APPLY_HREF = APPLY_URL || whatsappUrl || '#aplicacao';

const isExternal = /^https?:\/\//.test(APPLY_HREF);

/** Props shared by every "apply" button. */
export const applyLinkProps = isExternal
  ? { href: APPLY_HREF, target: '_blank', rel: 'noopener noreferrer' }
  : { href: APPLY_HREF };
