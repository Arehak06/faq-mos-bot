import Home from './pages/Home'
import { TelegramContext } from './context/TelegramContext'

export default function App() {
  const tg = window.Telegram?.WebApp

  return (
    <TelegramContext.Provider
      value={{
        tg,
        user: tg?.initDataUnsafe?.user,
      }}
    >
      <Home />
    </TelegramContext.Provider>
  )
}
