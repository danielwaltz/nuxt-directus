<script setup lang="ts">
// @ts-nocheck
import edjsHTML from "editorjs-html";

const props = defineProps<{ blocks: any }>();

const instance = edjsHTML({
  raw(block) {
    return block.data.html;
  },
  table(block) {
    const rows = block.data.content
      .map(
        (row, rowIndex) =>
          `<tr>${row
            .map((cell) => {
              const cellTag =
                block.data.withHeadings && rowIndex === 0 ? "th" : "td";
              return `<${cellTag}>${cell}</${cellTag}>`;
            })
            .join("")}</tr>`,
      )
      .join("");
    return `<table>${rows}</table>`;
  },
});

const html = instance.parse(props.blocks).join("");
</script>

<template>
  <div v-html="html" />
</template>
