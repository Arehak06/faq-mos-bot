import { Telegraf, Markup } from 'telegraf'
import 'dotenv/config'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply(
    '🚇 Добро пожаловать в транспортный справочник!\n\nЗадай вопрос или открой справочник 👇',
    Markup.inlineKeyboard([
      Markup.button.webApp(
        '📖 Открыть справочник',
        process.env.WEB_APP_URL
      )
    ])
  )
})

bot.help((ctx) => {
  ctx.reply('Просто нажми кнопку и найди ответ на свой вопрос 😉')
})

bot.launch()
console.log('🤖 Bot started')
