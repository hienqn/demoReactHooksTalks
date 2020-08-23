import React, { useContext } from 'react';
import { ThemeContext } from './App';

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const themes = useContext(ThemeContext);
  // const [style, setStyle] = React.useState({ background: themes.light.background, color: themes.light.foreground });

  // let message = '';
  // if (lastCount.current < count) message = 'higher';
  // if (lastCount.current > count) message = 'lower';

  // React.useEffect(
  //   () => setCount(count + 1), [count]
  // )

  const increment = () => {
    setCount(count + 1);
    // setStyle({ background: themes.dark.background, color: themes.dark.foreground });
  }
  const decrement = () => {
    setCount(count - 1);
    // setStyle({ background: themes.light.background, color: themes.light.foreground });
  }

  const reset = () => setCount(0);

  return (
    <div /** style={style} */ className="Counter">
      <p className="count">{count}</p>
      {/* <p className="count">{message}</p> */}
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;