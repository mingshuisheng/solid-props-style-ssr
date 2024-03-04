import {
  serializeStyles,
  SerializedStyles,
  CSSInterpolation,
} from "@emotion/serialize";
import createCache from "@emotion/cache";
import { prefixer } from "./prefixer";
import { compile, serialize, stringify, middleware } from "stylis";
import { compat, removeLabel } from "./stylis-plugins";

const omnipresentPlugins = [compat, removeLabel];
const stylisPlugins = [prefixer];
const finalizingPlugins = [stringify];
const serializer = middleware(
  omnipresentPlugins.concat(stylisPlugins, finalizingPlugins as any)
);

const cache = createCache({ key: "css" });

function compileStyles(serialized: SerializedStyles, selector: string) {
  return serialize(compile(`${selector}{${serialized.styles}}`), serializer);
}

export const generateStyles = (...args: Array<CSSInterpolation>) => {
  let stylesForSSR = "";
  const serialized = serializeStyles(args as any, cache.registered);
  const selector = `${cache.key}-${serialized.name}`;

  let current: SerializedStyles | undefined = serialized;

  do {
    stylesForSSR += compileStyles(current, `.${selector}`);
    current = current.next;
  } while (current !== undefined);

  return { selector: selector, css: stylesForSSR };
};
