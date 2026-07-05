export const emailTemplate = (name, email, message) => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0; padding:0; background-color:#eeeeec; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#eeeeec; padding:48px 0;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;">

                    <!-- top meta line, like a log timestamp -->
                    <tr>
                        <td style="padding:0 4px 10px;">
                            <p style="margin:0; font-family: 'SF Mono', 'Fira Code', Consolas, monospace; font-size:11px; letter-spacing:0.5px; color:#9a9a92;">
                                incoming_message.log
                            </p>
                        </td>
                    </tr>

                    <!-- card -->
                    <tr>
                        <td style="background-color:#ffffff; border:1px solid #e2e2dc;">
                            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">

                                <!-- header row -->
                                <tr>
                                    <td style="padding:24px 28px 20px;">
                                        <p style="margin:0; font-family: Georgia, 'Times New Roman', serif; font-size:20px; color:#111110; font-weight:400;">
                                            New message from your site
                                        </p>
                                    </td>
                                </tr>

                                <!-- divider -->
                                <tr>
                                    <td style="padding:0 28px;">
                                        <div style="border-top:1px solid #ececE6;"></div>
                                    </td>
                                </tr>

                                <!-- name / email as terminal-style fields -->
                                <tr>
                                    <td style="padding:20px 28px 4px;">
                                        <table role="presentation" cellpadding="0" cellspacing="0">
                                            <tr>
                                                <td style="padding:5px 10px 5px 0; vertical-align:top;">
                                                    <span style="font-family:'SF Mono','Fira Code',Consolas,monospace; font-size:12px; color:#b3b3ab;">from</span>
                                                </td>
                                                <td style="padding:5px 0; vertical-align:top;">
                                                    <span style="font-family: Georgia, serif; font-size:15px; color:#111110;">${name}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding:5px 10px 5px 0; vertical-align:top;">
                                                    <span style="font-family:'SF Mono','Fira Code',Consolas,monospace; font-size:12px; color:#b3b3ab;">reply</span>
                                                </td>
                                                <td style="padding:5px 0; vertical-align:top;">
                                                    <a href="mailto:${email}" style="font-family: Georgia, serif; font-size:15px; color:#111110; text-decoration:none; border-bottom:1px solid #d8d8d0;">${email}</a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                                <!-- message, set off with a left rule like a diff/quote block -->
                                <tr>
                                    <td style="padding:20px 28px 28px;">
                                        <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="width:3px; background-color:#111110;"></td>
                                                <td style="padding:2px 0 2px 16px;">
                                                    <p style="margin:0; font-family: Georgia, serif; font-size:15px; line-height:1.65; color:#3a3a35; white-space:pre-wrap;">${message}</p>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                    <!-- footer -->
                    <tr>
                        <td style="padding:16px 4px 0;">
                            <p style="margin:0; font-family:'SF Mono','Fira Code',Consolas,monospace; font-size:11px; color:#a8a89e;">
                                sent via portfolio · sujitkumar.dev
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`