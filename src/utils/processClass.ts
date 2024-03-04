import { JSX, mergeProps, splitProps } from "solid-js";
import { CSSObject } from "@emotion/serialize";
import { styleKeys } from "./defaultStyleProps";
import { ComponentProps, StyleVarProps } from "../types/componentProps";
import { useStyleContext } from "../context/StyleContextProvider";

type ClassProps = ComponentProps & {
  classList?: JSX.HTMLAttributes<{}>["classList"];
  class?: JSX.HTMLAttributes<{}>["class"];
};

export function processClass<T extends ClassProps & StyleVarProps>(
  props: T
): Omit<T, keyof ComponentProps> {
  const context = useStyleContext();

  let varKeys = Object.keys(props).filter((prop) =>
    prop.startsWith("var:")
  ) as `var:${string}`[];

  const [styleProps, varProps, classProps, other] = splitProps(
    props as ClassProps & StyleVarProps,
    styleKeys,
    varKeys,
    ["classList", "class", "classStyle"]
  );

  const propStyleToClass = () => {
    let classList = { ...classProps.classList } as any;
    let varPropsProcessed: Record<`--${string}`, any> = {};

    varKeys.forEach(
      (key) =>
        (varPropsProcessed[key.replace("var:", "--") as any] = varProps[key])
    );

    let targetStyle: CSSObject = {
      ...styleProps,
      ...classProps.classStyle,
      ...varPropsProcessed,
    };
    const keys = Object.keys(targetStyle);

    keys.forEach((key) => {
      let className = context.css({
        [key]: targetStyle[key],
      });
      classList[className] = true;
    });
    return classList;
  };

  return mergeProps(other, {
    // bug fix: class must be before classList, otherwise there will only be class
    get class() {
      return classProps.class;
    },
    get classList() {
      return propStyleToClass();
    },
    // that is not work
    // get class() {
    //   return classProps.class;
    // },
  }) as any;
}
