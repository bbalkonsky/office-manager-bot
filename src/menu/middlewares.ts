import { Context } from 'telegraf';
import { getMainMenuButtons } from './buttons';


export const startMdlwr = async (ctx: Context) => {
    await ctx.reply('ЙО');
}

 export const getMainMenu = async (ctx: Context) => {
    const newButtons = getMainMenuButtons();
    return ctx.reply('Привет! Чем могу помочь?', newButtons);
}

 export const oneMoreMdlwr = async (ctx: Context): Promise<any> => {
    return ctx.reply('такие дела');
}
