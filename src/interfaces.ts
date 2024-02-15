import type { Component } from "vue";

export interface GridItem {
  id: number,
  description: Component,
  object: Component,
}

export interface LinkItem {
  name: string
}