import nodemailer from 'nodemailer';

class MailService {
  transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process?.env?.SMTP_HOST,
      port: process?.env?.SMTP_PORT,
      secure: false,
      auth: {
        user: process?.env?.SMTP_USER,
        pass: process?.env?.SMTP_PASSWORD,
      },
    } as any);
  }

  async sendActivationMail(to: string, link: string) {
    await this.transporter.sendMail({
      from: process?.env?.SMTP_USER,
      to,
      subject: 'Активация аккануда на' + process?.env?.API_URL,
      text: '',
      html: `
      <div>
        <h1>Для активации перейдите по ссылке</h1>
        <a href="${link}">${link}</a>
      </div>
      `,
    });
  }
}

export default new MailService();
