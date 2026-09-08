import { englishExperience, englishCategory } from '@/data/profile.en'
import { experience } from '@/data/profile'
import styles from './Profile.module.scss'

export function ExperienceTimeline({ english = false }: { english?: boolean }) {
  const chronological = [...(english ? englishExperience : experience)].sort(
    (a, b) => b.start.localeCompare(a.start),
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
            {item.period}{' '}
            <span>
              {english ? englishCategory[item.category] : item.category}
            </span>
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
