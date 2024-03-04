import {
  JSXElement,
  createContext,
  createSignal,
  useContext,
  Index,
} from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import { Style } from "@solidjs/meta";
import { CSSInterpolation } from "@emotion/serialize";
import { generateStyles } from "../css";

type StyleContextType = {
  css: (...args: Array<CSSInterpolation>) => string;
};

const StyleContext = createContext<StyleContextType>();

export const MyMetaProvider = (props: { children?: JSXElement }) => {
  const [styles, setStyles] = createSignal<string[]>([]);
  const selectorSet = new Set<string>();

  const css = (...args: Array<CSSInterpolation>) => {
    const style = generateStyles(args);
    if (!selectorSet.has(style.selector)) {
      selectorSet.add(style.selector);
      setStyles((styles) => [...styles, style.css]);
    }
    return style.selector;
  };

  return (
    <StyleContext.Provider value={{ css }}>
      <MetaProvider>
        <Index each={styles()}>{(style) => <Style>{style()}</Style>}</Index>
        {props.children}
      </MetaProvider>
    </StyleContext.Provider>
  );
};

export const useStyleContext = () => useContext(StyleContext);
