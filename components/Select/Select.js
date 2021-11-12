import style from './select.module.sass'

export default function Select({ data, onClick }) {
  return (
    <div className={style.select}>
      <ol>
        {data ? (
          <>
            <li onClick={() => onClick()}>All</li>
            {data.map((item, key) => (
              <li key={key} onClick={() => onClick(item)}>
                {item}
              </li>
            ))}
          </>
        ) : (
          <li>no data</li>
        )}
      </ol>
    </div>
  )
}
