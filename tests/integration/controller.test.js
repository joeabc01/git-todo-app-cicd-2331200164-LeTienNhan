const { TodoService } = require('../../js/model');
const { Controller } = require('../../js/controller');

// Mock the View because we are not testing the UI, only Controller-Model interaction.
const mockView = {
    update: jest.fn(),
    bindAddTodo: jest.fn(),
    bindToggleTodo: jest.fn(),
    bindRemoveTodo: jest.fn(),
};

describe('Controller-Service Integration Tests', () => {
    let service;
    let controller;

    beforeEach(() => {
        service = new TodoService();
        service.todos = []; // Reset singleton for tests
        controller = new Controller(service, mockView);
    });

    test('handleAddTodo should call service.addTodo and update the model', () => {
        // Act: giả lập người dùng thêm một todo
        controller.handleAddTodo('Học kiểm thử');

        // Assert: kiểm tra dữ liệu trong Model
        expect(service.todos.length).toBe(1);
        expect(service.todos[0].text).toBe('Học kiểm thử');
    });

    test('handleRemoveTodo should call service.removeTodo and update the model', () => {
        // Arrange: thêm trực tiếp vào service
        service.addTodo('Việc cần xóa');
        const id = service.todos[0].id;

        // Act: gọi controller để xóa
        controller.handleRemoveTodo(id);

        // Assert: danh sách phải rỗng
        expect(service.todos.length).toBe(0);
    });
});
