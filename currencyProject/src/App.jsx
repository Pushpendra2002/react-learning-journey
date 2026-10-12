import { useState, useEffect, useCallback } from "react";

const currencies = ["usd", "inr", "eur", "gbp", "jpy", "aud", "cad"];

// Fallback rates relative to USD (1 USD = ...) in case of network issues or offline usage
const fallbackRates = {
  usd: 1,
  inr: 86.85,
  eur: 0.92,
  gbp: 0.79,
  jpy: 152.4,
  aud: 1.55,
  cad: 1.39,
};

function App() {
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [rates, setRates] = useState({});

  // Fetch live exchange rates for selected base currency
  useEffect(() => {
    let isMounted = true;
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data && data[fromCurrency]) {
          setRates(data[fromCurrency]);
        }
      })
      .catch((err) => {
        console.warn("Could not fetch live rates, using fallback rates:", err);
      });

    return () => {
      isMounted = false;
    };
  }, [fromCurrency]);

  const getEffectiveRate = useCallback(() => {
    if (rates[toCurrency]) {
      return rates[toCurrency];
    }
    // Calculate relative rate from fallback rates
    const fromBase = fallbackRates[fromCurrency] || 1;
    const toBase = fallbackRates[toCurrency] || 1;
    return toBase / fromBase;
  }, [rates, fromCurrency, toCurrency]);

  const convertCurrency = useCallback(() => {
    const rate = getEffectiveRate();
    const result = (fromAmount * rate).toFixed(2);
    setToAmount(Number(result));
  }, [fromAmount, getEffectiveRate]);

  // Recalculate on initial mount and when fromAmount or currencies change
  useEffect(() => {
    convertCurrency();
  }, [convertCurrency]);

  const handleSwap = () => {
    const tempCurrency = fromCurrency;
    const tempAmount = fromAmount;
    setFromCurrency(toCurrency);
    setToCurrency(tempCurrency);
    setFromAmount(toAmount || 0);
  };

  const handleConvert = (e) => {
    e.preventDefault();
    convertCurrency();
  };

  const currentRate = getEffectiveRate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-900 p-4">
      <form
        onSubmit={handleConvert}
        className="w-full max-w-md rounded-2xl border border-slate-700 bg-white/95 p-6 shadow-2xl backdrop-blur"
      >
        <h1 className="text-xl font-bold text-center text-slate-800 mb-5">
          Currency Converter
        </h1>

        {/* From Section */}
        <div className="mb-2">
          <div className="flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            <label htmlFor="from-amount">From</label>
            <label htmlFor="from-currency">Currency Type</label>
          </div>
          <div className="flex items-center rounded-lg border border-slate-300 bg-slate-50 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <input
              id="from-amount"
              type="number"
              min="0"
              step="any"
              value={fromAmount}
              onChange={(e) => setFromAmount(Number(e.target.value))}
              className="w-1/2 bg-transparent text-lg font-semibold text-slate-900 outline-none"
            />
            <select
              id="from-currency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-1/2 cursor-pointer rounded-md border border-slate-300 bg-white px-2 py-1 text-right text-sm font-medium text-slate-700 outline-none uppercase"
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap button */}
        <div className="relative flex justify-center py-3">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200" />
          <button
            type="button"
            onClick={handleSwap}
            className="relative z-10 rounded-md bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-blue-700 active:scale-95 uppercase tracking-wider"
          >
            ⇅ Swap
          </button>
        </div>

        {/* To Section */}
        <div className="mb-4">
          <div className="flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
            <label htmlFor="to-amount">To</label>
            <label htmlFor="to-currency">Currency Type</label>
          </div>
          <div className="flex items-center rounded-lg border border-slate-300 bg-slate-100 px-3 py-2">
            <input
              id="to-amount"
              type="number"
              value={toAmount}
              readOnly
              className="w-1/2 bg-transparent text-lg font-semibold text-slate-700 outline-none cursor-default"
            />
            <select
              id="to-currency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-1/2 cursor-pointer rounded-md border border-slate-300 bg-white px-2 py-1 text-right text-sm font-medium text-slate-700 outline-none uppercase"
            >
              {currencies.map((c) => (
                <option key={c} value={c}>
                  {c.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Rate info */}
        <div className="text-center text-xs text-slate-500 mb-4">
          1 {fromCurrency.toUpperCase()} = {currentRate.toFixed(4)} {toCurrency.toUpperCase()}
        </div>

        {/* Convert button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 py-3 text-base font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.99]"
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;