import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

// Allowed origins for CORS - restrict to your domains
const allowedOrigins = [
  "https://www.friburgogeek.com.br",
  "https://friburgogeek.com.br",
  "https://www.alucardanimes.com.br",
  "https://alucardanimes.com.br"
];

const getCorsHeaders = (origin: string | null) => {
  const allowedOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
};

interface EmailRequest {
  to: string;
  subject: string;
  formData: Record<string, any>;
  formType: string;
}

const handler = async (req: Request): Promise<Response> => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, formData, formType }: EmailRequest = await req.json();

    // HTML-escape user input to prevent XSS in email clients
    const escapeHtml = (text: string): string =>
      text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    // Format form data as HTML with better organization
    const formatFormData = (data: Record<string, any>) => {
      const fieldLabels: Record<string, string> = {
        nome: 'Nome',
        email: 'E-mail',
        telefone: 'Telefone',
        idade: 'Idade',
        categoria: 'Categoria',
        personagem: 'Personagem',
        origem: 'Origem',
        descricao: 'Descrição',
        responsavel: 'Responsável',
        nomeGrupo: 'Nome do Grupo',
        nomeResponsavel: 'Nome do Responsável',
        contatoResponsavel: 'Contato do Responsável',
        chave: 'Chave da Competição',
        musicaOriginal: 'Música (Original)',
        musicaTraducao: 'Música (Tradução)',
        linkMusica: 'Link da Música',
        listaParticipantes: 'Lista de Participantes',
        assunto: 'Assunto',
        mensagem: 'Mensagem',
        musica: 'Música',
        descricaoApresentacao: 'Descrição da Apresentação'
      };

      return Object.entries(data)
        .filter(([_, value]) => value !== undefined && value !== '')
        .map(([key, value]) => {
          const rawLabel = fieldLabels[key] || key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
          const label = escapeHtml(rawLabel);
          const safeValue = escapeHtml(String(value));
          const formattedValue = typeof value === 'string' && value.length > 100
            ? `<div style="white-space: pre-wrap; margin-top: 5px;">${safeValue}</div>`
            : safeValue;
          return `<p style="margin: 10px 0;"><strong style="color: #4A5568;">${label}:</strong> ${formattedValue}</p>`;
        })
        .join('');
    };


    const emailResponse = await resend.emails.send({
      from: "Contato <no-reply@alucardanimes.com.br>",
      to: ["contato@alucardanimes.com.br"],
      reply_to: formData.email || undefined,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Nova Inscrição Recebida</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">${formType}</p>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e2e8f0; border-top: none;">
            <div style="background: #f7fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
              ${formatFormData(formData)}
            </div>
          </div>
          <div style="background: #f7fafc; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
            <p style="margin: 0; color: #718096; font-size: 14px;">
              📧 Esta é uma mensagem automática do sistema de inscrições Friburgo Geek - Alucard Animes
            </p>
              <p style="margin: 10px 0 0 0; color: #a0aec0; font-size: 12px;">
              Data e Hora: ${escapeHtml(new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }))}
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email enviado com sucesso:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);
    return new Response(
      JSON.stringify({ error: "Não foi possível enviar o email. Tente novamente mais tarde ou entre em contato diretamente." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
