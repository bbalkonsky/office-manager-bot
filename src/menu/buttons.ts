import { Markup } from 'telegraf';

export const getMainMenuButtons = () => {
    return Markup.inlineKeyboard([[ Markup.button.callback('здарова', 'contacts') ]]);
}
