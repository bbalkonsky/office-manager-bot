import dotenv from 'dotenv';
import { Context, Telegraf } from 'telegraf';
import { getMainMenu, oneMoreMdlwr, startMdlwr } from './src/menu/middlewares';

dotenv.config()

export const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.command('start', startMdlwr);
bot.command('menu', getMainMenu);

bot.action('contacts', oneMoreMdlwr);

bot.on('text', async (ctx) => {
    await ctx.reply(`продолжай`);
});

process.env.NODE_ENV === 'production' ? startHooksMode(bot) : startPollingMode(bot);

startPollingMode(bot);

function startPollingMode(tgbot: Telegraf<Context>) {
    console.log('Starting a bot in develop mode');
    tgbot.launch().then();
}

async function startHooksMode(tgbot: Telegraf<Context>) {
    console.log('Starting a bot in production mode');
    // const telegram = new Telegram(process.env.TELEGRAM_TOKEN, {});
    //
    // await telegram.deleteWebhook();
    //
    // const tlsOptions = {
    //     key: fs.readFileSync(process.env.PATH_TO_KEY),
    //     cert: fs.readFileSync(process.env.PATH_TO_CERT)
    // };
    //
    // await tgbot.telegram.setWebhook(
    //     `${process.env.WEBHOOK_URL}:${process.env.WEBHOOK_PORT}/${process.env.TELEGRAM_TOKEN}`,
    //     {
    //         source: 'cert.pem'
    //     }
    // );
    //
    // await tgbot.startWebhook(`/${process.env.TELEGRAM_TOKEN}`, tlsOptions, +process.env.WEBHOOK_PORT);
    //
    // const webhookStatus = await telegram.getWebhookInfo();
    // console.log('Webhook status', webhookStatus);
}
