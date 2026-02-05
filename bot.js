import { Telegraf, Markup } from 'telegraf'
import 'dotenv/config'

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => {
  ctx.reply(
    `🚇 Транспортный справочник Москвы

Здесь вы найдёте ответы:
• билеты и Тройка
• контролёры и штрафы
• отмены и задержки поездов

Нажмите кнопку ниже 👇`,
    Markup.inlineKeyboard([
      Markup.button.webApp(
        '📖 Открыть справочник',
        process.env.WEB_APP_URL
      )
    ])
  )
})

bot.help((ctx) => {
  ctx.reply('Просто открой справочник и задай вопрос 😉')
})

bot.launch()
console.log('🤖 Bot is running')
