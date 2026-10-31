const { TodoService } = require('../../js/model');

describe('TodoService Unit Tests', () => {
    let service;

    beforeEach(() => {
        // Create a new service instance for each test to ensure isolation
        service = new TodoService();
        // This is a bit of a hack to reset the singleton for testing purposes
        service.todos = [];
    });

    test('should add a new todo', () => {
        service.addTodo('Học kiểm thử');

        expect(service.todos.length).toBe(1);
        expect(service.todos[0].text).toBe('Học kiểm thử');
    });

    test('should toggle the completed state of a todo', () => {
        service.addTodo('Học kiểm thử');
        const id = service.todos[0].id;

        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(true);

        service.toggleTodoComplete(id);
        expect(service.todos[0].completed).toBe(false);
    });

    test('should remove a todo', () => {
        service.addTodo('Việc cần xóa');
        const id = service.todos[0].id;

        service.removeTodo(id);

        expect(service.todos.length).toBe(0);
    });

    test('should not add a todo if text is empty', () => {
        service.addTodo('');

        expect(service.todos.length).toBe(0);
    });
});
