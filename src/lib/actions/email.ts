'use server';

import emailjs from '@emailjs/nodejs';

interface EmailData {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name: string;
}

export async function sendEmail(formData: FormData) {
  try {
    const serviceId = process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    if (!serviceId || !templateId || !publicKey || !privateKey) {
      throw new Error('EmailJS configuration is missing');
    }

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !subject || !message) {
      throw new Error('All fields are required');
    }

    const templateParams: Record<string, unknown> = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
      to_name: 'Abul Hasnat', // Your name for the template
      sent_date: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short',
      }),
    };

    const result = await emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey,
      privateKey: privateKey,
    });

    if (result.status === 200) {
      return { success: true, message: 'Email sent successfully!' };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to send email',
    };
  }
}
