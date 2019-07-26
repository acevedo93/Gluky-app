import { useState } from 'react'

export const handleInput = initVal => {
  const [value, setvalue] = useState(initVal)
  const onChange = (e) => setvalue(e.target.value)
  return { value, onChange }
}
