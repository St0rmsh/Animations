import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req) {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password, not your normal password
        },
    })

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER, // sending to yourself
            replyTo: email,
            subject: `Portfolio contact from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
        })
        return NextResponse.json({ success: true })
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
    }
}