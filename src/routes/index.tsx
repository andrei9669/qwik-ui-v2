import { component$, useSignal } from "@qwik.dev/core";
import type { DocumentHead } from "@qwik.dev/router";
import { cn } from "@qwik-ui/utils";

import {
    Accordion,
    Avatar,
    Badge,
    Breadcrumb,
    Button,
    buttonVariants,
    Card,
    Checkbox,
    Combobox,
    Input,
    Label,
    Modal,
    Popover,
    RadioGroup,
    Select,
    Separator,
    Skeleton,
    Tabs,
    Textarea,
} from "~/components/ui";
import {Alert} from "~/components/ui/alert/alert";
import LuAlertTriangle from "~/components/icons/lu-alert-triangle";
import LuBell from "~/components/icons/lu-bell";
import LuCheck from "~/components/icons/lu-check";
import LuChevronDown from "~/components/icons/lu-chevron-down";
import LuX from "~/components/icons/lu-x";

export default component$(() => {
    const notifications = [
        {
            title: "Your call has been confirmed.",
            description: "1 hour ago",
        },
        {
            title: "You have a new message!",
            description: "1 hour ago",
        },
        {
            title: "Your subscription is expiring soon!",
            description: "2 hours ago",
        },
    ];

    const fruits = [
        "Apple",
        "Apricot",
        "Bilberry",
        "Blackberry",
        "Blackcurrant",
        "Currant",
        "Cherry",
        "Coconut",
    ];

    const showModal = useSignal(false);

    return (
        <div class="mx-auto flex w-8/12 flex-col gap-10 p-10">
            <section class="flex flex-col gap-5">
                <h1 class="text-2xl">Accordion</h1>
                <Accordion.Root class="w-96">
                    <Accordion.Item>
                        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                        <Accordion.Content>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
                        <Accordion.Content>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </Accordion.Content>
                    </Accordion.Item>
                    <Accordion.Item>
                        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
                        <Accordion.Content>
                            Yes. It's animated by default, but you can disable it if you
                            prefer.
                        </Accordion.Content>
                    </Accordion.Item>
                </Accordion.Root>
            </section>
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Alert</h1>*/}
            {/*    <Alert.Root look="alert">*/}
            {/*        <LuAlertTriangle class="h-4 w-4" />*/}
            {/*        <Alert.Title>Error</Alert.Title>*/}
            {/*        <Alert.Description>*/}
            {/*            Your session has expired. Please log in again.*/}
            {/*        </Alert.Description>*/}
            {/*    </Alert.Root>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Avatar</h1>*/}
            {/*    <Avatar.Root>*/}
            {/*        <Avatar.Image src="https://github.com/mhevery.png" alt="@mhevery" />*/}
            {/*        <Avatar.Fallback>MA</Avatar.Fallback>*/}
            {/*    </Avatar.Root>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Badge</h1>*/}
            {/*    <div>*/}
            {/*        <Badge>Badge</Badge>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Breadcrumb</h1>*/}
            {/*    <Breadcrumb.Root>*/}
            {/*        <Breadcrumb.List>*/}
            {/*            <Breadcrumb.Item>*/}
            {/*                <Breadcrumb.Link href="/">Home</Breadcrumb.Link>*/}
            {/*            </Breadcrumb.Item>*/}
            {/*            <Breadcrumb.Separator />*/}
            {/*            <Breadcrumb.Item>*/}
            {/*                <Breadcrumb.Link href="/docs/styled/introduction/">*/}
            {/*                    Components*/}
            {/*                </Breadcrumb.Link>*/}
            {/*            </Breadcrumb.Item>*/}
            {/*            <Breadcrumb.Separator />*/}
            {/*            <Breadcrumb.Item>*/}
            {/*                <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>*/}
            {/*            </Breadcrumb.Item>*/}
            {/*        </Breadcrumb.List>*/}
            {/*    </Breadcrumb.Root>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Button</h1>*/}
            {/*    <div>*/}
            {/*        <Button look="primary">Primary</Button>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Card</h1>*/}
            {/*    <div>*/}
            {/*        <Card.Root class="w-[380px]">*/}
            {/*            <Card.Header>*/}
            {/*                <Card.Title>Notifications</Card.Title>*/}
            {/*                <Card.Description>You have 3 unread messages.</Card.Description>*/}
            {/*            </Card.Header>*/}
            {/*            <Card.Content class="grid gap-4">*/}
            {/*                <div class=" flex items-center space-x-4 rounded-md border p-4">*/}
            {/*                    <LuBell />*/}
            {/*                    <div class="flex-1 space-y-1">*/}
            {/*                        <p class="text-sm font-medium leading-none">*/}
            {/*                            Push Notifications*/}
            {/*                        </p>*/}
            {/*                        <p class="text-sm text-muted-foreground">*/}
            {/*                            Send notifications to device.*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div>*/}
            {/*                    {notifications.map((notification, index) => (*/}
            {/*                        <div*/}
            {/*                            key={index}*/}
            {/*                            class="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"*/}
            {/*                        >*/}
            {/*                            <span class="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />*/}
            {/*                            <div class="space-y-1">*/}
            {/*                                <p class="text-sm font-medium leading-none">*/}
            {/*                                    {notification.title}*/}
            {/*                                </p>*/}
            {/*                                <p class="text-sm text-muted-foreground">*/}
            {/*                                    {notification.description}*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    ))}*/}
            {/*                </div>*/}
            {/*            </Card.Content>*/}
            {/*            <Card.Footer>*/}
            {/*                <Button class="w-full">*/}
            {/*                    <LuCheck class="mr-2 h-4 w-4" /> Mark all as read*/}
            {/*                </Button>*/}
            {/*            </Card.Footer>*/}
            {/*        </Card.Root>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Checkbox + Label</h1>*/}
            {/*    <div>*/}
            {/*        <Checkbox id="terms" />*/}
            {/*        <Label for="terms">Accept terms and conditions</Label>*/}
            {/*    </div>*/}
            {/*</section>*/}
            <section class="flex flex-col gap-5">
                <h1 class="text-2xl">Combobox</h1>
                <div>
                    <Combobox.Root>
                        <Combobox.Label>Fruits</Combobox.Label>
                        <Combobox.Control>
                            <Combobox.Input />
                            <Combobox.Trigger>
                                <LuChevronDown />
                            </Combobox.Trigger>
                        </Combobox.Control>
                        <Combobox.Popover gutter={8}>
                            {fruits.map((fruit) => (
                                <Combobox.Item key={fruit}>
                                    <Combobox.ItemLabel>{fruit}</Combobox.ItemLabel>
                                    <Combobox.ItemIndicator>
                                        <LuCheck />
                                    </Combobox.ItemIndicator>
                                </Combobox.Item>
                            ))}
                        </Combobox.Popover>
                    </Combobox.Root>
                </div>
            </section>
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Input</h1>*/}
            {/*    <div>*/}
            {/*        {" "}*/}
            {/*        <Input type="email" placeholder="Email" />*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Modal</h1>*/}
            {/*    <div>*/}
            {/*        <Modal.Root bind:show={showModal}>*/}
            {/*            <Modal.Trigger class={[buttonVariants({ look: "outline" })]}>*/}
            {/*                Open modal*/}
            {/*            </Modal.Trigger>*/}
            {/*            <Modal.Panel>*/}
            {/*                <Modal.Title>Edit Profile</Modal.Title>*/}
            {/*                <Modal.Description>*/}
            {/*                    Make changes to your profile here. Click save when you're done.*/}
            {/*                </Modal.Description>*/}
            {/*                <div class="grid gap-4 py-4">*/}
            {/*                    <div class="grid grid-cols-4 items-center gap-4">*/}
            {/*                        <Label for="name" class="text-right">*/}
            {/*                            Name*/}
            {/*                        </Label>*/}
            {/*                        <Input*/}
            {/*                            name="name"*/}
            {/*                            id="name"*/}
            {/*                            defaultValue="Pedro Duarte"*/}
            {/*                            class="col-span-3"*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div class="grid grid-cols-4 items-center gap-4">*/}
            {/*                        <Label for="username" class="text-right">*/}
            {/*                            Username*/}
            {/*                        </Label>*/}
            {/*                        <Input*/}
            {/*                            name="username"*/}
            {/*                            id="username"*/}
            {/*                            defaultValue="@peduarte"*/}
            {/*                            class="col-span-3"*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <footer>*/}
            {/*                    <Button*/}
            {/*                        look="primary"*/}
            {/*                        onClick$={() => (showModal.value = false)}*/}
            {/*                    >*/}
            {/*                        Save*/}
            {/*                    </Button>*/}
            {/*                </footer>*/}
            {/*                <Modal.Close*/}
            {/*                    class={cn(*/}
            {/*                        buttonVariants({ size: "icon", look: "link" }),*/}
            {/*                        "absolute right-3 top-2",*/}
            {/*                    )}*/}
            {/*                    type="submit"*/}
            {/*                >*/}
            {/*                    <LuX class="h-5 w-5" />*/}
            {/*                </Modal.Close>*/}
            {/*            </Modal.Panel>*/}
            {/*        </Modal.Root>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Popover</h1>*/}
            {/*    <div>*/}
            {/*        <Popover.Root flip={false} gutter={8}>*/}
            {/*            <Popover.Trigger class={buttonVariants({ look: "outline" })}>*/}
            {/*                Open popover.*/}
            {/*            </Popover.Trigger>*/}
            {/*            <Popover.Panel>*/}
            {/*                <div class="grid gap-4">*/}
            {/*                    <div class="space-y-2">*/}
            {/*                        <h4 class="font-medium leading-none">Dimensions</h4>*/}
            {/*                        <p class="text-sm text-muted-foreground">*/}
            {/*                            Set the dimensions for the layer.*/}
            {/*                        </p>*/}
            {/*                    </div>*/}
            {/*                    <div class="grid gap-2">*/}
            {/*                        <div class="grid grid-cols-5 items-center gap-4">*/}
            {/*                            <Label class="col-span-2" for="width">*/}
            {/*                                Width*/}
            {/*                            </Label>*/}
            {/*                            <Input name="width" value="100%" class="col-span-3 h-8" />*/}
            {/*                        </div>*/}
            {/*                        <div class="grid grid-cols-5 items-center gap-4">*/}
            {/*                            <Label class="col-span-2" for="maxWidth">*/}
            {/*                                Max. width*/}
            {/*                            </Label>*/}
            {/*                            <Input*/}
            {/*                                name="maxWidth"*/}
            {/*                                value="300px"*/}
            {/*                                class="col-span-3 h-8"*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                        <div class="grid grid-cols-5 items-center gap-4">*/}
            {/*                            <Label class="col-span-2" for="height">*/}
            {/*                                Height*/}
            {/*                            </Label>*/}
            {/*                            <Input name="height" value="25px" class="col-span-3 h-8" />*/}
            {/*                        </div>*/}
            {/*                        <div class="grid grid-cols-5 items-center gap-4">*/}
            {/*                            <Label class="col-span-2" for="maxHeight">*/}
            {/*                                Max. height*/}
            {/*                            </Label>*/}
            {/*                            <Input*/}
            {/*                                name="maxHeight"*/}
            {/*                                value="none"*/}
            {/*                                class="col-span-3 h-8"*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </Popover.Panel>*/}
            {/*        </Popover.Root>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Radio Group</h1>*/}
            {/*    <div>*/}
            {/*        <RadioGroup.Root>*/}
            {/*            <div class="flex items-center space-x-2">*/}
            {/*                <RadioGroup.Item name="size" value="default" id="r1" />*/}
            {/*                <Label for="r1">Default</Label>*/}
            {/*            </div>*/}
            {/*            <div class="flex items-center space-x-2">*/}
            {/*                <RadioGroup.Item name="size" value="comfortable" id="r2" />*/}
            {/*                <Label for="r2">Comfortable</Label>*/}
            {/*            </div>*/}
            {/*            <div class="flex items-center space-x-2">*/}
            {/*                <RadioGroup.Item name="size" value="compact" id="r3" />*/}
            {/*                <Label for="r3">Compact</Label>*/}
            {/*            </div>*/}
            {/*        </RadioGroup.Root>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Select</h1>*/}
            {/*    <div>*/}
            {/*        <Select.Root class="w-72">*/}
            {/*            <Select.Label>Fruits</Select.Label>*/}
            {/*            <Select.Trigger>*/}
            {/*                <Select.DisplayValue placeholder="Select an option" />*/}
            {/*            </Select.Trigger>*/}
            {/*            <Select.Popover gutter={8}>*/}
            {/*                {fruits.map((fruit) => (*/}
            {/*                    <Select.Item key={fruit}>*/}
            {/*                        <Select.ItemLabel>{fruit}</Select.ItemLabel>*/}
            {/*                        <Select.ItemIndicator>*/}
            {/*                            <LuCheck class="h-4 w-4" />*/}
            {/*                        </Select.ItemIndicator>*/}
            {/*                    </Select.Item>*/}
            {/*                ))}*/}
            {/*            </Select.Popover>*/}
            {/*        </Select.Root>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Separator</h1>*/}
            {/*    <div>*/}
            {/*        <div>*/}
            {/*            <div class="space-y-1">*/}
            {/*                <h4 class="text-sm font-medium leading-none">Qwik UI</h4>*/}
            {/*                <p class="text-sm text-muted-foreground">*/}
            {/*                    An open-source UI component library.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*            <Separator class="my-4" />*/}
            {/*            <div class="flex h-5 items-center space-x-4 text-sm">*/}
            {/*                <div>Customizable</div>*/}
            {/*                <Separator orientation="vertical" />*/}
            {/*                <div>Accessible</div>*/}
            {/*                <Separator orientation="vertical" />*/}
            {/*                <div>Optimized for you</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Skeleton</h1>*/}
            {/*    <div>*/}
            {/*        <div class="flex items-center space-x-4">*/}
            {/*            <Skeleton class="h-12 w-12 rounded-full" />*/}
            {/*            <div class="space-y-2">*/}
            {/*                <Skeleton class="h-4 w-[250px]" />*/}
            {/*                <Skeleton class="h-4 w-[200px]" />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Tabs</h1>*/}
            {/*    <div>*/}
            {/*        <Tabs.Root class="max-w-[400px]">*/}
            {/*            <Tabs.List class="grid w-full grid-cols-2">*/}
            {/*                <Tabs.Tab>Account</Tabs.Tab>*/}
            {/*                <Tabs.Tab>Password</Tabs.Tab>*/}
            {/*            </Tabs.List>*/}
            {/*            <Tabs.Panel>*/}
            {/*                <Card.Root>*/}
            {/*                    <Card.Header>*/}
            {/*                        <Card.Title>Account</Card.Title>*/}
            {/*                        <Card.Description>*/}
            {/*                            Make changes to your account here. Click save when you're*/}
            {/*                            done.*/}
            {/*                        </Card.Description>*/}
            {/*                    </Card.Header>*/}
            {/*                    <Card.Content class="space-y-2">*/}
            {/*                        <div class="space-y-1">*/}
            {/*                            <Label for="name">Name</Label>*/}
            {/*                            <Input id="name" value="Pedro Duarte" />*/}
            {/*                        </div>*/}
            {/*                        <div class="space-y-1">*/}
            {/*                            <Label for="username">Username</Label>*/}
            {/*                            <Input id="username" value="~peduarte" />*/}
            {/*                        </div>*/}
            {/*                    </Card.Content>*/}
            {/*                    <Card.Footer>*/}
            {/*                        <Button>Save changes</Button>*/}
            {/*                    </Card.Footer>*/}
            {/*                </Card.Root>*/}
            {/*            </Tabs.Panel>*/}
            {/*            <Tabs.Panel>*/}
            {/*                <Card.Root>*/}
            {/*                    <Card.Header>*/}
            {/*                        <Card.Title>Password</Card.Title>*/}
            {/*                        <Card.Description>*/}
            {/*                            Change your password here. After saving, you'll be logged*/}
            {/*                            out.*/}
            {/*                        </Card.Description>*/}
            {/*                    </Card.Header>*/}
            {/*                    <Card.Content class="space-y-2">*/}
            {/*                        <div class="space-y-1">*/}
            {/*                            <Label for="current">Current password</Label>*/}
            {/*                            <Input id="current" type="password" />*/}
            {/*                        </div>*/}
            {/*                        <div class="space-y-1">*/}
            {/*                            <Label for="new">New password</Label>*/}
            {/*                            <Input id="new" type="password" />*/}
            {/*                        </div>*/}
            {/*                    </Card.Content>*/}
            {/*                    <Card.Footer>*/}
            {/*                        <Button>Save password</Button>*/}
            {/*                    </Card.Footer>*/}
            {/*                </Card.Root>*/}
            {/*            </Tabs.Panel>*/}
            {/*        </Tabs.Root>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/*<section class="flex flex-col gap-5">*/}
            {/*    <h1 class="text-2xl">Textarea</h1>*/}
            {/*    <div>*/}
            {/*        <Textarea placeholder="Type your message here." />*/}
            {/*    </div>*/}
            {/*</section>*/}
        </div>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
