import { mailOptions, transporter } from "@/app/config/nodemailer";
import { NextResponse } from "next/server";

const CONTACT_MESSAGE_FIELDS = {
  firstname: "Nume",
  lastname: "Prenume",
  email: "Email",
  telefon: "Telefon",
  message: "Mesaj",
};

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]} : \n${val} \n \n`),
    ""
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<h1 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h1><p class="form-answer" align="left">${val}</p>`),

    ""
  );

  return {
    text: stringData,
    html: `<!doctype html><html><head><title></title><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge"><style>a,body,table,td{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}table{border-collapse:collapse!important}body{height:100%!important;margin:0!important;padding:0!important;width:100%!important}@media screen and (max-width:525px){.wrapper{width:100%!important;max-width:100%!important}.responsive-table{width:100%!important}.padding{padding:10px 5% 15px 5%!important}.section-padding{padding:0 15px 50px 15px!important}}.form-container{margin-bottom:24px;padding:20px;border:1px dashed #ccc}.form-heading{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;text-align:left;line-height:20px;font-size:18px;margin:0 0 8px;padding:0}.form-answer{color:#2a2a2a;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;text-align:left;line-height:20px;font-size:16px;margin:0 0 24px;padding:0}div[style*="margin: 16px 0;"]{margin:0!important}</style></head><body style="margin:0!important;padding:0!important;background:#fff"><div style="display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden"></div><table border="0" cellpadding="0" cellspacing="0" width="100%"><tr><td bgcolor="#ffffff" align="center" style="padding:10px 15px 30px 15px" class="section-padding"><table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:500px" class="responsive-table"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td style="padding:0;font-size:16px;line-height:25px;color:#232323" class="padding message-content"><h2>New Contact Message</h2><div class="form-container">${htmlData}</div></td></tr></table></td></tr></table></td></tr></table></td></tr></table></body></html>`,
  };
};

export async function GET() {
  return NextResponse.json({ message: "GET is working!" });
}

export async function POST(req) {
  const data = await req.json();
  const { firstname, lastname, email, telefon, message } = data;

  if (!email) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent(data),
      subject: firstname,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
  // return NextResponse.json({ error: "Bad request" }, { status: 400 });
  //   return NextResponse.json({ received: data });
}
