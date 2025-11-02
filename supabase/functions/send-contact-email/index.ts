import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  subject: string;
  formData: Record<string, any>;
  formType: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, subject, formData, formType }: EmailRequest = await req.json();

    // Format form data as HTML
    const formatFormData = (data: Record<string, any>) => {
      return Object.entries(data)
        .map(([key, value]) => {
          const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
          return `<p><strong>${label}:</strong> ${value}</p>`;
        })
        .join('');
    };

    const emailResponse = await resend.emails.send({
      from: "Alucard Animes <onboarding@resend.dev>",
      to: [to],
      subject: subject,
      html: `
        <h1>Nova Inscrição - ${formType}</h1>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
          ${formatFormData(formData)}
        </div>
        <p style="margin-top: 20px; color: #666;">
          Esta é uma mensagem automática do sistema de inscrições Alucard Animes.
        </p>
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
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
