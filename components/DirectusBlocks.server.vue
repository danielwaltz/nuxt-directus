<script setup lang="ts">
import edjsHTML from 'editorjs-html';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props = defineProps<{ blocks: any }>();

const instance = edjsHTML({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw(block: { data: { html: any } }) {
    return block.data.html;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table(block: { data: { content: any[]; withHeadings: any } }) {
    const rows = block.data.content
      .map(
        (row, rowIndex) =>
          `<tr>${row
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((cell: any) => {
              const cellTag
                = block.data.withHeadings && rowIndex === 0 ? 'th' : 'td';
              return `<${cellTag}>${cell}</${cellTag}>`;
            })
            .join('')}</tr>`,
      )
      .join('');
    return `<table>${rows}</table>`;
  },
});

const html = instance.parse(props.blocks).join('');
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="html" />
</template>
