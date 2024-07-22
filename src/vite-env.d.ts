/// <reference types="vite/client" />

import 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      draggable: boolean;
      droppable: boolean;
      sortable: boolean;
    }
  }
}
