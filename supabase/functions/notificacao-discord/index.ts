import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

serve(async (req) => {
  try {
    const payload = await req.json()
    const record = payload.record

    if (!record) return new Response("Sem dados", { status: 400 })

    // Buscando suas chaves nos Secrets
    const DISCORD_URL = Deno.env.get("DISCORD_URL")
    const RESEND_API_KEY = Deno.env.get("resend") // Sua chave do Resend (nome que você salvou)

    // --- 1. NOTIFICAÇÃO DISCORD (Nativo via Fetch) ---
    if (DISCORD_URL) {
      try {
        await fetch(DISCORD_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            embeds: [{
              title: "🚀 Novo Lead - Imperium Wolf",
              color: 3447003,
              fields: [
                { name: "👤 Nome", value: `\`${record.nome}\``, inline: true },
                { name: "📧 E-mail", value: `\`${record.email}\``, inline: true },
                { name: "💬 Mensagem", value: record.mensagem || 'Sem mensagem' }
              ],
              timestamp: new Date().toISOString()
            }]
          }),
        })
      } catch (e) {
        console.error("Erro Discord:", e.message)
      }
    }

    // --- 2. RESPOSTA AUTOMÁTICA (Nativo via Resend Fetch) ---
    if (record.email && RESEND_API_KEY) {
      try {
        const emailRes = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: 'Imperium Wolf <onboarding@resend.dev>',
            to: [record.email],
            subject: 'Recebemos seu contato! - Imperium Wolf',
            html: `
              <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                <h2 style="color: #3447003;">Olá, ${record.nome}!</h2>
                <p>Obrigado por contatar a <strong>Imperium Wolf</strong>.</p>
                <p>Recebemos sua mensagem e um de nossos especialistas entrará em contato em breve.</p>
                <br>
                <p>Atenciosamente,<br>Equipe Imperium Wolf</p>
              </div>
            `,
          }),
        });
        
        console.log("Status do envio Resend:", emailRes.status);
      } catch (mailErr) {
        console.error("Erro no Resend:", mailErr.message);
      }
    }

    return new Response(JSON.stringify({ ok: true }), { 
      status: 200, 
      headers: { "Content-Type": "application/json" } 
    })

  } catch (err) {
    console.error("Erro Crítico:", err.message)
    return new Response(JSON.stringify({ error: err.message }), { status: 500 })
  }
})