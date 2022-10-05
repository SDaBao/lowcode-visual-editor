import { events } from "./events";
import deepcopy from 'deepcopy';
import { onUnmounted } from "vue";

export function useCommand(data) {
  const state = {
    current: -1,
    opQueue: [],
    commands: {},
    commandArray: [],
    destoryArray: []
  }

  const registry = (command) => {
    state.commandArray.push(command);
    state.commands[command.name] = () => {
      const { redo, undo } = command.execute();
      redo();
      if (!command.pushQueue) {
        return;
      }

      let { opQueue, current } = state;

      if (opQueue.length > 0) {
        opQueue.slice(0, current + 1);
        state.opQqueue = opQueue;
      }
      // debugger;
      opQueue.push({ redo, undo });
      state.current = current + 1;
      console.log(opQueue);
    }
  }

  registry({
    name: 'redo',
    keyboard: 'ctrl+y',
    execute() {
      return {
        redo() {
          let item = state.opQueue[state.current + 1];
          if (item) {
            item.redo && item.redo();
            state.current++;
          }
          
        }
      }
    }
  });
  registry({
    name: 'undo',
    keyboard: 'ctrl+z',
    execute() {
      return {
        redo() {
          if (state.current === -1) return ;
          let item = state.opQueue[state.current];
          if (item) {
            item.undo && item.undo();
            state.current--;
          }
          
        }
      }
    }
  });
  registry({
    name: 'drag',
    pushQueue: true,
    init() {
      this.before = null;
      const start = () => this.before = deepcopy(data.value.blocks);
      const end = () => state.commands.drag();
      events.on('start', start);
      events.on('end', end);
      return () => {
        events.off('start', start);
        events.off('end', end);
      }
    },
    execute() {
      let before = this.before;
      let after = data.value.blocks;
      return {
        redo() {
          data.value = { ...data.value, blocks: after };
          // debugger
        },
        undo() {
          data.value = { ...data.value, blocks: before };
          // debugger
        }
      }
    }
  });

  const KeyboardEvent = (() => {
    const keyCodeMap = {
      89: 'y',
      90: 'z'
    }
    const onKeydown = (e) => {
      const {ctrlKey, keyCode} = e;
      let keyStr = [];
      if (ctrlKey) keyStr.push('ctrl');
      keyStr.push(keyCodeMap[keyCode]);
      keyStr = keyStr.join('+');

      state.commandArray.forEach(({keyboard, name}) => {
        if (!keyboard) return ;
        if (keyboard === keyStr) {
          state.commands[name]();
          e.preventDefault();
        }
      });

    }
    const init = () => {
      window.addEventListener('keydown', onKeydown);
      return () => {
        window.removeEventListener('keydown', onKeydown);

      }
      
    }
    return init;
  })();

  (() => {

    state.destoryArray.push(KeyboardEvent())

    state.commandArray.forEach(command => command.init && state.destoryArray.push(command.init()))
  })();

  onUnmounted(() => {
    state.destoryArray.forEach(fn => fn && fn());
  });

  return state;
}