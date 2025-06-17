import { App } from 'vue';
import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { ComputedRef } from 'vue';
import { default as create } from './api';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';
import { Ref } from 'vue';
import { UnwrapRef } from 'vue';

declare const __VLS_component: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_2: DefineComponent<__VLS_Props_2, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props_2> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_3: DefineComponent<Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<Props> & Readonly<{}>, {
droppable: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare const __VLS_component_4: DefineComponent<__VLS_Props_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props_3> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;

declare type __VLS_Props = {
    cullendar: BuildApiResult;
};

declare type __VLS_Props_2 = {
    data: object | Event;
    dragClass?: string;
    ghostClass?: string;
};

declare type __VLS_Props_3 = {
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

declare interface BuildApiResult extends UnwrapRef<{
    id: Ref<string>;
    elements: Ref<BuildElementsResult>;
    view: ComputedRef<BuildViewResult>;
    layout: ComputedRef<BuildLayoutResult>;
    events: ComputedRef<BuildEventsResult>;
    resources: ComputedRef<BuildResourcesResult>;
    callbacks: ComputedRef<BuildCallbacksResult>;
    utils: BuildUtilsResult;
    resizeMap: Ref<Map<string, string[]>>;
}> {
}

declare interface BuildCallbacksResult {
    onView: (view: BuildViewResult) => void;
    onAddEvent: (payload: DragDropCallbackPayload) => void;
    onMoveEvent: (payload: DragDropCallbackPayload) => void;
    onResizeEvent: (payload: OnResizeEventCallbackPayload) => void;
    onBeforeDropEvent: (payload: DragDropCallbackPayload) => boolean;
}

declare interface BuildElementsResult {
    calendar: HTMLElement;
    timeline: HTMLElement;
    resources: HTMLElement;
}

declare type BuildEventsResult = Map<string, DateEventsMap>;

declare interface BuildLayoutResult {
    daySize: number;
    dayHeadSize: number;
    eventSize: number;
    resourceGroupSize: number;
    resourcesClass?: string;
    timelineClass?: string;
    gap: number;
    overscan: number;
}

declare type BuildResourcesResult = Map<string, InternalResourceGroup | InternalResource>;

declare interface BuildUtilsResult {
    getEvents: (resourceId: string, date: string) => Set<Event_2>;
    getResource: (id: string) => Resource | undefined;
}

declare interface BuildViewResult {
    start: string;
    end: string;
    timezone: string;
    nWeeks: number;
    firstDayOfWeek: number;
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

declare interface Event_2 {
    id: string;
    start: string;
    end: string;
    resourceId: string | string[];
}

declare interface InternalResource {
    id: string;
    nOrder?: number;
    isEventDroppable: boolean;
    maxEvents: number;
    data: object;
}

declare interface InternalResourceGroup {
    id: string;
    nOrder?: number;
    isGroup: true;
    isCollapsed: boolean;
    resources: Resource[];
    data: object;
    open: () => void;
    close: () => void;
}

declare interface OnResizeEventCallbackPayload {
    event: Event_2;
    resource: InternalResource;
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

export declare const ResizeHandle: __VLS_WithTemplateSlots_4<typeof __VLS_component_4, __VLS_TemplateResult_4["slots"]>;

declare interface Resource {
    id: string;
    nOrder?: number;
    isEventDroppable?: boolean;
    resources?: Resource[];
}

declare interface ToPayloadOptions {
    data?: object;
    event?: Event_2;
    times?: DragDropNewTimesResult;
}

export { }
