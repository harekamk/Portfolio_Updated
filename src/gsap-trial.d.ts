declare module "gsap-trial/SplitText" {
  export class SplitText {
    words: HTMLElement[];
    chars: HTMLElement[];
    lines: HTMLElement[];

    constructor(
      target: string | Element | string[],
      vars?: {
        type?: string;
        linesClass?: string;
        wordsClass?: string;
        charsClass?: string;
      }
    );

    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(options?: {
      [key: string]: unknown;
    }): ScrollSmoother;

    static refresh(force?: boolean): void;

    scrollTop(value?: number): number | void;

    paused(value?: boolean): boolean | void;

    scrollTo(
  target: string | Element | null,
  smooth?: boolean,
  position?: string
): void;
  }
}