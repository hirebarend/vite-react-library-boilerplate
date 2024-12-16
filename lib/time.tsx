import { useEffect, useState } from "react";

function padding(str: string, n: number, c: string) {
  for (let i = str.length; i < n; i ++){
    str = c + str;
  }

  return str;
}

export function Time() {
  const [state, setState] = useState(new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setState(new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  })

  const date = new Date(state);

  return <span>{padding(date.getHours().toString(), 2, '0')}:{padding(date.getMinutes().toString(), 2, '0')}</span>
}
