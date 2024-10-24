import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, project } = body;

    const data = await resend.emails.send({
      from: 'Contact Form <contact@techacm.fr>',
      to: ['axel.chevenement@yahoo.fr'],
      subject: `Nouveau contact: ${company}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Entreprise:</strong> ${company}</p>
        <p><strong>Projet:</strong> ${project}</p>
      `,
    });

    return NextResponse.json({ message: "Email envoyé avec succès" });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de l'envoi de l'email" }, { status: 500 });
  }
}