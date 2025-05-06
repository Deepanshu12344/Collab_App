import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';
import './App.css';
import { Editor } from '@monaco-editor/react';
import { MonacoBinding } from 'y-monaco';

function App() {
  function handleEditorDidMount(editor: any) {
    const doc = new Y.Doc();
    const provider = new WebsocketProvider('ws://localhost:3000', 'test-room', doc); // <-- use your backend
    const type = doc.getText('monaco');

    const model = editor.getModel();
    new MonacoBinding(type, model, new Set([editor]), provider.awareness);
  }

  return (
    <Editor
      height="100vh"
      theme="vs-dark"
      defaultValue="// Start collaborating in real time!"
      onMount={handleEditorDidMount}
    />
  );
}

export default App;
