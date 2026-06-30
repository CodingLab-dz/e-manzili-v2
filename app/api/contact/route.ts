import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { service, name, email, phone, company, message, formation} = body;

    await resend.emails.send({
      from: "contact@e-manzili.com",
      to: "contact@e-manzili.com",
      subject: `Nouveau message de ${name}`,
      html: `
    <h2>Nouveau message depuis le site</h2>

    <p><strong>service :</strong> ${service}</p>
    <p><strong>Nom :</strong> ${name}</p>
    <p><strong>Société :</strong> ${company}</p>
    <p><strong>Email :</strong> ${email}</p>
    <p><strong>Formation :</strong> ${formation}</p>
    <p><strong>Téléphone :</strong> ${phone}</p>

    <hr>

    <p>${message.replace(/\n/g, "<br>")}</p>
  `,
    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );

  }
}