import { component$, Slot, type PropsOf } from "@qwik.dev/core";

import { Accordion as HeadlessAccordion } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";
import ChevronDown from "~/components/icons/lu-chevron-down";

const Root = (props: PropsOf<typeof HeadlessAccordion.Root>) => (
  <HeadlessAccordion.Root {...props} accordionItemComponent={Item}>
    {props?.children}
  </HeadlessAccordion.Root>
);

const Item = component$<PropsOf<typeof HeadlessAccordion.Item>>((props) => {
  return (
    <HeadlessAccordion.Item {...props} class={cn("border-b", props?.class)}>
      <Slot />
    </HeadlessAccordion.Item>
  );
});

const Trigger = component$<
  PropsOf<typeof HeadlessAccordion.Trigger> & {
    header?: PropsOf<typeof HeadlessAccordion.Header>["as"];
  }
>(({ header = "h3", ...props }) => {
  return (
    <HeadlessAccordion.Header as={header} class="flex">
      <HeadlessAccordion.Trigger
        {...props}
        class={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-open]>svg]:rotate-180",
          props?.class,
        )}
      >
        <Slot />
        <ChevronDown class="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
      </HeadlessAccordion.Trigger>
    </HeadlessAccordion.Header>
  );
});

const Content = component$<PropsOf<typeof HeadlessAccordion.Content>>(
  (props) => {
    return (
      <HeadlessAccordion.Content
        {...props}
        class={cn(
          "data-closed:animate-accordion-up data-open:animate-accordion-down overflow-hidden text-sm",
          props?.class,
        )}
      >
        <div class="pt-0 pb-4">
          <Slot />
        </div>
      </HeadlessAccordion.Content>
    );
  },
);

export const Accordion = {
  Root,
  Item,
  Trigger,
  Content,
};
