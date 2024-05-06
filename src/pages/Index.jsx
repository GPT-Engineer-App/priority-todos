import { useState } from "react";
import { Box, Button, Checkbox, Flex, Heading, Input, Text, VStack } from "@chakra-ui/react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <Box maxW="md" mx="auto" mt={20}>
      <Heading mb={6}>Todo App</Heading>
      <Flex mb={4}>
        <Input placeholder="Add a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} mr={2} />
        <Button colorScheme="blue" onClick={addTodo}>
          Add
        </Button>
      </Flex>
      <VStack spacing={2} align="start">
        {todos.map((todo, index) => (
          <Flex key={index} align="center" justify="space-between" w="full">
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(index)} mr={2}>
              <Text as={todo.completed ? "del" : "span"} color={todo.completed ? "gray.500" : "inherit"}>
                {todo.text}
              </Text>
            </Checkbox>
            <Button size="sm" colorScheme="red" onClick={() => deleteTodo(index)}>
              Delete
            </Button>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default TodoApp;
