/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DcDropdown {
        /**
          * Items to be displayed in the dropdown
         */
        "items": Array<{ text: string; href: string, description: string }>;
        /**
          * label for the dropdown nav item
         */
        "label": string;
    }
    interface DcHeader {
        /**
          * URL to the community without the latest "/"
         */
        "community": string;
        /**
          * Link to follow in order to prompt user to donate
         */
        "donateURL": string;
        /**
          * URL to the component host without the latest "/"
         */
        "host": string;
        /**
          * The links you need to display within the header this string needs to be JSON (able to JSON.parse)
         */
        "links": string;
    }
    interface DcMenu {
        /**
          * Wether or not the mobile menu is displayed
         */
        "open": boolean;
    }
    interface DcUserItems {
        /**
          * URL to the community
         */
        "community": string;
        /**
          * An object with the user data. Follows Discourse structure as https://docs.discourse.org/#tag/Users/paths/~1users~1{username}.json/get
         */
        "user": {
    id: number;
    admin: boolean;
    avatar_template: string;
    username: string;
    unread_notifications: number;
    unread_high_priority_notifications: number;
  };
    }
}
declare global {
    interface HTMLDcDropdownElement extends Components.DcDropdown, HTMLStencilElement {
    }
    var HTMLDcDropdownElement: {
        prototype: HTMLDcDropdownElement;
        new (): HTMLDcDropdownElement;
    };
    interface HTMLDcHeaderElement extends Components.DcHeader, HTMLStencilElement {
    }
    var HTMLDcHeaderElement: {
        prototype: HTMLDcHeaderElement;
        new (): HTMLDcHeaderElement;
    };
    interface HTMLDcMenuElement extends Components.DcMenu, HTMLStencilElement {
    }
    var HTMLDcMenuElement: {
        prototype: HTMLDcMenuElement;
        new (): HTMLDcMenuElement;
    };
    interface HTMLDcUserItemsElement extends Components.DcUserItems, HTMLStencilElement {
    }
    var HTMLDcUserItemsElement: {
        prototype: HTMLDcUserItemsElement;
        new (): HTMLDcUserItemsElement;
    };
    interface HTMLElementTagNameMap {
        "dc-dropdown": HTMLDcDropdownElement;
        "dc-header": HTMLDcHeaderElement;
        "dc-menu": HTMLDcMenuElement;
        "dc-user-items": HTMLDcUserItemsElement;
    }
}
declare namespace LocalJSX {
    interface DcDropdown {
        /**
          * Items to be displayed in the dropdown
         */
        "items"?: Array<{ text: string; href: string, description: string }>;
        /**
          * label for the dropdown nav item
         */
        "label"?: string;
    }
    interface DcHeader {
        /**
          * URL to the community without the latest "/"
         */
        "community"?: string;
        /**
          * Link to follow in order to prompt user to donate
         */
        "donateURL"?: string;
        /**
          * URL to the component host without the latest "/"
         */
        "host"?: string;
        /**
          * The links you need to display within the header this string needs to be JSON (able to JSON.parse)
         */
        "links"?: string;
    }
    interface DcMenu {
        "onToggleMenu"?: (event: CustomEvent<void>) => void;
        /**
          * Wether or not the mobile menu is displayed
         */
        "open"?: boolean;
    }
    interface DcUserItems {
        /**
          * URL to the community
         */
        "community"?: string;
        /**
          * An object with the user data. Follows Discourse structure as https://docs.discourse.org/#tag/Users/paths/~1users~1{username}.json/get
         */
        "user"?: {
    id: number;
    admin: boolean;
    avatar_template: string;
    username: string;
    unread_notifications: number;
    unread_high_priority_notifications: number;
  };
    }
    interface IntrinsicElements {
        "dc-dropdown": DcDropdown;
        "dc-header": DcHeader;
        "dc-menu": DcMenu;
        "dc-user-items": DcUserItems;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dc-dropdown": LocalJSX.DcDropdown & JSXBase.HTMLAttributes<HTMLDcDropdownElement>;
            "dc-header": LocalJSX.DcHeader & JSXBase.HTMLAttributes<HTMLDcHeaderElement>;
            "dc-menu": LocalJSX.DcMenu & JSXBase.HTMLAttributes<HTMLDcMenuElement>;
            "dc-user-items": LocalJSX.DcUserItems & JSXBase.HTMLAttributes<HTMLDcUserItemsElement>;
        }
    }
}
