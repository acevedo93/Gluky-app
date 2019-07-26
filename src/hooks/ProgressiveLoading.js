import { useEffect, useState, useRef } from 'react'
export const ProgressiveLoading = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    )
      .then(() => {
        const observer = new window.IntersectionObserver(function (entries) {
          // cuando cambia el elemento que esta observando se ejecutara esta funcion
          const { isIntersecting } = entries[0]
          if (isIntersecting) {
            setShow(true)
            observer.disconnect()
          }
        })
        observer.observe(element.current)
      })
  }, [element])
  return [show, element]
}
