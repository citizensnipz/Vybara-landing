import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes('@')) {
    return new Response('Invalid email', { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'waitlist@vybara.com',
      to: 'jkroslowitz@gmail.com',
      subject: 'New Vybara waitlist signup',
      text: `New signup: ${email}`,
    });

    return new Response('Success', { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response('Email send failed', { status: 500 });
  }
}