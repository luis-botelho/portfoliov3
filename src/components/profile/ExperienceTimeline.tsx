import { experience } from '@/data/profile'
import styles from './Profile.module.scss'

export function ExperienceTimeline() {
  const chronological = [...experience].sort((a, b) =>
    b.start.localeCompare(a.start),
  )
  return (
    <ol className={styles.timeline}>
      {chronological.map((item) => (
        <li
          key={`${item.company}-${item.start}`}
          className={
            item.category === 'Desenvolvimento' ? styles.highlight : undefined
          }
        >
          <p className={styles.period}>
            {item.period} <span>{item.category}</span>
          </p>
          <h3>{item.role}</h3>
          <p>{item.company}</p>
          {item.description && (
            <p className={styles.description}>{item.description}</p>
          )}
        </li>
      ))}
    </ol>
  )
}
