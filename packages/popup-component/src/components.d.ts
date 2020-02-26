/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface TdcPopup {
    /**
    * Date
    */
    'date': string;
    /**
    * Title
    */
    'title': string;
  }
}

declare global {


  interface HTMLTdcPopupElement extends Components.TdcPopup, HTMLStencilElement {}
  var HTMLTdcPopupElement: {
    prototype: HTMLTdcPopupElement;
    new (): HTMLTdcPopupElement;
  };
  interface HTMLElementTagNameMap {
    'tdc-popup': HTMLTdcPopupElement;
  }
}

declare namespace LocalJSX {
  interface TdcPopup {
    /**
    * Date
    */
    'date'?: string;
    /**
    * Title
    */
    'title'?: string;
  }

  interface IntrinsicElements {
    'tdc-popup': TdcPopup;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'tdc-popup': LocalJSX.TdcPopup & JSXBase.HTMLAttributes<HTMLTdcPopupElement>;
    }
  }
}


