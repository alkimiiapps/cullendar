import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { default as create } from './api';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { ScrollToOptions as ScrollToOptions_2 } from '@tanstack/vue-virtual';
import { ShallowRef } from 'vue';
import { UnwrapRef } from 'vue';
import { VirtualItem } from '@tanstack/virtual-core';
import { VirtualItem as VirtualItem_2 } from '@tanstack/vue-virtual';
import { Virtualizer as Virtualizer_2 } from '@tanstack/vue-virtual';
import { Virtualizer as Virtualizer_3 } from '@tanstack/virtual-core';

declare const __VLS_component: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_2: DefineComponent<__VLS_Props_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props_2> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_3: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
droppable: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_4: DefineComponent<__VLS_Props_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props_3> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

declare const __VLS_component_5: DefineComponent<__VLS_Props_4, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props_4> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare type __VLS_Props = {
    cullendar: BuildApiResult;
};

declare type __VLS_Props_2 = {
    cullendar: BuildApiResult;
    data: object | Event;
    dragClass?: string;
    ghostClass?: string;
};

declare type __VLS_Props_3 = {
    row: VirtualItem_2;
    resource: Resource;
    virtualizer: Virtualizer;
    size: number;
};

declare type __VLS_Props_4 = {
    event: Event_2;
    resource: InternalResource;
    date: string;
};

declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        resourceGroup?(_: {
            resource: InternalResourceGroup;
        }): any;
        resource?(_: {
            resource: InternalResource;
        }): any;
        dayHead?(_: {
            date: string;
        }): any;
        day?(_: {
            resource: InternalResource;
            date: string;
            events: Event_2[];
        }): any;
        event?(_: {
            resource: InternalResource;
            event: Event_2;
            date: string;
            key: string;
        }): any;
        row?(_: {
            resource: InternalResource | InternalResourceGroup;
            row: VirtualItem;
            virtualizer: Virtualizer_3<HTMLElement, Element>;
            size: number;
        }): any;
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_2(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_3(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            date: string;
            resource: InternalResource;
            events: Event_2[];
            isDragOver: boolean;
            isResizeOver: boolean;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare function __VLS_template_4(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            row: VirtualItem_2;
            resource: Resource;
            virtualizer: Virtualizer;
            eventRows: EventRow[];
        }): any;
    };
    refs: {};
    rootEl: any;
};

declare function __VLS_template_5(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {
            isResizing: boolean;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};

declare type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;

declare type __VLS_TemplateResult_2 = ReturnType<typeof __VLS_template_2>;

declare type __VLS_TemplateResult_3 = ReturnType<typeof __VLS_template_3>;

declare type __VLS_TemplateResult_4 = ReturnType<typeof __VLS_template_4>;

declare type __VLS_TemplateResult_5 = ReturnType<typeof __VLS_template_5>;

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare interface BuildApiResult extends UnwrapRef<{
    elements: Ref<BuildElementsResult>;
    view: ComputedRef<BuildViewResult>;
    layout: ComputedRef<BuildLayoutResult>;
    events: ComputedRef<BuildEventsResult>;
    resources: ComputedRef<BuildResourcesResult>;
    callbacks: ComputedRef<BuildCallbacksResult>;
    utils: BuildUtilsResult;
    internal: BuildInternalResult;
}> {
}

declare interface BuildCallbacksResult {
    onReady: (api: BuildApiResult) => void;
    onView: (view: BuildViewResult) => void;
    onAddEvent: (payload: DragDropCallbackPayload) => void;
    onMoveEvent: (payload: DragDropCallbackPayload) => void;
    onResizeEvent: (payload: OnResizeEventCallbackPayload) => void;
    onBeforeDropEvent: (payload: DragDropCallbackPayload) => boolean;
    onDayEnter: (payload: DragDropCallbackPayload) => void;
}

declare interface BuildElementsResult {
    calendar: HTMLElement;
    timeline: HTMLElement;
    resources: HTMLElement;
}

declare type BuildEventsResult = Map<string, DateEventsMap>;

declare interface BuildInternalResult {
    id: string;
    dataTransferType: string;
    virtualizer: ShallowRef<Virtualizer | undefined>;
    scale: ComputedRef<number>;
    durations: ComputedRef<Map<string, number>>;
    isDragging: Ref<boolean>;
    isResizing: Ref<boolean>;
    resizeDates: Ref<Set<string>>;
    resizeResources: Ref<Set<string>>;
    fit: (value: number) => void;
}

declare interface BuildLayoutResult {
    daySize: number;
    dayHeadSize: number;
    eventSize: number;
    resourceGroupSize: number;
    resourcesClass?: string;
    timelineClass?: string;
    overscan: number;
}

declare type BuildResourcesResult = Map<string, InternalResourceGroup | InternalResource>;

declare interface BuildUtilsResult {
    getEvents: (resourceId: string, date?: string) => Set<Event_2>;
    getResource: (id: string) => Resource | undefined;
    scrollToDate: (date: string, options?: ScrollToOptions_2) => void;
}

declare interface BuildViewResult {
    unit: Duration;
    period: Duration;
    start: string;
    end: string;
    timezone: string;
    span: number;
    firstDayOfWeek?: number;
    dates: string[];
}

export { create }

export declare const Cullendar: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;

declare type DateEventsMap = Map<string, Set<Event_2>>;

declare const _default: {
    install: (app: App) => App<any>;
};
export default _default;

declare interface DragDropCallbackPayload extends ToPayloadOptions {
    date: string;
    resource: InternalResource;
    view: BuildViewResult;
}

declare interface DragDropNewTimesResult {
    start: string;
    end: string;
}

declare const DragEvent_2: __VLS_WithTemplateSlots_2<typeof __VLS_component_2, __VLS_TemplateResult_2["slots"]>;
export { DragEvent_2 as DragEvent }

export declare const DropDay: __VLS_WithTemplateSlots_3<typeof __VLS_component_3, __VLS_TemplateResult_3["slots"]>;

declare type Duration = 'days' | 'weeks' | 'months' | 'years';

declare interface Event_2 extends Record<string, any> {
    id: string;
    start: string;
    end: string;
    resourceId: string | string[];
}

declare interface EventRow {
    event: Event_2;
    start: number;
    end: number;
    size: number;
}

declare interface InternalResource {
    id: string;
    nOrder?: number;
    isEventDroppable: boolean;
    maxEvents: number;
    data: Record<string, any>;
}

declare interface InternalResourceGroup {
    id: string;
    nOrder?: number;
    isGroup: true;
    isCollapsed: boolean;
    resources: InternalResource[];
    data: Record<string, any>;
    open: () => void;
    close: () => void;
}

declare interface OnResizeEventCallbackPayload {
    event: Event_2;
    resource: InternalResource;
    resources: Resource[];
    date: string;
    dates: string[];
    view: BuildViewResult;
}

declare interface Props {
    date: string;
    resource: InternalResource;
    events: Event_2[];
    droppable?: boolean;
    dragoverClass?: string;
    resizeoverClass?: string;
}

export declare const ResizeHandle: __VLS_WithTemplateSlots_5<typeof __VLS_component_5, __VLS_TemplateResult_5["slots"]>;

declare interface Resource extends Record<string, any> {
    id: string;
    nOrder?: number;
    isEventDroppable?: boolean;
    resources?: Resource[];
}

export declare const Row: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;

declare interface ToPayloadOptions {
    data?: object;
    event?: Event_2;
    times?: DragDropNewTimesResult;
}

declare type Virtualizer = Virtualizer_2<HTMLElement, Element>;

export { }
