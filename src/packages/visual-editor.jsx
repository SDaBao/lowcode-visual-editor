import { computed } from "vue";
import { inject } from "vue";
import { ref } from "vue";
import { defineComponent } from "vue";
import EditorBlock from "./editor-block";
import './visual-editor.scss';
import deepcopy from "deepcopy";
import { useComponentDragger } from "./useComponentDragger";
import { useFocus } from "./useFocus";
import { useBlockDragger } from "./useBlockDragger";
import { useCommand } from "./useCommand";
import { $dialog } from "@/components/DialogForm";

export default defineComponent({
  props: {
    modelValue: { type: Object }
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const previewRef = ref(true);

    const data = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        context.emit('update:modelValue', deepcopy(value));
      }
    });

    const containerStyles = computed(() => ({
      width: `${data.value.container.width}px`,
      height: `${data.value.container.height}px`
    }));

    const blockUpdateHandler = (index, block) => {
      let blocks = data.value.blocks;
      blocks[index] = block;
      data.value = {
        ...data.value,
        blocks: [
          ...blocks
        ]
      };
    };

    const config = inject('config');

    const containerRef = ref(null);
    const { dragstart, dragend } = useComponentDragger(containerRef, data);
    const { blockMousedown, containerMousedown, clearBlockFocus, focusData, lastSelectedBlock } = useFocus(data, previewRef, (e) => mousedown(e));
    const { mousedown, markline } = useBlockDragger(data, focusData, lastSelectedBlock)


    const buttons = [
      { label: '撤销', icon: 'icon-back', handler: () => commands.undo() },
      { label: '重做', icon: 'icon-forward', handler: () => commands.redo() },
      {
        label: '导入', icon: 'icon-import', handler: () => {
          $dialog({
            title: '导入 JSON',
            content: '',
            footer: true,
            onConfirm(text) {
              // data.value = JSON.parse(text);
              commands.updateContainer(JSON.parse(text));
            }
          });

        }
      },
      {
        label: '导出', icon: 'icon-export', handler: () => {
          $dialog({
            title: '导出 JSON',
            content: JSON.stringify(data.value),
            footer: false
          });
        }
      },
      { label: '置顶', icon: 'icon-place-top', handler: () => commands.placeTop() },
      { label: '置底', icon: 'icon-place-bottom', handler: () => commands.placeBottom() },
      { label: '删除', icon: 'icon-delete', handler: () => commands.delete() },
      {
        label: () => previewRef.value ? '编辑' : '预览',
        icon: () => previewRef.value ? 'icon-edit' : 'icon-browse',
        handler: () => {
          previewRef.value = !previewRef.value;
          clearBlockFocus();
        }
      },


    ];

    const { commands } = useCommand(data, focusData);
    console.log('command:', commands);

    return () => <div class="editor">
      <div class="editor-material">
        {config.componentsList.map(component => (
          <div
            class="editor-material-item"
            draggable
            onDragstart={e => dragstart(e, component)}
            onDragend={e => dragend(e)}
          >
            <span>{component.label}</span>
            <div>{component.preview()}</div>
          </div>
        ))}
      </div>
      <div class="editor-menu">
        {buttons.map((btn) => {
          const icon = typeof btn.icon == 'function' ? btn.icon() : btn.icon;
          const label = typeof btn.label == 'function' ? btn.label() : btn.label;
          return <div class="editor-menu-button" onClick={btn.handler}>
            <i class={icon}></i>
            <span>{label}</span>
          </div>
        })}
      </div>
      <div class="editor-panel">kongzhilan</div>
      <div class="editor-container">
        <div class="editor-container-canvas">
          <div
            class="editor-container-canvas__content"
            style={containerStyles.value}
            ref={containerRef}
            onMousedown={containerMousedown}
          >

            {
              (data.value.blocks.map((block, index) => (
                <EditorBlock
                  class={block.focus ? 'editor-block-focus' : ''}
                  class={previewRef.value ? 'editor-block-preview' : ''}
                  block={block}
                  onMousedown={(e) => blockMousedown(e, block, index)}
                  updateBlock={blockUpdateHandler}
                  index={index}
                ></EditorBlock>
              )))
            }
            {markline.x !== null && <div class="markline-x" style={{ left: `${markline.x}px` }}></div>}
            {markline.y !== null && <div class="markline-y" style={{ top: `${markline.y}px` }}></div>}
          </div>
        </div>
      </div>
    </div>
  }
})