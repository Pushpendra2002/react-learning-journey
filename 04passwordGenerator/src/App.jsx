import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook to keep reference of the input field
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += "0123456789"
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+"
    }
    for (let i = 0; i < length; i++) { 
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed, generatePassword])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3 text-xl font-semibold'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
        <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-gray-800"
          placeholder="Password"
          readOnly 
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 hover:bg-blue-800 text-white px-3 py-0.5 shrink-0 transition'
        >
          Copy
        </button>
      </div>

      <div className='flex text-sm gap-x-4 flex-wrap'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(Number(e.target.value))}
          />
          <label className='text-white'>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          <label htmlFor="numberInput" className='text-white cursor-pointer'>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="characterInput"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput" className='text-white cursor-pointer'>Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
