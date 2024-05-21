import { Resend } from 'resend';
import type { APIRoute } from 'astro';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

interface EmailBody {
    from: string;
    to: string[];
    subject: string;
    html: string;
    text: string;
}

const validateRequestBody = (body: Partial<EmailBody>): EmailBody => {
    const { from, to, subject, html, text } = body;
    if (!from || !to || !subject || !html || !text) {
        throw new Error('Missing required fields or invalid data');
    }
    return body as EmailBody;
};

const sendEmail = async ({ from, to, subject, html, text }: EmailBody) => {
    const { data, error } = await resend.emails.send({ from, to, subject, html, text });
    if (error) {
        throw new Error('Failed to send email, internal server error');
    }
    return data;
};

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();
        const validatedBody = validateRequestBody(body);

        const data = await sendEmail(validatedBody);

        return new Response(
            JSON.stringify({ message: data, success: 'Email sent successfully' }),
            { status: 200, statusText: 'OK' }
        );

    } catch (err: unknown) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error(errorMessage);

        const status = errorMessage === 'Missing required fields or invalid data' ? 400 : 500;
        const statusText = status === 400 ? 'Bad Request' : 'Internal Server Error';

        return new Response(
            JSON.stringify({ error: errorMessage }),
            { status, statusText }
        );
    }
};
