import faq from '../../data/faq.json'

export default function Home() {
  return (
    <div style={{ padding: 16 }}>
      <h2>🔍 Найдите ответ</h2>

      <input
        placeholder="Например: штраф, тройка, контролёр"
        style={{ width: '100%', padding: 8, marginBottom: 16 }}
      />

      <h3>📌 Частые вопросы</h3>
      {faq.slice(0, 5).map((q) => (
        <div key={q.id} style={{ marginBottom: 12 }}>
          <strong>{q.title}</strong>
          <p>{q.short}</p>
        </div>
      ))}
    </div>
  )
}
