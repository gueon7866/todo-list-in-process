import './TodoEditor.css';

const TodoEditor = (params) => {
  return (
    <form className="Editor">
      <input placeholder="새로운 Todo..." />
      <button>추가</button>
    </form>
  );
};

export default TodoEditor;